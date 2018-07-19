class Follow < ApplicationRecord
  validates :playlist, uniqueness: { scope: :user }

  belongs_to :user,
    inverse_of: :follows
  belongs_to :playlist,
    inverse_of: :follows

end
