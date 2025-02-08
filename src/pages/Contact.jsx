import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import CatContact from "../models/CatContact";
import Loader from "../components/Loader";
import { ContactShadows } from "@react-three/drei";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("walking1");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("typing");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sofia",
          from_email: form.email,
          to_email: "sof.pham@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        //async function to send email
        setIsLoading(false);

        showAlert({
          show: true,
          text: "Message was sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("walking1");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setCurrentAnimation("walking1");
        showAlert({
          show: true,
          text: "Failed to send message. Please try again later or send me an email directly!",
          type: "danger",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("walking1");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      });
  };

  const handleFocus = () => setCurrentAnimation("typing");
  const handleBlur = () => setCurrentAnimation("walking1");

  const adjustCatForScreen = () => {
    let screenScale, screenPosition, shadow;

    if (window.innerWidth <= 960) {
      screenScale = [1.3, 1.3, 1.3];
      screenPosition = [0, -2.3, 0];
      shadow = [0, -2.3, 0];
    } else {
      screenScale = [1.3, 1.3, 1.3];
      screenPosition = [0.5, -2.7, 0];
      shadow = [0, -2.7, 0];
    }

    return [screenScale, screenPosition, shadow];
  };
  const [catScale, catPosition, catShadow] = adjustCatForScreen();

  return (
    <section className="flex max-h-full flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Contact Me</h1>
          <form
            className="w-full flex flex-col gap-7 mt-14"
            name="contact"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Jane Smith"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="jane.smith@domain.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                className="textarea"
                placeholder="Your message here..."
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="text-white bg-green-800 hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div className="lg:w-[50%] w-full lg:h-auto md:h-[550px] h-[400px] flex justify-center items-center relative">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }}
          >
            <directionalLight intensity={2.5} position={[-0.5, 0.2, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <ContactShadows
                opacity={0.4}
                scale={10}
                blur={1}
                far={10}
                resolution={256}
                color="#000000"
                position={catShadow}
              />
              <CatContact
                currentAnimation={currentAnimation}
                position={catPosition}
                scale={catScale}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col justify-center items-center text-center sm:pt-8 lg:pt-20">
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center transition-colors duration-200"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-8 h-8 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full justify-center items-center pt-4">
        <h1 className="text-gray-500 font-semibold text-center text-sm">
          💖 Thank you for stopping by! 😊
        </h1>
      </div>
    </section>
  );
};

export default Contact;
