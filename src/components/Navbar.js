import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      <Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
      {!isAuth ? (
          <Link to="/login"><FontAwesomeIcon icon={faArrowAltCircleRight} />ログイン</Link>
        ) : (
          <Link to="/logout"><FontAwesomeIcon icon={faArrowAltCircleLeft} />ログアウト</Link>
      )}
    </nav>
  )
}

export default Navbar
