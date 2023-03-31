import React from 'react'
import classes from './Layout.module.css'
import MainNavigtaion from './MainNavigtaion'
function Layout(props) {
  return (
    <div>
        <MainNavigtaion />
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout