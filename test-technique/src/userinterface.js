import React from 'react';
import Select from 'react-select'; //package pour les select input controller https://react-select.com/home

// *** composant react-select poru sélectionner la saison de pilotes à afficher *** //
class UserInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // tableau des saisons disponibles sur l'API (remonte jusqu'à 1950)
            seasons: [
                {value: '2019', label: '2019'}, {value: '2018', label: '2018'}, {value: '2017', label: '2017'}, {value: '2016', label: '2016'},
                {value: '2015', label: '2015'}, {value: '2014', label: '2014'}, {value: '2013', label: '2013'}, {value: '2012', label: '2012'},
                {value: '2011', label: '2011'}, {value: '2010', label: '2010'}, {value: '2009', label: '2009'}, {value: '2008', label: '2008'},
                {value: '2007', label: '2007'}, {value: '2006', label: '2006'}, {value: '2005', label: '2005'}, {value: '2004', label: '2004'},
                {value: '2003', label: '2003'}, {value: '2002', label: '2002'}, {value: '2001', label: '2001'}, {value: '2000', label: '2000'},
                {value: '1999', label: '1999'}, {value: '1998', label: '1998'}, {value: '1997', label: '1997'}, {value: '1996', label: '1996'},
                {value: '1995', label: '1995'}, {value: '1994', label: '1994'}, {value: '1993', label: '1993'}, {value: '1992', label: '1992'},
                {value: '1991', label: '1991'}, {value: '1990', label: '1990'}, {value: '1989', label: '1989'}, {value: '1988', label: '1988'},
                {value: '1987', label: '1987'}, {value: '1986', label: '1986'}, {value: '1985', label: '1985'}, {value: '1984', label: '1984'},
                {value: '1983', label: '1983'}, {value: '1982', label: '1982'}, {value: '1981', label: '1981'}, {value: '1980', label: '1980'},
                
            ],
            selectedOption: '', // année sélecitonnée par l'utilisateur
        }
    }

    // fonction pour gérer le changement de valeur avec l'objet react-select
    handleChange = selectedOption => {
        this.setState = {selectedOption}
        this.props.onClick(selectedOption.value) // remonte l'infomation de quelle saison est sélectionnée
    }

    render(){
        const { selectedOption } = this.state;
        return(
            //objet react-select fonctionnant comme un objet select classique
            //(avec un objet select classique j'ai rencontré des problèmes de passage de valeur dans
            //la méthode onChnage du select)
            <Select className="select-season" 
                value = {selectedOption.value} //passe l'info de l'année sélectionnée à react-select
                options = {this.state.seasons} //passe l'info de la liste des options à react-select
                onChange = {this.handleChange} //change la value sléectionée dans l'élément react-select
            />
        );
    }
}

export default UserInterface