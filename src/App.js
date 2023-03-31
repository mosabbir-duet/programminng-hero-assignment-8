import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App container-xl px-0">
        <Header></Header>
        <Blogs></Blogs>
    </div>
  );
}

export default App;
