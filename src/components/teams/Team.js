import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Team = props => {
  const { id, name, squad, venue, website } = props.team;

  if (props.loading) {
    return <Spinner />;
  }

  let filteredPlayers = squad.filter(player => {
    return (
      player.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1
    );
  });

  const squadLayout = filteredPlayers.map(player => {
    return (
      <div key={player.id} className="card all-center">
        <ul className="p-1">
          <li>
            Name:
            <Link
              onClick={props.getPlayerInfo}
              to={`/player/${player.id}`}
              id={player.id}
              style={{ fontWeight: "700", marginLeft: "2px" }}
            >
              {player.name}
            </Link>
          </li>
          <li>Nationality: {player.nationality}</li>
          <li>
            <em>
              Position: <b>{player.position}</b>
            </em>
          </li>
          <li>
            Shirt Number: <b>{player.shirtNumber}</b>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <React.Fragment>
      <header>
        <h1>{name}</h1>
        <div className="header-team-info">
          <p>Stadium: {venue}</p>
          <p>
            Ofiicial website: <a href={website}> {website}</a>
          </p>
        </div>
        <div className="header-matches-buttons">
          <Link
            className="btn btn-light btn-first"
            onClick={props.getPrevMatches}
            to={`/previous-matches/${id}`}
            id={id}
          >
            Previous matches
          </Link>
          <Link
            className="btn btn-primary"
            onClick={props.getUpcMatches}
            to={`/upcoming-matches/${id}`}
            id={id}
          >
            Upcoming matches
          </Link>
        </div>
      </header>
      <h1 className="text-center mt-1">Players</h1>
      <input
        type="search"
        placeholder="Search player"
        onChange={props.onChangeHandler}
        value={props.searchTerm}
      />
      <div className="container grid-3 mt-2 py-1">{squadLayout}</div>
    </React.Fragment>
  );
};

export default Team;
