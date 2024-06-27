import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Table from "./Components/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Config/firebase";

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/CRUD-Firebase/connexion"
          element={user ? <Navigate to="/CRUD-Firebase/" /> : <Connexion />}
        />
        <Route
          path="/CRUD-Firebase/inscription"
          element={user ? <Navigate to="/CRUD-Firebase/" /> : <Inscription />}
        />
        <Route
          path="/CRUD-Firebase/"
          element={
            user ? <Table /> : <Navigate to="/CRUD-Firebase/connexion" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
