import React from 'react';
import DriversList from './components/driverslist';

class UserInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apiURL: null,
        }
    }

    render(){
        return(
            <div className="userInterface">
                <button type="button" className="btn my-4 btn-secondary btn-lg btn-block" onClick={() => this.props.onClick('2019')}>2019</button>
                <button type="button" className="btn my-4 btn-secondary btn-lg btn-block" onClick={() => this.props.onClick('2018')}>2018</button>
                <button type="button" className="btn my-4 btn-secondary btn-lg btn-block" onClick={() => this.props.onClick('2017')}>2017</button>
            </div>
        );
    }
}

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
        }
    }
    getDrivers(year) {
        fetch('http://ergast.com/api/f1/'+ year +'/drivers.json')
        .then(res => res.json())
        .then((data) => {
            console.log(data.MRData.DriverTable.Drivers)
            this.setState({ list: data.MRData.DriverTable.Drivers })
        })
        .catch(console.log)
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h4 className="navbar-brand font-weight-bold">F1 knowledge</h4>
                </nav>
                <UserInterface onClick={(year) => this.getDrivers(year)}/>
                <DriversList list={this.state.list}/>
            </div>
        );
    }
}

export default App;