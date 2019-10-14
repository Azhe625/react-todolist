import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction,initListAction, getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        store.subscribe(this.handleStoreChange)
        console.log(store.getState())
    }
    render() {
        return <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemClick={this.handleItemClick}
                />
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
    //    const action = getTodoList()
        // axios.get('/list.json').then((res) => {
        //     const data = res.data
        //     const action = initListAction(data);
        //     store.dispatch(action)
        // })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        console.log(e.target.value)
    }

    handleStoreChange() {
        console.log('change')
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemClick(index) {
        const action = getDeleteItemAction()
        store.dispatch(action)
        console.log(index)
    }
}
export default TodoList