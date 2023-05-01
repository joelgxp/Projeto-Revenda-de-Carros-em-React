import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { CircularProgress } from "@mui/material"

const Rotas = () => (
  
    <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div>}>
      <Routes>
        <Route path="/cadastro" element={<h1>cadastro</h1>} />
        <Route path="/login" component={<h1>Login</h1>} />
      </Routes>
    </Suspense>
  
)

export default Rotas;
