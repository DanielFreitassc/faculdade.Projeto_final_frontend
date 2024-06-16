import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Login } from "./screens/Login";
import { AuthProvider } from "./context/AuthProvider";
import { AutorizacaoProvider } from "./context";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
      <AutorizacaoProvider>
      <Header/>
      <Home/>
      <Footer/>
      </AutorizacaoProvider>
      </div>
    )
  },
  {
    path:"/login",
    element: (
      <AuthProvider>
        <Login/>
      </AuthProvider>
    )
  },
]);
