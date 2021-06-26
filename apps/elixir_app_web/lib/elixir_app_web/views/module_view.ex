defmodule ElixirAppWeb.ModuleView do
  use ElixirAppWeb, :view
  def render("index.json", %{data: modules}) do
    modules
  end
end
