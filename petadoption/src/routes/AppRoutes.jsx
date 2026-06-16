import {
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Pets from "../pages/Pets";
import PetDetails from "../pages/PetDetails";
import AddPet from "../pages/AddPet";
import EditPet from "../pages/EditPet";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
import ComparePets from "../pages/ComparePets";

import ProtectedRoute
from "./ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/pets"
        element={<Pets />}
      />

      <Route
        path="/pets/:id"
        element={<PetDetails />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/compare"
        element={<ComparePets />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />

      <Route
        path="/add-pet"
        element={
          <ProtectedRoute>
            <AddPet />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-pet/:id"
        element={
          <ProtectedRoute>
            <EditPet />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default AppRoutes;