import React, { useEffect, useState } from "react";
import { collection, getDocs , orderBy , serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

import { auth } from './firebase';
import { Link } from "react-router-dom";

function Anasayfa() {
  const [postLists, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "postlar"));
      const datas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      
      setPostList(datas);
     
    };

    

    getPosts();
  });
  if(!auth.displayName){
    return(
    <div style={{margin:"auto",textAlign:"center"}}>
      <h2>{"Lütfen giriş yapınız."}</h2>
      <Link to={'/login'} style={{display:"inline-block", marginTop:".6rem",padding:"1rem", borderRadius:"7px",textDecoration:"none", color:"white", backgroundColor:"rgba(0,0,0,.3)"}}>{"Login Sayfası"}</Link>
    </div>
      )
  }
  return (
    <div className="homePage">
      {postLists.map((post, id) => {
        return (
          <div className="post" key={id}>
            <div className="postHeader">
              <div className="title"><h1>{post.konu}</h1></div>
            </div>
            <div className="postTextContainer">
                {post.post}
            </div>
            <div>
            <h3 className="fullName">@{post.fullName}</h3>
            <span className="time">{post.time}</span>
            </div>
            
           
            
          </div>
        );
      })}
    </div>
  );
}

export default Anasayfa;
