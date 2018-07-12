import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
      <div className="splash-container">
        <div className="splash-shadow">
        <div className="splash-session-buttons">
          <h1 className="splash-buttons-heading">Spottieottiedopalisciousify&#174;</h1>
          <Link className="splash-button1" to="/signup">Sign Up</Link>
          <br />
          <span className="splash-seperator">Already have an account?</span>
          <br />
          <Link className="splash-button2" to="/signup">Log In</Link>
        </div>
        <br />
        <br />
        <div className="splash-info">
          <label className="splash-label">Get some music I like, right now
            <ul className="splash-ul">Listen to tens of songs for free.
              <li>Search & discover a few songs I love</li>
              <li>Create playlists of music I kinda like</li>
            </ul>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
