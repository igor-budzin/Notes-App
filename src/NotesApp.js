import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addNewNoteAction from './actions/addNewNoteAction';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import './assets/css/style.scss';


class NotesApp extends Component {
    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header" onClick={this.props.addNewNote}>NotesApp</h2>
                <input type="text" ref="inp" className="note-search" placeholder="Search notes ..." />
                <NoteEditor addNote={this.props.addNewNote} />
                {/* <NotesGrid /> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userReducer,
        notesData: state.notesReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewNote: bindActionCreators(addNewNoteAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
