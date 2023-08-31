import "@styles/global.css";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import LayoutPage from "@components/layout";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const route = useRouter();
    const loginRoute = route.pathname === '/';
  return (
      <>
          {loginRoute ? (
              <Component {...pageProps} />
          ) : (
              <LayoutPage>
                  <Component {...pageProps} />
              </LayoutPage>
          )}
      </>
  )

}

export default MyApp;
