import { useState } from "react";
import { toast } from "react-toastify"; 

export default function useGetPokemon(inputValue) {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
    const response = await fetch(url);

    if (!response.ok) {
      toast.error("Hubo un error", {
        autoClose: true,
        closeButton: true,
      });
      return;
    }

    const data = await response.json();
    setPokemon(data);
  };

  return {
    pokemon,
    fetchPokemon,
  };
}