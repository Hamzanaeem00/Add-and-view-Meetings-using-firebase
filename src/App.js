import AllMeetupsPage from './allpages/AllMeetups';
import FavoritesPage from './allpages/Favorites';
import NewMeetupsPage from './allpages/NewMeetups';
import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    
     <Layout>
      <Switch>
      <Route path ='/' exact>
      <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
      <NewMeetupsPage />
      </Route>
      <Route path ='/favorites'>
      <FavoritesPage />
      </Route>
      </Switch>
      </Layout>
    
  );
}

export default App;
