defmodule ElixirApp.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      ElixirApp.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: ElixirApp.PubSub},
      # Start a worker by calling: ElixirApp.Worker.start_link(arg)
      # {ElixirApp.Worker, arg}
      Modules.Repo
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: ElixirApp.Supervisor)
  end
end
