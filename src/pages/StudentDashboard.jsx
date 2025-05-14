import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:4000/api/v1/getAllCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setCourses(data.data);
        } else {
          setError(data.msg || "Failed to fetch courses.");
        }
      } catch (err) {
        setError("Something went wrong while fetching courses.");
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/student/course/${courseId}`); // ✅ navigate with _id
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Available Courses</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer hover:bg-blue-50 transition"
            onClick={() => handleCourseClick(course._id)} // ✅
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.code}</p>
            <p className="mt-2 text-sm text-gray-800">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
