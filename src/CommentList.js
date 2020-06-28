import React, { Component } from "react";

class CommentList extends Component {
  state = {};

  render() {
    return (
      <div className="Commentlist">
        <h2 className="title is-h2">
          Liste des commentaires ({this.props.comments.length})
        </h2>

        {this.props.comments.map((comment) => (
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p key={comment.id}>
                  <strong>{comment.name}</strong> <br />
                  {comment.message}
                </p>
              </div>
            </div>
            {this.props.isadmin && (
              <button
                className="delete"
                onClick={() => this.props.handleDelete(comment.id)}
              >
                X
              </button>
            )}
          </article>
        ))}
      </div>
    );
  }
}

export default CommentList;
