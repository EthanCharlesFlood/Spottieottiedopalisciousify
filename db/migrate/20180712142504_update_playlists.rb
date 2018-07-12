class UpdatePlaylists < ActiveRecord::Migration[5.2]
  def change
		def change
			drop_table :playlists
			create_table :playlists do |t|
				t.string :playlist_name, null: false
				t.creator_id :integer, null: false

				t.timestamps
			end

			add_index :playlists, :playlist_name
			add_index :playlists, :creator_id
		end
  end
end
