import { useEffect, useState } from "react";
import api from "../services/api";

function ComparePets() {

  const [pets, setPets] =
    useState([]);

  const [pet1, setPet1] =
    useState("");

  const [pet2, setPet2] =
    useState("");

  useEffect(() => {

    getPets();

  }, []);

  async function getPets() {

    const response =
      await api.get("/pets");

    setPets(response.data);

  }

  const firstPet =
    pets.find(
      pet => pet.id === pet1
    );

  const secondPet =
    pets.find(
      pet => pet.id === pet2
    );

  return (

    <div className="compare-container">

      <h1>
        Compare Pets
      </h1>

      <div className="compare-select">

        <select
          value={pet1}
          onChange={(e) =>
            setPet1(
              e.target.value
            )
          }
        >

          <option value="">
            Select Pet 1
          </option>

          {
            pets.map(
              pet => (

                <option
                  key={pet.id}
                  value={pet.id}
                >

                  {pet.name}

                </option>

              )
            )
          }

        </select>

        <select
          value={pet2}
          onChange={(e) =>
            setPet2(
              e.target.value
            )
          }
        >

          <option value="">
            Select Pet 2
          </option>

          {
            pets.map(
              pet => (

                <option
                  key={pet.id}
                  value={pet.id}
                >

                  {pet.name}

                </option>

              )
            )
          }

        </select>

      </div>

      {

        firstPet &&
        secondPet && (

          <div className="comparison-card">

            <table>

              <thead>

                <tr>

                  <th>
                    Feature
                  </th>

                  <th>
                    {firstPet.name}
                  </th>

                  <th>
                    {secondPet.name}
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    Image
                  </td>

                  <td>

                    <img
                      src={firstPet.image}
                      alt={firstPet.name}
                      className="compare-pet-image"
                    />

                  </td>

                  <td>

                    <img
                      src={secondPet.image}
                      alt={secondPet.name}
                      className="compare-pet-image"
                    />

                  </td>

                </tr>

                <tr>

                  <td>
                    Breed
                  </td>

                  <td>
                    {firstPet.breed}
                  </td>

                  <td>
                    {secondPet.breed}
                  </td>

                </tr>

                <tr>

                  <td>
                    Age
                  </td>

                  <td>
                    {firstPet.age}
                  </td>

                  <td>
                    {secondPet.age}
                  </td>

                </tr>

                <tr>

                  <td>
                    Gender
                  </td>

                  <td>
                    {firstPet.gender}
                  </td>

                  <td>
                    {secondPet.gender}
                  </td>

                </tr>

                <tr>

                  <td>
                    Adoption Fee
                  </td>

                  <td>
                    ₹{firstPet.fee}
                  </td>

                  <td>
                    ₹{secondPet.fee}
                  </td>

                </tr>

                <tr>

                  <td>
                    Rating
                  </td>

                  <td>
                    ⭐ {firstPet.rating}
                  </td>

                  <td>
                    ⭐ {secondPet.rating}
                  </td>

                </tr>

                <tr>

                  <td>
                    Traits
                  </td>

                  <td>
                    {
                      firstPet.traits.join(", ")
                    }
                  </td>

                  <td>
                    {
                      secondPet.traits.join(", ")
                    }
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        )

      }

    </div>

  );

}

export default ComparePets;