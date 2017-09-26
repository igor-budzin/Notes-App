import React,{Component} from 'react';
import Note from './Note'

export default class NotesGrid extends Component {

    render() {
        return (
            <div className="notes-grid" ref="grid">
                <Note>Second task</Note>
                <Note>jhgjhgj</Note>
                <Note>jhgjhgj</Note>
                <Note>jhgjhgj</Note>
                <Note>jhgjhgj</Note>
                <Note>jhgjhgj</Note>
                <Note>jhgjhgj</Note>
            </div>
        );
    }
}
