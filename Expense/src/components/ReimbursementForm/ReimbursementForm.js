import React from 'react';
import { withRouter } from 'react-router-dom';
function ReimbursementForm(props) {
    return(
        <div className="card col-14 col-lg-6 login-card mt-5 hv-center">
            <form id="myForm">
            <h1 className="form-group text-center text-uppercase mt-3 mb-5">Reimbursement Form</h1>
                <div className="form-group text-left">
                        <label>Date</label>
                        <input type="date" 
                            className="form-control" 
                            id="date" 
                            required
                        />
                </div>
                <div className="form-group text-left purple-border">
                    <label>Description</label>
                    <textarea className="form-control" id="description" rows="3" required></textarea>
                </div>
                <div className="form-group text-left">
                        <label>Amount</label>
                        <input type="number" 
                            className="form-control" 
                            id="amount" 
                            placeholder="Amount"
                            required
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary mr-2 mb-3"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default withRouter(ReimbursementForm);