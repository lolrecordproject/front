"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [nickname, tagline] = inputValue.split("#");
      const response = await axios.get(
        `http://localhost:8000/riotpost/${nickname}/${tagline}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="mx-auto h-screen bg-white">
        <div className="flex w-[80%] mx-auto justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-[80%] mt-4 mr-2 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={fetchData}
            className="w-[20%] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            검색
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {data && (
          <div className="mt-4 mx-auto w-[30%]">
            {data.result.map((item: any, index: any) => (
              <p key={index}>{item.toString()}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
