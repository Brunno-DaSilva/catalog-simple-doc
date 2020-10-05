import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md")),
  },
  {
    path: "/css",
    title: "CSS",
    pages: [
      {
        path: "/css-intro",
        title: "CSS introduction",
        content: pageLoader(() => import("./CSS.md")),
      },
      {
        path: "/colors",
        title: "Color Pallet",
        content: pageLoader(() => import("./colors.md")),
      },
      {
        path: "/typography",
        title: "Fonts and Typeface",
        content: pageLoader(() => import("./typography.md")),
      },
    ],
  },
  {
    path: "/html",
    title: "HTML",
    pages: [
      {
        path: "/html-intro",
        title: "HTML Introduction",
        content: pageLoader(() => import("./HTML.md")),
      },
      {
        path: "/html-main",
        title: "HTML Main",
        content: pageLoader(() => import("./html-main.md")),
      },
    ],
  },
];

ReactDOM.render(
  <Catalog title="Frisco ISD" pages={pages} />,
  document.getElementById("catalog")
);
