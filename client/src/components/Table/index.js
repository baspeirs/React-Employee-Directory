import React from "react";
import employees from "../../employees"
import Employee from "../Employee"

class Table extends React.Component {
    state = {
        employees: employees,
        direction: {
            firstName: "asc"
        }
    }

    sortBy = () => {
        console.log("working")
        console.log(this)
        this.setState({
            employees: employees.sort((a, b) => {
                if(a.firstName < b.firstName) return -1;
                if(a.firstName > b.firstName) return 1;
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
                        <th scope="col"><button onClick={this.sortBy}>First</button></th>
                        <th scope="col">Last</th>
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