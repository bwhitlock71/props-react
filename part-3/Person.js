const Person = (props) => {
let reply;
    if(props.age > 18){
        reply = "You must be over 18 go vote!!"
    } else if(props.age < 18) {
        reply = "You are under 18 go study kid"
    }
    return (
        <div>
            <p>Learn about this person!</p>
            <ul>
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
            <li>Hobbies: {props.hobbies}</li>
            <li>{reply}</li>
            </ul>
        </div>
    )
}