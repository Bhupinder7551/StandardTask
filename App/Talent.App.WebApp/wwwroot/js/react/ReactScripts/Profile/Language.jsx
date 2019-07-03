/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

import { Button, Icon } from 'semantic-ui-react'
import { lang } from 'moment';

export default class Language extends React.Component {
    constructor(props) {
        super(props);
        const details = props.languageData
        this.state = {
            newdetails: details,
            showEdit: false,
            language: "",
            level: "",
            updateId: "",
            showUpdate: false
        }
        this.showAddNew = this.showAddNew.bind(this)
        this.closeAddNew = this.closeAddNew.bind(this)
        this.saveData = this.saveData.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.dropdown = this.dropdown.bind(this)
        this.showUpdate = this.showUpdate.bind(this)
        this.closeUpdate = this.closeUpdate.bind(this)
        this.saveUpdate = this.saveUpdate.bind(this)
        this.delete = this.delete.bind(this)
    }
    saveUpdate() {
        let updatedata = this.state.newdetails
        const data = updatedata.findIndex(x => x.id == this.updateId)
        updatedata[data].language = this.state.language
        updatedata[data].level = this.state.level

        this.props.updateProfileData(updatedata)
        this.closeUpdate()
    }
    delete(id) {
        let updatedetail = this.state.newdetails
        const data = updatedetail.findIndex(x => x.id == id)
        updatedetail.splice(data, 1)

        //console.log("newdelete", arr)
        this.props.updateProfileData(updatedetail)
    }

    showAddNew() {
        this.setState({
            showEdit: true

        })
    }
    closeAddNew() {
        this.setState({
            showEdit: false
        })
    }
    handleChange(event) {
        this.setState({
            language: event.target.value
        })

    }

    dropdown(e) {
        this.setState({
            level: e.target.value
        })
    }
    saveData() {
        let language = this.state.language;
        let level = this.state.level;

        this.state.newdetails.push({ language, level })
        const data = this.state.newdetails

        //console.log("save", data)

        this.props.updateProfileData(data)
        this.closeAddNew()
    }
    showUpdate(id, languageUpdate, levelUpdate) {
        const data = this.props.languageData;
        this.setState({
            showUpdate: true,
            newDetails: data,
            updateId: id,
            language: languageUpdate,
            level: levelUpdate
        })
    }
    closeUpdate() {
        this.setState({
            showUpdate: false
        })
    }
    render() {
        let list = this.state.newdetails;
        let dataList = "";
        let tableAddNew = "";

        if (this.state.showEdit) {
            tableAddNew =
                <div className='ui sixteen wide column'>
                    <div class="three fields">
                        <div class="field">
                            <ChildSingleInput
                                inputType="text"
                                placeholder="Language"
                                name="language"
                                controlFunc={this.handleChange}

                            />
                        </div>
                        <div class="field">
                            <select
                                className="ui dropdown"
                                name="level"
                                placeholder="Language Level"
                                onChange={this.dropdown}

                            >

                                <option value="0">Language Level</option>
                                <option value="Basic">Basic</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Native/Bilingual">Native/Bilingual</option>
                            </select>
                        </div>

                        <div className="ui right floated">
                            <button type="button" onClick={this.saveData} className="ui black button">Add</button>

                            <button type="button" onClick={this.closeAddNew} className="ui black button" >Cancel</button>


                        </div>

                    </div>
                </div>


        }
        if (list != "") {
            dataList = list.map(x =>
                <tr key={x.id}>

                    {this.state.showUpdate && x.id == this.updateId
                        ?
                        <React.Fragment>
                            <td>
                                <ChildSingleInput
                                    inputType="text"
                                    value={this.state.language}
                                    controlFunc={this.handleChange}
                                    placeholder="update Language"
                                />
                            </td>
                            <td>
                                <select
                                    className="ui dropdown"
                                    name="level"
                                    value={this.state.level}
                                    placeholder="Language Level"
                                    onChange={this.dropdown}                                >

                                    <option value="0">Language Level</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Conversational">Conversational</option>
                                    <option value="Fluent">Fluent</option>
                                    <option value="Native/Bilingual">Native/Bilingual</option>
                                </select>


                            </td>

                            <td>
                                <button type="button" className="ui basic red button" onClick={this.saveUpdate}>Update</button>
                                <button type="button" className="ui basic blue button" onClick={this.closeUpdate}>Cancel</button>

                            </td>

                        </React.Fragment>


                        :


                        <React.Fragment>
                            <td className="four wide">{x.language}</td>
                            <td className="four wide">{x.level}</td>

                            <td className="four wide" textAlign="right">
                                <Icon onClick={this.showUpdate.bind(this, x.id, x.language, x.level)} name="pencil" />
                                <Icon onClick={this.delete.bind(this, x.id)} name="cancel" />
                            </td>
                        </React.Fragment>
                    }
                </tr>
            )
        }


        return (

            <div className="ui sixteen wide column ">
                {tableAddNew}
                <table class="ui striped table">
                    <thead class="">
                        <tr class="">
                            <th class="four wide">Language</th>
                            <th class="four wide">Level</th>
                            <th class="four wide"><button type="button" onClick={this.showAddNew} className="ui right floated black button"><i className="ui plus icon"></i>Add New</button></th>
                        </tr>
                    </thead>
                    <tbody class="">
                        {dataList}
                    </tbody>
                </table>
            </div>
        )


    }
}