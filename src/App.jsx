import Tarjeta from "./Tarjeta"

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #ffc0cb, #ff69b4)"
    }}>
      <Tarjeta 
        nombre="Maria Ferrucho"
        profesion="Desarrolladora de Software"
      />
    </div>
  )
}

export default App