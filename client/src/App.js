import React from 'react';
import './App.css';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table"


class App extends React.Component {
  state = {
    name: ""
  }

  render() {
    return (
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Column size="md-12">
            <h1>Employee Directory</h1>
            <SearchBar onChange={this.handleInputChange} />
              <Table />
            
          </Column>
        </Row>
      </Container>
    );
  };
};

export default App;
