import React from 'react';
import LoginFormContainer from './session/log_in_form_container';
import SignupFormContainer from './session/sign_up_form_container';
import PlaylistShowContainer from './playlists/playlist_show_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import SongsIndexContainer from './songs/songs_index_container';
import Modal from './modal/modal';
import Greeting from './greeting/greeting';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UsersShowContainer from './users/users_show_container';
import AudioBarContainer from './bars/audio_bar_container';
import SideBarContainer from './bars/side_bar_container';
import SearchContainer from './search/search_container';
import DeveloperContainer from './developer/developer_container';


const App = (props) => {
  return (
    <div className="app-container">
      <Modal />
      <ProtectedRoute path='/' component={SideBarContainer} />
      <Switch>
			  <ProtectedRoute exact path="/main" component={PlaylistIndexContainer} />
			  <ProtectedRoute exact path="/user/:userid" component={UsersShowContainer} />
        <ProtectedRoute exact path='/playlists/:playlistid' component={PlaylistShowContainer} />
        <ProtectedRoute exact path='/songs' component={SongsIndexContainer} />
        <ProtectedRoute exact path='/search' component={SearchContainer} />
        <ProtectedRoute exact path='/developer' component={DeveloperContainer} />
      </Switch>
      <ProtectedRoute path='/' component={AudioBarContainer} />
      <Switch>
        <AuthRoute exact path="/" component={Greeting} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
};


export default App;
