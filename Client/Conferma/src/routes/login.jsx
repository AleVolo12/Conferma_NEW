import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logoPC from '../assets/logo.png'
import '../css/login.css'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function GetId()
  {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id')
    console.log(id);
  }
  GetId();

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
  });

  return (

    <div style={{background: "white", height: "100vh", width: "100vw"}} className="Login">

      <div className="contImmagine">
        <img className="logoPC" src={logoPC}/>
      </div>

      <fieldset className = "form">
        <legend>Login</legend>
        <input className="input" type="text" name='nomeUtente' placeholder='username'/>
        <input className="input" type="password" name='password' placeholder='password'/>
      </fieldset>

      <div>
        <form action="attivazione">
          <button type="submit" className='bottone-login'>
            ACCEDI
          </button>  
        </form> 
      </div>

    </div>

  )
}

export default Login
