import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.user_id;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://taliban.pythonanywhere.com/api/profile/${userId}`);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone || '',
        });
      } catch (err) {
        console.error('Failed to fetch profile:', err);
        setMessage('Error loading profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, navigate]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://taliban.pythonanywhere.com/api/profile/${userId}`, formData);
      setMessage('✅ Profile updated successfully!');
    } catch (err) {
      console.error('Update failed:', err);
      setMessage('❌ Failed to update profile.');
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="container mt-5">
      <h3 className="text-info">Edit Profile</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Optional"
          />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
