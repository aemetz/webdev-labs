import React from 'react';
import {getHeaders} from './utils';
class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        
    }
    
    

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        
        return (
            <header>
                <img src={this.props.user_profile.image_url}/>
                { this.props.user_profile.username }
                {/* Navigation Links */}
            </header>
        )
    }

}

export default Profile;