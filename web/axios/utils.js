import React, { Component } from "react";

import get from "lodash/get";
import pickBy from "lodash/pickBy";
import { useRouter } from "next/router";
import { updateToken } from "./request";
import cookie from "js-cookie";
const getArr = (obj, ltr) => get(obj, ltr) || [];

const getUser = () => {
  if (typeof window !== "undefined") {
    // const storedUser = localStorage.getItem("poshyak");
    // if (!storedUser) return null;

    // return JSON.parse(storedUser);
    const user = cookie.get("user");
    if (!user) return null;
    return JSON.parse(user);
  } else {
    return null;
  }
};
const removeCookie = () => {
  cookie.remove("poshyak");
};
const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return get(getUser(), "token");
  } else {
    return null;
  }
};

const updateAccessToken = () =>
  updateToken(
    get(getUser(), "token")
    /*getAccessToken()*/
  );
const getGroups = () => getArr(getUser(), "groups");

const isCustomer = () =>
  getGroups().findIndex((_item) => _item === "CUSTOMER") !== -1;

const getPermissions = (group = get(getGroups(), "0")) => {
  // console.log( get(permissions, group), "Gropus")
  if (!permissions || !group) return PublicList;
  return get(permissions, group);
};

const cleanObject = (object) =>
  pickBy(
    object,
    (value, key) => !(value === undefined || value === "" || value === null)
  );


export {
  getArr,
  getAccessToken,
  getGroups,
  isCustomer,
  getPermissions,
  getUser,
  cleanObject,
  removeCookie,
};
