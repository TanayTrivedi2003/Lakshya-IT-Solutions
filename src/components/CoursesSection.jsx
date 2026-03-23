import "./courses.css";

function CoursesSection() {
    const courses = [
        {
            title: "Full Stack Web Development",
            desc: "Master HTML, CSS, JavaScript, React, Node.js and MongoDB.",
            duration: "6 Months",
            level: "Beginner",
            price: "₹4,999",
            oldPrice: "₹5,555",
            image: "/full-stack-development.png"
        },
        {
            title: "Cloud Computing (AWS)",
            desc: "Gain expertise in EC2, S3, Lambda and AWS certifications.",
            duration: "4 Months",
            level: "Intermediate",
            price: "₹5,399",
            oldPrice: "₹5,999",
            image: "/aws.png"
        },
        {
            title: "Python & Data Science",
            desc: "Learn Python, Pandas, NumPy & Machine Learning.",
            duration: "5 Months",
            level: "Beginner",
            price: "₹4,499",
            oldPrice: "₹4,999",
            image: "/python.png"
        },
        {
            title: "Ethical Hacking & Cybersecurity",
            desc: "Network security, CEH prep & real-world analysis.",
            duration: "6 Months",
            level: "Advanced",
            price: "₹6,999",
            oldPrice: "₹7,999",
            image: "/hacking.png"
        },
        {
            title: "Android App Development",
            desc: "Build Android apps using Java/Kotlin & Firebase.",
            duration: "5 Months",
            level: "Intermediate",
            price: "₹5,999",
            oldPrice: "₹6,999",
            image: "/android.png"
        }
    ];

    return (
        <section className="courses">
            <div className="courses-inner">

                <h2 className="courses-title">
                    Our <span>Popular Courses</span>
                </h2>

                <div className="courses-grid">

                    {courses.map((course, i) => (
                        <div className="course-card" key={i}>

                            <div className="card-image">
                                <img src={course.image} alt={course.title} />
                                <span className="badge">10% OFF</span>
                            </div>

                            <div className="card-body">
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>

                                <div className="meta">
                                    <span>⏱ {course.duration}</span>
                                    <span>📊 {course.level}</span>
                                    <span>✔ Certified</span>
                                </div>
                            </div>

                            <div className="card-bottom">
                                <div>
                                    <h4>{course.price}</h4>
                                    <span>{course.oldPrice}</span>
                                </div>

                                <button>Enroll →</button>
                            </div>

                        </div>
                    ))}

                    {/* EXTRA CARD */}
                    <div className="course-card more">
                        <div className="plus">+</div>
                        <h3>20+ More Courses</h3>
                        <p>DTP, Tally, Java, React & many more</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CoursesSection;