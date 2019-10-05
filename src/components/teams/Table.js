import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Table = props => {
  const renderTableData = () => {
    return props.standings.map(team => {
      const {
        position,
        team: { id, name, crestUrl },
        playedGames,
        won,
        draw,
        lost,
        points,
        goalsFor,
        goalsAgainst,
        goalDifference
      } = team; //destructuring
      return (
        <tr key={id}>
          <td style={{fontWeight: "700"}}>{position}</td>
          <td className="team-details">
            <img src={crestUrl} className="crest-url" alt="team logo" />
            <span className="team-name">
                <Link onClick={props.clicked} to={`/team/${id}`} id={id}>{name}</Link>
            </span>
          </td>
          <td>{playedGames}</td>
          <td className="won-td">{won}</td>
          <td className="draw-td">{draw}</td>
          <td className="lost-td">{lost}</td>
          <td className="points">{points}</td>
          <td className="gf-td">{goalsFor}</td>
          <td className="ga-td">{goalsAgainst}</td>
          <td>{goalDifference}</td>
        </tr>
      );
    });
  };

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <h1 className="text-center my-2">Premier League Table</h1>
        <div style={{overflowX: "auto"}}>
          <table>
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Club</th>
                <th>Played</th>
                <th className="won-th">Won</th>
                <th className="draw-th">Draw</th>
                <th className="draw-th">Lost</th>
                <th>Points</th>
                <th className="gf-th">GF</th>
                <th className="ga-th">GA</th>
                <th>GD</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Table;
