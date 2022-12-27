import React from 'react';
import styles from '../../Users/Users.module.css';
import { AiFillRest } from 'react-icons/ai';
import { IoHammerSharp } from 'react-icons/io5';
import AddUserForm from '../../AddUserForm/AddUserForm';
import avatar from '../../../assets/images/avatar.svg';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
        }
    }
    render() {
        return (
            <div className={styles.user}>
                    <AiFillRest onClick={() => this.props.onDelete(this.props.user.id)} className={styles.deleteIcon}/>
                    < IoHammerSharp onClick={() => { this.setState({ editForm: !this.state.editForm })}} className={styles.editIcon}/>
                    <img src={this.props.user.avatar ? this.props.user.avatar : avatar} alt="avatar"></img>
                    <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                    <p>{this.props.user.bio}</p>
                    <p>{this.props.user.email}</p>
                    <b>{this.props.user.isOnline ? "Online :)" : " Offline :("}</b>
                    {this.state.editForm && < AddUserForm user={this.props.user} onAdd={this.props.onEdit}/>}
                </div>
            );
        }
}

export default User;