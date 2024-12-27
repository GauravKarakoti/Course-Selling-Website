import React, { useState, useEffect } from 'react';
import axios from '../../services/api';

const ViewPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get('/api/v1/user/purchases', { headers: { token } });
        setPurchases(response.data.purchases);
        setCourses(response.data.courseData);
      } catch (error) {
        alert('Failed to fetch purchases: ' + error.response?.data?.message);
      }
    };
    fetchPurchases();
  }, []);

  return (
    <div>
      <h2>Your Purchases</h2>
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

export default ViewPurchases;
