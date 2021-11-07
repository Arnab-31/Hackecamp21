import React, { useState } from 'react'
import { useParams } from 'react-router'
import styles from "./ProductFeed.module.css"
import Post from '../Post/Post'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Modal from '../Modal/Modal'

function ProductFeed() {

    const [show, setShow] = useState(false);
    let {id} = useParams();
   
   


    return (

        
       
        <div className={styles.Fmaindiv}>
           <Modal title="My Modal" onClose={() => setShow(false)} show={show} title="Create your Post">
               <div className={styles.form}>
                <input type="file" className={styles.postImage}></input>
                <input type="text" className={styles.caption} placeholder="Enter your post Caption"></input>
                <button type="submit" className={styles.upload}> Upload </button>
               </div>              
            </Modal>
           <div className={styles.FeedHeader}>
               <div className={styles.HeaderElement}>
                    <img src="/pic2.jpg" className={styles.productImg}/>
                    <div className={styles.HeaderSubElement}>
                         <p>Roadster shirt</p>
                    </div>
                  
               </div>
                <div className={styles.HeaderElement2}>
                    <h2>{id == 0 ? "Feed" : "Product Feed"}</h2>
                </div>
                <div>
                    {id != 0 && <div  className={styles.postButton} onClick = {() => setShow(!show)}>  <img src="" alt="" />Post</div>
                     }
                     
                </div>
           </div>
           <div className={styles.postBox}>

          
            <Masonry columnsCount={3}>
                <div className={styles.post}>
                                <Post url="/pic1.jfif"
                                    caption = "How is it looking?"
                                    likes="45"
                                    comments="12"
                                    username="Akash Gupta" />
                            </div>
                            <div className={styles.post}>
                                <Post url="/pic2.jpg"
                                     caption = "Feels super comfy"
                                     likes="25"
                                     comments="10"
                                     username="Abhishek Roy" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic2.jpg"
                                     caption = "Looks great, is isnt?"
                                     likes="40"
                                     comments="22"
                                     username="Karan Singh" />
                            </div>

                        
                            <div className={styles.post}>
                                <Post url="/pic2.jpg"
                                     caption = "How is it looking?" 
                                     likes="1"
                                     comments="2"
                                     username="Sagar Shah"/>
                            </div> 

                            <div className={styles.post}>
                                <Post url="/pic1.jfif"
                                 caption = "How is it looking?"
                                 likes="5"
                                 comments="12"
                                 username="Suhani Singh" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic3.jpg"
                                 caption = "How is it looking?" 
                                 likes="45"
                                 comments="121"
                                 username="Tanmay Arora"/>
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic3.jpg"
                                 caption = "How is it looking?"
                                 likes="45"
                                 comments="12"
                                 username="Akash Gupta" />
                            </div>

                            
                            <div className={styles.post}>
                                <Post url="/pic1.jfif" 
                                    caption = "How is it looking?"
                                    likes="45"
                                    comments="12"
                                    username="Dia Sen" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic2.jpg"
                                     caption = "How is it looking?"
                                     likes="45"
                                     comments="12"
                                     username="Aritro Das" />
                            </div> 

                </Masonry>
            
           </div>
        </div>
    )
}

export default ProductFeed;
