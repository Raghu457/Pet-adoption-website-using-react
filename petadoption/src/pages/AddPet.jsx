import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddPet() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      name: "",
      type: "",
      breed: "",
      age: "",
      gender: "",
      fee: "",
      image: "",
      description: ""

    });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    const petData = {

      ...formData,

      rating: 4.5,

      traits: []

    };

    await api.post(
      "/pets",
      petData
    );

    navigate("/pets");
  }

  return (

    <div className="form-container">

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          placeholder="Dog / Cat"
          onChange={handleChange}
        />

        <input
          type="text"
          name="breed"
          placeholder="Breed"
          onChange={handleChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        />

        <input
          type="text"
          name="fee"
          placeholder="Adoption Fee"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button
          className="submit-btn"
        >
          Add Pet
        </button>

      </form>

    </div>

  );
}

export default AddPet;