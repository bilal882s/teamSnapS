import React from 'react'
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"
import SignUp from './components/Signup/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamMember from './components/TeamMember/TeamMember';
import FindTeam from './components/FindTeam/FindTeam';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/teamMember" element={<TeamMember />} />
          <Route path="/findTeam" element={<FindTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
