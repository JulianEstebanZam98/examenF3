import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  
  const [contador, setContador]= React.useState(0);
  function restarStock(cantidad){
    setContador(contador+1)
  }

  return (
    <div className="App">
      <Cabecera  contador={contador}/>
      <Listado  restStock={restarStock}/>
    </div>
  );
}

export default App;
