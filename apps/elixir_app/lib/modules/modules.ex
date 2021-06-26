defmodule Modules.Module do
  use Ecto.Schema

  schema "modules" do
    field(:module_code, :string)
    field(:module_title, :string)
    field(:prerequisites, :string)
  end
end
