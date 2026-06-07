import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function EditPet() {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({});

  useEffect(() => {
    getPet();
  }, []);

  async function getPet() {

    const response =
      await api.get(
        `/pets/${id}`
      );

    setFormData(
      response.data
    );
  }

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await api.put(
      `/pets/${id}`,
      formData
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
          value={formData.name || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="breed"
          value={formData.breed || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image || ""}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={
            formData.description || ""
          }
          onChange={handleChange}
        />

        <button
          className="submit-btn"
        >
          Update Pet
        </button>

      </form>

    </div>

  );
}

export default EditPet;