Here's an example implementation using React:

Create a new React project using the create-react-app command:

npx create-react-app user-form
cd user-form



Install the axios library to make HTTP requests:



npm install axios




Replace the contents of the src/App.js file with the following code:


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const getUserUrl = `https://test-api-v3.myways.ai/user?email=${email}`;

    try {
      // Make GET API call to check if user exists
      const response = await axios.get(getUserUrl);

      if (response.data.length > 0) {
        setStatus('User Found!');
      } else {
        // Make POST API call to create new user
        const postUserUrl = 'https://test-api-v3.myways.ai/user';
        const body = { name, email, phone };

        const postResponse = await axios.post(postUserUrl, body);

        if (postResponse.status === 200) {
          setStatus('User Created Successfully!');
        } else {
          setStatus('Error creating user');
        }
      }
    } catch (error) {
      console.error(error);
      setStatus('Error checking or creating user');
    }
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required /><br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {status && (
        <div>
          <h2>{status}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

