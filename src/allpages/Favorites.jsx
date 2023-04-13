import React from 'react'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context';
// import MeetupList from '../components/Meetups/MeetupList';
import classes from '../components/Meetups/MeetupItem.module.css'

import Card from '../components/Ui/Card';

function FavoritesPage() {
 const favoritesCtx= useContext(FavoritesContext);
 console.log(favoritesCtx);

 let removeFav = []
 favoritesCtx.favorites.forEach((item)=>{
// console.log(item)
   removeFav =item
})
console.log(removeFav);

 const toggleFavoriteStatusHandler = ()=>{
  favoritesCtx.removeFavorite(removeFav.id);
 }

  return (
    <section>
      {favoritesCtx.totalFavorites===0?(
        <p>You got no  Favorites yet. Start Adding Some ? </p>
        ):(
          <div>
              <h1>
        My Favorites
      </h1>
        {
          favoritesCtx.favorites?.map((item)=>{
            // console.log(item);
            return(
              <Card>
              <div>
              <img className={classes.image} src={item.image} alt={item.title} />
              </div>
              <div className={classes.content }>
                  <h3>{item.title}</h3>
                  <address>{item.address}</address>
                  <p>{item.description}</p>
              </div>
              <div className={classes.actions}>
                  {/* <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites' }</button> */}
                  <button onClick={toggleFavoriteStatusHandler}> Remove From Favorites </button>
              </div>
          </Card>
              
            )
          })
                }
                </div>
     
        )
        
      }
      
      {/* <h1>
        My Favorites
      </h1>
      {content} */}
      
    </section>
  )
}

export default FavoritesPage