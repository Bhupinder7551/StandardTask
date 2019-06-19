/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const details = props.linkedAccounts
        this.state = {
            newDetails: details,
            showEditSection: false,

        }
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    openEdit() {
        const linkedAccounts = this.props.linkedAccounts
        this.setState({
            showEditSection: true,
            newDetails: linkedAccounts

        })
    }
    closeEdit() {
        this.setState({
            showEditSection: false,
        })
    }
    handleChange() {
        const data = this.state.newDetails
        data[event.target.name] = event.target.value
        this.setState({
            newDetails: data
        })
    }
    //save() {
    //    const linkedAccounts = this.props.linkedAccounts
    //    this.props.saveProfileData(linkedAccounts)
    //     console.log("data Save", data)
    //    this.closeEdit();
    save() {
        const data = this.state.newLinkedAccounts
        this.props.saveProfileData(data)
        this.closeEdit();

    }
    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()

        )
    }
    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="linked"
                    controlFunc={this.handleChange}
                    value={this.state.newDetails.linked}
                    placeholder="Enter your Linked URL"
                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="github"
                    value={this.state.newDetails.github}
                    controlFunc={this.handleChange}
                    placeholder="Enter your GitHub URL"
                />


                <button type="button" className="ui black button" onClick={this.save}>Save</button>
                <button type="button" className="ui black button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className='ui sixteen wide column'>
                <button class="ui linked blue button"><Icon name="linkedin" /> LinkedIn</button>
                <button class="ui github  black button"> <Icon name="github" /> GitHub</button >

                <button type="button" onClick={this.openEdit} className="ui right floated black button"> <i aria-hidden="true" class="edit icon"></i> Edit</button >

            </div>
        )

    }

}

//import React from 'react';
//import { ChildSingleInput } from '../Form/SingleInput.jsx';
//import { Popup, Icon } from 'semantic-ui-react';

//export default class SocialMediaLinkedAccount extends React.Component {
//    constructor(props) {
//        super(props);

//        const linkedAccounts = props.linkedAccounts

//        this.state = {
//            showEditSection: false,
//            newLinkedAccounts: linkedAccounts
//        }

//        this.openEdit = this.openEdit.bind(this)
//        this.closeEdit = this.closeEdit.bind(this)
//        this.handleChange = this.handleChange.bind(this)
//        this.saveDetails = this.saveDetails.bind(this)
//    }

//    openEdit() {
//        this.setState({
//            showEditSection: true,
//        })
//    }

//    closeEdit() {
//        this.setState({
//            showEditSection: false
//        })
//    }

//    handleChange(event) {
//        const data = this.state.newLinkedAccounts
//        data[event.target.name] = event.target.value
//        this.setState({
//            newLinkedAccounts: data
//        })
//    }

//    saveDetails() {
//        const data = this.state.newLinkedAccounts
//        this.props.saveProfileData(data)
//        this.closeEdit()
//    }

//    componentDidMount() {
//        $('.ui.button.social-media')
//            .popup();
//    }



//    render() {
//        return (
//            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
//        )
//    }

//    renderEdit() {
//        return (
//            <div className='ui sixteen wide column'>

//                <ChildSingleInput
//                    inputType="text"
//                    label="LinkedIn"
//                    name="linkedIn"
//                    controlFunc={this.handleChange}
//                    placeholder="Enter your LinkedIn URL"
//                />

//                <ChildSingleInput
//                    inputType="text"
//                    label="GitHub"
//                    name="github"
//                    controlFunc={this.handleChange}
//                    placeholder="Enter your GitHub URL"
//                />

//                <button type="button" className="ui teal button" onClick={this.saveDetails}>Save</button>
//                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
//            </div>
//        )
//    }

//    renderDisplay() {
//        return (
//            <div className='row'>
//                <div className="ui four wide column">
//                    <button type="button" className="ui fluid blue button"><Icon name="linkedin" />LinkedIn</button>
//                </div>
//                <div className="ui four wide column">
//                    <button type="button" className="ui fluid black button"><Icon name="github" />GitHub</button>
//                </div>
//                <div className="ui eight wide column">
//                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
//                </div>
//            </div>
//        )
//    }
//}

