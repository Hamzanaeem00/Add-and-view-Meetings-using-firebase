import React from 'react'
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/Meetups/NewMeetupForm'


function NewMeetupsPage() {
  const history = useHistory();
  function AddMeetupHandler(meetupData){
    fetch('https://project-meeting-aeeb7-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type': 'application/json'
      }
    } ).then(()=>{
      history.replace('/');
    });

  }
  return (
    <section>
      <h1>
        Add New Meetups
        </h1>
        <NewMeetupForm onAddMeetup={AddMeetupHandler} />
        </section>
  )
}

export default NewMeetupsPage