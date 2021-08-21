class BlockSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :date
  belongs_to :user
end
