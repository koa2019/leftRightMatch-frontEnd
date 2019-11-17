import React from "react"
import "./ProfileCard.css"

function ProfileCard(props) {
    // console.log(props)
    return (
        <div className="card candidate-card p-0">
            <div>
                <img className="card-img-top candidate-img" src={props.image} alt={props.name} />
            </div>
            <div className="card-body">
                <h1 className="card-title">{props.name}</h1>
                
            </div>
            <ul className="list-group list-group-flush ul-size">
                <li className="list-group-item">Political Party:
                <p className="p-size">{props.party}</p>
                </li>
                <li className="list-group-item">Themes:
                <p className="p-size">{props.themes}</p>
                </li>
                <li className="list-group-item">Best Qualities:
                <p className="p-size">{props.qualities}</p>
                    <a href={props.policies} className="ul-size">Policies</a>
                </li>
                <li className="list-group-item">Political Experience:
                <p className="p-size">{props.experience}</p>
                </li>
            </ul>
            <div className="card-body">
                <a href={props.website} className="card-link">Official Website</a>
                <a href={props.iSide} className="card-link">iSideWith Profile</a>
            </div>
        </div>
    );
}
export default ProfileCard;