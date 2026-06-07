import { Link } from "react-router-dom";

import { useDispatch }
from "react-redux";

import {
  addFavorite
}
from "../features/favoriteSlice";

function PetCard({
  pet,
  onDelete
}) {

  const dispatch =
    useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(pet)
    );

  }

  return (

    <div className="card">

      <img
        src={pet.image}
        alt={pet.name}
      />

      <h3>{pet.name}</h3>

      <p>
        Type :
        {pet.type}
      </p>

      <p>
        Breed :
        {pet.breed}
      </p>

      <p>
        ⭐ {pet.rating}
      </p>

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/pets/${pet.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-pet/${pet.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(pet.id)
          }
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default PetCard;