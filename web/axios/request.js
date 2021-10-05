import axios from "axios";

const url = {
  base:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/"
      : "https://poshyak.com/api/",
};

const headers = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    // token: accessToken,
    withCredentials: true,
  },
};

const axiosFormDataConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    // token: accessToken,
    withCredentials: true,
  },
};

const updateToken = (token) => (headers.headers.token = token);

function getConfig(header = {}) {
  // To add custom header for some request
  const config = { ...headers }; //:TODO when redo check file upload also
  config.headers = { ...config.headers, ...header };
  return config;
}

const request = {
  get: (path, header = {}) => axios.get(url.base + path, getConfig(header)),
  fetcher: (path, header = {}) =>
    axios
      .get(url.base + path, getConfig(header))
      .then((res) => {
        // console.log(res,"response");
        const status = res.status;
        console.log("error", status);
        return res.data;
      })
      .catch((err) => {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        console.log("errro in catch block", error);
        throw error;
      }),
  searchfetcher: (path, data, header = {}) =>
    axios
      .get(url.base + path, {
        ...getConfig(header),
        ...{
          params: {
            customer_type: data.customer_type,
            delivery_status: data.deliver_status,
          },
        },
      })
      .then((res) => {
        console.log(res, "response");
        console.log(res, data);
        const status = res.status;
        console.log("error", status);
        return res.data;
      })
      .catch((err) => {
        const error =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        console.log("errro in catch block", error);
        throw error;
      }),
  delete: (path, header = {}) =>
    axios.delete(url.base + path, getConfig(header)),
  post: (path, data, header = {}) =>
    axios.post(url.base + path, data, getConfig(header)),
  put: (path, data, header = {}) =>
    axios.put(url.base + path, data, getConfig(header)),
  posts: (path, data, header = {}) => axios.post(path, data, getConfig(header)),
  patch: (path, data, header = {}) =>
    axios.patch(url.base + path, data, getConfig(header)),
  // postFormData: function (url, data) { return axios.post(`${config.apiEndpoint + url}`, data, axiosFormDataConfig)},
  putFormData: function (path, data) {
    return axios.put(url.base + path, data, axiosFormDataConfig);
  },
};

const getServerSideRequest = async (url) => {
  try {
    const res = await request.get(url);
    const status = res.status;
    // console.log(status, "products  in serverSideProps");
    return {
      props: {
        status,
        data: res.data,
      },
    };
  } catch (e) {
    // console.log("error in serverside", e);
    return {
      props: {
        status: e.response.status,
        error: e.response.data,
      },
    };
  }
};
const getServerSideRequestById = async (url, id) => {
  try {
    const res = await request.get(url);
    const status = res.status;
    // console.log(status, "products  in serverSideProps");
    return {
      props: {
        id,
        status,
        data: res.data,
      },
    };
  } catch (e) {
    // console.log("error in serverside", e.response.data);
    return {
      props: {
        id,
        status: e.response.status,
        error: e.response.data,
      },
    };
  }
};
export {
  request,
  updateToken,
  getServerSideRequest,
  url,
  getServerSideRequestById,
};
