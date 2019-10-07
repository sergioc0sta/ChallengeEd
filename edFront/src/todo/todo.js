import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, Form, FormGroup, Label, Input, Table, Col } from 'reactstrap';
import {createNewProject, getLisProfession, deleteProject, addTask, updateStateTaskProject} from './todoActions'
import PageHeader from '../template/pageHeader'
import IconButton from '../template/iconButton'




const TodoRow = (props) => {
    const list = props.list || []
    return (
        list.filter(todo =>{
            return todo.active === true 
        }).map(todo => (
        <tr key={todo._id}>
            <td className={todo.state ? '': 'markedAsdone' }>{todo.description}</td>
            <td style={{"textAlign": "right"}}>
                <IconButton  onClick={()=>props.updateStateTaskProject(props.idProject, list, todo._id, !todo.state, todo.active)} icon='eye' hiden={true}></IconButton>
                <IconButton  onClick={()=>props.updateStateTaskProject(props.idProject, list, todo._id, todo.state, !todo.active )} icon='trash-o' hiden={todo.state}></IconButton>
            </td>
        </tr>
    )))
}


class TableTodo extends Component {
    render(){
        return(
        <Table borderless>
            <thead>
                <tr>
                    <th>Decrição</th>
                    <th style={{"textAlign": "right"}}>Acções</th>
                </tr>
            </thead>
            <tbody>
                <TodoRow list={this.props.listTasks}  idProject={this.props.idProject} updateStateTaskProject={this.props.updateStateTaskProject}/>
            </tbody>
        </Table>
    )}   
    
}


class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = {newtask:''};
        this.descriptionTask = this.descriptionTask.bind(this)
        this.clearDescriptionTask = this.clearDescriptionTask.bind(this)
        this.newTaskForProject = this.newTaskForProject.bind(this)
        
    }

    descriptionTask(event) {
        this.setState({newtask: event.target.value});
      }


    clearDescriptionTask(){
        this.setState({newtask: ''});
    }

    newTaskForProject(objectList){
        this.props.addTask(objectList, this.state.newtask)
        this.clearDescriptionTask()
    }


    render(){
        const list = this.props.list || []
        return list.map(todo => (
            <div key={todo._id}>
                <Form>
                    <FormGroup row>
                            <Label for="exampleEmail" sm={6}>  Projecto {todo.nameList} : <Button outline color="danger" size="sm" onClick={
                                ()=> this.props.removeProject(todo._id)
                            }><i  className='fa fa-trash-o'></i></Button></Label>
                        <Col sm={5}>
                            <Input  type="text" name={todo._id}  onChange={this.descriptionTask}  placeholder="Adicionar nova tarefa" />
                        </Col>
                        <Col sm={1}>
                        <Button outline color="success" onClick={
                                ()=> this.newTaskForProject(todo)
                            }><i  className='fa fa-plus'></i></Button>
                        </Col>
                    </FormGroup>
                </Form>
                <TableTodo listTasks={todo.list} idProject={todo._id} updateStateTaskProject={this.props.updateStateTaskProject}/>
                <hr></hr>
            </div>
            
        ))
    } 
} 


class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {nameProject: '', newtask:''};
        this.descriptionProject = this.descriptionProject.bind(this);
        this.clearDescriptionProject = this.clearDescriptionProject.bind(this);
        this.newProject = this.newProject.bind(this);
    }

    descriptionProject(event) {
        this.setState({nameProject: event.target.value});
      }


    clearDescriptionProject(){
        this.setState({nameProject: ''});
    }

    newProject(){
        this.props.createNewProject(this.state.nameProject)
        this.clearDescriptionProject()
    }
    
    componentDidMount(){
        this.props.getLisProfession()
    }
    render(){
        return(
            <div>
                <div>  
                <PageHeader small='Nós'/>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Projecto :</Label>
                        <Input type="text" name="project" id="exampleEmail" value={this.state.nameProject} onChange={this.descriptionProject}/>
                    </FormGroup>
                    <Button onClick={() => this.newProject()}>Adicionar</Button>
                </Form>
                
                </div>
                <div>
                    < TodoList list = {this.props.list}  removeProject={this.props.deleteProject} addTask={this.props.addTask} updateStateTaskProject = {this.props.updateStateTaskProject}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({getLisProfession, createNewProject, deleteProject, addTask,updateStateTaskProject},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)


