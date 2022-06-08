import React from 'react';
import {getHeaders} from './utils';
import FollowButton from './FollowButton';
class Suggestion extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestion: props.model
        }
        this.refreshSuggestionDataFromServer = this.refreshSuggestionDataFromServer.bind(this);
    }



    componentDidMount() {
        // fetch posts and then set the state...
    }

    refreshSuggestionDataFromServer () {
        const url = '/api/suggestions/';
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                suggestion: data
            })
        })
    }

    render () {
        const suggestion = this.state.suggestion;
        return (
            <section>
                <img src={suggestion.thumb_url}/>
                
                <p>{suggestion.username}</p>

                <FollowButton 
                    suggestedId={suggestion.id}
                    refreshSuggestion={this.refreshSuggestionDataFromServer} />

            </section>
        )
    }

}

export default Suggestion;


{/* <div class="accounts">
        <section>
            <img src="${user.thumb_url}"" />
    
            <div> 
                <p>${user.username}</p>
                <p1> suggested for you </p1>
            </div>
            
            <div>
                <button 
                    class="follow"
                    aria-label="Follow"
                    aria-checked="false" 
                    data-user-id="${user.id}" 
                    onclick="toggleFollow(event);">follow</button>
            </div>
          
        </section>
    
    </div> */}