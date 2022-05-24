import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface Route {
  id: number;
  path: string;
  element: FC;
}

export interface NavBarProps {
  open: boolean;
  setOpen?: (arg: boolean) => void;
  title?: string;
  theme?: any;
}

export interface BasicCardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  img?: HTMLImageElement;
}

export interface ScrollCardProps {
  content: React.ReactNode;
  text: React.ReactNode;
  background: string;
}

export interface NewsProps {
  id: string;
  urlToImage: string;
  author: string;
  title: string;
}
