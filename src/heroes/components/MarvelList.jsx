import { MarvelCard } from "./MarvelCard"
import { useFetch } from "../hooks/useFetchMarvel"
import { CircularProgress } from "@mui/material";

export const MarvelList = ({ url }) => {

  const { data, isLoading, hasError } = useFetch(url)

  console.log(data.data.total);

  return (
    <>
      {data.data.total == 0 ?
        <p>NO HAY DATOS</p> :
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-5 bg-gray-200">
          {isLoading ?
            <CircularProgress /> :
            data.data.results.map((character) => {
              return <MarvelCard key={character.id} character={character} />
            })
          }
        </div>
      }

    </>
  )
}
