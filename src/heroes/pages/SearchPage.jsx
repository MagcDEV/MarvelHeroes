import { TextField } from "@mui/material"
import { useState } from "react"

const SearchPage = () => {
  const [search, setSearch] = useState('')

  const url =`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=3cc41762b36155c4e444cd8c49ec416c&hash=df15615b99506651175e8fc1c943b529` 

  return (
    <div className="m-5">
      <h1 className="text-4xl font-bold m-5">Search</h1>
      <hr />
      <form className="mt-5">
        <TextField variant="filled" label="Search Hero" />
      </form>
    </div>
  )
}

export default SearchPage 
