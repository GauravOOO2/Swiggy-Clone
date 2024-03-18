import { createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Signin from "./components/Signin";
// import Cart from "./components/Cart";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
// import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
// import CardsData from "./components/CardsData";

const Cart = lazy(()=>import('./components/Cart'))
const CardsData = lazy(()=>import('./components/CardsData'))
const Body = lazy(()=>import('./components/Body')  )




const Applayout = ()=>{
  return(
    <div>
    <Header />
    <Outlet />
  </div>
  )
  }

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[{
      path:'/',
      element:<Suspense fallback={'let me fetch someting delicious for u.....'} > <Body /></Suspense>
    },
    {
      path:'/Signin',
      element:<Signin />
    },
    {
      path:'/Cart',
      element: <Suspense fallback={<h1>Homie wait let it Load........</h1>} ><Cart /></Suspense> 
    },
    {
      path:'/CardData/:id',
      element: <Suspense fallback={ <h1> Too hungry? hold on ill let u order something..... </h1> } > <CardsData /> </Suspense>
    }
  ]
  }
])

function App() {
  return (
    <Provider store={store}  >
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
