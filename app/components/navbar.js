import { useState } from 'react';

export default function Navbar({onGenresClick}) {
    var genreslist = [
      {title:'All',imageurl:'images/genresicon.png'},{title:'Action',imageurl:'images/shooting.png'},{title:'Adventure',imageurl:'images/explore.png'},{title:'Arcade',imageurl:'images/multiplayer.png'},{title:'Board Games',imageurl:'images/board.png'},{title:'Card',imageurl:'images/casual.png'},{title:'Casual',imageurl:'images/openworld.png'},{title:'Educational',imageurl:'images/flying.png'},{title:'Multiplayer',imageurl:'images/multiplayer.png'}];
    
      const [selectedGenre, setSelectedGenre] = useState('All');

      const handleGenreClick = (genreTitle) => {
        setSelectedGenre(genreTitle);
        onGenresClick(genreTitle);
      };
    
      return (
        <div className='navbarcontainer'>
          <h2>Genres</h2>
          {genreslist.map((genre, index) => (
            <div
              key={index}
              className={`genresbox ${selectedGenre === genre.title ? 'selected' : ''}`}
              onClick={(e) => handleGenreClick(genre.title)}
            >
              <img src={genre.imageurl} />
              <p>{genre.title}</p>
            </div>
          ))}
        </div>
      );
  }