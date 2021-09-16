import React, { Component } from 'react'
import { SaturdayScheduleInfo } from '../../data/saturdayScheduleInfo';
import ScheduleCard from '../util/ScheduleCard';

class SaturdayScheduleList extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10">
                        <h1 className="display-4">Sábado</h1>
                        <p class="lead">El Sábado el evento tendrá lugar de 10:00 a 20:00.</p>
                        { SaturdayScheduleInfo.map(i => 
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

export default SaturdayScheduleList
