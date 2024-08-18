import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    select: "",
    rules: false,
  });

  function onHandleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
  }

  function onHandleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <h2>Contact Us</h2>
        <div id='divname'>
          <div className='name'>
            <label htmlFor="firstname">First Name</label>
            <input
              required
              id='firstname'
              name='firstname'
              value={formData.firstname}
              onChange={onHandleChange}
              type="text"
            />
          </div>
          <div className='name'>
            <label htmlFor="lastname">Last Name</label>
            <input
              required
              id='lastname'
              name='lastname'
              value={formData.lastname}
              onChange={onHandleChange}
              type="text"
            />
          </div>
        </div>
        <div id='divemail'>
          <label htmlFor="email">Email</label>
          <input
            required
            id='email'
            name='email'
            value={formData.email}
            onChange={onHandleChange}
            type="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={onHandleChange}
          ></textarea>
        </div>
        <div id='divname'>
          <div className='radio'>
            <input
              type="radio"
              name='select'
              value="Enquiry"
              onChange={onHandleChange}
            /> General Enquiry
          </div>
          <div className='radio'>
            <input
              type="radio"
              name='select'
              value="Request"
              onChange={onHandleChange}
            /> Support Request
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            name='rules'
            checked={formData.rules}
            onChange={onHandleChange}
          />
          <label htmlFor="rules">I consent to being contacted by the team</label>
        </div>
        <button disabled={!formData.rules}>Submit</button>
      </form>
    </>
  );
}

export default App;
