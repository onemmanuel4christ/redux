import './App.css';
import Header from './containers/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListing />
    },
    {
      path: "/product/:productId",
      element: <ProductDetails />
    },
    {
      path: "*",
      element: <div>Not found</div>
    },
  ]);
  return (
    <div className="App">
      <Header />
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
