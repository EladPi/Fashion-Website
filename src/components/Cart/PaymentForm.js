import { Button } from '@nextui-org/react';
import '../../styles/paymentForm.css';

export function PaymentForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you!")
    }

    return (
        <div className="container mt-5">
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Personal Details */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" className="form-control" id="inputFirstName" required placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputLastName">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" required placeholder="Last Name" />
                    </div>
                </div>

                {/* Address */}
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" required placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" required placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" required className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" required className="form-control">
                            <option selected>Choose...</option>
                            <option>Belgium</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" required className="form-control" id="inputZip" />
                    </div>
                </div>
                <br />
                <h2>Personal Details</h2>
                {/* Credit Card Details */}
                <div className="form-group">
                    <label for="creditCardNumber">Credit Card Number</label>
                    <input type="text" className="form-control" required id="creditCardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="expDate">Expiration Date</label>
                        <input type="text" className="form-control" required id="expDate" placeholder="MM/YY" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="cvv">CVV</label>
                        <input type="text" className="form-control" required id="cvv" placeholder="CVV" />
                    </div>
                </div>

                <Button type="submit" color='success' variant='ghost' className='paymentform-button'>Pay Now</Button>
            </form>
        </div>
    );
}
