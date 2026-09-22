export default function Achievement() {
  // Data dummy pencapaian/achievement
  const achievements = [
    {
      id: 1,
      image: "/assets/images/blog-1.jpg",
      category: "Certification",
      date: "Aug 2026",
      title: "Data Analytics Professional Certificate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: "/assets/images/blog-2.jpg",
      category: "Competition",
      date: "Jul 2025",
      title: "1st Place - Web Innovation Hackathon",
      description:
        "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      id: 3,
      image: "/assets/images/blog-3.jpg",
      category: "Award",
      date: "Dec 2024",
      title: "Outstanding Student of the Year",
      description:
        "Excepteur sint occaecat cupidatat non proident, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
  ];

  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {achievements.map((item) => (
            <li className="blog-post-item" key={item.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{item.category}</p>
                    <span className="dot"></span>
                    <time>{item.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{item.title}</h3>
                  <p className="blog-text">{item.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
