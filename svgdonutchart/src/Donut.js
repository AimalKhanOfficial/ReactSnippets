import React, { Component } from 'react';
import './Donut.css';

class Donut extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.matched);
    }



    render() {

        return (
            <svg width="20%" height="20%" viewBox="0 0 45 45" class="donut">
                <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <rect width="2.3" height="2.3" className="darkBlue" x="11" y="17.7" />
                <text x="14.5" y="19.7" className="darkBlue fontSizeForLabels">
                    {this.props.matched} Matched
                </text>
                <rect width="2.3" height="2.3" className="lightBlue" x="11" y="21.5" />
                <text x="14.5" y="23.5" className="lightBlue fontSizeForLabels" >
                    {this.props.unmatched} Unmatched
                </text>
                <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="rgb(0, 75, 143)" stroke-width="3"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="rgb(0, 44, 97)" stroke-width="3" stroke-dasharray={((parseInt(this.props.matched) * 100) / (parseInt(this.props.matched) + parseInt(this.props.unmatched))) + " " + ((parseInt(this.props.unmatched) * 100) / (parseInt(this.props.matched) + parseInt(this.props.unmatched)))} stroke-dashoffset="25"></circle>
            </svg>
        );
    }
}

export default Donut;
