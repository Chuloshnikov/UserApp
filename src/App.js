import './App.css';
import Header from './components/Header/Header';
import UserContainer from './components/Users/UserContainer';
import AddUserForm from './components/AddUserForm/AddUserForm';
import React from 'react';
import axios from 'axios';


const baseUrl = 'https://reqres.in/api/users?page=2';

class App extends React.Component {
    constructor(props) {
    super(props)

    axios.get(baseUrl).then((response) => {
      this.setState({users: response.data.data});
    })

    this.state = { 
    users: [
    {
        id: 1,
        first_name: 'Edward',
        last_name: 'Carneby',
        email: 'EdwardC@gmail.com',
        avatar: '',
        isOnline: true,
    },
    {
        id: 2,
        first_Name: 'John',
        last_Name: 'Constantine',
        email: 'JC@gmail.com',
        avatar: '',
        isOnline: false,
    },
    {
        id: 3,
        first_Name: 'Alfred',
        last_Name: 'Freeman',
        email: 'FreAlf@gmail.com',
        avatar: '',
        isOnline: false,
    },
  ]
  }
  this.addUser = this.addUser.bind(this)
  this.deleteUser = this.deleteUser.bind(this)
  this.editUser = this.editUser.bind(this)
}

  render() {
    return (
      <div>
        <Header title="Users"/>
        <main>
          <UserContainer users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AddUserForm onAdd={this.addUser}/>
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({users: []}, () => {
      this.setState({ users: [...allUsers] })
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
}
}



export default App;
