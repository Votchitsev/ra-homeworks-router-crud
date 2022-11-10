import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/posts/new' element={ <NewPost /> }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
