import "./courses.css";

const courses = [
    {
        title: "Full Stack Development",
        duration: "6 Months",
        price: "₹4,999",
        tag: "Most Popular"
    },
    {
        title: "Frontend Development",
        duration: "3 Months",
        price: "₹2,999",
        tag: "Trending"
    },
    {
        title: "Backend Development",
        duration: "4 Months",
        price: "₹3,499",
        tag: ""
    },
    {
        title: "UI/UX Design",
        duration: "2 Months",
        price: "₹2,499",
        tag: ""
    },
    {
        title: "Digital Marketing",
        duration: "3 Months",
        price: "₹2,999",
        tag: ""
    },
    {
        title: "Python Programming",
        duration: "4 Months",
        price: "₹3,999",
        tag: ""
    }
];

function CoursesSection() {
    return (
        <section className="courses">
            <div className="courses-inner">

                {/* HEADING */}
                <div className="courses-header">
                    <h2>Our <span>Courses</span></h2>
                    <p>Explore our industry-oriented courses designed for real-world success</p>
                </div>

                {/* GRID */}
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>

                            {course.tag && (
                                <div className="course-tag">{course.tag}</div>
                            )}

                            <div className="course-icon">💻</div>

                            <h3>{course.title}</h3>
                            <p>{course.duration}</p>

                            <div className="course-bottom">
                                <span className="price">{course.price}</span>
                                <button>View Details →</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default CoursesSection;