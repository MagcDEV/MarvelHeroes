import { useFetch } from "../hooks/useFetchSwapi"

export const StarWarsPage = () => {

  const { data, isLoading, hasError } = useFetch("https://swapi.dev/api/people/")

  console.log(data);

  return (
    <>
      <h1 className="text-4xl m-5">Star Wasrs Page</h1>
    </>
  )
}
