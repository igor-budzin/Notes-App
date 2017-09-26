import React, {Component} from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import './assets/css/style.scss';

export default class NotesApp extends Component {

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <input type="text" className="note-search" placeholder="Search notes ..." />
                <NoteEditor />
                <NotesGrid />
            </div>
        )
    }
}
