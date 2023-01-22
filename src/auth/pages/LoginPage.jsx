import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/marvel', {
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

