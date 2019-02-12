import React, { Component } from "react";
import Post from "../components/Post";
import NewPostForm from "../components/NewPostForm";
import { withRouter } from "react-router-dom";
import PostsContainer from "../containers/PostsContainer";

class NewsContainer extends Component {
  state = {
    user_id: this.props.user_id
  };

  showPostArray = () => {
    let posts = this.props.posts
      .filter(post => {
        return (
          post.player_id !== this.props.currentUser.id &&
          post.friend_id !== this.props.currentUser.id
        );
      })
      .reverse();

    return (
      <div className="posts-container">
        {posts.map(post => {
          return (
            <div key={post.id} className="content-wrapper">
              <Post
                post={post}
                addComment={this.props.addComment}
                currentUser={this.props.currentUser}
                deleteHandler={this.props.deleteHandler}
                editPostHandler={this.props.editPostHandler}
                isUserLoggedIn={this.props.isUserLoggedIn}
                users={this.props.users}
                comments={this.props.comments}
                hideEditCoverAndProfilePic={
                  this.props.hideEditCoverAndProfilePic
                }
              />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const show = { display: this.props.isUserLoggedIn ? "block" : "none" };
    return (
      <div className="ui">
        <div className="post-container">{this.showPostArray()}</div>
      </div>
    );
  }
}

export default withRouter(NewsContainer);