import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { MarvelPage } from "../pages/MarvelPage"
import { CharacterPage } from "../pages/CharacterPage"
import SearchPage from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />


        <Route path="search" element={<SearchPage />} />
        <Route path="character/:id" element={<CharacterPage />} />

        <Route path="/" element={<Navigate to="/marvel"/>} />

      </Routes>

    </>

  )
}
