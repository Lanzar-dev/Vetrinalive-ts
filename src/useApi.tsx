import { useState, useEffect } from "react";
import axios from "axios";

import { NewsProps } from "./utils/app.model";

type GetNews = () => Promise<void>;

export const useApi = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    const getNews: GetNews = async () => {
      try {
        const res = await axios.get(url);
        setNews(res.data?.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getNews();
  }, [url]);

  return { loading, news } as const;
};
