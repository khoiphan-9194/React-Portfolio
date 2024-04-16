import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./components/About";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Download from './components/DownLoad';
import Error from './components/Error';

import Test from "./components/Test";
import { DateTime } from "./components/Date";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';





const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Download',
          element: <Download />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  



//ReactDOM.createRoot(document.getElementById('root')).render(<App />);
