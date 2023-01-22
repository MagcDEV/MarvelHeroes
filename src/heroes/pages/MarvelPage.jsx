import { Pagination } from "@mui/material";
import { useState } from "react";
import { MarvelList } from "../components/MarvelList";

export const MarvelPage = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3cc41762b36155c4e444cd8c49ec416c&hash=df15615b99506651175e8fc1c943b529&offset=${pageNumber}`

  const handleChange = (event, value) => { 
    setPageNumber(value * 20);
  }
  return (
    <div className="bg-gray-200 m-2">
      <h1 className="text-4xl m-5">Marvel Page</h1>
      <MarvelList url={url} />
      <div className="flex justify-center mb-5">
        <Pagination count={77} color="primary" onChange={handleChange} />
      </div>
    </div>
  )
}
