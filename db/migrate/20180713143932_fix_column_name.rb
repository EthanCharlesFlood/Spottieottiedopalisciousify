class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :playlists, :creator_id, :user_id
  end
end
