import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, addPostVisited } from '../../../store/actions/postsActions';

//Components
import PostItem from '../postItem/PostItem';

//Styles
import { BlogListContainer } from './styles';

class PostsList extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    /* Method to call the addPostVisited from the actions */
    visited = (id) => {
        this.props.addPostVisited(id);
    }


    /* Render method to posts list */
    render() {
        const { posts } = this.props;
        return (
            <BlogListContainer>
                {
                    posts && posts.map((post, index) => (
                        <PostItem 
                            key={post.id} 
                            visited={this.visited} index={index} post={post} />
                    ))
                }
            </BlogListContainer>
        );
    }
}

/* Connection with posts props */
const mapStateToProps = state => {
    const { posts } = state.posts;
    return {
        posts
    }
}

export default connect(mapStateToProps, { getPosts, addPostVisited })(PostsList);

