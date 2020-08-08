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
  // this is the only class component and will send updates to the class to the other components
  state = {
    name: "",
    employees
  };
// this is going to handle input change on the search bar
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      // INTERPOLATED OBJECTS
      [name]: value
    }, this.sortSearch)
  };
// this will sort the table as you type
// === CURRENTLY NOT BEING USED, BUG WITH SORTING BY PREV STATE AND NOT CURRENT STATE ===
  sortSearch = () => {
    this.setState({
      employees: employees.filter(
        employee => {
          return employee.firstName.indexOf(this.state.name) !== -1;
        }
      )
    })
  };
// =========  THE NEXT SEVERAL FUNCTIONS ARE FOR SORTING FIRST AND LAST NAME ====
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
// === And finally render the page and send the function to the components 
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
