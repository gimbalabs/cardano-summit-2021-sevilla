import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard(props) {
    
    return (
        <div class="card mb-3">
            <div class="card-header">
                {props.id}
            </div>
            <div class="card-body">
              FORM HERE
            </div>
        </div>
    );
}

export default ContentCard;
