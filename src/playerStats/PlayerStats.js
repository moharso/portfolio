import React from "react";
import "../styles/playerStats.css";

const PlayerStats = ({ name = "KAROLINA MASHARO", title = "Frontend Developer" }) => {
  return (
    <section className="player-stats">
      <h1>{name}</h1>
      <div className="player-stats__lines">
        <span className="player-stats__line player-stats__line--thick"></span>
        <span className="player-stats__line player-stats__line--thin"></span>
      </div>
      <h2>{title}</h2>
    </section>
  );
};

export default PlayerStats;
