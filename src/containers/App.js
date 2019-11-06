import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "../components/layout/Navbar";
import Table from "../components/teams/Table";
import Footer from "../components/layout/Footer";
import About from "../components/pages/About";
import Team from "../components/teams/Team";
import Player from "../components/players/Player";
import PreviousMatches from "../components/matches/PreviousMatches";
import UpcomingMatches from "../components/matches/UpcomingMatches";

class App extends React.Component {
  state = {
    standings: [],
    team: {},
    player: {},
    prevMatches: [],
    upcMatches: [],
    searchTerm: '',
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get(
      "https://api.football-data.org/v2/competitions/PL/standings",
      {
        headers: {
          "X-Auth-Token": `6bd7a582d057450d82c8ea7b1fe14410`
        }
      }
    );

    this.setState({
      standings: response.data.standings[0].table,
      loading: false
    });
  }

  getTeamInfo = async event => {
    if (event.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}`,
        {
          headers: {
            "X-Auth-Token": `6bd7a582d057450d82c8ea7b1fe14410`
          }
        }
      );

      this.setState({ team: response.data, loading: false });
    }
  };

  getPlayerInfo = async event => {
    if (event.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://api.football-data.org/v2/players/${event.target.id}`,
        {
          headers: {
            "X-Auth-Token": `6bd7a582d057450d82c8ea7b1fe14410`
          }
        }
      );

      this.setState({ player: response.data, loading: false });
    }
  };

  getPrevMatches = async event => {
    if (event.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=FINISHED`,
        {
          headers: {
            "X-Auth-Token": `6bd7a582d057450d82c8ea7b1fe14410`
          }
        }
      );

      this.setState({ prevMatches: response.data.matches, loading: false });
    }
  }

  getUpcMatches = async event => {
    if (event.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=SCHEDULED`,
        {
          headers: {
            "X-Auth-Token": `6bd7a582d057450d82c8ea7b1fe14410`
          }
        }
      );

      this.setState({ upcMatches: response.data.matches, loading: false });
    }
  }

  onChangeHandler = event => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route
              exact path="/"
              render={props => {
                return (
                  <Table
                    clicked={this.getTeamInfo}
                    loading={this.state.loading}
                    standings={this.state.standings}
                  />
                );
              }}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact path="/team/:id"
              render={props => {
                return (
                  <Team
                    {...props}
                    getTeamInfo={() => this.getTeamInfo}
                    team={this.state.team}
                    getPlayerInfo={this.getPlayerInfo}
                    getPrevMatches={this.getPrevMatches}
                    getUpcMatches={this.getUpcMatches}
                    onChangeHandler = {this.onChangeHandler}
                    searchTerm = {this.state.searchTerm}
                    loading={this.state.loading}
                  />
                );
              }}
            />
            <Route
              exact path="/player/:id"
              render={props => (
                <Player
                  {...props}
                  getPlayerInfo={() => this.getPlayerInfo}
                  player={this.state.player}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact path="/previous-matches/:id"
              render={props => (
                <PreviousMatches
                  {...props}
                  getPrevMatches={() => this.getPrevMatches}
                  prevMatches={this.state.prevMatches}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact path="/upcoming-matches/:id"
              render={props => (
                <UpcomingMatches
                  {...props}
                  getUpcMatches={() => this.getUpcMatches}
                  upcMatches={this.state.upcMatches}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
