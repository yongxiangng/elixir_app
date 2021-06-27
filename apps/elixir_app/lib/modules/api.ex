defmodule Modules.API do
  alias Modules.Repo
  alias Modules.Module
  # import Ecto.Query

  def list_all_modules do
    Module |> Repo.all
  end

  def update_modules do
    url = "https://api.nusmods.com/v2/2018-2019/moduleList.json"
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
end
