import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemOnePage from "../pages/ItemOnePage";
import ItemTwoPage from "../pages/ItemTwoPage";
import LoginFormPage from '../pages/LoginFormPage'
import RegistrationFormPage from "../pages/RegistrationFormPage";
import EnrollmentFormPage from "../pages/EnrollmentFormPage";

function PagesRouter() {
  return (
    <Routes>
      <Route path="/" element={<ItemOnePage />} />
      <Route path="/ItemTwoPage" element={<ItemTwoPage />} />
      <Route path="/LoginForm" element={<LoginFormPage />} />
      <Route path="/RegistrationFormPage" element={<RegistrationFormPage />} />
      <Route path="/EnrollmentFormPage" element={<EnrollmentFormPage />} />
     
    </Routes>
  );
}

export default PagesRouter;
