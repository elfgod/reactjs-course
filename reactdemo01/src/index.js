// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click Me!';
}

function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = () => {
    
    const buttonText = 'Click Me!';
    const buttonText2 = ['you ', 'are ', 'gay'];
    // JS Object we need to point it to the properties
    const buttonObj = { text: 'Me Click!'};
    // styles into a object
    const styleObj = {backgroundColor: 'red', color:'green'};
    // interpolations inside JSX we can do multiple
    const labelText = 'Enter text';
    return (        
    <div style={{ backgroundColor: 'lightblue', border: '1px solid red'}}>
    <h3>{getTime()}</h3>
    <div> Hi there </div>
    <label className="label" htmlFor="name">Enter name:{labelText}</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'red', color:'green'}}>Submit {buttonText}</button>
    <button style={styleObj}>Gay</button>  
    <button >{buttonObj.text}</button>  
    <button >{buttonText2}</button>    
    <button>{getButtonText()}</button>    
    </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// Take the react component and show it on the screen
