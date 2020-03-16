import React, { Component } from 'react';
import { createPost } from '../../../store/actions/postsActions';
import { connect } from 'react-redux';

//Styles
import {
    CreateContainer,
    FormField,
    CreateInput,
    CreateButton,
    ButtonContainer,
    CreateText
} from './styles';

class CreatePost extends Component {
    state = {
        title: '',
        body: '',
        visited: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <CreateContainer>
                <h4>Create post</h4>
                <form onSubmit={this.handleSubmit}>
                    <FormField>
                        <CreateInput type="text" name="title" id="title" placeholder="Title..." onChange={this.handleChange} />
                    </FormField>
                    <FormField>
                        <CreateText rows="4" cols="50" type="text" name="body" id="body" placeholder="Body..." onChange={this.handleChange} />
                    </FormField>
                    <ButtonContainer>
                        <CreateButton>submit</CreateButton>
                    </ButtonContainer>
                </form>
            </CreateContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
