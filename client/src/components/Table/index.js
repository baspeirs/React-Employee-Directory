import React from "react";
import employees from "../../employees"
import Employee from "../Employee"

class Table extends React.Component {
    state = {
        employees
    }

    sortFirstASC = () => {
        this.setState({
            employees: employees.sort((a, b) => {
                if(a.firstName < b.firstName) return -1;
                if(a.firstName > b.firstName) return 1;
                return 0;
            })
        })
    };
    
    sortFirstDEC = () => {
        this.setState({
            employees: employees.sort((a, b) => {
                if(a.firstName > b.firstName) return -1;
                if(a.firstName < b.firstName) return 1;
                return 0;
            })
        })
    };

    sortLastASC = () => {
        this.setState({
            employees: employees.sort((a, b) => {
                if(a.lastName < b.lastName) return -1;
                if(a.lastName > b.lastName) return 1;
                return 0;
            })
        })
    };

    sortLastDEC = () => {
        this.setState({
            employees: employees.sort((a, b) => {
                if(a.lastName > b.lastName) return -1;
                if(a.lastName < b.lastName) return 1;
                return 0;
            })
        })
    };

    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First<button onClick={this.sortFirstASC}>Sort ASC</button><button onClick={this.sortFirstDEC}>Sort DEC</button></th>
                        <th scope="col">Last<button onClick={this.sortLastASC}>Sort ASC</button><button onClick={this.sortLastDEC}>Sort DEC</button></th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee => (
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
}

export default Table;