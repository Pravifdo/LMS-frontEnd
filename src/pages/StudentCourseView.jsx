import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentCourseView = () => {
  const { id } = useParams(); // get courseid from URL
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  console.log("Course ID:", id);
  console.log("Course:", course);
 
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:4000/api/v1/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setCourse(data.data);
        } else {
          setError(data.msg || "Could not load course.");
        }
      } catch (err) {
        setError("Network error while loading course1.");
      }
    };

    fetchCourse();
  }, [id]);

  const handleSubmit = () => {
    alert("Submit assignment clicked! (Implement file upload here)");
  };

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!course) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.id}</p>

      {/* Notes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📄 Notes</h2>
        {course.materials?.notes?.length > 0 ? (
  <ul className="list-disc pl-5">
    {course.materials.notes.map((note, idx) => (  // ✅ FIXED: course.materials.notes
      <li key={idx}>
        <a
          href={note.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {note.title}
        </a>
      </li>
    ))}
  </ul>
) : (
  <p>No notes available.</p>
)}

      </section>

      {/* Videos */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎥 Videos</h2>
        {course.videos?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.videos.map((video, idx) => (
              <div key={idx} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.link}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 rounded"
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
          <p>No videos available.</p>
        )}
      </section>

      {/* Assignments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📝 Assignments</h2>
        {course.assignments?.length > 0 ? (
          <ul className="list-decimal pl-5">
            {course.assignments.map((assignment, idx) => (
              <li key={idx} className="mb-2">
                <div className="font-medium">{assignment.title}</div>
                <div className="text-sm text-gray-600">{assignment.description}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments yet.</p>
        )}
      </section>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Assignment
      </button>
    </div>
  );
};

export default StudentCourseView;
