import React from 'react';
import './event_card.css';

export class EventCard extends React.Component {

    renderCard(event) {
        return (
            <div className="eventCard" key={event.uuid}>
                <div className="center-croppedCard" style={{backgroundImage: "url(" + event.image_url + ")"}}></div>

                <div className="details-containerCard">
                    <div className="header">{event.name}</div>
                    <p className="small thin">{`${event.date_string} - ${event.time_string}`}</p>
                    <p className="small thin">{event.community}</p>
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