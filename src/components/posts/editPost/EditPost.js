import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { updatePost } from '../../../store/actions/postsActions';
import queryString from 'query-string';

//Styles
import { 
    EditContainer, 
    FormField,
    EditInput,
    EditButton,
    ButtonContainer,
    EditText
} from './styles';

class EditPost extends Component {
    state = {
        id: '',
        title: '',
        body: '',
        userId: '',
        error: false
    }

    /* The props are readed and changed using queryString, finally the we set the state with the props */
    componentDidMount = () => {
        const params = queryString.parse(this.props.location.search);
        console.log(params); 
        this.setState({ 
            title: params.title,
            body: params.body
         });
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    /* Method to define the post update and then send it to the actions */
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body, userId } = this.state;
        let id = this.props.match.params.id;

        if(title === '' || body === ''){
            this.setState({ error: true });
            return;
        }

        this.setState({ error:false });

        let newPost = {
            id,
            title,
            body,
            userId
        }

        this.props.updatePost(id, newPost);
        this.props.history.push('/');
    }

    /* Render method to edit post */
    render() {
        const { title, body } = this.state;
        return (
            <EditContainer>
                <h4>Edit</h4>
                <form onSubmit={this.handleSubmit}>
                    <FormField>
                        <EditInput type="text" value={title} name="title" id="title" onChange={this.handleChange} />    
                    </FormField>
                    <FormField>
                        <EditText rows="4" cols="50" type="text" value={body} name="body" id="body" onChange={this.handleChange} />
                    </FormField>
                    <ButtonContainer>
                        <EditButton>submit</EditButton>
                    </ButtonContainer>
                </form>
            </EditContainer>
        );
    }
}

/* Connection with posts props */
const mapStateToProps = state => ({
    post: state.posts
})

export default connect(mapStateToProps, { updatePost })(EditPost);