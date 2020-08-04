import React from 'react';
import './App.css';
import employees from "./employees.json"
import Card from './components/Card';
import Container from "./components/Container"
import Row from "./components/Row"
import Column from "./components/Column"

class App extends React.Component {
  state = {
    employees
  }
  render() {
    return (
      <Container style={{ marginTop: 100 }}>
      <Row>
          <Column size="md-12">
              <h1>Hello World</h1>
              {this.state.employees.map(employee => (
                <Card 
                firstName={employee.firstName}
                lastName={employee.lastName}
                title={employee.title}
                id={employee.id}
                />
              ))}
          </Column>
      </Row>
  </Container>
    );
  };
};

export default App;
