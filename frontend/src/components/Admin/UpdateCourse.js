import React, { useState } from 'react';
import axios from '../../services/api';

const UpdateCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleUpdateCourse = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(
        '/api/v1/admin/course',
        { courseId, title, description, price, imageUrl },
        { headers: { token } }
      );
      alert('Course updated successfully!');
    } catch (error) {
      alert('Course update failed: ' + error.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Update Course</h2>
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleUpdateCourse}>Update Course</button>
    </div>
  );
};

export default UpdateCourse;
