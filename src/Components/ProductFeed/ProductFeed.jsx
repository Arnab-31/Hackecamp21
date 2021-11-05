import React, { useState } from 'react'
import styles from "./ProductFeed.module.css"
import Post from '../Post/Post'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Modal from '../Modal/Modal'

function ProductFeed() {

    const [show, setShow] = useState(false);

   


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
                    <h2>Product Feed</h2>
                </div>
                <div>
                     <div  className={styles.postButton} onClick = {() => setShow(!show)}>  <img src="" alt="" />Post</div>
                     
                </div>
           </div>
           <div className={styles.postBox}>

          
            <Masonry columnsCount={3}>
                <div className={styles.post}>
                                <Post url="/pic1.jfif" />
                            </div>
                            <div className={styles.post}>
                                <Post url="/pic2.jpg" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic2.jpg" />
                            </div>

                        
                            <div className={styles.post}>
                                <Post url="/pic2.jpg" />
                            </div> 

                            <div className={styles.post}>
                                <Post url="/pic1.jfif" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic3.jpg" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic3.jpg" />
                            </div>

                            
                            <div className={styles.post}>
                                <Post url="/pic1.jfif" />
                            </div>

                            <div className={styles.post}>
                                <Post url="/pic2.jpg" />
                            </div> 

                </Masonry>
            
           </div>
        </div>
    )
}

export default ProductFeed;
