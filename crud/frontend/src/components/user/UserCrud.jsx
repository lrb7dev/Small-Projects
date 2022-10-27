import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration: Add, List, Edit and Delete.'
}

//backend url
const baseUrl = 'http://localhost:3001/users'
//initial state
const initialState = {
    user: {name: '', email: ''},
    list: []
}

//lifecycle
export default class UserCrud extends Component {

    //initializing the state
    state = {...initialState}

    //chamada no backend para obter a lista do que esta cadastrado
    //call in the backend to obteins a list with the datas 
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    //clear the form
    clear() {
        this.setState({ user: initialState.user })
    }

    //save the form
    save() {
        //referring
        const user = this.state.user
        //if has a id
        const method = user.id ? 'put' : 'post'
        //setted id or not (condition)
        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`
        //after the definitions, calls axios
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                //reseting to initialState and updating the list
                this.setState({user: initialState, list})
            })
    }

    //updated list
    getUpdatedList(user, add = true) {
        //removes the user of the list and adds in the first position
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        //list.unshift(user)
        return list
    }

    //update fields
    updateField(event) {
        //clones the user
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    //renders the form
    renderForm() {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="name..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="e-mail..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-success"
                        onClick={e => this.save(e)}>
                            Save
                        </button>
                        <button className="btn btn-secondary mx-1"
                        onClick={e => this.clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    //loads the current state
    load(user) {
        this.setState({user})
    }

    //excludes the register of the base
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            //updates list
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    //renders table
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/*calls the function that renders the rows*/}
                    {this.renderRows()}
                </tbody>
            </table>
        )

    }

    //render rows
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    //rendering...
    render() {
        //testing...
        //console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {/*calls form*/}
                {this.renderForm()}
                {/*calls table*/}
                {this.renderTable()}
            </Main>
        )
    }

}