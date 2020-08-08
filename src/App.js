import React from 'react';
import './App.css';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import employees from "./employees.json";
import Jumbotron from "./components/Jumbotron";


class App extends React.Component {
  state = {
    name: "",
    employees
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      // INTERPOLATED OBJECTS
      [name]: value
    })
  };

  sortSearch = () => {
    this.setState({
      employees: employees.filter(
        employee => {
          return employee.firstName.indexOf(this.state.name) !== -1;
        }
      )
    })
  };

  sortFirstASC = () => {
    this.setState({
      employees: employees.sort((a, b) => {
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;
        return 0;
      })
    })
  };

  sortFirstDEC = () => {
    this.setState({
      employees: employees.sort((a, b) => {
        if (a.firstName > b.firstName) return -1;
        if (a.firstName < b.firstName) return 1;
        return 0;
      })
    })
  };

  sortLastASC = () => {
    this.setState({
      employees: employees.sort((a, b) => {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;
        return 0;
      })
    })
  };

  sortLastDEC = () => {
    this.setState({
      employees: employees.sort((a, b) => {
        if (a.lastName > b.lastName) return -1;
        if (a.lastName < b.lastName) return 1;
        return 0;
      })
    })
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container style={{ marginTop:30 }}>
        <Row>
          <Column size="md-12">
            <SearchBar 
            onChange={this.handleInputChange}
            sortSearch={this.sortSearch}
            />
            <Table
              employees={this.state.employees}
              sortFirstASC={this.sortFirstASC}
              sortFirstDEC={this.sortFirstDEC}
              sortLastASC={this.sortLastASC}
              sortLastDEC={this.sortLastDEC}
            />
          </Column>
        </Row>
      </Container>
      </div>  
    );
  };
};

export default App;
