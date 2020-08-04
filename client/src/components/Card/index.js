import React from "react";

function Card(props) {
  return (
    <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header">{props.id}</div>
                        <div className="card-body">
                            <h5 className="card-title">{props.lastName}, {props.firstName}</h5>
                            <p className="card-text">{props.title}</p>
                        </div>
                    </div>
  );
}

export default Card;