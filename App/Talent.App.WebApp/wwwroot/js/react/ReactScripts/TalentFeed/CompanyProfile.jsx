import React from 'react';
import { Loader } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
      
        }


    render() {


        return (


            <div class="ui card">
                <div style={{ margin: "15px" }} >
                    <img className="ui tiny circular centered image" src="http://semantic-ui.com/images/wireframe/square-image.png"

                        height="20px" width="20px" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <a class="header">MVP Studio</a>
                    <div class="meta">
                        <span class="date"> <i class="map pin icon"></i>Auckland, New Zealand</span>
                    </div>
                    <div class="description">
                        We currently do not have specific <br /> skills that we desire.
    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i class="phone icon"></i>
                        : 232323
  <br />

                        <i class="envelope icon"></i>
                        software Developer
                        </a>

                </div>
            </div>

        )

    }

}
