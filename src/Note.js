import React,{Component} from 'react';

export default class Note extends Component {
	onDeleteHandle(id) {
		this.props.deleteNote(id);
	}

    render() {
        return (
            <div className="note">
                {this.props.children}
            	<span className="delete-note" onClick={this.onDeleteHandle.bind(this, this.props.id)}>x</span>
            </div>
        );
    }
}