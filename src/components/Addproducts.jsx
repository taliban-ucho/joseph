import axios from 'axios';
import { useState } from 'react';

const Addproducts = () => {
  const [vegetable_name, setVegetableName] = useState("");
  const [vegetable_description, setVegetableDescription] = useState("");
  const [vegetable_cost, setVegetableCost] = useState("");
  const [vegetable_photo, setVegetablePhoto] = useState(null);

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ...");
    setMessage("");
    setError("");

    const data = new FormData();
    data.append("vegetable_name", vegetable_name);
    data.append("vegetable_description", vegetable_description);
    data.append("vegetable_cost", vegetable_cost);
    data.append("vegetable_photo", vegetable_photo);

    try {
      const response = await axios.post(
        "https://taliban.pythonanywhere.com/api/addproduct",
        data
      );
      setLoading("");
      setMessage(response.data.Message || "Product added successfully!");
      setVegetableName("");
      setVegetableDescription("");
      setVegetableCost("");
      setVegetablePhoto(null);
      setImagePreview("");

      // Auto-clear success message
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setLoading("");
      setError("Failed to add product. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setVegetablePhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2 className="text-center mb-3">Add Vegetable</h2>

          {loading && <div className="alert alert-info">{loading}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <input
            type="text"
            className="form-control"
            placeholder="Enter vegetable name"
            value={vegetable_name}
            onChange={(e) => setVegetableName(e.target.value)}
            required
          />
          <br />

          <textarea
            placeholder="Enter description"
            className="form-control"
            value={vegetable_description}
            onChange={(e) => setVegetableDescription(e.target.value)}
            required
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter cost"
            className="form-control"
            value={vegetable_cost}
            onChange={(e) => setVegetableCost(e.target.value)}
            required
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handlePhotoChange}
            required
          />
          {imagePreview && (
            <div className="mt-2 text-center">
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxHeight: "150px", borderRadius: "8px" }}
              />
            </div>
          )}
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;
