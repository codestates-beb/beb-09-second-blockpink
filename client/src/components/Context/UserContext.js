import { createContext } from "react";

export const UserContext = createContext({
  isLogin: false,
  accessToken: "",
  address: "",
  token_amount: "",
  eth_amount: "",
  nfts: [],
  posts: [],
});
