class Block < ApplicationRecord
    belongs_to :user

    validates :title, :time, :date, presence: true
end
