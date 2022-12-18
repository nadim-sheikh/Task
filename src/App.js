import { useEffect, useState } from 'react';
import './App.css';
import UpdateDataForm from './Components/UpdateDataForm';

function App() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/options')
      .then(res => res.json())
      .then(data => setOptions(data))
  }, [])

  const [terms, setTerms] = useState(false)

  const handleAgree = (e) => {
    setTerms(e.target.checked)
  }
  const handleUpload = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const select = form.select.value;
    const agree = form.agree.value;
    const allData = { name, select, agree }

    fetch('http://localhost:5000/elected-options', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allData)
    }).then(res => res.json()).then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <label className='label'>Name:</label><input type="text" name='name' required />
        <label className='label'>Sectors:</label>
        <select id="lang" name='select' required>
          {
            options.map(o => <option key={o._id} className='option'>{o.option}</option>)
          }
        </select>
        <div className='flex'><input onClick={handleAgree} type="checkbox" name='agree' value='Agree to terms' /><p className='text'>Agree to terms</p></div>
        <input className='button' type="submit" disabled={!terms} value="Save" />
      </form>
          <UpdateDataForm />
    </div>
  );
}

export default App;
