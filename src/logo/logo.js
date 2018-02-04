import React from 'react';
import './logo.css';


export class Logo extends React.Component {

    render() {
        return (
            <div className="logo">
                <img src="https://images.contentful.com/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/b1984b100e0b5540f2819c80986d0505/wework-logo_BLACK.jpg"/>
                <div className="divider"></div>
                <div className="text">Do What You Love</div>
            </div>
        );
    }
}