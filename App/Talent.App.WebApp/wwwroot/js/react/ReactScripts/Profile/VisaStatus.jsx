import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)

        const details = props.visaStatus
        const expiryDetails = props.visaExpiryDate

        this.state = {
            newVisaStatus: details,
            newExpiryDate: expiryDetails
        }

        this.handleChange = this.handleChange.bind(this)
        this.saveVisaType = this.saveVisaType.bind(this)

          this.handleDateChange = this.handleDateChange.bind(this)
        this.saveExpiryDate = this.saveExpiryDate.bind(this)

    }



    handleChange(event) {
        const data = Object.assign({}, this.state.newVisaStatus)

        data[event.target.name] = event.target.value

        this.setState({
            newVisaStatus: data
        },
            this.saveVisaType
        )
    }
      handleDateChange(event) {
        const data = this.state.newExpiryDate

        this.setState({
            newExpiryDate: event.target.value
        })
    }

    saveVisaType() {
        const data = this.state.newVisaStatus
        //console.log("save visa status", data)
        this.props.saveProfileData(data)
    }



    saveExpiryDate() {
        const data = this.state.newExpiryDate
       // console.log("save visa date", data)
        this.props.saveProfileData(data)
    }



    render() {
       // const selectedVisa = this.props.visaStatus;


        return (
            <React.Fragment>
                <div className="row">
                    <div className="ui six wide column">
                        <div className="field">
                            <label>Visa type</label>

                            <select className="ui dropdown" value={this.props.visaStatus} onChange={this.handleChange} name="visaStatus">
                                <option value="0">Visa type</option>
                                <option value="Citizen">Citizen</option>
                                <option value="Permanent Resident">Permanent Resident</option>
                                <option value="Work Visa">Work Visa</option>
                                <option value="Student Visa">Student Visa</option>
                            </select>
                        </div>
                    </div>
                    {this.props.visaStatus == "Work Visa" || this.props.visaStatus == "Student Visa"
                        ?
                        <React.Fragment>
                            <div className="ui six wide column">
                                <div className="field">
                                    <label>Visa expiry date</label>
                                    <input type="date" name="expiryDate" value={this.state.newExpiryDate} onChange={this.handleDateChange}  placeholder="yyyy/mm/dd"></input>

                                </div>
                            </div>
                            <div className="ui four wide column">
                                <div className="field">
                                    <label >`</label>
                                    <button type="button" onClick={this.saveExpiryDate} className="ui right floated black button" >Save</button>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        </React.Fragment>
                    }
                </div>


            </React.Fragment>
        )
    }
}






























































