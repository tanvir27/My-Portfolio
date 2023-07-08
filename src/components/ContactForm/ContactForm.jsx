import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending the message
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="flex flex-col md:flex-row justify-between w-11/12 mx-auto my-10">
      <div className=" md:w-1/2 flex-1 md:text-start text-center text-green-900">
        <div className="lg:pt-28 lg:pl-10">
          <div className="flex gap-4 items-center">
            <AiOutlineMail className="text-7xl"></AiOutlineMail>
            <h2 className="text-3xl text-uppercase font-medium mb-2">
              Get in Touch
            </h2>
          </div>

          <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
            Let's Work <br /> Together !
          </h2>
        </div>
      </div>
      <div
        className=" md:w-1/2 p-6 shadow-2xl"
       
      >
        <form
          onSubmit={handleSubmit}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items start"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border-b-2  py-2 px-4 transition-all outline-none placeholder:text-slate-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border-b-2  py-2 px-4 transition-all outline-none  placeholder:text-slate-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="w-full border-b-2 resize-none py-12 px-4 transition-all outline-none placeholder:text-slate-500"
              rows={4}
              placeholder="Type your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-black bg-green-400 w-2/3 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-green-900"
            >
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactForm;
