import { useNavigate } from "react-router-dom";
import React from "react";

function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Services Page</h1>

      <button onClick={() => navigate("/contact")}>
        Go to Contact
      </button>
    </div>
  );
}

export default Services;