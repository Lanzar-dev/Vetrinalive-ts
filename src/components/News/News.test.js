import React from "react";
import "@testing-library/jest-dom";
import axios from "axios";

import { render, screen } from "@testing-library/react";
import News from "./News";

jest.mock("axios");

describe("News Component", () => {
  test("fetches stories from an API and displays them", async () => {
    const news = [
      {
        id: "1",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Hello world",
      },
      {
        id: "2",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "JavaAcript",
      },
      {
        id: "3",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Reactjs",
      },
      {
        id: "4",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Angular",
      },
      {
        id: "5",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "React Hooks",
      },
      {
        id: "6",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Typescript",
      },
      {
        id: "7",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Nodejs",
      },
      {
        id: "8",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Python news",
      },
      {
        id: "9",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Nextjs news",
      },
      {
        id: "10",
        urlToImage: "urlToImage",
        author: "BBC News",
        title: "Architectural pattern",
      },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { articles: news } })
    );

    render(<News />);

    const items = await screen.findAllByTestId("gridItems");

    expect(items).toHaveLength(10);

    // screen.debug();
  });

  test("should not have text of Latest news", () => {
    render(<News />);

    const text = screen.queryByText(/Latest news/i);
    // screen.debug();
    expect(text).toBeNull();
  });
});
