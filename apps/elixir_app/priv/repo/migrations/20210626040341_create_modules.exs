defmodule ElixirApp.Repo.Migrations.CreateModules do
  use Ecto.Migration

  def change do
    create table(:modules) do
      add :module_code, :string
      add :module_title, :string
    end
  end
end
