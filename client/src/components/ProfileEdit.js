import React, { Component } from "react";
import YesNoMenu from "./YesNoMenu";
import SizeMenu from "./SizeMenu";
// import API from "../utils/API";


class ProfileEdit extends Component {  
    state = {
        myPupper: this.props.pupper,
    }

componentDidMount() {
    console.log(this.state.myPupper)
};



handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name]: value,
    });
};

handleFormSubmit = event => {
    event.preventDefault()


}
    
render() {
    return (
        <>
        <div className="col-md-6 col-sm-12 text-info bg-light rounded border border-secondary">
        <form>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <br/>
                    Size:&nbsp;&nbsp;<select className="form-control-sm form-group"><SizeMenu value={this.props.size}/></select>
                    <br/>
                    Family friendly:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.familyFriendly}/></select> 
                    <br/>
                    Energetic:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.energetic}/></select>
                    <br/>
                    Skittish (dogs):&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.dogDanger}/></select>
                    <br/>
                    Skittish (people):&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.strangerDanger}/></select>
                    <br/>
                    Large playmates:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.largeDogDanger}/></select>
                </div>
                <div className="col-md-6 col-sm-12">
                <br/>
                    Small playmates:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.smallDogDanger}/></select> 
                    <br/>
                    Dominant:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.dominant}/></select> 
                    <br/>
                    Guards resouces:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.doesntShare}/></select>
                    <br/>
                    Loves chase:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.chaser}/></select>
                    <br/>
                    Loves wrestling:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.wrestler}/></select> 
                    <br/>
                    Outgoing:&nbsp;&nbsp;<select className="form-control-sm form-group"><YesNoMenu value={this.props.allDogFriendly}/></select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-10">
                    <button type="submit" className="btn btn-info">Save</button>
                </div>
                <br/>
                <br/>
            </div>
        </form>
        </div>
        </>
    )
}
}


                        

export default ProfileEdit;