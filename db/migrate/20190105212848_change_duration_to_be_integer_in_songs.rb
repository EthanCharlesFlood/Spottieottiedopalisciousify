class ChangeDurationToBeIntegerInSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :duration
  end
end
