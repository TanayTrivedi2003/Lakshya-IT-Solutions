import "./hero.css";
// import heroImg from "/heroimg.png"; // apni image yahan daal

function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">

                {/* LEFT */}
                <div className="hero-left">

                    <div className="hero-discount">
                        ⚡ 🎉 10% Early Bird Discount — Valid till April 5, 2026
                    </div>

                    <h1 className="hero-title">
                        Build a <br />
                        <span>Successful</span><br />
                        Career in IT
                    </h1>

                    <p className="hero-sub">
                        <span className="highlight">8+ years of excellence</span> in IT education. Join Kanpur's most trusted training institute and master in-demand tech skills with hands-on learning.
                    </p>

                    <div className="hero-btns">
                        <button className="btn-primary">🚀 Enroll Now</button>
                        <button className="btn-outline">Explore Courses →</button>
                    </div>

                    {/* STATS */}
                    <div className="hero-stats">

                        <div className="stat-item">
                            <div className="stat-icon">🎓</div>
                            <div>
                                <h4>1000+ Students</h4>
                                <p>Successfully trained</p>
                            </div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-icon">📅</div>
                            <div>
                                <h4>8+ Years</h4>
                                <p>Industry experience</p>
                            </div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-icon">📚</div>
                            <div>
                                <h4>26 Courses</h4>
                                <p>Across all domains</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="hero-right">

                    <div className="hero-card">

                        <div className="badge top">🟢 Live Classes Available</div>

                        {/* IMAGE BOX */}
                        <div className="image-box">
                            <div className="image-gradient"></div>

                            <img src="/heroimg.png" alt="course" />

                            {/* PROGRESS BARS */}
                            <div className="progress-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        {/* COURSE INFO */}
                        <div className="course-info">
                            <div>
                                <h4>Full Stack Development Course</h4>
                                <p>Most Popular • 6 Months</p>
                            </div>
                            <span className="price">₹4,999</span>
                        </div>

                        <div className="badge bottom">📘 Certificate Provided</div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;