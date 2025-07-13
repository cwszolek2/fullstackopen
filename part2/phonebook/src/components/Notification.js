import React from 'react'

const Notification = ({message, type}) => {
    /*const notificationStyle = {
        color: 'green',
        fontSize: '20'
    }*/

    if (message === null || message === undefined) {
        return null;
    }

    if(type === 'error') {
        return (
            <div className={type}>
                Information of {message} has already been removed from the server
            </div>
        )
    }
    else {
        return (
            //<div /*style={notificationStyle}*/ className={message.type}>
            <div className={type}>
                Added {message}
            </div>
        )
    }

}

export default Notification;