import React from "react";
import Spinner from "../layout/Spinner";

const PreviousMatches = (props) => {
  if (props.loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <h1 className="text-center mb-1">Previous Matches</h1>
      <div className="container results-container mt-2">
        {props.prevMatches.map((match) => {
          let formattedDate = new Date(match.utcDate);
          return (
            <React.Fragment key={match.id}>
              <div className="results-headings mb-1 mt-1">
                <h3 className="results-date">
                  Date:
                  <span className="date-span">
                    {formattedDate.toLocaleDateString()}
                  </span>
                </h3>
                <h3 className="results-competition">
                  {match.competition.name}
                </h3>
              </div>
              <ul className="results-list">
                <li className="results-list-item" style={{ padding: "0.5rem" }}>
                  <span className="results-list-item-home">
                    {match.homeTeam.name}
                  </span>
                  <div className="results-result">
                    <span>{match.score.fullTime.homeTeam}</span>
                    <span style={{ marginLeft: "2px", marginRight: "2px" }}>
                      :
                    </span>
                    <span>{match.score.fullTime.awayTeam}</span>
                  </div>
                  <span className="results-list-item-away">
                    {match.awayTeam.name}
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

export default PreviousMatches;
