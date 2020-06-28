import React, { Component } from "react";

class CommentList extends Component {
  state = {};

  render() {
    let commentsList = this.props.comments.map((comment) => {
      let isadmin = this.props.isadmin ? (
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p key={comment.id}>
                <strong>{comment.name}</strong> <br />
                {comment.message}
              </p>
            </div>
          </div>
          <button
            className="delete"
            onClick={() => this.props.handleDelete(comment.id)}
          >
            X
          </button>
        </article>
      ) : (
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p key={comment.id}>
                <strong>{comment.name}</strong> <br />
                {comment.message}
              </p>
            </div>
          </div>
        </article>
      );

      return <div>{isadmin}</div>;
    });

    let commentsCounter = this.props.comments.length;

    return (
      <div className="Commentlist">
        <h2 className="title is-h2">
          Liste des commentaires ({commentsCounter})
        </h2>

        <article className="media">
          <div className="media-content">
            <div className="content">{commentsList}</div>
          </div>
        </article>
      </div>
    );
  }
}

export default CommentList;
