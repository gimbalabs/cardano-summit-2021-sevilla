import React, { Component } from 'react'
import { SundayScheduleInfo } from '../../data/sundayScheduleInfo';
import ScheduleCard from '../util/ScheduleCard';

class SundayScheduleList extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <h1 className="display-4">Domingo</h1>
                        <p class="lead">El Domingo el evento tendrá lugar de 10:00 a 14:00.</p>
                        { SundayScheduleInfo.map(i => 
                        <ScheduleCard id={i.id}
                            date={i.date}
                            time={i.time}
                            title={i.headerTitle} 
                            subtitle={i.headerSubtitle} 
                            text={i.headerText} 
                            officialLink={i.officialLink}
                            markdownText={i.markdownText}
                        />
                        ) }
                    </div>
                    <div className="col"></div>
                </div>    
            </div>

     
        );
    }
}

export default SundayScheduleList
