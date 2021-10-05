import React from "react";
import {
  customerRoutes,
} from "./routes";
import {
  isCustomer,
} from "./utils";
const isBrowser = () => typeof window !== "undefined";
const AuthProvider = ({ router, children }) => {
  if (isBrowser()) { 
    if (customerRoutes.includes(router.pathname) && !isCustomer()) {
      console.log("only admin have access");
      router.push("/login");
      return null;
    }
    return children;
  }
  return null;
};

export default AuthProvider;
