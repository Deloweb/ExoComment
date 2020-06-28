import React, { Component } from "react";
import "./App.scss";
import CommentList from "./CommentList";

import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    comments: [    ],
    isAdmin: false
  };

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  handleDelete = (id) => {
    this.setState({
      comments: [...this.state.comments].filter((comment) => comment.id !== id),
    });
  };

  changeMode = () => { 
    this.setState({ 
        isAdmin: !this.state.isAdmin
    })
 }

  render() {
    let button = this.state.isAdmin ? 
    <button className="button is-danger" onClick={this.changeMode}>Désactiver le mode d'administration</button>
    : <button className="button is-info" onClick={this.changeMode}>Activer le mode d'administration</button>;

    let classMessage = this.state.isAdmin ? "message is-danger" : "message is-info";
   
    return (
      <div className="App container">
        <article className={classMessage}>
            <div className="message-body">
                {button}
            </div>
        </article>

        <div className="columns">
          <div className="column">
            <CommentForm addComment={this.addComment} />
          </div>

          <div className="column">
            <CommentList
              comments={this.state.comments}
              handleDelete={this.handleDelete}
              isadmin={this.state.isAdmin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
