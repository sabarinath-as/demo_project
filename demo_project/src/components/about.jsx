import { useNavigate } from "react-router-dom";
import React from "react";
function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => navigate("/service")}>
        Go to Service
      </button>
    </div>
  );
}

export default About;