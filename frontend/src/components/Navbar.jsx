function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>PDF Evaluation App</h2>

      <div>
        <a
          href="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Dashboard
        </a>

        <a
          href="/flags"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Flags
        </a>
      </div>
    </nav>
  );
}

export default Navbar;