import { Navigate } from "react-router-dom"

export default function ProctectedRoute({ children }) {

  const token = localStorage.getItem("token")

  console.log("Token:", token)

  if (!token) {
    console.log("Not Authorized")
    return < Navigate to="/login" replace />
  }

  return children

}
