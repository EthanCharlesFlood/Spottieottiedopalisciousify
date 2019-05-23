import React from "react";
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import SongIndexItem from './../songs/songs_index_item';
import PlaylistItem from './../playlists/playlist_item';


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
        <PlaylistItem
          key={playlist.id}
          playlist={playlist}
          playing={this.props.playing}
          playingPlaylist={this.props.playingPlaylist}
          fetchPlaylist={this.props.fetchPlaylist}
          addPlaylistToQueue={this.props.addPlaylistToQueue}
          pause={this.props.pause}
          play={this.props.play} />
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
        let playing;
        if (this.props.playingSong && this.props.playingSong.id === song.id) {
          if (this.props.queueIndex === idx || this.props.queueLength === 1) {
            playing = true;
          }
        }
        let paused = !this.props.playing
        return (
          <SongIndexItem song={song}
                         idx={idx}
                         songAdder={songAdder}
                         functionality={this.openModal}
                         key={idx}
                         durationParser={this.durationParser}
                         button={<i className="fas fa-plus"></i>}
                         search={true}
                         playing={playing}
                         paused={paused}
                         pause={this.props.pause}
                         play={this.props.play} />
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
          <ul className="playlist-index-playlists">
            {playlists}
          </ul>

      </div>
    );
  }
}

export default SearchResults;
