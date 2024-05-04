import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setValue } from "./app/slices/counterSlice";
import Header from  "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const counter = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  
  //para poder usar la funcion creada en un slice debe omportar a useDispatch (hook)
  //useDispatch: permite realizar la ejecucion de una funcion:
  // nota: siempre que queramos usar uina function creada dentro de un slice debemos llamar a useDispatch
  const dispatch = useDispatch();

  return (
    <>
    <Header/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nombre: {user.name} {user.lastName}</h1>
      <div className="card">
        
        <p>count is {counter}</p>
        <button onClick={()=> dispatch(decrement())}>
          decrement 
        </button>
        <button onClick={()=> dispatch(increment())}>
        increment  
        </button>
        <p></p>
        <button onClick={()=> dispatch(setValue(99))}>
          boton con valor custom
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tasks />
    </>
  );
}

export default App;