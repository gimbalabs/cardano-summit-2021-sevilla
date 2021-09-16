import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard(props) {

    return (
        <div class="card mb-3">
            <div class="card-header">
                {props.time} {props.date} {props.title}
            </div>
            <div class="card-body">
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/images/' + props.img} class="img-fluid" alt="api cover"/>
                </div>
                <div className="h5">{props.subtitle}</div>
                <p>{props.text}</p>
                <Link class="btn btn-primary" to={"/open-source-apis/" + props.id} role="button">Learn More</Link>
                <p class="card-text"><small class="text-muted">updated by </small></p>
            </div>
        </div>
    );
}

export default ContentCard;
