import { Button, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetchMarvel";

export const CharacterPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, hasError } = useFetch(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=3cc41762b36155c4e444cd8c49ec416c&hash=df15615b99506651175e8fc1c943b529`)

  const onReturn = () => {
    navigate(-1);
  }

  return (
    <div className="h-screen">
      {isLoading ?
        <CircularProgress />
        :
        <>
          <div className="md:flex">
            <img
              className="object-contain md:m-5 md:w-96 md:h-96 rounded"
              src={data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension}
              alt="Character Image"
            />
            <div className="mt-5 m-5">
              <h1 className="text-2xl font-bold">{data.data.results[0].name}</h1>
              {data.data.results[0].description ?
                <p className="mt-5">{data.data.results[0].description}</p>
                : <p></p>
              }
              <h2 className="font-bold mt-5">Comics</h2>
              <ul className="mt-3">
                {data.data.results[0].comics.items.map((comic) => {
                  return <li>{comic.name}</li>
                })}
              </ul>
              <div className="pl-5 pb-9 mt-5">
                <Button onClick={onReturn} variant="contained">Return</Button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
