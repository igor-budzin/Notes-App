import React, {Component} from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import './assets/css/style.scss';


class NotesApp extends Component {

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <input type="text" className="note-search" placeholder="Search notes or add new notes ..." />
                <NoteEditor />
                <NotesGrid />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(NotesApp);
