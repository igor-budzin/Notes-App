import React,{Component} from 'react';

export default class NoteEditor extends Component {

    render() {
        return (
            <div className="note-editor">
                <textarea rows="5" className="textarea" placeholder="Enter yours text here ..." />
                <div>
                    <button className="add-button">Add</button>
                </div>
            </div>
        );
    }
}
