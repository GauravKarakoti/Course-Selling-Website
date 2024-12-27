import React, { useState } from 'react';
import axios from '../../services/api';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCreateCourse = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(
        '/api/v1/admin/course',
        { title, description, price, imageUrl },
        { headers: { token } }
      );
      alert('Course created successfully!');
    } catch (error) {
      alert('Course creation failed: ' + error.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Create Course</h2>
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
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
};

export default CreateCourse;
