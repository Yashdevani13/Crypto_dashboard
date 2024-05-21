import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Support from '../src/Pages/Support/Support'
import Transactions from './Pages/Transactions/TransactionsPage';

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Dashboard/>
  },  
  {
    path:"/transaction",
    element:<Transactions/>
  }, 
  {
    path:"/support",
    element: <Support/>
  },
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
