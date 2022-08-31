import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import './Home.css'

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  })

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postBody">
              {post.body}
            </div>
            <div className="postFooter">
              <div className="postAuther">
                {post.author.username}
              </div>
              {post.author.id === auth.currentUser.uid && (<button onCLick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
