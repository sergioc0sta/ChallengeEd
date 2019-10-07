import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import {changeDescription, getLisProfession} from './todoActions'
import PageHeader from '../template/pageHeader'



const TodoRow = (props) => {
    const list = props.list || []
    return list.map(todo => (
        <tr key={todo._id}>
                <th scope="row">{todo.description}</th>
                <td style={{"textAlign": "right"}}>Mark</td>
            </tr>
    ))
}




const TableTodo = (props) => {
    return(
        <Table borderless>
            <thead>
            <tr>
                <th>Decrição</th>
                <th style={{"textAlign": "right"}}>Acções</th>
            </tr>
            </thead>
            <tbody>

                <TodoRow list={props.listTasks} />

            </tbody>
        </Table>
    )
}






const TodoList = (props) => {
    const list = props.list || []
    return list.map(todo => (
        <div key={todo._id}>
            <p >Nome do projecto: {todo.nameList}</p>
            <TableTodo listTasks={todo.list}/>
            
        </div>
        
    ))
} 



class Todo extends Component {


    render(){
        const {description, changeDescription, getLisProfession} = this.props
        return(
            <div>
                <div>  
                <PageHeader small='Nós'/>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Projeto</Label>
                        <Input type="email" name="email" id="exampleEmail"/>
                    </FormGroup>
                    
                    <Button onClick={() => getLisProfession()}>Submit</Button>
                </Form>
                
                </div>
                <div>
                    <p>{this.props.list.length}</p>
                    < TodoList list = {this.props.list} />
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    description : state.todo.description,
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, getLisProfession},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)


