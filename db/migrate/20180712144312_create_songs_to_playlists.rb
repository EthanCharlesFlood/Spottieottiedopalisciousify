class CreateSongsToPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :songs_to_playlists do |t|
			t.integer :song_id, null: false
			t.integer :playlist_id, null: false

			t.timestamps
    end

		add_index :songs_to_playlists, :song_id
		add_index :songs_to_playlists, :playlist_id
  end
end
