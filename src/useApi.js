import { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get(url);
        setNews(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getNews();
  }, [url]);

  return { loading, news };
};
