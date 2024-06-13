import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import listRouter from "./routes/routes";

export default function App() {
  return (
    <>
    <Routes>
        {listRouter.map((route, index) => {
          const ComponentSelect = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<ComponentSelect />}
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  )
}