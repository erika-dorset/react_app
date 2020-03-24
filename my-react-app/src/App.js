import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <NameLength name="Erika"/>
                <NameLength name="George"/>
                <NameLength name="Phillip"/>
            </div>
        );
    }
}

function NameLength(props){
    return <h1> The name {props.name} contains {props.name.length} characters!</h1>;
}

export default App;