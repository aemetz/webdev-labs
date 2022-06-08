import React from 'react';
import {getHeaders} from './utils';

class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);
        // binding "this"
        this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleFollow () {
        if(this.props.suggestedId) {
            this.unfollowUser();
        } else {
            this.followUser();
        }
    }

    followUser () {
        // fetch POST: /api/posts/likes
        const url = '/api/following/';
        const userData = {
            user_id: this.props.suggestedId
        }
        console.log('create follow', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(data => {
            // needs to trigger a post redraw:
            console.log(data);
            this.props.refreshSuggestion();
        })
    }

    unfollowUser () {
        const url = '/api/following' + this.props.suggestedId;
        console.log('remove follow', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            // needs to trigger a post redraw:
            console.log(data);
            this.props.refreshSuggestion();
        })
    }

    render () {
        const userId = this.props.suggestedId;
        const heartClass = (userId ? 'fas' : 'far') + ' fa-heart';
        return (
            <button 
                onClick={this.toggleFollow}
                aria-label="Follow">
                <i className={heartClass}></i>
            </button>
        )
    }
}
                

export default FollowButton;

