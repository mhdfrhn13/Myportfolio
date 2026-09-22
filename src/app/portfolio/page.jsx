"use client";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  // Kategori disesuaikan dengan fokus keahlian Anda
  const categories = ["All", "Web Development", "Data Analysis"];

  const projects = [
    {
      title: "FnS Tour and Travel",
      category: "Web Development",
      img: "/assets/images/fns-tour.jpg", // Pastikan file gambar ini ada di folder public/assets/images
      link: "https://fnstourtravel.com", // Mengarah langsung ke website live Anda
    },
    {
      title: "Forest Fire Hotspot Prediction",
      category: "Data Analysis",
      img: "/assets/images/skripsi-hotspot.jpg", // Gunakan screenshot grafik visualisasi data atau cover skripsi
      link: "#", // Ganti dengan link repositori GitHub jika ada
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, i) => (
            <li className="project-item active" key={i}>
              {/* Menambahkan target="_blank" agar website terbuka di tab baru */}
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
