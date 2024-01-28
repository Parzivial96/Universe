"use client";

import FilterBar from './components/filterbar.js';
import GameTile from './components/gametile.js';
import Navbar from './components/navbar.js';
import Topbar from './components/topbar.js';
import './style.css';

import { useState, useEffect } from 'react';

export default function HomePage() { 

  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [platformFilter, setPlatformFilter] = useState('');
  const [genre, setGenre] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/getAllGames/');
        const data = await response.json();
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          console.error('Invalid JSON response:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchQueryChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleOrderBy = (newOrderBy) => {
    setOrderBy(newOrderBy);
  };

  var filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting function based on 'orderBy' value
  const sortFunction = (a, b) => {
    if (orderBy === 'name') {
      return a.title.localeCompare(b.title);
    } else if (orderBy === 'cost') {
      return a.price - b.price;
    }
    // Add more conditions for other orderBy values if needed
    return 0;
  };

  // Apply sorting to filteredGames
  filteredGames = [...filteredGames].sort(sortFunction);

  const handlePlatformFilter = (newPlatformFilter) => {
    setPlatformFilter(newPlatformFilter);
  }

  // Additional filtering based on platform
  if (platformFilter === 'pc') {
    filteredGames = filteredGames.filter(game => game.platforms.includes('PC'));
  } else if (platformFilter === 'playstation') {
    filteredGames = filteredGames.filter(game => game.platforms.includes('PlayStation'));
  } else if (platformFilter === 'xbox') {
    filteredGames = filteredGames.filter(game => game.platforms.includes('Xbox'));
  }
  
  const handleGenresClick = (newGenre) => {
    setGenre(newGenre);
  }

  if(genre!='All'){
    filteredGames = filteredGames.filter(game => game.generes.includes(genre)); 
  }
  
  return (
    <>
      <Topbar />
      <Navbar onGenresClick={handleGenresClick}/>
      <FilterBar searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange} onOrderByChange={handleOrderBy} onPlatformChange={handlePlatformFilter}/>
      <div className='gamescontainer'>
      {filteredGames.map((game, index) => (
          <GameTile key={index} title={game.title} imageurl={game.banner} price={game.price} />
        ))}
      </div>
    </>
  );
}