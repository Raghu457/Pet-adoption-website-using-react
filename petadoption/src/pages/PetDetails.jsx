import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function PetDetails() {

  const { id } = useParams();

  const [pet, setPet] =
    useState(null);

  useEffect(() => {
    getPet();
  }, []);

  async function getPet() {

    const response =
      await api.get(
        `/pets/${id}`
      );

    setPet(response.data);
  }

  if (!pet) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="details">

      <img
        src={pet.image}
        alt={pet.name}
      />

      <h1>{pet.name}</h1>

      <p>{pet.description}</p>

      <h3>Type</h3>
      <p>{pet.type}</p>

      <h3>Breed</h3>
      <p>{pet.breed}</p>

      <h3>Age</h3>
      <p>{pet.age}</p>

      <h3>Gender</h3>
      <p>{pet.gender}</p>

      <h3>Adoption Fee</h3>
      <p>₹ {pet.fee}</p>

      <h3>Rating</h3>
      <p>{pet.rating}</p>

      <h3>Traits</h3>

      <ul>

        {pet.traits &&
          pet.traits.map(
            (trait, index) => (
              <li key={index}>
                {trait}
              </li>
            )
          )}

      </ul>

    </div>

  );
}

export default PetDetails;