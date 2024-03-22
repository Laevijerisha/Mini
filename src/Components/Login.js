import { useState,useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
function Login() {
  const initalvalues = {  Email: "", Password: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value}=e.target;
        setformValues({...formValues,[name]:value})
       
            };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try { 

          const response = await axios.post('http://localhost:5027/api/Login/login', formValues); 
          
          console.log('Login Sucessfully:', response.data); 

          window.alert('Login successfuly'); 

          navigate('/home'); 

      } 

      catch (error) { 

          console.error('Error:', error); 

      } 
    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
        const validate=(values)=>{
            const errors ={};
            const regex=/\b[A-Za-z0-9._%+-]+@center\.com\b/;
            
            if(!values.Email){
                errors.Email="Email is required!";
            } else if (regex.test(values.Email)){
                navigate("/centerdash")
            }else if (values.Email==='admin123@admin.com'&& values.Password==='admin123'){
              navigate("/admindash")
            }else{
              navigate("/userdash")
            }
            if(!values.Password){
                errors.Password="Password is required!";
            }else if (values.Password.length < 4 ){
                errors.Password="Password must be more than 4 charcters"
            }else if (values.Password.length > 10 ){
                errors.Password="Password must be exceed more than 10 charcters"
            }
            if(Object.keys(formErrors).length === 0 && isSubmit){
                navigate("/home")
            }

                
            return errors;
        }

      
  return (
    <div class='container'>

      <form onSubmit={handleSubmit}>

        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Login</h1>
        <hr></hr>
        <div className="form-floating ">
          <input type="email" class="form-control" id="email" name="Email" value={formValues.Email} onChange={handleChange}/>
          <label htmlFor="email" className={formValues.Email ? "active" : ""}>Email</label>
        </div><p>{formErrors.Email}</p>

        <div class="form-floating ">
          <input type="password" class="form-control" id="pwd" name="Password" value={formValues.Password} onChange={handleChange} />
          <label htmlFor="pwd">Password</label>
        </div><p>{formErrors.Password}</p>
        <div class="footer">

          <button class="btn btn-primary">Login</button>
          <NavLink to='/signup' style={{ display: 'flex', justifyContent: 'flex-end' }}>Don't Have an account? Signup!</NavLink>
        </div>
      </form>

    </div>
  )
}

export default Login
