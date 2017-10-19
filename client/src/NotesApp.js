import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addNewNoteAction from './actions/addNewNoteAction';
import deleteNoteAction from './actions/deleteNoteAction';
import searchNoteAction from './actions/searchNoteAction';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import NoteSearch from './NoteSearch';
import './assets/css/style.scss';
import './assets/img/accept.png';


class NotesApp extends Component {
    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteSearch searchNote={this.props.searchNote} />                
                <NoteEditor addNote={this.props.addNewNote} />
                <NotesGrid notes={this.props.notesData} deleteNote={this.props.deleteNote} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        notesData: state.notesReducer.filter((note) => {
            return note.text.toLowerCase().indexOf(state.searchReducer) !== -1;
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewNote: bindActionCreators(addNewNoteAction, dispatch),
        deleteNote: bindActionCreators(deleteNoteAction, dispatch),
        searchNote: bindActionCreators(searchNoteAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
