"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data (Dummy)
    setTimeout(() => {
      alert(`Terima kasih ${formData.fullname}, pesan Anda telah terkirim!`);
      setFormData({ fullname: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  // Validasi dasar agar tombol aktif jika semua field terisi
  const isFormValid =
    formData.fullname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          {/* Tautan Embed Google Maps telah diubah ke area Depok */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126899.51608678082!2d106.7486884897258!3d-6.40248478426053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebe4ec410f9b%3A0x6a117b4474bf8206!2sSukmajaya%2C%20Depok%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
