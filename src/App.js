import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BodyContent from "./components/BodyContent";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <BodyContent/>
    },
    {
      path : "/watch",
      element : <WatchPage/>
    }
  ]
}])
function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
