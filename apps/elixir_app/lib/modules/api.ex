defmodule Modules.API do
  alias Modules.Repo
  alias Modules.Module
  # import Ecto.Query

  def list_all_modules do
    Module |> Repo.all
  end
end
