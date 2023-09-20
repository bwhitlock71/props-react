const App = () => (
    <div>
     <Person name="James Smith" age={35} hobbies={[ "hiking", ", ", "camping" ]}/>   
     <Person name="Stacy Webber" age={17} hobbies={[ "reading", ", ", "fencing" ]}/>   
     <Person name="Mike Baker" age={57} hobbies={[ "painting", ", ", "plays bass guitar" ]}/>   
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))