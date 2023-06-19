class Updatebarstype < ActiveRecord::Migration[7.0]
  def change
    rename_column :bars, :type, :bar_type
  end
end
