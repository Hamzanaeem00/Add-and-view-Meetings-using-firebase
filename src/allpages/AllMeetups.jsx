import React from "react";
import MeetupList from "../components/Meetups/MeetupList";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);
  useEffect(() => {
    setisLoading(true)
    fetch(
      "https://react-getting-started-2e088-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => { 

        const meetups =[];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup)
        }
        setisLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
