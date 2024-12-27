import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('/api/v1/admin/course/bulk', { headers: { token } });
        setCourses(response.data.courses);
      } catch (error) {
        alert('Failed to fetch courses: ' + error.response?.data?.message);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses Created</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <img src={course.imageUrl} alt={course.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCourses;
