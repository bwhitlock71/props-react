const Tweet = (props) => {
    return (
        <ul>
            <li>Username : {props.username}</li>
            <li>User: {props.user}</li>
            <li>Message: {props.message}</li>
            <li>Date: {props.date}</li>
        </ul>
    )
}