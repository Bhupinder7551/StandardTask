///////////////////////////////////////////////////////////////
import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon, Card, Grid, Image, Embed, Label } from 'semantic-ui-react'
import Cookies from 'js-cookie'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: "",
            showEditSection: false
        }
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
    };

    componentDidMount() {
        this.loadData();
    }
    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/getTalent',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            success: function (res) {
                console.log(res.beta)
                this.updateWithoutSave(res.beta)
            }.bind(this)
        })
    }
    updateWithoutSave(newValues) {


        let newProfile = Object.assign({}, this.state.profileData, newValues)
        this.setState({
            profileData: newProfile
        })

    }
    openEdit() {

        this.setState({
            showEditSection: true,

        })
    }
    closeEdit() {
        this.setState({
            showEditSection: false,

        })

    }
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }
    renderEdit() {
        let skills = ["C#", ".Net Core", "Javascript", "ReactJS", "PreactJS"];
       // let string = this.state.profileData.currentEmployment

        return (

            <Card style={{height:"40%", width:"42%"}}>


                <Card.Content>
                    <Card.Header>{this.state.profileData.name}
                        <Icon name="star" size='large' className="ui right floated" />




                    </Card.Header>

                </Card.Content>

                <Card.Description>

                    <Grid columns={2}>

                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={true} rounded />
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Content>
                                <Card.Header>Talent Snapshot</Card.Header><br />
                                <Card.Header>CURRENT EMPLOYER</Card.Header>
                                <Card.Meta>{this.state.profileData.name}</Card.Meta>
                                <Card.Header>VISA STATUS</Card.Header>
                                <Card.Meta>{this.state.profileData.visa}</Card.Meta>
                                <Card.Header>POSITION</Card.Header>
                                <Card.Meta>{this.state.profileData.level}</Card.Meta>
                            </Card.Content>
                        </Grid.Column>
                    </Grid>
                </Card.Description>



                <Card.Content extra>
                    <Grid divided='vertically'>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Icon name="video icon" onClick={this.closeEdit} size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="file pdf outline" size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="linkedin" size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="github" size='large' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>




                </Card.Content>

                <Card.Content>
                    <Label basic color='blue'>{skills[0]}</Label>
                </Card.Content>
            </Card>)

    }
    renderDisplay() {

        let skills = ["C#", ".Net Core", "Javascript", "ReactJS", "PreactJS"];
        return (

            <Card style={{ height: "40%", width: "42%" }}>


                <Card.Content>
                    <Card.Header>{this.state.profileData.name}

                        <Icon name="star" size='large' className="ui right floated" />


                    </Card.Header>

                    <Card.Description>

                         <Embed id='9WpoZM_LiuA' source='youtube' />
                        

                    </Card.Description>

                </Card.Content>
                <Card.Content extra>
                    <Grid divided='vertically'>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Icon name="user" onClick={this.openEdit} size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="file pdf outline" size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="linkedin" size='large' />
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="github" size='large' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>




                </Card.Content>
                <Card.Content>
                    <Label basic color='blue'>{skills[0]}</Label>
                </Card.Content>

            </Card>

        )

    }
}
///////////////////////////////////////////////////////////////////////////////














//import React from 'react';
//import ReactPlayer from 'react-player';
//import PropTypes from 'prop-types'

//import ReactDOM from 'react-dom';
//import Cookies from 'js-cookie';
//import LoggedInBanner from '../Layout/Banner/LoggedInBanner.jsx';
//import { LoggedInNavigation } from '../Layout/LoggedInNavigation.jsx';
////import { JobSummaryCard } from './JobSummaryCard.jsx';
//import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

//import { Pagination, Header, Popup, Icon, Modal, Dropdown, Checkbox, Accordion, Form, Segment, Card, Label, Button } from 'semantic-ui-react';

//export default class TalentCard extends React.Component {


//    constructor(props) {
//        super(props);
//        let loader = loaderData

//        loader.allowedUsers.push("Talent");
//        loader.allowedUsers.push("Employer");
//        loader.allowedUsers.push("Recruiter");
//        //console.log(loader)
//        this.state = {
//            loadJobs: [],
//            loaderData: loader,

//            activePage: 1,
//            sortBy: {
//                date: "desc"
//            },
//            filter: {
//                showActive: true,
//                showClosed: false,
//                showDraft: true,
//                showExpired: true,
//                showUnexpired: true
//            },

