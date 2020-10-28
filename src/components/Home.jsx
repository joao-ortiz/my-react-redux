import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {
    function buildPostList() {
        const postList = props.posts.length ?
            (props.posts.map(post => {
            return (
                <div key={post.id} className="post card">
                    <Link to={"/" + post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                </div>
            )
        })) : (
            <div className="center">There is no posts yet</div>
        )
        return postList
    }
        return (
            <div className="container">
                {buildPostList()}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)