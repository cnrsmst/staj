import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs} from 'firebase/firestore';
import React  from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from './firebase';

class Home extends React.Component {

  logout() {
    
    auth.signOut();
    
  }

 add(e) {
   e.preventDefault();
  const konu = document.querySelector(".inputkonu").value;
  const post = document.querySelector(".inputpost").value;
  const tarih = new Date();
  var saat = tarih.getHours();
  var dakika=tarih.getMinutes();
  if(saat < 10 ) {
    saat = "0" + saat
  }

  if ( dakika < 10 ) {
    dakika = "0" + dakika
  }
  const time = saat + " : " + dakika
  
  
 
  
  const auth = getAuth();
  const fullName = auth.displayName;
  const email = auth.currentUser.email;

  addDoc(collection(db,"postlar"),{
    konu: konu,
    post: post,
    fullName: fullName,
    email : email,
    time : time
    

  });

    
 document.querySelector(".inputkonu").value = ""
 document.querySelector(".inputpost").value = ""
  
 }

 async getPosts() {
  
  const querySnapshot = await getDocs(collection(db, "postlar"));
  const datas = [querySnapshot.docs.map(doc => doc.data())];
  console.log(datas);
  
}
  

  render() {
    
    if(!auth.displayName){
      return(
        <div style={{margin:"auto",textAlign:"center"}}>
        <h2>{"Lütfen giriş yapınız."}</h2>
        <Link to={'/login'} style={{display:"inline-block", marginTop:".6rem",padding:"1rem", borderRadius:"7px",textDecoration:"none", color:"white", backgroundColor:"rgba(0,0,0,.3)"}}>{"Login Sayfası"}</Link>
      </div>
      )
    }
    return (
      
     
      // <div style={{marginTop:"4rem"}}>
        
      //   <h1>Hoşgeldiniz {auth.displayName}</h1>
      //   <br></br> <br></br>
      //   <input type="text" style={{padding:".5rem"}} placeholder='Konu' className='konu'></input>
      //   <br></br>
      //   <br></br>
      //   <textarea cols={43} rows={7} placeholder="Post Giriniz" className='post'></textarea>
      //   <br></br>
      //   <button style={{display:"block",margin:"1rem auto", padding:".6rem 1rem", backgroundColor:"dodgerblue", color:"white",border:"none" ,borderRadius:"6px" }} onClick={this.add}>Yükle</button>
        
        
        
       
        
      // </div>
      <div className="createPostPage">
      <div className="cpContainer">
        <h1>Bir Post Paylaş</h1>
        <div className="inputGp">
          <label> Konu:</label>
          <input className='inputkonu'
            placeholder="Konu..."
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea className='inputpost'
            placeholder="Post..."
            
          />
        </div>
        <button onClick={this.add}> Paylaş</button>
      </div>
    </div>
      
     
    )
  }
}


export default Home;