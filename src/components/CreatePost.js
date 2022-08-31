import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase'
import React, { useState } from 'react'
import "./CreatePost.css"
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      body: body,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })

    navigate("/");
  }

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を作成</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>本文</div>
          <textarea
            row="20"
            col="30"
            placeholder="本文を記入"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>作成</button>
      </div>
    </div>
  )
}

export default CreatePost
