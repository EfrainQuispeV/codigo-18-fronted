import { useSelector }from "react-redux"
export default function Header(){
  const value = useSelector((state) => state.counter.value);
  return(
    <nav>
      <div className="read-the-header">
        <div>
          <a href="">Inicio</a>
        </div>
        <div>
          <a href="">Nosotros</a>
        </div>
        <div>
          <a href="">Contacto</a>
        </div>
        <div>
          <a href="">Proyecto</a>
        </div>
      </div>
      <div>
        <h2>El contador actual es {value}</h2>
      </div>
    </nav>
  );
}