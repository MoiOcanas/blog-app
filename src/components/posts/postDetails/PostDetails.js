import React, { Component } from 'react';
import queryString from 'query-string';

//Styles
import { DetailsContainer } from './styles';

class PostDetails extends Component {
    state = {
        post: {}
    }

    /* Render method to post details */
    render() {
        /* The props are readed and changed using queryString */
        const params = queryString.parse(this.props.location.search);
        const { post } = this.state;
        if (post) {
            return (
                <DetailsContainer>
                    <h4>{params.title}</h4>
                    <p>{params.body}</p>
                </DetailsContainer>
            );
        } else {
            return (
                <p>Loading post...</p>
            );
        }
    }
}


export default PostDetails;
