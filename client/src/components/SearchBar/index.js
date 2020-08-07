import React from "react";

class SearchBar extends React.Component {

    state = {
        name: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        // console.log(event.target.value)
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          // INTERPOLATED OBJECTS
          [name]: value
        });
        console.log(this.state.name)
      };
    
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Employee" aria-label="Recipient's username" aria-describedby="button-addon2" name="name" onChange={this.handleInputChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default SearchBar;


// onChange={props.onChange}