import React, { useState } from 'react';
import axios from '../../services/api';

const PurchaseCourse = () => {
  const [courseId, setCourseId] = useState('');

  const handlePurchase = async () => {
    try {
      const token = localStorage.getItem('userToken');
      await axios.post(
        '/api/v1/course/purchase',
        { courseId },
        { headers: { token } }
      );
      alert('Course purchased successfully!');
    } catch (error) {
      alert('Purchase failed: ' + error.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Purchase Course</h2>
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default PurchaseCourse;
