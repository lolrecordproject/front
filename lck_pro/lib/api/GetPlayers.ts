import axios from "axios";

export async function getPlayerByTeam(name: string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:8000/getplayerbyteam/${name}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching player data: ${error.message}`);
  }
}
