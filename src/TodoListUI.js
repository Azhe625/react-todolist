import React from 'react'
import { Input, Button, List} from 'antd';

//无状态组件，是一个函数，不需要执行生命周期等 性能比较高
const TodoListUI = (props) => {
	return (
		<div style={{marginTop: '10px',marginLeft: '10px'}}>
			<div>
			<Input
					value={props.inputValue}
					placeholder='todo info'
					style={{width: 300, marginRight: '10px'}}
					onChange={props.handleInputChange}  
			/>
			<Button onClick={props.handleBtnClick} type="primary">提交</Button>
			</div>
			<List
					style={{marginTop: '10px', width: '300px'}}
					header={<div>Header</div>}
					footer={<div>Footer</div>}
					bordered
					dataSource={props.list}
					renderItem={(item, index) => (
						<List.Item onClick={() => {props.handleItemClick(index)}}>
						{item}
						</List.Item>
					)}
			/>
		</div>
)
}
// class TodoListUI extends Component {
// 	render() {
// 		return (
// 			<div style={{marginTop: '10px',marginLeft: '10px'}}>
// 				<div>
// 				<Input
// 						value={this.props.inputValue}
// 						placeholder='todo info'
// 						style={{width: 300, marginRight: '10px'}}
// 						onChange={this.props.handleInputChange}  
// 				/>
// 				<Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
// 				</div>
// 				<List
// 						style={{marginTop: '10px', width: '300px'}}
// 						header={<div>Header</div>}
// 						footer={<div>Footer</div>}
// 						bordered
// 						dataSource={this.props.list}
// 						renderItem={(item, index) => (
// 							<List.Item onClick={(index) => {this.props.handleItemClick(index)}}>
// 							{item}
// 							</List.Item>
// 						)}
// 				/>
// 			</div>
// 	)
// 	}
// }

export default TodoListUI