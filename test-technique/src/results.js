import React from 'react'
// ***** fonction composante *****//
// Affiche une fenêtre modale bootstrap des résultats d'un coureur sur une année
//paramètre: prénom et nom du pilote, saison sélectionnée et la liste des résultats sur cette saison
const ModalResults = ({driverFirstname, driverName, season, resultsList}) => {
    return(
        <div>         
            <div className="modal fade" id="resultsModal" tabIndex="-1" role="dialog" aria-labelledby="resultsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="resultsModalLabel">{driverFirstname} {driverName} results in {season}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>{/* Définition des entêtes de chaque colonne du tableau */}
                                        <th scope="col">Location</th>{/*Ville du GP */}
                                        <th scope="col">Date</th>{/*date du GP */}
                                        <th scope="col">Circuit Name</th>{/*nom du GP */}
                                        <th scope="col">Laps</th>{/*nombre de tours du GP */}
                                        <th scope="col">Status</th>{/*statut du coureur à la fin du GP */}
                                        <th scope="col">Position</th>{/*position à l'arrivée du GP */}
                                        <th scope="col">Grid position</th>{/*position sur la grille de départ du GP */}
                                        <th scope="col">Points</th>{/*nombre de points gagnés sur le GP */}
                                        <th scope="col">Constructor</th>{/*nombre de points gagnés sur le GP */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Affichage des résultats du coureur stocké dans resultsList dans le tableau*/}
                                    {resultsList.map((race) => (
                                        <tr key={race.Circuit.circuitId}>{/*clé unique de la ligne correspondant à l'id du GP */}
                                            <th scope="row">{race.Circuit.Location.locality}</th>
                                            <td>{race.date}</td>
                                            <td><a href={race.Circuit.url} target="_blank" rel="noopener noreferrer">{race.raceName}</a></td>
                                            <td>{race.Results[0].laps}</td>
                                            <td>{race.Results[0].status}</td>
                                            <td>{race.Results[0].position}</td>
                                            <td>{race.Results[0].grid}</td>
                                            <td>{race.Results[0].points}</td>
                                            <td>{race.Results[0].Constructor.name}</td>
                                        </tr>
                                    ))}    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ModalResults