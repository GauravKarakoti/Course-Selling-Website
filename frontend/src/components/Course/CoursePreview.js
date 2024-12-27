import React, { useEffect, useState } from 'react';
import { API } from '../../services/api';

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await API.get('/course/preview');
      setCourses(data.courses);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePreview;
