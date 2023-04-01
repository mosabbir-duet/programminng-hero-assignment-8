import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App container-xl px-0">
        <Header></Header>
        <Blogs></Blogs>
        <Question></Question>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
