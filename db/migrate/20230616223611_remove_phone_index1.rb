class RemovePhoneIndex1 < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :phone
  end
end
