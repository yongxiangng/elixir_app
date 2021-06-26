defmodule ElixirAppWeb.PageController do
  use ElixirAppWeb, :controller

  def index(conn, _params) do
    render(
      conn,
      "index.html",
      props: Poison.encode!(%{})
    )
  end
end
