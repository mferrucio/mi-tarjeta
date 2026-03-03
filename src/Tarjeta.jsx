function Tarjeta({ nombre, profesion }) {
  return (
    <div style={{
      width: "320px",
      padding: "25px",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      textAlign: "center",
      backgroundColor: "white",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        backgroundColor: "#ff69b4",
        color: "white",
        fontSize: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 20px"
      }}>
        {nombre.charAt(0)}
      </div>

      <h2 style={{ color: "#ff1493", marginBottom: "10px" }}>
        {nombre}
      </h2>

      <p style={{ color: "#555" }}>
        {profesion}
      </p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#ff1493",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold"
      }}>
        Ver perfil
      </button>

    </div>
  )
}

export default Tarjeta