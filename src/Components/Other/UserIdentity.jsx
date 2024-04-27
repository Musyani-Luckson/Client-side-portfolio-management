import React from 'react'

function UserIdentity(props) {
    const { data: { username, } } = props;
    return (
        <div className='UserIdentity rounded p-1'>
            <h5 className='UserIdentityName'>
                {username}
            </h5>
            <div className='UserIdentityTime text-muted p-1'>
                {getCurrentDate()}
            </div>
        </div>
    )
}
export default UserIdentity

function getCurrentDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const suffix = getDaySuffix(day);

    return `${month} ${day}${suffix}, ${year}`;
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
