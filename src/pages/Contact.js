// import React, { useRef } from "react";
// import { Form } from "react-router-dom";
// import emailjs from "@email.s/browser";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_YOUR_SERVICE_ID,
  //       process.env.REACT_APP_YOUR_TEMPLATE_ID,
  //       form.current,
  //       process.env.REACT_APP_YOUR_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         if (result.status === 200) {
  //           toast.success("Message Sent Successfully", {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //           e.target.reset();
  //         } else {
  //           toast.error("Something went wrong", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //         }
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         toast.error(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      {/* <form
        action="https://formsubmit.co/agbamosemark@gmail.com"
        method="post"
        // ref={form}
        // onSubmit={sendEmail}
      > */}
      <form
        action="https://submit-form.com/XaNuPpDj"
        method="post"
        // ref={form}
        // onSubmit={sendEmail}
      >
        <div className="flex flex-col items-center justify-center mt-8">
          <img
            className="p-4 object-fill w-screen max-w-lg image-rendering: pixelated; mb-10"
            src="/images/e2.jpg"
            alt="homeImg"
          />

          {/* <div className="border-2 py-2 px-9 rounded-lg"> */}
          <div className="flex flex-col">
            <p className="text-center uppercase underline font-bold italic text-customGold">
              Contact Form
            </p>
            <label>Your Fullname</label>
            <input
              className=" w-64 md:w-[400px] h-10 border-2 rounded-lg p-2 focus:outline-none"
              type="text"
              placeholder="Fullname"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              className=" w-64 md:w-[400px] h-10 border-2 p-2 focus:outline-none rounded-lg"
              type="tel"
              placeholder="Phone Number"
              name="user_phone"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Your Email</label>
            <input
              className=" w-64 md:w-[400px] h-10 rounded-lg p-2 border-2 focus:outline-none"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              className=" w-64 md:w-[400px] border-2 p-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="type here"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              value="send"
              className="bg-gradient-to-r from-custom to-teal-400 active:scale-105 duration-200 mt-10 p-2 uppercase rounded-lg text-golden font-bold"
            >
              Send Message
            </button>
          </div>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
