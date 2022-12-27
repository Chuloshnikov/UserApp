import React from 'react';
import styles from './Users.module.css';
import User from './User/User';




const UserContainer = (props) => {
    if (props.users.length > 0) {
    return (
        <div className={styles.users}>
            {props.users.map((element) => (
                <User onEdit={props.onEdit} onDelete={props.onDelete} user={element} key={element.id}/>
            ))}
        </div>
        );
            } else {
    return (
        <div className={styles.user}>
            <h3>There is no users</h3>
        </div>
    )
            }
}


export default UserContainer;