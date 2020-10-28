import React from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

function Post(props) {
    function handleClick(e) {
        props.deletePost(props.post.id)
        props.history.push('/')
    }

        const post = props.post ? (
            <div className="post">
                <h4 className="center">{props.post.title}</h4>
                <p>{props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)