import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailedPost from './Components/DetailedPost/DetailedPost';
import Main from './Components/Main/Main';
import NewPost from './Components/NewPost/NewPost';
import ChangePost from './Components/ChangePost/ChangePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/posts/new' element={ <NewPost /> } />
        <Route path='/posts/:id' element={ <DetailedPost />}/>
        <Route path='/posts/change/:id' element={ <ChangePost /> } />
      </Routes>
    </Router>
  );
}

export default App;
