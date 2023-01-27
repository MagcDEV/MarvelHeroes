import { Pagination } from "@mui/material";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { MarvelList } from "../components/MarvelList";

export const MarvelPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { p = '' } = queryString.parse(location.search);

  const pagination = (numero) => { 
    if (numero <= 1) {
      return 0
    } else if (numero == 2) {
      return 20
    } else {
      return (numero - 1) * 20
    }
  }

  const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3cc41762b36155c4e444cd8c49ec416c&hash=df15615b99506651175e8fc1c943b529&offset=${pagination(p)}`

  console.log(url);

  const handleChange = (event, value) => {
    navigate(`?p=${value}`)
  }

  return (
    <div className="bg-gray-200 m-10">
      <h1 className="text-4xl m-5 font-bold">Marvel Comics</h1>
      <MarvelList url={url} />
      <div className="flex justify-center mb-5">
        <Pagination count={77} color="primary" onChange={handleChange} />
      </div>
    </div>
  )
}
