import React from "react";
import "./Contact.scss";

import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import Footer from "./Footer/Footer";
const Contact = () => {
  return (
    <div className="contact px-1 py-10">
      {/* Heading */}
      <div className="border h-[400px] flex flex-col justify-center items-center p-5 bg-slate-50 rounded-xl  ">
        <h1 className="text-center font-bold text-md">Contact Us</h1>
        <h1 className="text-center font-bold pb-8 text-[#ef964c] text-2xl mt-5 sm:text-xm lg:text-6xl">
          Get in Touch with Alokik
        </h1>

        <p className=" text-center pb-10 text-sm text-gray-600 lg:text-xl mt-4">
          We’re here to help you find your perfect escape. Reach out to us for
          inquiries, bookings, or any assistance you need!
        </p>
      </div>

      <div className="text-center mb-10"></div>

      {/* Map Section */}
      <div className="mb-10">
        {/* <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
          Locate Us on the Map
        </h2> */}

        <div className="rounded-xl  flex items-center justify-center overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.9148792274345!2d72.79501197723962!3d19.673636585669385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d86bc2ff1f9%3A0x7daa9e9e4679cdc9!2skamaare%20valley!5e0!3m2!1sen!2sin!4v1731750877211!5m2!1sen!2sin"
            className="w-[100%] lg:w-[90%] items-center flex justify-center self-center rounded-xl h-96 border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="container mx-auto py-8">
        <div class="flex flex-wrap justify-between gap-4 mx-[7%]">
          {/* First Box */}
          <div class="flex-1 min-w-[200px] h-[250px] border hover:border-[#ef964c] justify-start gap-6 items-start flex-col text-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <FaEnvelopeOpen className="text-3xl text-purple-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Chat To Sales</h3>
            <p class="mb-4">Content for the first box goes here.</p>
            <button class="bg-slate-50 text-black px-6 py-1 text-lg rounded-lg  hover:bg-purple-600 hover:text-white transition duration-300">
              Alokik@Sales.com
            </button>
          </div>

          {/* Third Box */}
          <div class="flex-1 min-w-[200px] h-[250px] border hover:border-[#ef964c] justify-start gap-6 items-start flex-col text-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <FaMapPin className="text-3xl text-purple-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Visit Us</h3>
            <p class="mb-4">Content for the third box goes here.</p>
            <button class="bg-slate-50 text-black px-6 py-1 text-lg rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
              View On Map
            </button>
          </div>

          {/* Fourth Box */}
          <div class="flex-1 min-w-[200px] h-[250px] border justify-start gap-6 items-start flex-col text-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <FaPhone className="text-3xl text-purple-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Call Us</h3>
            <p class="mb-4">Content for the fourth box goes here.</p>
            <button class="bg-slate-50 text-black px-6 py-1 text-lg rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
              +91 987654321
            </button>
          </div>
        </div>
      </div>
      <div class="container mx-auto py-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4">
          {/* Question 1 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              What services do you offer?
            </h3>
            <p class="text-gray-600">
              We offer a variety of services including web development, digital
              marketing, and more.
            </p>
          </div>

          {/* Question 2 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              How can I contact support?
            </h3>
            <p class="text-gray-600">
              You can reach our support team via email or phone, listed on our
              contact page.
            </p>
          </div>

          {/* Question 3 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              Do you provide international services?
            </h3>
            <p class="text-gray-600">
              Yes, we provide services globally and have worked with clients
              from countries.
            </p>
          </div>

          {/* Question 4 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              What is your pricing model?
            </h3>
            <p class="text-gray-600">
              Our pricing is based on project scope and requirements. Contact us
              for a quote.
            </p>
          </div>

          {/* Question 5 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              How long does it take to complete a project?
            </h3>
            <p class="text-gray-600">
              Project timelines vary based on complexity. We will provide an
              estimated assessment.
            </p>
          </div>

          {/* Question 6 */}
          <div class="border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#ef964c] transition duration-300">
            <h3 class="text-xl font-semibold text-gray-700">
              Can I make changes after the project is completed?
            </h3>
            <p class="text-gray-600">
              Yes, we offer post-launch support and can make changes based on
              your feedback.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
