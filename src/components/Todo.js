import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="task-con">
                    task number {this.props.index} : {this.props.task} id : {this.props.id}</div>
                <div className="button-group">
                    <button className="red" onClick={this.props.onDelete}>delete task</button>
                    <button className="green" onClick={this.props.onEdit}>Edit</button>
                    <button className="yellow" onClick={this.props.onImportant}>add to important list</button>
                </div>
            </div>
        )
    }
}