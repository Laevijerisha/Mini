import React from 'react'

function AddCenter() {
    return (
        <div class='container'>
        <form>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Add New Center</h1>
            <hr></hr>
            <div className="form-floating ">
                <input type="text" class="form-control" id="centername" name="centername" />
                <label htmlFor="centername">Center Name</label>
            </div>
            <div className="form-floating ">
                <input type="email" class="form-control" id="email" name="email" />
                <label htmlFor="email">Email</label>
            </div>

            <div class="form-floating ">
                <input type="password" class="form-control" id="pwd" name="pswd" />
                <label htmlFor="pwd">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="pwd" name="pswd" />
                <label htmlFor="pwd">Cpassword</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="location" name="location" />
                <label htmlFor="location">Location</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="phone" name="phone" />
                <label htmlFor="phone">Phone Number</label>
            </div>
            <button class="btn btn-primary">ADD</button>
   
        </form>
        
    </div>
    )
}

export default AddCenter
