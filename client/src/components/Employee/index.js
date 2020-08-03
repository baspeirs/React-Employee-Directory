import React from "react";
import Container from "../Container"
import Row from "../Row"
import Column from "../Column"

const Employee = (props) => {
    return (
        <Container style={{ marginTop: 100 }}>
            <Row>
                <Column size="md-12">
                    <h1>Hello World</h1>
                </Column>
            </Row>
        </Container>
    )
};

export default Employee;