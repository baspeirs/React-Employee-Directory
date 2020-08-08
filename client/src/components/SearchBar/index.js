import React from "react";

function SearchBar(props) {

        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Employee" aria-label="Recipient's username" aria-describedby="button-addon2" name="name" onChange={props.onChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={props.sortSearch}>Search</button>
                    </div>
                </div>
    
            </div>
        )
    }

export default SearchBar;


// onChange={props.onChange}