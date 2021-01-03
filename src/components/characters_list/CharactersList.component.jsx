import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Character from "../character/Character.component";
import Loading from "../loading/Loading.component";
import Search from "../search/Search.component";
const url = "https://www.breakingbadapi.com/api/characters";
const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  const fetchCharacters = useCallback(async () => {
    const response = await axios.get(`${url}?name=${query}`);
    const data = await response.data;
    setCharacters([...data]);
  }, [query]);

  const getQuery = (text) => {
    setQuery(text);
  };

  useEffect(() => {
    fetchCharacters();
  }, [query, fetchCharacters]);
  return (
    <>
      <Search getQuery={getQuery} />
      <br />
      <br />
      {characters.length ? (
        <div className="cards">
          {characters.map((character) => (
            <Character key={character.char_id} {...character} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CharactersList;
