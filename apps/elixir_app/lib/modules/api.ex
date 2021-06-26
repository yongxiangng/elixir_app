defmodule Modules.API do
  alias Modules.Repo
  alias Modules.Module
  # import Ecto.Query

  def list_all_modules do
    Module |> Repo.all
  end

  def update_modules do
    # TODO: add query to nusmods api to update database
    IO.puts("OK")
    list_all_modules()
  end
end
