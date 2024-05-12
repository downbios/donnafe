import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { GlobalStyle } from "./styles/Globalstyle";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
