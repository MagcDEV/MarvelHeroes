import { Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { StarWarsPage } from "../pages/StarWarsPage"
import { MarvelPage } from "../pages/MarvelPage"
import { LoginPage } from "../../auth/pages/LoginPage"
import { CharacterPage } from "../pages/CharacterPage"
import SearchPage from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="starwars" element={<StarWarsPage />} />
        <Route path="character/:id" element={<CharacterPage />} />

      </Routes>

    </>

  )
}
