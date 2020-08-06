import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        firstName: "asc"
      }
    }

    this.sortBy = this.sortBy.bind(this)
  }
  render() {
    return (
      <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.title}</td>
    </tr>
    );
  }
}

export default Employee;