import React from 'react'
import Results from './results'


// *** composant affichant à la liste des pilotes sur une saison sélectionnée *** //
class DriversList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            results : [], //résultats du pilote sur la saison
            driverId: null, //id du pilote sélectionné par l'utilisateur
            driverFirstname: null, // prénom du pilote sélectionné
            driverName: null, // nom du pilote sélectionné
        }
    }

    //fonction effectuant une requête API pour chercher les résultats d'un pilote sur une saison
    // pas d'ajout d'immutabilité (avec slice par exemple) car pas de traitement complexe nécessaire
    // (on mute directement la donnée d'origine (on remplace les datas du tableau)
    getResultsByDriver(driverId){
        const apiURL = 'http://ergast.com/api/f1/';
        fetch(apiURL + this.props.season +'/drivers/'+driverId+'/results.json')
        .then(res => res.json())
        .then((data) => {
            console.log(data.MRData.RaceTable.Races)
            this.setState({ 
                driverId: driverId,
                results: data.MRData.RaceTable.Races,
                driverFirstname: data.MRData.RaceTable.Races[0].Results[0].Driver.givenName,
                driverName: data.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
            })
        })
    }

    render(){
        return(
            <div className="drivers-list">
                {this.props.list.map((listElement) => (
                    <div key={listElement.driverId} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{listElement.givenName} {listElement.familyName}</h4>
                            <h5 className="card-subtitlte text-muted font-italic">Car number: <b>{listElement.permanentNumber}</b></h5>
                            <button type="button" className="btn btn-sm btn-results float-right btn-primary mr-2" onClick={() => this.getResultsByDriver(listElement.driverId)} data-toggle="modal" data-target="#resultsModal">Results</button>
                            <p className="card-text">
                                Nationality: {listElement.nationality} <br/>
                                Date of birth: {listElement.dateOfBirth}
                            </p>
                            <a className="card-link" href={listElement.url} target="_blank" rel="noopener noreferrer">more info</a>
                        </div>
                    </div>
                ))}
                <Results 
                    driverFirstname = {this.state.driverFirstname} //passe à la classe enfant le prénom du pilote
                    driverName = {this.state.driverName} //passe à la classe enfant le prénom du nom
                    season = {this.props.season} //passe à la classe enfant la saison
                    resultsList = {this.state.results} //passe à la classe enfant la liste des résultats
                /> 
            </div>
        );
    }
}

export default DriversList