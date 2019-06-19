import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon, } from 'semantic-ui-react'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

    };






    render() {
        return (

            <div class="ui card">
                <div class="content">
                    <h4>Ru (Talent) Ng<i className="ui right floated star icon"></i> </h4>

                </div>
                <div class="ui card">
                    <div style={{ width: "50%" }} class="image"><img src="http://semantic-ui.com/images/avatar/large/elliot.jpg" />

                    </div>

                    <div class="content">
                        <div style={{ margin: "20px" }} class="header">Talent snapshot</div>
                        <div class="description"><b>CURRENT EMPLOYER</b></div>
                        <div class="description">ABC</div>
                        <div class="description"><b>VISA STATUS</b></div>
                        <div class="description">Citizen</div>
                        <div class="description"><b>POSITION</b></div>
                        <div class="description">Software Developer</div>

                    </div>
                </div>

                <div class="extra content">
                    <a>
                        <i aria-hidden="true" class="user icon"></i>
                        <i aria-hidden="true" class="file pdf icon"></i>
                        <i aria-hidden="true" class="linkedin icon"></i>
                        <i aria-hidden="true" class="github icon"></i>
                    </a>
                </div>
            </div>
        )
    }
}

