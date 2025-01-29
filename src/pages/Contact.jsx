import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import CatContact from "../models/CatContact";
import Loader from "../components/Loader";
import { ContactShadows } from "@react-three/drei";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("walking1");
  // setCurrentAnimation("walking");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("typing");
  const handleBlur = () => setCurrentAnimation("walking1");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("typing");
    // TO FUCKING DO REMEMBER TO DO IT
    // set up netlify form submission
    // setForm to false once form is sent: setForm(false)
    // reset form:  setForm({ name: "", email: "", message: "" })
    // show success message and hide alert
    // catch error, setForm should be false here too
    // once form is sent, clear the form
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact Me</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          name="contact"
          // method="POST"
          // data-netlify="true"
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
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] flex justify-center items-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 100 }}>
          <directionalLight intensity={2.5} position={[-0.5, -0.2, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <ContactShadows
              opacity={0.42}
              scale={10}
              blur={1}
              far={10}
              resolution={256}
              color="#000000"
            />
            <CatContact
              currentAnimation={currentAnimation}
              position={[0.35, -1, 1]}
              rotation={[6.2, 6.15, 0]}
              scale={[1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
