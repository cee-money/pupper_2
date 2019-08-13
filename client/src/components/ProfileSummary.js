import React from 'react';

function ProfileSummary(props) {
    return (
        <>
        <div className="col-md-6 col-sm-12 text-info bg-light rounded border border-secondary">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <br/>
                    <p>Size: {props.size}</p>
                    <p>Family friendly: {props.familyFriendly}</p>
                    <p>Energetic: {props.energetic}</p>
                    <p>Skittish (dogs): {props.dogDanger}</p>
                    <p>Skittish (people): {props.strangerDanger}</p>
                    <p>Large playmates: {props.largeDogDanger}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                <br/>
                    <p>Small playmates: {props.smallDogDanger}</p>
                    <p>Dominant: {props.dominant}</p>
                    <p>Guards resouces: {props.doesntShare}</p>
                    <p>Loves chase: {props.chaser}</p>
                    <p>Loves wrestling: {props.wrestler}</p>
                    <p>Outgoing: {props.allDogFriendly}</p>
                </div>
            </div>
        </div>

        </>
    )
}


export default ProfileSummary;