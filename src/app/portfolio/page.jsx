"use client";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web design", "Applications", "Web development"];

  const projects = [
    {
      title: "Finance",
      category: "Web development",
      img: "/assets/images/project-1.jpg",
    },
    {
      title: "Orizon",
      category: "Web development",
      img: "/assets/images/project-2.png",
    },
    {
      title: "Fundo",
      category: "Web design",
      img: "/assets/images/project-3.jpg",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      img: "/assets/images/project-4.png",
    },
    {
      title: "DSM.",
      category: "Web design",
      img: "/assets/images/project-5.png",
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
              <a href="#">
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
