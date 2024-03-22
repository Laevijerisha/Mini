import React from 'react'

function SubmitRequest() {
    return (
        <div class="container">
            <form>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Submit Request</h1>
                <div className="form-floating ">
                    <input type="text" class="form-control" id="itemname" name="itemname" />
                    <label htmlFor="itemname">Item Name</label>
                </div>
                <div className="form-floating ">
                    <input type="number" class="form-control" id="quantity" name="itemquantity" />
                    <label htmlFor="itemquantity">Quantity</label>
                </div>
                <div class="form-group">
                    <label for="itemtype">Item Type</label>
                    <select class="form-control" id="itemtype">
                        <option value="fridge">Fridge</option>

                        <option value="tv">Tv</option>

                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="vendingmachine">Vending Machine</option>

                    </select>

                </div><br></br>
                <div className="form-floating ">
  <input type='text' class="form-control"></input>
  <label for="floatingTextarea">Condition</label>
</div>

<button class='btn btn-primary'>Submit Request</button>


            </form>
        </div>
    )
}

export default SubmitRequest
