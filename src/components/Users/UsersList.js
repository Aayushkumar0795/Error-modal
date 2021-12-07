import React from 'react'
import classes from './UsersList.module.css'
import Card from '../UI/Card'

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul className={classes.ul}>
                {props.users.map(user => (
                    <li className={classes.li} key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;