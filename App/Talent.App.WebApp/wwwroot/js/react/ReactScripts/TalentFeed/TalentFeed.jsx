import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import TalentCard from '../TalentFeed/TalentCard.jsx';
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx';
import { Loader } from 'semantic-ui-react';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';
import  TalentDetail  from '../TalentFeed/TalentDetail.jsx';

export default class TalentFeed extends React.Component {
    constructor(props) {
        super(props);

        let loader = loaderData
        loader.allowedUsers.push("Employer")
        loader.allowedUsers.push("Recruiter")

        this.state = {
            loadNumber: 5,
            loadPosition: 0,
            feedData: [],
            watchlist: [],
            loaderData: loader,
            loadingFeedData: false,
            companyDetails: null
        }

        this.init = this.init.bind(this);

    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this
    }

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
        this.init()
    };


    render() {

        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <div style={{ margin: "55px" }} className="ui container">



                    <div style={{ float: "left", margin: "25px" }}>
                        <CompanyProfile />
                    </div>
                    <div >
                        <TalentCardDetail />

                    </div>
                    <div style={{ float: "right" }}>
                        <FollowingSuggestion />
                    </div>
                    <TalentCard />
                <TalentDetail />
                </div>
            </BodyWrapper>
        )
    }
}