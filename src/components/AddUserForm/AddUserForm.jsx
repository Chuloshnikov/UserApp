import React from 'react';
import styles from './AddUserForm.module.css';



class AddUserForm extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "", 
            avatar: "",
            email: "",
            isOnline: false,
        }
    }

    render() {
    return (
        <form className={styles.form} ref={(el) => this.myForm = el}>
            <input className={styles.formInput} placeholder='first-name' onChange={(e) => this.setState({ first_name: e.target.value })}/>
            <input className={styles.formInput} placeholder='last-name' onChange={(e) => this.setState({ last_name: e.target.value })}/>
            <input className={styles.formInput} placeholder='email' onChange={(e) => this.setState({ email: e.target.value })}/>
            <textarea className={styles.formInput} placeholder='bio' onChange={(e) => this.setState({ bio: e.target.value })}/>
            <span className={styles.formCheckbox}>
            <label className={styles.formInput} htmlFor="isOnline">Online?</label>
            <input className={styles.formInput} type="checkbox" id="isOnline" onChange={(e) => this.setState({ isOnline: e.target.checked })}/>
            </span>
            <button className={styles.formButton} type="button" onClick={() => {
                this.myForm.reset()
                this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    isOnline: this.state.isOnline,
                }
                if (this.props.user)
                    this.userAdd.id = this.props.user.id
                this.props.onAdd(this.userAdd)
                    }
                }>Add</button>
        </form>
        )
    }
}


export default AddUserForm;