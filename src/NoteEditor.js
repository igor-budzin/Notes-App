import React,{Component} from 'react';

export default class NoteEditor extends Component {
    onSubmitHandle(e) {
        e.preventDefault();
        this.props.addNote(e.target.noteField.value);
    }

    render() {
        return (
            <div className="note-editor">
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                    <textarea rows="5" name="noteField" className="textarea" placeholder="Enter yours text here ..."/>
                    <div>
                        <button type="submit" className="add-button">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}
