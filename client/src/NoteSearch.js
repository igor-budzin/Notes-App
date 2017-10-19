import React,{Component} from 'react';

export default class NoteSearch extends Component {
    onSearchHandle(e) {
        this.props.searchNote(e.target.value.toLowerCase());
    }

    render() {
        return (
            <input type="text" onChange={this.onSearchHandle.bind(this)} className="note-search" placeholder="Search notes ..." />
        );
    }
}
