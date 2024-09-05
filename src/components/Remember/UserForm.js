import React,{ Component } from "react";

class UserForm extends Component{
    state = {
        fullname:'',
        address:''
    }
    onFullNameChange = (e) => {
        this.setState({
            fullname: e.target.value
        })
    }
    onAddressChage = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    onSubmit = (e) => {
        alert(this.state.fullname + ' ' + this.state.address);
        e.preventDefault();
    }

    render(){
        const { fullname,address } = this.state
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <lable for="txtFullName">Name :</lable>
                        <input type="text" name="txtFullName" class="form-control" placeholder="Name" value={fullname} onChange={this.onFullNameChange}/>
                    </div>
                    <div class="form-group">
                        <label for="txtAddress">Address</label>
                        <input type="text" name="txtAddress" id="txtAddress" class="form-control" placeholder="Address" value={address} onChange={this.onAddressChage}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="reset" class="btn btn-danger">cancel</button>
                </form>
            </div>
        )
    }
}
export default UserForm;