import React, { useEffect, useState } from 'react'
import styles from "./Post.module.css"
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

function Post({url, caption, likes, comments, username, profileURL = null}) {

    //const [isLiked, like] = useState(false);

    const [showComments, setShowComments] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);
    
    useEffect(() => {
      }, [likeCount, isLiked]);
    

    const likePost  = () => {
        
        if(isLiked){
            setLikeCount(parseInt(likeCount) - 1);
            setIsLiked(false);
        }else{
            setLikeCount(parseInt(likeCount) + 1);
            setIsLiked(true);
        }
            
        
    }

    return (
        <div className={styles.PostMaindiv}>
            <div  className={styles.Postdiv}>
                <div className={styles.PostImgdiv} onClick={() => setShowComments(true)}>
                    <img src={url}  className={styles.postPic}/>
                    <div className={styles.captionDiv} >
                        <p>{caption}</p>
                    </div>
            </div>
            </div>
          

           <div className={styles.PostDetailsDiv}>
                <div  className={styles.profileDiv}>
                    <img src={profileURL ? profileURL : "/profileIcon.png"} className={styles.profilePic} />
                    <p>{username}</p>
                </div>
                <div className={styles.postInfo}>
                    <div className={styles.info}>
                        {isLiked ?  <img src="https://img.icons8.com/plasticine/48/000000/filled-like.png" className={styles.icon} onClick = {likePost}/> : <img src="https://img.icons8.com/carbon-copy/48/000000/filled-like.png" className={styles.icon} onClick={likePost} /> }
                        <p>{likeCount}</p>
                    </div>
                    <div className={styles.info} onClick={() => setShowComments(true)}>
                        <img src="https://img.icons8.com/ios/50/000000/topic.png" className={styles.icon2}/>
                            <p>{comments}</p>
                    </div>
                </div>
           </div>

           <Modal onClose={() => setShowComments(false)} show={showComments} title="Comments (4)">
               <div className={styles.commentsSection}>
                    <div className={styles.yourCommentBox}>
                        <div className={styles.yourComment}>
                            <img src="/pic1.jfif" className={styles.profilePic} />
                            <textarea className={styles.comment} placeholder="Enter your comment"></textarea>
                        </div>
                        <div className={styles.buttonBox}>
                        <div className={styles.PbuttonBag}> <img src="" alt="" />Add Comment</div>
                        </div>
                    </div>
                    <div className={styles.allComments}>

                        <div className={styles.userComment}>
                            <div>
                                <img src="/pic1.jfif" className={styles.profilePic} />
                            </div>

                            <div className={styles.commentText}>
                                <div className={styles.username}>
                                    Rohit Sharma
                                </div>
                                <div className={styles.usertext}>
                                    Looks Great!
                                </div>
                            </div>
                        </div>


                        <div className={styles.userComment}>
                            <div>
                                <img src="/pic1.jfif" className={styles.profilePic} />
                            </div>

                            <div className={styles.commentText}>
                                <div className={styles.username}>
                                    Virat Kohli
                                </div>
                                <div className={styles.usertext}>
                                    Best outfit for winters!
                                </div>
                            </div>
                        </div>


                        <div className={styles.userComment}>
                            <div>
                                <img src="/pic1.jfif" className={styles.profilePic} />
                            </div>

                            <div className={styles.commentText}>
                                <div className={styles.username}>
                                    Ishan Kishan
                                </div>
                                <div className={styles.usertext}>
                                    I would love to try this one!
                                </div>
                            </div>
                        </div>

                        <div className={styles.userComment}>
                            <div>
                                <img src="/pic1.jfif" className={styles.profilePic} />
                            </div>

                            <div className={styles.commentText}>
                                <div className={styles.username}>
                                    MS Dhoni
                                </div>
                                <div className={styles.usertext}>
                                    This color suits you the best!
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
             

                             
            </Modal>
        </div>
    )
}

export default Post;
