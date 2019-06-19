/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';

import { Button, Icon } from 'semantic-ui-react'

import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        const detail = props.skillData
        this.state = {
            openAddNew: false,
            newDetail: detail,
            skill: "",
            level: "",
            showUpdate: false,
            updateId: "",
        }
        this.openAddNew = this.openAddNew.bind(this)
        this.closeAddNew = this.closeAddNew.bind(this)
        this.saveData = this.saveData.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.dropdown = this.dropdown.bind(this)
        this.showUpdate = this.showUpdate.bind(this)
        this.closeUpdate = this.closeUpdate.bind(this)
        this.saveUpdate = this.saveUpdate.bind(this)
        this.delete = this.delete.bind(this)
    };
    openAddNew() {
        this.setState({
            openAddNew: true
        })
    }
    closeAddNew() {
        this.setState({
            openAddNew: false
        })

    }
    handleChange(e) {
        this.setState({
            skill: e.target.value
        })
    }
    dropdown(e) {
        this.setState({
            level: e.target.value
        })
    }
    saveData() {

        let skill = this.state.skill
        let level = this.state.level
        this.props.skillData.push({ skill, level })
        const data = this.props.skillData
        this.props.updateProfileData(data)
        this.closeAddNew()
    }
    showUpdate(id, skillUpdate, levelUpdate) {
        this.setState({
            showUpdate: true,
            updateId: id,
            skill: skillUpdate,
            level: levelUpdate,
        })
    }
    closeUpdate() {
        this.setState({
            showUpdate: false
        })
    }
    delete(id) {
        let updatedetail = this.props.skillData
        const data = updatedetail.findIndex(x => x.id == id)
        updatedetail.splice(data, 1)

        //console.log("newdelete", arr)
        this.props.updateProfileData(updatedetail)
    }
    saveUpdate() {
        let updatedata = this.props.skillData
        const data = updatedata.findIndex(x => x.id == this.updateId)
        updatedata[data].skill = this.state.skill
        updatedata[data].level = this.state.level

        this.props.updateProfileData(updatedata)
        this.closeUpdate()
    }

    render() {
        let showEdit = "";
        let tableData = "";
        let list = this.props.skillData;

        if (this.state.openAddNew) {
            showEdit =
                <div className="ui sixteen wide column">
                    <div class="three fields">
                        <div class="field">
                            <ChildSingleInput
                                inputType="text"
                                placeholder="Skill"
                                name="skill"
                                controlFunc={this.handleChange}

                            />
                        </div>
                        <div class="field">
                            <select
                                className="ui dropdown"
                                name="level"
                                placeholder="skill Level"
                                onChange={this.dropdown}

                            >

                                <option value="0">skill Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        <div className="ui right floated">
                            <button type="button" onClick={this.saveData} className="ui black button">Add</button>

                            <button type="button" onClick={this.closeAddNew} className="ui black button" >Cancel</button>


                        </div>
                    </div>
                </div>

        } else {
            console.log("open add new not working")

        }
        if (list != "") {
            tableData = list.map(x =>
                <tr key={x.id}>


                    {this.state.showUpdate && x.id == this.updateId
                        ?



                        <React.Fragment>
                            <td>
                                <ChildSingleInput
                                    inputType="text"
                                    value={this.state.skill}
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
                                    onChange={this.dropdown}
                                >


                                    <option value="0">skill Level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>

                            </td>

                            <td>
                                <button type="button" onClick={this.saveUpdate} className="ui basic red button" >Update</button>
                                <button type="button" onClick={this.closeUpdate} className="ui basic blue button" >Cancel</button>

                            </td>

                        </React.Fragment>
                        :

                        <React.Fragment>

                            <td>{x.skill}</td>
                            <td>{x.level}</td>
                            <td className="four wide" textAlign="right">
                                <Icon onClick={this.showUpdate.bind(this, x.id, x.skill, x.level)} name="pencil" />
                                <Icon onClick={this.delete} name="cancel" />
                            </td>

                        </React.Fragment>
                    }
                </tr>

            )

        }


        return (
            <div className="ui sixteen wide column">
                {showEdit}
                <table class="ui striped table">
                    <thead class="">
                        <tr class="">
                            <th class="four wide">Name</th>
                            <th class="four wide">Status</th>
                            <th class="four wide"><button onClick={this.openAddNew} className="ui black right floated button" type="button"><i className="plus icon"></i>Add New</button></th>

                        </tr>
                    </thead>
                    <tbody class="">
                        {tableData}

                    </tbody>
                </table>
            </div>
        )

    }
}

