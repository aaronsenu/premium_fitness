import React, { useEffect, useState } from 'react';
import "./Checkout.css"
import {useHistory} from "react-router-dom"
import swal from "sweetalert"
import {Database} from "../../data/Database.js"
const Checkout = () => {
    const history = useHistory();

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

      function add(x,y){
        return Math.round((x+y)*100)/100
      }

const [membershipName, setMembershipName] = useState('');
const [membershipPrice, setMembershipPrice] = useState('');
  // Retrieve membership details from local storage on component mount
  useEffect(() => {
    setMembershipName(localStorage.getItem("membership_name").split(" ")[0])
    setMembershipPrice(localStorage.getItem("membership_price"))
       
  }, []);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');


  const [homeAddress, setHomeAddress] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cityTown, setCityTown] = useState('');
  const [province,setProvince]=useState(''); 

  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [MMYY, setMMYY] = useState('');
  const [cvv, setcvv] = useState('');



function handleSubmit(e) {
 e.preventDefault();
 
 Database[localStorage.getItem("ID")].membership = [true, localStorage.getItem("membership_name")]
 
swal({
    title: "Thank You For Choosing Premium Fitness",
    icon: "success",
    buttons:"Ok",
    }).then((myHome)=>{
    if(myHome){
    history.push("/myHome")
    window.scroll(0,0)
    }
    })



}




   

