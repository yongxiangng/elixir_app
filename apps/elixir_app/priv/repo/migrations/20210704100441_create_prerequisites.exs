defmodule ElixirApp.Repo.Migrations.CreatePrerequisites do
  use Ecto.Migration

  def change do
    create table(:prerequisites) do
      add :module_code, :string
      add :module_title, :string
      add :prerequisite_code, :string
      add :prerequisite_title, :string
    end
  end
end
