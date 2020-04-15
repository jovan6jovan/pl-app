import React from "react";
import Spinner from "../layout/Spinner";

const UpcomingMatches = (props) => {
  if (props.loading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <h1 className="text-center mb-1">Upcoming Matches</h1>
      <div className="container fixtures-container mt-2">
        {props.upcMatches.map((match) => {
          let formattedDate = new Date(match.utcDate);
          return (
            <React.Fragment key={match.id}>
              <h3 className="fixtures-date">
                Date:
                <span className="date-span">
                  {formattedDate.toLocaleDateString()}
                </span>
              </h3>
              <ul className="fixtures-list">
                <li className="fixtures-list-item">
                  <div className="fixtures-list-item-div">
                    <span>{match.homeTeam.name}&nbsp;&nbsp;</span>
                    <span>
                      <b>vs</b>
                    </span>
                    <span>&nbsp;&nbsp;{match.awayTeam.name}</span>
                  </div>
                  <span className="fixtures-list-item-span">
                    {match.competition.name}
                  </span>
                </li>
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default UpcomingMatches;