return (
    
        <div className='checkout_page'>
        <div className="checkout-header">
            <div>
            <span>PREMIUM  </span>
            <span>FITNESS</span>
          </div>
        </div>

        <div className='membership-name-header'>
                <div>
                <span>{membershipName}</span>
                <span> MEMBERSHIP</span>
                </div>
            </div>

        <div className='checkout-card'>
           

            <div className='summary_col-1'>
          
                <span>Summary</span>
            
                <span>{toTitleCase(membershipName)} Membership </span>
                <br/>
                <span>Prorate Amount </span>
                <br/>

                <span> Subtotal</span>
                <br/>
                <span>Tax</span>
                <br/>
                <span>Total</span>
            </div>

            <div className='summary_col-2'>
               
                <span> ${membershipPrice} (bi-weekly) </span>
                <br/>
                <span> $2.50  (one-time-payment)</span>
                <br/>
                
                <span>${add(parseFloat(membershipPrice), 2.5)}</span>
                <br/>
                <span>$10.50</span>
                <br/>
                <span>${add((add(parseFloat(membershipPrice), 2.5)), 10.5)}</span>


                
                
            </div>
            
        </div>

       
        <form className='checkout_form' onSubmit={handleSubmit}>
        
        <h1 className='personal_info_header'> Your Personal Information</h1>
        <div className='personal_info_container'>
            <div className='personal_info_col1'>
                <label >
                First Name
                <br/>
                <input type="text" 
                className = "checkout_fname" 
                placeholder="First Name  " 
                value={firstName} 
                onChange={(e) =>setFirstName(e.target.value)} 
                required />
                </label>
                <br />

                <label>
                Email Address
                <br/>
                <input type="email" 
                placeholder="xyz@something.com  " 
                className = "checkout_email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
                </label>
                <br />

                <label>
                Phone Number
                <br/>
                <input type="tel"
                pattern="^(\+\d{1,3}\s?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$"
                value={phoneNumber} placeholder='123 - 456 - 7890  '
                onChange={(e) => setPhoneNumber(e.target.value)}
                required />
                </label>
                <br />
            </div>

        <div className='personal_info_col2'>
        <label>
        Last Name
        <br/>
        <input type="text" 
        value={lastName} 
        className = "checkout_lname" 
        placeholder="Last Name " 
        onChange={(e) =>setLastName(e.target.value)} 
        required />
        </label>
        <br />

        <label>
        Birth Date (DD-MM-YYYY)
        <br/>
        <input type="text" 
        value={birthDate} 
        className = "checkout_lname" 
        placeholder="DD-MM-YYYY  "
        pattern='(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-((19|20)\d{2})' 
        onChange={(e) =>setBirthDate(e.target.value)} 
        required />
        </label>
        <br />


        </div>

        
        </div>















        <h1 className='address_info_header'> Your Address Information</h1>
        <div className='address_info_container'>
            <div className='address_info_row1'>
                <label>
                    Home Address
                    <br/>
                    <input
                    type="text"
                    placeholder='123 Address Ave.'
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    required />
                </label>
                <br />

                <label>
                    Unit Number #
                    <br/>
                    <input
                    type="text"
                    pattern='^\d+$'
                    placeholder='#123'
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)} />
                </label>   
                <br />

            </div>

        <div className='address_info_row2'>
            <label>
            Postal Code 
            <br/>
            <input type="text" 
                pattern="^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$"
                value={postalCode} 
                placeholder='A1B 2C3' 
                onChange={(e) => setPostalCode(e.target.value)} 
                required />
            </label>
            <br />

            <label>
            City/Town 
            <br/>
            <input type="text"
                placeholder='City/Town' 
                value={cityTown}
                onChange={(e) => setCityTown(e.target.value)} 
                required />
            </label>
            <br />

            <label>
            Province
            <br/>
            <select
            value={province} 
            onChange={(e) => setProvince(e.target.value)} 
            required>
            <option value="">Select Province</option>
            <option value="A">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="M">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NS">Nova Scotia</option>
            <option value="O">Ontario</option>
            <option value="P">PEI</option>
            <option value="Q">Quebec</option>
            <option value="S">Saskatchewan</option>
            </select>
        </label>

      <br/>
    </div>

        
    </div>
        
        

        
    <h1 className='emergency_contact_header'> Emergency Contact Information</h1>
        <div className='emergency_info_container'>
            <div className='emergency_info_col1'>
            <label htmlFor='emergencyContactName'>
            Emergency Contact Name
            <br/>
            <input 
                type='text' 
                id='emergencyContactName' 
                name='emergencyContactName'
                placeholder='Emergency Contact Name'
                value={emergencyContactName} 
        onChange={(e)=>setEmergencyContactName(e.target.value)}
                required/>
            </label>
            <br/>
            </div>

        <div className='personal_info_col2'>
        <label>
            Emergency Contact Phone Number #
            <br/>
        <input type="tel"
        pattern="^(\+\d{1,3}\s?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$"
        value={emergencyContactNumber} placeholder='123 - 456 - 7890'
        onChange={(e) => setEmergencyContactNumber(e.target.value)}
        required />
      
        </label>

        <br />

        </div>

        
        </div>




            


        {/* Billing Information */}
        <h1 className='billing_info_header'> Billing Information</h1>
        <div className='billing_info_container'>
            <div className='billing_info_col1'>
                <label >
                Cardholder Name
                <br/>
                
                <input type="text" 
                pattern='^[A-Za-z\s]+$'
                className = "checkout_cardHolderName" 
                placeholder="Card Holder Name" 
                value={cardName} 
                onChange={(e) =>setCardName(e.target.value)} 
                required />
                </label>
                <br />

                <label>
                Card Number
                <br/>
                <input type="text" 
                pattern='^(\d{4}\s?){4,}$'
                placeholder="XXXX XXXX XXXX XXXX" 
                className = "checkout_cardNum" 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required />
                </label>
                <br />

                <label>
                Expiration Date
                <br/>
                <input type="text"
                pattern="[^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$"
                value={MMYY} placeholder='MM/YY or MM/YYYY'
                onChange={(e) => setMMYY(e.target.value)}
                required />
                </label>
                <br />


                <label>
                CVV
                <br/>
                <input type="text"
                pattern="^\d{3}(?:\d{1})?$"
                value={cvv} placeholder='XXX'
                onChange={(e) => setcvv(e.target.value)}
                required />
                </label>
                <br />

                
            </div>
            </div>
    
            <div className="checkout-button">
        <button type='submit' className="btn">
          Pay
          </button>
          </div>
                  </form>

        </div>
 );
 };

export default Checkout;
