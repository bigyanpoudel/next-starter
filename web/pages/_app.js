import App from "next/app";
import Head from "next/head";
import React from "react";
import { createStore } from "redux";
import "../styles/globals.css";
import reducers from "../redux/reducer";
import { Provider } from "react-redux";
import middleware from "../redux/middleware";
import AuthProvider from "../axios/AuthProvider";
import NextNprogress from "nextjs-progressbar";
import { toast } from "react-toastify";
toast.configure({
  // style: {
  //   marginLeft:"0"
  // },
  autoClose: 5000,
  newestOnTop: true,
  hideProgressBar: true,
  closeButton: false,
  bodyClassName: "toastBody",
  position: "bottom-left",
});
const store = createStore(reducers, middleware);
class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getStaticProps(ctx)
      : {};

    return { pageProps: pageProps };
  }
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <Provider store={store}>
          <AuthProvider router={router}>
            <Component {...pageProps} />
          </AuthProvider>
        </Provider>
        <NextNprogress
          color="var(--color-darker)"
          startPosition={0.2}
          stopDelayMs={100}
          height={5}
          showOnShallow={true}
          options={{showSpinner: false}}
        />
      </>
    );
  }
}
export default MyApp;
