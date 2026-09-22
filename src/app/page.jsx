export default function About() {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {/* Bagian About Text (Opsi 2) */}
      <section className="about-text">
        <p>
          Information Systems graduate with a strong passion for data analysis
          and developing technology-driven solutions. Demonstrated leadership
          capabilities through the management of student organizations and
          project coordination. Equipped with foundational technical skills in
          data processing using Python and Excel to generate actionable insights
          that support organizational objectives. An adaptable and communicative
          professional, committed to making a tangible impact in a dynamic work
          environment through a systematic, data-driven approach.
        </p>
      </section>

      {/* Bagian Layanan (What I'm doing) */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {/* Job 1: Web Development */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Web Development icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                Building responsive, user-friendly, and dynamic web applications
                using modern technologies to meet organizational needs.
              </p>
            </div>
          </li>

          {/* Job 2: Data Analysis */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="Data Analysis icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Data Analysis</h4>
              <p className="service-item-text">
                Processing and analyzing datasets using Python and Excel to
                uncover actionable insights and support data-driven
                decision-making.
              </p>
            </div>
          </li>

          {/* Job 3: Tour Guide */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="Tour Guide icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Tour Guide</h4>
              <p className="service-item-text">
                Facilitating memorable travel experiences, managing itineraries,
                and providing comprehensive guidance for tourists.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
