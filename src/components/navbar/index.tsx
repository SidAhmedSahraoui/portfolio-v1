import React from 'react'
import useStyle from './style'
// import { faMoon } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar: React.FC = () => {
  const classes = useStyle()
  return (
    <nav className={classes.navbar}>
      {/*<div className="container">*/}
      {/*  <button className={'button'}>*/}
      {/*    <FontAwesomeIcon icon={faMoon} />*/}
      {/*  </button>*/}
      {/*</div>*/}
    </nav>
  )
}
export default Navbar
