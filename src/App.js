import './App.scss';
import Header from './components/shared/Header/Header';
import Home from './components/Home/Home';
import NewPost from './components/NewPost/NewPost';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home}></Route>
      <Route path="/new-post" exact component={NewPost}></Route>
    </div>
  );
}

export default App;
