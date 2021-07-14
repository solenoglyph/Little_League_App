import React, { Component } from 'react';
import '../css_files/Contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="main">
                {this.props.name} - {this.props.title}<br></br>
                {this.props.email}<br></br>
                {this.props.phone}<br></br>
                
            </div>
        );
    }
}

export default Contact;