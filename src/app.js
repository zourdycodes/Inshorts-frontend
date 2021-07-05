import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
// import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [content, setContent] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [category, setCategory] = useState("general");
  const [loadMore, setLoadMore] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
      );
      setContent(data.articles);
      setNewsResults(data.totalResults);
    };

    fetchData();
  }, [category, loadMore]);

  console.log(content);
  console.log(newsResults);

  return (
    <div id="#home">
      <Navigation setCategory={setCategory} />
      {content.map((article) => (
        <p key={article.id}>{article.author}</p>
      ))}
    </div>
  );
};
