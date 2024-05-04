import useGetPokemon from "./hooks/useGetPokemon";
import useInputValue from "./hooks/useInputValue";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./componentes/Header";
import SearchContainer from "./componentes/SearchContainer";
import PokeCard from "./componentes/PokeCard";
function App() {
  const { inputValue, handleInputValue } = useInputValue();
  const { pokemon, fetchPokemon } = useGetPokemon(inputValue);
  return (
    <>
    <ToastContainer />
      <main className="p-6">
      <Header/>
        <SearchContainer 
          handleInputValue={handleInputValue}
          fetchPokemon={fetchPokemon}
        />
        <PokeCard
        pokemon={pokemon}
        />
        
      </main>

    </>
  )
}

export default App
