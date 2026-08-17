"use client";
import { useState } from "react";

export default function About() {
  const [activeModal, setActiveModal] = useState(null);

  const testimonials = [
    {
      name: "Daniel lewis",
      avatar: "/assets/images/avatar-1.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
      date: "14 June, 2021",
    },
    {
      name: "Jessica miller",
      avatar: "/assets/images/avatar-2.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done...",
      date: "20 May, 2021",
    },
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia...
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly...
        </p>
      </section>

      {/* Services List - Bebas tambahkan seperti aslinya */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          {/* Tambahkan list service lainnya */}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testi, i) => (
            <li className="testimonials-item" key={i}>
              <div
                className="content-card"
                onClick={() => setActiveModal(testi)}
                style={{ cursor: "pointer" }}
              >
                <figure className="testimonials-avatar-box">
                  <img src={testi.avatar} alt={testi.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testi.name}</h4>
                <div className="testimonials-text">
                  <p>{testi.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal Popup Testimoni */}
      <div className={`modal-container ${activeModal ? "active" : ""}`}>
        <div className="overlay" onClick={() => setActiveModal(null)}></div>
        {activeModal && (
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={activeModal.avatar}
                  alt={activeModal.name}
                  width="80"
                />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{activeModal.name}</h4>
              <time>{activeModal.date}</time>
              <div>
                <p>{activeModal.text}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
