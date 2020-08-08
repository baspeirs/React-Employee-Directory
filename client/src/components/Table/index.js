import React from "react";
import Employee from "../Employee";

function Table(props) {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First <img src="https://img.icons8.com/windows/32/000000/circled-chevron-up.png" alt="arrow up" onClick={props.sortFirstASC}/><img src="https://img.icons8.com/windows/32/000000/circled-chevron-down.png" alt="arrow up" onClick={props.sortFirstDEC}/></th>
                        <th scope="col">Last <img src="https://img.icons8.com/windows/32/000000/circled-chevron-up.png" alt="arrow up" onClick={props.sortLastASC}/><img src="https://img.icons8.com/windows/32/000000/circled-chevron-down.png" alt="arrow up" onClick={props.sortLastDEC}/></th>
                        <th scope="col">Title </th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                        <Employee
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            title={employee.title}
                            id={employee.id}
                        />
                    ))}
                </tbody>
            </table>
        );
    }

export default Table;

