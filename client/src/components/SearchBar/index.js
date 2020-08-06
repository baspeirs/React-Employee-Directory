import React from "react";

class SearchBar extends React.Component {

    // state = {
    //     data
    // }
    
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Employee" aria-label="Recipient's username" aria-describedby="button-addon2" name="name"/>
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