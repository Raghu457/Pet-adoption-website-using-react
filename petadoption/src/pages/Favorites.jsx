import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch =
    useDispatch();

  const favorites =
    useSelector(
      state =>
        state.favorites
    );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Pets
      </h1>

      {

        favorites.length === 0 ?

        (

          <div className="empty-favorites">

            <h2>
              No Favorite Pets
            </h2>

            <p>
              Add pets from Pets page.
            </p>

          </div>

        )

        :

        (

          <div className="favorites-grid">

            {

              favorites.map(
                pet => (

                  <div
                    key={pet.id}
                    className="favorite-card"
                  >

                    <img
                      src={pet.image}
                      alt={pet.name}
                    />

                    <div className="favorite-content">

                      <h2>
                        {pet.name}
                      </h2>

                      <p>
                        {pet.type}
                      </p>

                      <p>
                        {pet.breed}
                      </p>

                      <p>
                        ⭐ {pet.rating}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(
                            removeFavorite(
                              pet.id
                            )
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                )
              )

            }

          </div>

        )

      }

    </div>

  );
}

export default Favorites;