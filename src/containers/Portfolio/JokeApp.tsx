import React, { useEffect, useState } from "react";

const JokeApp = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setJoke(data.value);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h3>Joke</h3>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        joke && (
          <div className="text-center">
            <div className="p-3 border rounded">
              <p>{joke}</p>
            </div>
            <button onClick={fetchData} className="btn btn-primary mt-3">
              Another joke
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default JokeApp;
