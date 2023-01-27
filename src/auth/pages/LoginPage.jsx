import { Button } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Manuel Guevara');
    navigate(lastPath, {
      replace: true
    });
  }
  return (
    <>
      <div className="container m-5">
        <h1 className="text-4xl m-5">Login page</h1>
        <hr />
        <div className="m-5">
          <Button variant="contained" onClick={() => onLogin()}>Login</Button>
        </div>
      </div>
    </>
  )
}
