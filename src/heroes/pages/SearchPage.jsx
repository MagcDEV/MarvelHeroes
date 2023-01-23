import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { MarvelList } from "../components/MarvelList"
import { useForm } from "../hooks/useForm"

const SearchPage = () => {
  const [search, setSearch] = useState('')

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    console.log({ searchText });
    setSearch(searchText);
  }

  const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=3cc41762b36155c4e444cd8c49ec416c&hash=df15615b99506651175e8fc1c943b529`

  return (
    <div className="m-5">
      <h1 className="text-4xl font-bold m-5">Search</h1>
      <hr />
      <form className="mt-5 flex gap-3 items-center"
        onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          label="Search Hero"
          name="searchText"
          value={searchText}
          onChange={onInputChange}
        />
        <Button
          className='h-10'
          variant="contained"
          type="submit">
          Search
        </Button>
      </form>
      <div className="mt-4">
        {search != '' ? <MarvelList url={url} /> : <></>}
      </div>
    </div>
  )
}

export default SearchPage 
