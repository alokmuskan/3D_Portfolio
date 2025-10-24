import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Utility function to validate email format using a simple regex
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handles input changes to update component state
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread existing form state and update only the field that changed
    setForm({ ...form, [name]: value }); 
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Basic check for empty fields (Redundant with HTML 'required', but safe)
    if (!form.name || !form.email || !form.message) {
        alert("Please fill in all required fields.");
        return; 
    }

    // 2. Custom check for email format validation
    if (!validateEmail(form.email)) {
        alert("Please enter a valid email address format (e.g., user@domain.com).");
        return; // Stop submission if email is invalid
    }

    setLoading(true);

    // EmailJS logic to send the email
    emailjs.send(
      "service_qpdm46d", // Your EmailJS Service ID
      "template_4mh6pjp", // Your EmailJS Template ID
      {
        from_name: form.name,
        to_name: "Alok",
        from_email: form.email,
        to_email: "alokraj1319@gmail.com",
        message: form.message,
      },
      "_FL29Qb0QfkjNCETT" // Your EmailJS Public Key
    )
    .then(() => {
      setLoading(false); // Stop loading animation
      alert("Thank you. I will get back to you as soon as possible.");

      // Reset the form fields after successful submission
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false); // Stop loading animation even on error
      console.log(error);
      alert("Something went wrong.")
    })
  };

  // Logic to determine if all fields are non-empty for button control
  const isFormValid = form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== "";

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex 
                 gap-10 overflow-hidden" 
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:h-auto h-full" 
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Your Name Label/Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required // HTML5 validation: field must be filled
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                         text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Your Email Label/Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email" // HTML5 validation: enforces email format (e.g., requires @)
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required // HTML5 validation: field must be filled
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                         text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Your Message Label/Textarea */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required // HTML5 validation: field must be filled
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                         text-white rounded-lg outline-none border-none font-medium resize-none" 
            ></textarea>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            // Button is disabled if form is invalid OR if the email is being sent (loading)
            disabled={loading || !isFormValid} 
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white
                        font-bold shadow-md shadow-primary rounded-xl
                        ${(!isFormValid || loading) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
          >
            {/* Shows status dynamically */}
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        // Ensures proper height on different screen sizes
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" 
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");