defmodule Modules.Module do
  use Ecto.Schema

  schema "modules" do
    field :module_code, :string
    field :module_title, :string
    # Precursors of this module
    has_many :prerequisites, Modules.Module
  end

  def changeset(module, params \\ %{}) do
    module
    |> Ecto.Changeset.cast(params, [:module_code, :module_title, :prerequisites])
    |> Ecto.Changeset.validate_required([:module_name, :module_title])
  end
end
