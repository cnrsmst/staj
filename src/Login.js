import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";


const Login = () => {
  const [access, setAccess] = useState(false);

  const signUp = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Kayıt Olundu
        
        console.log("Kayıt Başarılı...");
        const ad = document.querySelector("#ad").value;
        const soyad = document.querySelector("#soyad").value;
        auth.displayName = ad + " " + soyad;
      })
      .catch((error) => {
        console.log(error.toString());
      });
  }

  const login =  () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const ad = document.querySelector("#ad").value;
    const soyad = document.querySelector("#soyad").value;
    const auth = getAuth();
    auth.displayName = ad + " " + soyad;
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        // Giriş Yapıldı
      
        console.log(auth);
        setAccess(true);
        
      })
  }
  if(access){
    return (<Redirect to={'/'} />)
  }
  return (
    <div className="form" style={{ textAlign: "center" }}>
        <div>
          <p>Ad Soyad</p>
          <input id="ad" placeholder="Ad" type="text" />
          <input id="soyad" placeholder="Soyad" type="text" />
        </div>
        <div>
          <p>Email</p>
          <input id="email" placeholder="E-mail" type="text" />
        </div>
        <div>
          <p>Şifre</p>
          <input id="password" placeholder="Şifre" type="password" />
        </div>
        <Button
          className="login"
          color="primary"
          style={{ margin: "20px" }}
          onClick={login}
        >
          Giriş
        </Button>
        <Button
          className="signup"
          style={{ margin: "20px" }}
          onClick={signUp}
        >
          Kayıt Ol
        </Button>
      </div>

  )
}

export default Login
/*

*/

/*

*/