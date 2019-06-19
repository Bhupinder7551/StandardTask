



import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';



export class Address extends React.Component {
    constructor(props) {
        super(props)
        const details = props.addressData

        this.state = {
            showEdit: false,
            newContact: details

        }
        this.showEdit = this.showEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveContact = this.saveContact.bind(this);

        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    showEdit() {
        const details = this.props.addressData
        this.setState({
            showEdit: true,
            newContact: details
        })
    }
    closeEdit() {
        this.setState({ showEdit: false })
    }
    handleChange(e) {
        const data = this.state.newContact

        data[e.target.name] = e.target.value
        this.setState({
            newContact: data
        })

    }

    saveContact() {
        const data = this.state.newContact
        this.props.updateProfileData(data)
        this.closeEdit()


    }


    render() {
        return (
            this.state.showEdit ? this.renderEdit() : this.renderDisplay()
        )
    }


    renderEdit() {


        let countriesOptions = [];
        const selectedCountry = this.props.addressData.country;
        const selectedCity = this.props.addressData.city;


        countriesOptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);

        if (selectedCountry != "" && selectedCountry != null) {

            var city = Array.from(new Set(Countries[selectedCountry]));
            var popCities = city.map(x => <option key={x} value={x}> {x}</option>);

        }


        return (

            <div className='ui sixteen wide column'>


                <div class="three fields">
                    <div class="field">

                        <ChildSingleInput
                            inputType="text"
                            label="Number"
                            name="number"
                            value={this.state.newContact.number}
                            controlFunc={this.handleChange}
                            maxLength={30}
                            placeholder="Enter your street number"
                            errorMessage="Please enter a valid street number"
                        />
                    </div>
                    <div class="field">
                        <ChildSingleInput
                            inputType="text"
                            label="Street"
                            name="street"
                            value={this.state.newContact.street}
                            controlFunc={this.handleChange}
                            maxLength={30}
                            placeholder="Enter your street Name"
                            errorMessage="Please enter a valid street name"
                        />

                    </div>
                    <div class="field">
                        <ChildSingleInput
                            inputType="text"
                            label="Suburb"
                            name="suburb"
                            value={this.state.newContact.suburb}
                            controlFunc={this.handleChange}
                            maxLength={30}
                            placeholder="Enter your suburb Name"
                            errorMessage="Please enter a valid suburb name"
                        />
                    </div>


                </div>








                <div class="two fields">

                    <div class="field">
                        <label>Country</label>
                        <select
                            className="ui dropdown"
                            placeholder="Country"
                            value={selectedCountry}
                            onChange={this.handleChange}
                            name="country">
                            <option value="0"> Select a country</option>
                            {countriesOptions}
                        </select>  </div>

                    <div class="field">
                        <label>City</label>
                        <select
                            className="ui dropdown"
                            placeholder="City"
                            value={selectedCity}
                            onChange={this.handleChange}
                            name="city">
                            <option value="0"> Select a town or city</option>
                            {popCities}
                        </select>
                    </div>


                    <div class="field">
                        <ChildSingleInput
                            inputType="text"
                            label="Post Code"
                            name="postCode"
                            value={this.state.newContact.postCode}
                            controlFunc={this.handleChange}
                            maxLength={30}
                            placeholder="Enter your post code"
                            errorMessage="Please enter a valid post code"
                        />
                    </div>
                </div>

                <button type="button" class="ui black button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>



            </div>

        )
    }

    renderDisplay() {

        let address = this.props.addressData ? `${this.props.addressData.number}, ${this.props.addressData.street}, ${this.props.addressData.suburb}, ${this.props.addressData.postCode}` : ""
        let city = this.props.addressData ? this.props.addressData.city : ""
        let country = this.props.addressData ? this.props.addressData.country : ""


        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>Country: {country}</p>

                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.showEdit} >Edit</button>
                </div>
            </div>

        )
    }
}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)

        const details = props.nationalityData
        this.state = {
            newdetails: details,
            country: '',
        }
        this.handleChange = this.handleChange.bind(this)
 
    }
    handleChange(event) {
        const data = this.state.newdetails
        this.props.saveProfileData(data)
        data[event.target.name] = event.target.value

        this.setState({
            newdetails: data
        })
      

    }


    render() {
        let nationalityOption = [];


        const selectedNationality = this.props.nationalityData

        nationalityOption = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
        return (
            <div className='ui sixteen wide column'>
                <div class="two fields">
                    <div class="field">
                        <select
                            className="ui dropdown"
                            onChange={this.handleChange}
                            value={selectedNationality}
                            name="country"
                        >
                            <option value="0"> Select your Nationality</option>
                            {nationalityOption}
                        </select>
                    </div>

                </div>
            </div>
        )


    }
}

//export class Nationality extends React.Component {
//    constructor(props) {
//        super(props)

//        const details = props.nationalityData
//        this.state = {
//            newdetails: details,
//        }
//        this.handleChange = this.handleChange.bind(this)
//    }
//    handleChange(event) {
//        const data = this.state.newdetails
//        data[event.target.name] = event.target.value
//        this.setState({
//            newdetails: data
//        })

//    }

//    render() {
//        let nationalityOption = [];


//        const selectedNationality = this.props.nationalityData.country;

//        nationalityOption = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
//        return (
//            <div className='ui sixteen wide column'>
//                <div class="three fields">
//                    <div class="field">
//                        <select
//                            className="ui dropdown"

//                            value={selectedNationality}
//                            onChange={this.handleChange}
//                        >
//                            <option value="0"> Select your Nationality</option>
//                            {nationalityOption}
//                        </select>

//                    </div>
//                </div>
//            </div>
//        )


//    }
//}