//            totalPages: 1,
//            activeIndex: ""
//        }
//        this.loadData = this.loadData.bind(this);
//        this.init = this.init.bind(this);
//        //your functions go here
//    };

//    init() {
//        this.loadData(() =>
//            this.setState({ loaderData })
//        )
//        loaderData.isLoading = false;
//    }

//    componentDidMount() {
//        this.init();
//    };

//    loadData(callback) {
//        var link = 'http://localhost:51689/listing/listing/getSortedEmployerJobs';
//        var cookies = Cookies.get('talentAuthToken');
//        $.ajax({
//            data: {
//                activePage: this.state.activePage,
//                sortbyDate: this.state.sortBy.date,
//                showActive: this.state.filter.showActive,
//                showClosed: this.state.filter.showClosed,
//                showDraft: this.state.filter.showDraft,
//                showExpired: this.state.filter.showExpired,
//                showUnexpired: this.state.filter.showUnexpired
//            },
//            url: link,
//            type: "GET",
//            headers: {
//                'Authorization': 'Bearer ' + cookies,

//            },

//            success: function (data) {

//                this.state.loadJobs = data.myJobs

//                return callback();
//            }.bind(this),


//        });
//    }



//    render() {
//        let list = this.state.loadJobs;
  








//        return (

//            <div class="ui card">
//                <div class="content">
//                    <h4>Ru (Talent) Ng<i className="ui right floated star icon"></i> </h4>

//                </div>
//                <div class="ui card">
//                    <div reload={this.init} loaderData={this.state.loaderData}>
//                        {this.state.list != "" ?
//                            list.map(card =>
//                                <tr key={card.id}>

//                                    <div class="image"> <img src="http://semantic-ui.com/images/avatar/large/elliot.jpg" height="300px" width="280px" />

//                                    </div>

//                                    <div class="content">
//                                        <div style={{ margin: "20px" }} class="header">Talent snapshot</div>
//                                        <div class="description"><b>CURRENT EMPLOYER</b></div>
//                                        <div class="description">{card.title}</div>
//                                        <div class="description"><b>VISA STATUS</b></div>
//                                        <div class="description">{card.location.city}</div>
//                                        <div class="description"><b>POSITION</b></div>
//                                        <div class="description">{card.location.country}</div>

//                                    </div>
//                                </tr>
//                            )
//                            : ""
//                        }
//                    </div>
//                </div>

//                <div class="extra content">
//                    <a>
//                        <i aria-hidden="true" class="user icon"></i>
//                        <i aria-hidden="true" class="file pdf icon"></i>
//                        <i aria-hidden="true" class="linkedin icon"></i>
//                        <i aria-hidden="true" class="github icon"></i>
//                    </a>
//                </div>



//            </div >

//        )
//    }
//}










//import React from 'react';
//import ReactPlayer from 'react-player';
//import PropTypes from 'prop-types'
//import { Popup, Icon, } from 'semantic-ui-react'

//export default class TalentCard extends React.Component {
//    constructor(props) {
//        super(props);

//    };






//    render() {
//        return (

//            <div class="ui card">
//                <div class="content">
//                    <h4>Ru (Talent) Ng<i className="ui right floated star icon"></i> </h4>

//                </div>
//                <div class="ui card">
//                    <div style={{ width: "50%" }} class="image"><img src="http://semantic-ui.com/images/avatar/large/elliot.jpg" />

//                    </div>

//                    <div class="content">
//                        <div style={{ margin: "20px" }} class="header">Talent snapshot</div>
//                        <div class="description"><b>CURRENT EMPLOYER</b></div>
//                        <div class="description">ABC</div>
//                        <div class="description"><b>VISA STATUS</b></div>
//                        <div class="description">Citizen</div>
//                        <div class="description"><b>POSITION</b></div>
//                        <div class="description">Software Developer</div>

//                    </div>
//                </div>

//                <div class="extra content">
//                    <a>
//                        <i aria-hidden="true" class="user icon"></i>
//                        <i aria-hidden="true" class="file pdf icon"></i>
//                        <i aria-hidden="true" class="linkedin icon"></i>
//                        <i aria-hidden="true" class="github icon"></i>
//                    </a>
//                </div>
//            </div>
//        )
//    }
//}