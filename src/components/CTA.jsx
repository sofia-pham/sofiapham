import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta flex items-center justify-center">
      <div className="cta-content flex flex-col items-center justify-center text-center">
        <p className="cta-text mb-4">
          Want to get in touch? <br className="sm:block hidden" />
        </p>
        <Link to="/contact" className="btn">
          Contact Me!
        </Link>
      </div>
    </section>
  );
};

export default CTA;
