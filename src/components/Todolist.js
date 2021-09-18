import React from 'react';
import Todo from './Todo';

export default class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef() ; 
        this.state = {
            userInput: '',
            list: [],
            important_list: [],

        } 

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleImportant = this.handleImportant.bind(this);
    }

    handleEdit(index, id) {
        let newValue = prompt("please enter the new value : ")
        let copy_task = this.state.list;
        copy_task[index]["text"] = newValue;
        this.setState({
            list: copy_task,
        })

    }
    handleImportant(index, p_text) {
        const important_element = this.state.list.filter((task) => task.id === index);
        if (!this.state.important_list.find(({ text }) => text === p_text)) {
            this.setState({
                important_list: [...this.state.important_list, important_element[0]],
            })
        }
    }
    deleteAll() {
        this.setState({
            list: [],
            important_list: [],
            userInput: '',

        })
    }
    handleDelete(index) {
        const newTask = this.state.list.filter((task) => task.id != index);
        const newTask2 = this.state.important_list.filter((task) => task.id != index);
        this.setState({
            list: newTask,
            important_list: newTask,
        })
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value,
        })

    }
    addTodo() {
        const random_id = Math.random(100) + 1;
        const newTask = { text: this.state.userInput, id: random_id.toFixed(2) }
        if (this.state.userInput === '')
            alert("please enter a task below..")
        else {
            this.setState({
                list: [...this.state.list, newTask],
                userInput: '',
            })
        }
    }
    componentDidMount() { 
        const node = this.myRef.current ;
        node.focus() ; 
    }
    render() {
        return (
            <div className='flex-con'>
                <div className='flex-middle'>
                    <div className='wrapper'>
                        <input placeholder = "Enter a task...." ref = {this.myRef} type="text" value={this.state.userInput} onChange={this.handleChange}></input>
                        <button className="blue" onClick={this.addTodo}>add task</button>
                        <button className="red" onClick={this.deleteAll}>delete all tasks!</button>
                    </div>
                    <div className='list'>
                        {this.state.list.map((l, i) => {
                            return (
                                <Todo index={i} id={l.id} key={l.id} task={l.text} onImportant={() => this.handleImportant(l.id, l.text)} onEdit={() => this.handleEdit(i, l.id)} onDelete={() => this.handleDelete(l.id)}></Todo>
                            )
                        })}
                    </div>
                </div>
                <div className='flex-bottom'>
                    <div className='header'> important task to do right now :</div>
                    <div className="im-list">
                        <ul>
                            {this.state.important_list.map(item => {
                                return (
                                    <li>{item.text}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

