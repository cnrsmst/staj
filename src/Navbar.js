import React  from 'react';
import { auth } from './firebase';
import {
    
    Link
  } from "react-router-dom";







class Navbar extends React.Component {

  logout() {
    
    auth.signOut();
    window.location.reload();
    
  }
  
 

  render() {

    
    return (

      
     
      <div className='nav' >
        
        <nav >
        <Link to='/' className='anasayfa'>Anasayfa</Link>
        <Link to='/create' className='create'>Post Yükle</Link>
        <Link to='/profile' className='create'>Profile</Link>
        <a href='#' className='cikis' onClick={this.logout} >Çıkış Yap</a>

        </nav> 
        
        
        
        
       
        
      </div>
     
    )
  }
}


export default Navbar;
