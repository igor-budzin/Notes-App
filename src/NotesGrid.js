import React,{Component} from 'react';
import Note from './Note'

export default class NotesGrid extends Component {
    componentDidMount() {
        var elem = this.refs.grid;
        this.msnry = new Masonry(elem, {
            itemSelector: '.note',
            columnWidth: 220,
            gutter: 10
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map((note) => {
                        return <Note key={note.id} id={note.id} color={note.color} deleteNote={this.props.deleteNote}>{note.text}</Note>
                    })
                }
            </div>
        );
    }
}
