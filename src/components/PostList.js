import React from 'react';
import Pagination from "./Pagination";
import Post from "./Post";
import {changePageRequest, loadPostsRequest} from "../actions/actions";
import {connect} from "react-redux";

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    changePage = (page) => {
        console.log('changePage', page);
        this.props.changePageRequest(page)
    };

    const
    paginatePosts = (posts, currentPage=1) => {
        // const currentPage = 1;
        const postPerPage = 10;
        const lastIndex = currentPage * postPerPage;
        const firstIndex = lastIndex - postPerPage;
        const currentPosts = posts.slice(firstIndex, lastIndex);
        console.log("paginatePosts currentPosts", currentPosts);
        return currentPosts;
    };

    render() {
        const {posts, page} = this.props;
        return <div className="post-list">
            {posts &&
            <Pagination postsPerPage={10} totalPosts={posts.length} posts={posts} paginatePosts={this.paginatePosts}
                        changePage={this.changePage}/>}
            {posts && <p>You're on page {page || 1}</p>}
            <ul className="post-list">
                {posts && this.paginatePosts(posts, page).map((post) => {
                    console.log("post:", post);
                    return <Post key={post.id} id={post.id} userId={post.userId} title={post.title}/>
                })}
            </ul>

        </div>;
    }
}
const mapDispatchToProps = {
    changePageRequest,
};

export const mapStateToProps = (state, props) => {
    return {
        page: state.navReducer.page,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
