import React,{Component} from 'react';

export default class ColorElement extends Component {
    onPickColorHandle(e) {
        this.props.pickColor(this.props.color);
    }

    render() {
        return (
            <span className={"color " + this.props.color} onClick={this.onPickColorHandle.bind(this)}></span>
        );
    }
}
