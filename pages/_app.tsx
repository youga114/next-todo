import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { wrapper } from "../store";
import { Provider } from "react-redux";

const app: React.FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Header />
            <Component {...props.pageProps} />
            <Footer />
        </Provider>
    );
};

export default app;
