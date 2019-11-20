import React from 'react'

const DriversList = ({list}) => {
    return(
        <div>
            {list.map((listElement) => (
                <div key={listElement.driverId} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{listElement.givenName} {listElement.familyName}</h4>
                        <h5 className="card-subtitlte text-muted font-italic">Car number: <b>{listElement.permanentNumber}</b></h5>
                        <button type="button" className="btn btn-sm btn-results float-right btn-warning">results</button>
                        <p className="card-text">nationality: {listElement.nationality}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default DriversList