import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, addPostVisited } from '../../../store/actions/postsActions';

//Styles
import {
    PostItemCard,
    DeleteButton,
    PostVisitedItemCard,
    ActionButton,
    ButtonsContainer
} from './styles';

class PostItem extends Component {

    state = {
        visited: false
    }

    toggleChange = () => {
        this.setState({
            visited: true
        });
    }

    /* Render method to post item */
    render() {
        const { dispatchDeletePost, index } = this.props;
        const { visited } = this.state;

        if (visited) {
            return (
                <PostVisitedItemCard>
                    <h4>{this.props.post.title}</h4>
                    <div>{this.props.post.body}</div>
                    <hr />
                    <ButtonsContainer>
                        <DeleteButton onClick={(e) => { dispatchDeletePost(e, this.props.post.id) }}>
                            <i className="fa fa-times fa-lg" aria-hidden="true"></i>
                        </DeleteButton>
                        <Link to={`/post/${this.props.post.id}/?title=${this.props.post.title}&body=${this.props.post.body}`}>
                            <ActionButton>Details</ActionButton>
                        </Link>
                        <Link to={`/edit/${this.props.post.id}/?title=${this.props.post.title}&body=${this.props.post.body}`}>
                            <ActionButton>Edit post</ActionButton>
                        </Link>
                    </ButtonsContainer>
                </PostVisitedItemCard>
            )
        } else {
            return (
                <PostItemCard>
                    <h4>{this.props.post.title}</h4>
                    <div>{this.props.post.body}</div>
                    <hr />
                    <ButtonsContainer>
                        <DeleteButton onClick={(e) => { dispatchDeletePost(e, this.props.post.id) }}>
                            <i className="fa fa-times fa-lg" aria-hidden="true"></i>
                        </DeleteButton>
                        <Link to={`/post/${this.props.post.id}/?title=${this.props.post.title}&body=${this.props.post.body}`}>
                            <ActionButton>Details</ActionButton>
                        </Link>
                        <Link to={`/edit/${this.props.post.id}/?title=${this.props.post.title}&body=${this.props.post.body}`}>
                            <ActionButton>Edit post</ActionButton>
                        </Link>
                        <ActionButton
                            name="visited"
                            id="visited"
                            value={this.state.visited}
                            onClick={() => {
                                this.toggleChange();
                                this.props.visited(index);
                            }}
                        >Set as visited</ActionButton>
                    </ButtonsContainer>
                </PostItemCard>
            )
        }
    }
}

/* Conection with actions to delete a post and set it as visited */
const mapDispatchToProps = dispatch => {
    return {
        dispatchDeletePost: (e, postId) => {
            e.preventDefault();
            dispatch(deletePost(postId));
        },
        dispatchAddPostVisited: (e, index) => {
            e.preventDefault();
            dispatch(addPostVisited(index));
        },
    }
}

export default connect(null, mapDispatchToProps)(PostItem);
