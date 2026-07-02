import {createBrowserRouter} from "react-router-dom";

import {CoinsList} from "@/pages/CoinsList/CoinsList";
import {FavoritesList} from "@/pages/FavoritesList/FavoritesList";
import {CoinDetails} from "@/pages/CoinDetails/CoinDetails";


export const router = createBrowserRouter([
    {path: '/', element: <CoinsList/>},
    {path: '/favorites', element: <FavoritesList/>},
    {path: '/coin/:id', element: <CoinDetails/>},
])
