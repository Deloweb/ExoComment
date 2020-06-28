import React, { Component } from 'react';

class CommentForm extends Component {
    state = {  
        name: "",
        message: ""
    }


    handleChangeName = (e) => {
        this.setState({
        name:  e.target.value
        })
    }

    handleChangeMessage = (e) => {
        this.setState({
        message:  e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.message);
    }


    render() { 
        return (
            <div className="Commentform ">

                <h2 className="title is-h2">Ajouter un commentaire</h2>
                <form onSubmit={this.handleSubmit} >

                <label className="label">Name</label>
                <input className="input" type="text" placeholder="Text input"
                onChange={this.handleChangeName} 
                value={this.state.name} />

                <label className="label">Message</label>
                <textarea className="textarea" placeholder="Textarea"
                onChange={this.handleChangeMessage}
                value={this.state.message}
                cols="30" rows="10"></textarea>

                <button className="button is-primary">Envoyer</button>
                </form>
            </div>
          );
          
    }
}
 
export default CommentForm;