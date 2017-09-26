import React,{Component} from 'react';

export default class Note extends Component {

    render() {
        return (
            <div className="note">
                {this.props.children}
            	<span className="delete-note">x</span>
            </div>
        );
    }
}
