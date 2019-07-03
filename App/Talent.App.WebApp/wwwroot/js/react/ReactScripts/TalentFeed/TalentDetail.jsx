
import React from 'react';
import ReactDOM from 'react-dom';


export default class TalentDetail extends React.Component {
    constructor(props) {
        super(props);

        //console.log(loader)
        this.state = {
        }
        //your functions go here
    }


    render() {

        return (

                <div >
                <h2>List of Jobs</h2>
            </div>
        )

    }
}

//import React from 'react';
//import ReactDOM from 'react-dom';
//import Cookies from 'js-cookie';
//import LoggedInBanner from '../Layout/Banner/LoggedInBanner.jsx';
//import { LoggedInNavigation } from '../Layout/LoggedInNavigation.jsx';
////import { JobSummaryCard } from './JobSummaryCard.jsx';
//import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

//import { Pagination, Header, Modal, Icon, Dropdown, Checkbox, Accordion, Form, Segment, Card, Label, Button } from 'semantic-ui-react';

//export default class TalentDetail extends React.Component {
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
//        let datalist = null;



//        return (
//            <div reload={this.init} loaderData={this.state.loaderData}>
//                <div className="ui container">
//                    <h2>List of Jobs</h2>
//                    <div className="ui two cards">

//                        {this.state.list != "" ?
//                            list.map(card =>
//                                <Card key={card.id}>
//                                    <Card.Content>
//                                        <Card.Header>{card.title}</Card.Header>
//                                        <Card.Meta>
//                                            <span className='date'>{card.location.city}, {card.location.country}</span>
//                                        </Card.Meta>
//                                        <Card.Description>{card.summary}</Card.Description>
//                                    </Card.Content>
//                                </Card>
//                            )
//                            :
//                            ""

//                        }

//                    </div>
//                    <br />
//                </div>
//            </div >
//        )

//    }
//}





//import React from 'react';
//import ReactDOM from 'react-dom';
//import Cookies from 'js-cookie'
//import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx'
//import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
//import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
//import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';

//export default class TalentDetail extends React.Component {

//    constructor(props) {
//        super(props)
//        this.state
//    }

//    //componentDidMount() {
//    //    this.loadData()
//    //}

//    //loadData()  url: 'http://localhost:60290/profile/profile/getTalentProfile',

//    loadData(callback) {
//        var link = 'http://localhost:60290/profile/profile/getTalentProfile';
//        var cookies = Cookies.get('talentAuthToken');
//        $.ajax({
//            url: link,
//            headers: {
//                'Authorization': 'Bearer ' + cookies,
//                'Content-Type': 'application/json'
//            },
//            type: "GET",

//            data: {
//                activePage: this.state.activePage,
//                sortByDate: this.state.sortBy.date,
//                showActive: this.state.filter.showActive,
//                showClosed: this.state.filter.showClosed,
//                showDraft: this.state.filter.showDraft,
//                showExpired: this.state.filter.showExpired,
//                showUnexpired: this.state.filter.showUnexpired
//            },
//            contentType: "application/json",
//            dataType: "json",
//            success: function (res) {
//                console.log(res);
//                this.setState({ loadJobs: res.myJobs, totalPages: Math.ceil(res.totalCount / 6) }, callback);
//            }.bind(this),
//            error: function (res, a, b) {
//                //this.init();

//                console.log(res)
//                console.log(a)
//                console.log(b)

//            }.bind(this)
//        })
//    }
//    render() {

//        return (
//            <div>
//            </div >
//        )

//    }
//}