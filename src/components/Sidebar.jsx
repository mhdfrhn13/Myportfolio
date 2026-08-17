"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/my-picture.png"
            alt="Muhammad Farhan"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Muhammad Farhan">
            Muhammad Farhan
          </h1>
          <p className="title">Tech Student</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:farhan.muh1305@gmail.com"
                className="contact-link"
              >
                farhan.muh1305@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+6282-1841-3734" className="contact-link">
                +62 821-841-3734
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
