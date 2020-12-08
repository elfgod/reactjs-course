import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';
import Clock from './Clock';
class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this is the only time we do direct assignment to
    //     // to this.state
    //     this.state = { lat: null, errorMessage: '' };
        
    // }
    // above code equal but longer
    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        );
    }
    /* above code equivalent but shorter
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>  {
                // we called setstate, setstate is a function inside
                // React.Component
                this.setState({ lat: position.coords.latitude});
            },
            // err => console.log(err)
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }
    */

    renderContent () {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }         
        if (!this.state.errorMessage && this.state.lat){
            //return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }
    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!');
    }
    // React needs the render() to work with class
    render() { 
        return (
        <div>
            {this.renderContent()}
            <Clock />
        </div>
        );       
}
} 
// <div>
        // Latitude: {this.state.lat}
        // <br />
        // Error: {this.state.errorMessage}
        // </div>
ReactDOM.render(<App />, 
    document.querySelector('#root'));
