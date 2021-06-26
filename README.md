# ElixirApp.Umbrella
This umbrella project is created because I wanted more practice with elixir since my internship
uses elixir and I am trying to be a good intern :^)

Currently my plan is to regularly call NUSMOD's API and update my own database, then serve data queries
from my database. The data queries are used to visualise NUS module dependencies due to pre-requisites
in a more user friendly and interactive manner. I believe NUSMODS show a pre-requisite graph, but they
currently do not have a function for users to input their list of modules and output the module relations.

Ultimately the goal is:
1. User inputs a list of module
2. Output is a dependency graph based on the pre-requisites and semester the modules are offered in

### Running the app
1. Install deps ```mix deps.get```
2. Install node_modules ```cd apps/elixir_app_web/assets && npm ci```
3. Run server with ```cd ../../.. && mix phx.server```
