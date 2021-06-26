defmodule ElixirAppWeb.ModuleController do
  use ElixirAppWeb, :controller

  def decode(item) do
    {:ok, output} = Poison.encode(item)
    {:ok, output} = output |> Poison.decode
    output
  end

  def index(conn, _params) do
    modules = Modules.API.list_all_modules()
    |> Enum.map(&decode/1)
    render(
      conn,
      "index.json",
      data: modules
    )
  end
end
