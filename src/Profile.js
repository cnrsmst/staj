import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from './firebase'



const Profile = () => {

 

   
    
  
    
    const [postLists, setPostList] = useState([]);

    useEffect(() => {
      
      const getPosts = async () => {
        const q = query(collection(db, "postlar"), where("email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        const datas = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        
        
        setPostList(datas);
        
        
       
      };
  
      
  
      getPosts();
    });

    const deletePost = async (id) => {

        
        
          const postDoc = doc(db, "postlar", id);
          await deleteDoc(postDoc);
       
       
        
      
      
    };
       
    

    if(!auth.displayName){
        return(
        <div style={{margin:"auto",textAlign:"center"}}>
          <h2>{"Lütfen giriş yapınız."}</h2>
          <Link to={'/login'} style={{display:"inline-block", marginTop:".6rem",padding:"1rem", borderRadius:"7px",textDecoration:"none", color:"white", backgroundColor:"rgba(0,0,0,.3)"}}>{"Login Sayfası"}</Link>
        </div>
          )
      }
      if(postLists.length <= 0 ){
        return(
            <div style={{margin:"auto",textAlign:"center"}}>
              <h2>{"Henüz Bir şey Paylaşmadınız"}</h2>
              
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
                  { (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
                </div>
                <div className="deletePost">
                
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

export default Profile