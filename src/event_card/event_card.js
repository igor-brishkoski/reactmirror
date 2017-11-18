import React from 'react';
import './event_card.css';

export class EventCard extends React.Component {

    renderCard(event) {
        return (
            <div className="eventCard" key={event.uuid}>
                <div className="center-croppedCard" style={{backgroundImage: "url(" + event.image_url + ")"}}>
                </div>

                <div className="details-containerCard">
                    <h3 className="eventCardTitle">{event.name}</h3>
                    <p>{`${event.date_string} - ${event.time_string}`}</p>
                    <p>{event.community}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.events.map((event) => this.renderCard(event))}
            </div>
        );
    }
}