defmodule Modules.Module do
  use Ecto.Schema

  @derive {Poison.Encoder, only: [:module_code, :module_title]}

  schema "modules" do
    has_many :prerequisites, Modules.Prerequisite

    field :module_code, :string
    field :module_title, :string
  end

  def changeset(module, params \\ %{}) do
    module
    |> Ecto.Changeset.cast(params, [:module_code, :module_title])
    |> Ecto.Changeset.validate_required([:module_name, :module_title])
  end
end
