import React from 'react';
import styles from '../style'; // Assuming the path is correct

export const Contact = () => {
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, for example sending data to an API

    // After the API call, you show an alert box to the user
    alert("Message sent successfully!");

    // Reset the form if needed
    e.target.reset();
  };

  return (
    <div className={`${styles.flexCenter} ${styles.padding}`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className={`${styles.heading2} mb-4`}>Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="name" className={styles.paragraph}>Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" className="p-2 rounded-md border-2 border-gray-300" />

          <label htmlFor="email" className={styles.paragraph}>Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" className="p-2 rounded-md border-2 border-gray-300" />

          <label htmlFor="message" className={styles.paragraph}>Your Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here" className="p-2 rounded-md border-2 border-gray-300"></textarea>

          <button type="submit" className="p-3 bg-gray-700 text-white rounded-md hover:bg-gray-300 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
