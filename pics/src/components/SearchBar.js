import React, { Component } from 'react'

export class SearchBar extends Component {
    // initiliaze a state object
    state = { term: '' };

    // onChange is a property name
    // to handle callbacks and event handlers
    // ill use another way using the arrow => function here (onChange)
    // onInputChange(eventObject){
        
    //     console.log(eventObject.target.value)
    // }

    onInputClick() {
        console.log('Input was click');
    }

    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label className="field">Image</label>
                <input className="text"
                onClick={this.onInputChange}
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value})}
                />
                {/* this is the other way*/}
                {/* <input className="text"
                onClick={this.onInputChange}
                onChange={(e) => console.log(e.target.value)}/> */}
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;
