export default function Resume() {
  // Daftar keahlian Anda (bisa ditambah/dikurangi sesuai kebutuhan)
  const skills = [
    "Python",
    "Data Analysis",
    "Next.js",
    "React",
    "Power BI",
    "Microsoft Excel",
    "Tailwind CSS",
    "Supabase",
    "Scikit-learn",
    "Pandas",
    "Canva",
    "Web Development",
  ];

  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Bagian Pendidikan */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Universitas Riau</h4>
            <span>2021 — 2025</span>
            <p className="timeline-text">
              Bachelor of Information Systems. <br />
              Relevant Coursework: Data Analysis, Web Development. <br />
              Thesis: "Evaluasi Algoritma Machine Learning untuk Prediksi
              Hotspot Kebakaran Hutan dan Lahan di Provinsi Riau" using NASA
              MODIS satellite data.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SMA N 1 Sumatera Barat</h4>
            <span>2018 — 2021</span>
            <p className="timeline-text">
              High School Diploma (Mathematics and Natural Sciences).
            </p>
          </li>
        </ol>
      </section>

      {/* Bagian Pengalaman Kerja (Dummy Sementara) */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Job Title (Dummy)</h4>
            <span>2025 — Present</span>
            <p className="timeline-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Previous Role (Dummy)</h4>
            <span>2023 — 2025</span>
            <p className="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum
              deleniti atque corrupti, quos dolores et quas molestias excepturi
              sint occaecati cupiditate non provident.
            </p>
          </li>
        </ol>
      </section>

      {/* Bagian Keahlian (Skills) - Desain Tag/Badge */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <div
          className="content-card"
          style={{
            padding: "25px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "var(--bg-gradient-onyx)",
                color: "var(--white-2)",
                padding: "8px 18px",
                borderRadius: "12px",
                fontSize: "var(--fs-6)",
                fontWeight: "var(--fw-400)",
                boxShadow: "var(--shadow-1)",
                border: "1px solid var(--jet)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
