import React from 'react';
import {getHeaders} from './utils';
import Suggestion from './Suggestion'

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            suggestions: []
        }
        // initialization code here
        this.getSuggestionsFromServer()
    }

    getSuggestionsFromServer () {
        fetch('/api/suggestions', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                suggestions: data
            })
        })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <div id="suggestions">
                { 
                    this.state.suggestions.map(suggestion => {
                        return (
                            <Suggestion 
                                key={'suggestion_' + suggestion.id}
                                model={suggestion}/>
                                
                        )
                    })
                }
            </div>
        )
    }

}

export default Suggestions;