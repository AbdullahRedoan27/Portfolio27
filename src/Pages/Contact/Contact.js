import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import bg from "../../images/bg.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "abdullahredoanportfolio",
        "defaultTemplate",
        form.current,
        "LX5foQ-FbXsqns6bT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("The email has been sent. Thank you.")
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text)
        }
      );
  };

  return (
    <form
    style={{
      backgroundImage: `url(${bg})`,
      height: "90vh"
    }}
    className="mt-16 flex flex-col items-center p-5" ref={form} onSubmit={sendEmail}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs glass"
          name="name"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Type Your Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs glass"
          name="email"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Subject Of Email</span>
        </label>
        <textarea
          type="text"
          placeholder="Subject"
          className="textarea textarea-bordered w-full max-w-xs glass"
          name="subject"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Type Your Message</span>
        </label>
        <textarea
          type="text"
          placeholder="message"
          className="textarea textarea-bordered w-full max-w-xs glass"
          name="message"
        />
      </div>
      <input className="btn btn-md w-24 glass mt-4" type="submit" value="Send" />
    </form>
  );
};

export default Contact;
