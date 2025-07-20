import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
        alert(`${movie.title} added to favorites!`)
    }
    
    const removeFromFavorites = (movieId) => {
        const movieToRemove = favorites.find(movie => movie.id === movieId);
        if (movieToRemove) {
            setFavorites(prev => prev.filter(movie => movie.id !== movieId));
            
            alert(`${movieToRemove.title} removed from favorites!`);
        } else {
            alert("Movie not found in favorites!");
        }
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}