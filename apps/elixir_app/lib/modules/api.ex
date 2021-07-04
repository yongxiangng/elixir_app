defmodule Modules.API do
  alias Modules.Repo
  alias Modules.{Module, Prerequisite}
  # import Ecto.Query

  def list_all_modules do
    Module |> Repo.all
  end

  def update_modules do
    # TODO update AY from frontend
    url = "https://api.nusmods.com/v2/2021-2022/moduleList.json"
    headers = []
    params = []

    {:ok, response} = HTTPoison.get(url, headers, params: params)
    {:ok, res} = Poison.decode(response.body)
    Module |> Repo.delete_all()
    map_with_atoms = res |> Enum.map(&toStruct/1)
    Repo.insert_all(Module, map_with_atoms)

    list_all_modules()
  end

  defp toStruct(map) do
    %{"moduleCode" => moduleCode, "title" => title} = map
    %{module_code: moduleCode, module_title: title}
  end

  def update_prerequisites do
    # TODO update AY from frontend
    # calling update_prerequisite will update all modules since it depends on modules
    all_modules = update_modules()
    Prerequisite |> Repo.delete_all()
    for module <- all_modules do
      module_code = module.module_code
      url = "https://api.nusmods.com/v2/2021-2022/modules/#{module_code}"
      headers = []
      params = []

      {:ok, response} = HTTPoison.get(url, headers, params: params)
      IO.inspect(response)
    end
  end
end
