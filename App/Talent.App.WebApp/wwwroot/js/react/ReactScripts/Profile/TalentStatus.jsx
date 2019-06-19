import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);
        const details = props.status
        this.state = {
            newDetails: details,
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveData = this.saveData.bind(this)

    }
    handleChange(e) {
        const data = this.state.newDetails
        this.props.saveProfileData(data)
        data[e.target.name] = e.target.value
        this.setState({
            newDetails: details,
        })
    }
    saveData() {
        const data = this.state.newDetails
        this.props.saveProfileData(data)
    }

    render() {
        return (

            <React.Fragment>
                <form class="ui sixteen wide column form">
                    <div class="field"> <b>Current Status:</b></div>
                    <div class="field">
                        <div class="ui radio checkbox">

                            < label></ label>

                            <input
                                type="radio"

                                name="radioGroup"
                                //readonly=""
                                tabindex="0"
                                value="Actively looking for a job"
                            /><label>Actively looking for a job</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input
                                type="radio"

                                name="radioGroup"
                                //readonly=""
                                tabindex="0"
                                value="Not looking for a job at the moment"
                            />
                            <label>Not looking for a job at the moment</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">

                            < label></ label>

                            <input
                                type="radio"

                                name="radioGroup"
                                readonly=""
                                tabindex="0"
                                value="Currently employed but open to offers"
                            />
                            <label>Currently employed but open to offers</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">

                            < label></ label>

                            <input
                                type="radio"
                                name="radioGroup"
                                readonly=""
                                tabindex="0"
                                value="Will be available on later date"
                            />
                            <label>Will be available on later date</label>
                        </div>
                    </div>
                    <button type="button" onClick={this.saveData} className="ui right floated black button">Save</button>
                </form >
            </React.Fragment >
        )
    }
}
