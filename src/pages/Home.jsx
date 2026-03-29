import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

function Home() {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84b1998bd6014019b79ee6761b36fe25')
      .then(response => response.json())
      .then(data => {
        setGames(data.results)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default Home