defmodule Modules.Prerequisite do
  use Ecto.Schema

  schema "prerequisites" do
    # belongs_to :module, Modules.Module
    field :module_code, :string
    field :module_title, :string
    field :prerequisite_code, :string
    field :prerequisite_title, :string
  end
end
