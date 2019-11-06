import React from "react";
import Spinner from "../layout/Spinner";

const Player = props => {
  const {
    name,
    dateOfBirth,
    countryOfBirth,
    nationality,
    position,
    shirtNumber
  } = props.player;

  if (props.loading) {
    return <Spinner />;
  }

  let partsOfDate = dateOfBirth.split("-");
  let formattedDate = new Date(
    partsOfDate[0],
    partsOfDate[1] - 1,
    partsOfDate[2]
  );

  return (
    <React.Fragment>
      <h1 className="text-center mb-1">Player Details</h1>
      <div className="container py-1">
        <div className="card all-center p-1 player-card">
          <p>
            Name: <b> {name}</b>
          </p>
          <p>Date of birth: {formattedDate.toLocaleDateString()}</p>
          <p>Country of birth: {countryOfBirth}</p>
          <p>Nationality: {nationality}</p>
          <p>
            Position:{" "}
            <em>
              <b>{position}</b>
            </em>
          </p>
          <p>
            Shirt Number: <b>{shirtNumber}</b>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;
