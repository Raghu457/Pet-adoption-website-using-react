import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {

  const [petOfDay, setPetOfDay] =
    useState(null);

  useEffect(() => {

    async function getPetOfDay() {

      const response =
        await api.get("/pets");

      const pets =
        response.data;

      const randomPet =
        pets[
          Math.floor(
            Math.random() *
            pets.length
          )
        ];

      setPetOfDay(
        randomPet
      );

    }

    getPetOfDay();

  }, []);

  return (

    

    <div className="hero">

      <div className="hero-content">

        <h1>
          🐾PetPals
        </h1>

        <p>
          Find your perfect furry friend.
        </p>

        {

          petOfDay && (

            <div
              className="pet-day-card"
            >

              <h2>
                🏆 Pet Of The Day
              </h2>

              <img
                src={
                  petOfDay.image
                }
                alt={
                  petOfDay.name
                }
              />

              <h3>
                {petOfDay.name}
              </h3>

              <p>
                Breed:
                {" "}
                {petOfDay.breed}
              </p>

              <p>
                Age:
                {" "}
                {petOfDay.age}
              </p>

              <p>
                Gender:
                {" "}
                {petOfDay.gender}
              </p>

              <p>
                Adoption Fee:
                ₹{petOfDay.fee}
              </p>

              <p>
                ⭐
                {petOfDay.rating}
              </p>

            </div>

          )

        }

      </div>

    </div>

  );

}

export default Home;