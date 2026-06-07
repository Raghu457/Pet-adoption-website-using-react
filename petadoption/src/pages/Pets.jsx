import { useEffect, useState } from "react";
import api from "../services/api";
import PetCard from "../components/PetCard";
import { Link } from "react-router-dom";

function Pets() {

  const [pets, setPets] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {

    const response =
      await api.get("/pets");

    setPets(response.data);
  }

  async function deletePet(id) {

    await api.delete(
      `/pets/${id}`
    );

    setPets(
      pets.filter(
        pet => pet.id !== id
      )
    );
  }

  const filteredPets =
    pets.filter(pet =>
      pet.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <>

      <h1>
        Available Pets
      </h1>

      <input
        type="text"
        placeholder="Search Pet"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <br /><br />

      <Link
        to="/add-pet"
        className="submit-btn"
      >
        Add Pet
      </Link>

      <br /><br />

      <div className="destinations">

        {filteredPets.map(
          pet => (
            <PetCard
              key={pet.id}
              pet={pet}
              onDelete={
                deletePet
              }
            />
          )
        )}

      </div>

    </>
  );
}

export default Pets;