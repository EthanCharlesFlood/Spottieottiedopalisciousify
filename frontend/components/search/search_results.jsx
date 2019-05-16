import React from "react";
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import SongIndexItem from './../songs/songs_index_item';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);

    this.state = {
      playButton: false
    };
  }

  handleAddSong(e) {
    this.props.queueSong(this.props.songs[e.currentTarget.id]);
  }

  openModal(e) {
    e.stopPropagation();
    const payload = {modal: "SongToPlaylist", song_id: e.currentTarget.id};
    this.props.openModal(payload);
  }

  durationParser(duration) {
    let minutes = Math.floor((duration / 60));
    let seconds = Math.floor((duration % 60));
    if (seconds < 10) {
      return minutes + ":0" + seconds;
    } else {
      return minutes + ":" + seconds;
    }
  }

  noResults() {
    return (
      <span className="search-results-nil">Nothing found...</span>
    )
  }

  render() {
    let playlists;
    let songs;
    let pHeader;
    let sHeader;
    if (this.props.playlists[0] !== undefined) {
      playlists = this.props.playlists.map(playlist => {
        return (
        <div key={playlist.id} className="playlist-index-item">
          <Link className="playlist-index-item-container" key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img className="playlist-index-item-image" src={playlist.imgurl}/>
            <div className="playlist-index-item-link">{playlist.playlist_name}</div>
          </Link>
        </div>
        );
      });
      pHeader = <h3 className="search-header">Playlists</h3>;
    } else {
      playlists = "";
      pHeader = "";
    }



    if (this.props.songs[0] !== undefined) {
      songs = this.props.songs.map((song, idx) => {
        let songAdder = (song) => this.handleAddSong(song);
        return (
          <SongIndexItem song={song}
                         idx={idx}
                         songAdder={songAdder}
                         functionality={this.openModal}
                         key={idx}
                         durationParser={this.durationParser}
                         button={<i className="fas fa-plus"></i>}
                         search={true} />
        );
      });
      sHeader = <h3 className="search-header">Songs</h3>;
    } else {
      songs = "";
      sHeader = "";
    }
    return (
      <div className="search-results-container">
          {sHeader}
          <ul className="search-songs-list">
            {songs}
          </ul>
          {pHeader}
          <ul className="search-playlists-list">
            {playlists}
          </ul>

      </div>
    );
  }
}

export default SearchResults;
