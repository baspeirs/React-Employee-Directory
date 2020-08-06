import React from "react";
import data from "../../employees"

function Employee(props) {

    return (
      <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.title}</td>
    </tr>
    );
}

export default Employee;