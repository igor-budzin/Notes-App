import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pickColorAction from './actions/pickColorAction';
import ColorElement from './ColorElement';

class NoteEditor extends Component {
    componentDidUpdate() {
        for(let i = 0; i < document.getElementsByClassName('color').length; i++) {
            if(document.getElementsByClassName('color')[i].classList.contains(this.props.pickedColor)) {
                document.getElementsByClassName('color')[i].classList.add('active');
            }
            else {
                document.getElementsByClassName('color')[i].classList.remove('active');   
            }
        }
    }

    onSubmitHandle(e) {
        e.preventDefault();
        if(e.target.noteField.value.length !== 0) {
            this.props.addNote(e.target.noteField.value, this.props.pickedColor);
            e.target.noteField.value = '';
        }
    }

    render() {
        let pickColor = this.props.pickColor;
        return (
            <div className="note-editor">
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                    <textarea rows="5" name="noteField" className="textarea" placeholder="Enter yours text here ..."/>
                    <div>
                        <div className="color-picker">
                            {
                                this.props.colorData.map((color, i) => {
                                    return <ColorElement key={i} color={color} pickColor={pickColor} />
                                })
                            }
                        </div>
                        <button type="submit" className="add-button">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        colorData: state.colorsReducer.colors,
        pickedColor: state.colorsReducer.pickedColor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pickColor: bindActionCreators(pickColorAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);