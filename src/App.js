import { useState, useEffect } from 'react'
import './App.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function App () {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("checking")
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = values => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.firstname) {
      errors.firstname = 'First Name is required!'
    }

    if (!values.lastname) {
      errors.lastname = 'Last Name is required'
    }
   
  
    if (!values.email) {
      errors.email = 'Email is required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!'
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = 'mobilenumber is required'
    } else if (values.mobilenumber.length < 10) {
      errors.mobilenumber = 'mobilenumber must be 10 didgts'
    } else if (values.mobilenumber.length > 10) {
      errors.mobilenumber = 'Mobile Number cannot exceed more than 10 digits'
    }
    return errors
  }

  return (
    <div>
      <h1 className='headercalss'>Registration Form</h1>
      <div className='formclass'>
        <form onSubmit={handleSubmit}>
          <div className='divhori'>
            <div className='label__input'>
              <label>First Name</label>
              <input
                type='text'
                name='firstname'
                value={formValues.firstname}
                onChange={handleChange}
              />
               <p className='p_error'>{formErrors.firstname}</p>
            </div>
           
            <div className='label__input'>
              <label>Last Name</label>
              <input
                type='text'
                name='lastname'
                value={formValues.lastname}
                onChange={handleChange}
              />
               <p className='p_error'>{formErrors.lastname}</p>
            </div>
          </div>
          <div className='divhori'>
            <div className='label__input'>
             <label>Email</label>
              <input
                type='text'
                name='email'
                value={formValues.email}
                onChange={handleChange}
              />
              <p className='p_error'>{formErrors.email}</p>
            </div>
            <div className='label__input'>
              <label>Mobile Number</label>
              <input
                type='text'
                name='mobilenumber'
                value={formValues.mobilenumber}
                onChange={handleChange}
              />
                <p className='p_error'>{formErrors.mobilenumber}</p>
            </div>
          </div>
       
          <p>Country</p>
          <select className="select__class" id='country' name='country'>
          <option value='India'>CHOOSE...</option>
            <option value='India'>INDIA</option>
            <option value='USA'>USA</option>
            <option value='Canada'>CANAD</option>
            <option value='Bangladesh'>Bangladesh</option>
          </select>
          <div>
            <button className="button__class" type = "submit">Submit Form </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default App
