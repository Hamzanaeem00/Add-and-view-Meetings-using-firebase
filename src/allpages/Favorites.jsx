import React from 'react'
import { useContext } from 'react'
import MeetupList from '../components/Meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
 const favoritesCtx= useContext(FavoritesContext);

 let content;
 if (favoritesCtx.totalFavorites===0){
  content = <p>You got no  Favorites yet. Start Adding Some ?</p>
 }
 else {
  content = <MeetupList />
 }
  return (
    <section>
      <h1>
        My Favorites
      </h1>
      {content}
      
    </section>
  )
}

export default FavoritesPage