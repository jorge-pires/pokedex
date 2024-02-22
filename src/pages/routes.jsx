import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonCardPage } from "./pokemon-card"
import { HomePage } from "./home"

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/pokemon/:id' element={<PokemonCardPage />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }