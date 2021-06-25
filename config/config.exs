# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :elixir_app,
  ecto_repos: [ElixirApp.Repo]

config :elixir_app_web,
  ecto_repos: [ElixirApp.Repo],
  generators: [context_app: :elixir_app]

# Configures the endpoint
config :elixir_app_web, ElixirAppWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Zr5Sbkh0tWKUapoJ+eGrYmsh8LenmrtI8WfJXsDX8y3Yz2ryL+Nu7EWDf/FpLtdd",
  render_errors: [view: ElixirAppWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ElixirApp.PubSub,
  live_view: [signing_salt: "xn/TuFSS"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
