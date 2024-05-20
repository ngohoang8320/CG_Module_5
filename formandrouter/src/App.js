import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FormTest from './component/FormTest';
import ListTest from './component/ListTest';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/create"><button>Create</button></NavLink><br /><br />
        <NavLink to="/accounts"><button>List</button></NavLink><br /><br />
        <Routes>
          <Route path='accounts' element={<ListTest />}></Route>
          <Route path='create' element={<FormTest />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
