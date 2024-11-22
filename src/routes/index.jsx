import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonCard } from "../pages/pokemon-card"
import { Home } from "../pages/home"

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pokemon/:id' element={<PokemonCard />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }