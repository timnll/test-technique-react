import React from 'react';
import DriversList from './driverslist';
import UserInterface from './userinterface';


// *** composant maître App *** //
// appelle le menu de sélection de la saison et la liste des pilotes de la saison sélectionnée
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            season: null, //saison sélectionnée
            driverslist: [], // liste des pilotes à afficher
        }
    }

    // fonction faisant une requête API pour aller chercher la liste des pilotes par saison
    // pas d'ajout d'immutabilité (avec slice par exemple) car pas de traitement complexe nécessaire
    // (on mute directement la donnée d'origine (on remplace les datas du tableau)
    getDrivers(season) {
        const apiURL = 'http://ergast.com/api/f1/'; //URL de base de l'API F1
        fetch(apiURL + season +'/drivers.json') // effectue une requête get (exemple: http://ergast.com/api/f1/2019/drivers.json )
        .then(res => res.json()) //récupère les données sous frme de json
        .then((data) => {
            this.setState({ season: season, driverslist: data.MRData.DriverTable.Drivers }); //maj des variables du state
        })
    }

    //syntaxe JSX, données retournées: navbar, text d'introduction,
    // appel à la classe de la liste déroulante, puis à la classe de la liste des pilotes
    render(){
        return(
            <div>           
                <nav className="navbar fixed-nav navbar-dark bg-dark">
                    <h4 className="navbar-brand font-weight-bold">
                        <img src="./F1_logo.png" width="70" height="30" alt=""/> Drivers Information</h4>
                </nav>
                <h2 className="info-select"> Welcome to the unofficial page of F1 drivers</h2>
                <p className="info-select">
                    This application is using the API database available on <a href="http://ergast.com/mrd" target="_blank" rel="noopener noreferrer">ergast.com/mrd</a><br/>
                    to display the list of F1 drivers by season since 1950.
                    </p>
                    <h5 className="info-select">Please select a season: </h5>
                <UserInterface onClick={(season) => this.getDrivers(season)}/>
                <DriversList 
                    season = {this.state.season} //passe la saison à la classe enfant
                    list={this.state.driverslist} //passe la liste des pilotes à la classe enfant
                />
            </div>
        );
    }
}

export default App;