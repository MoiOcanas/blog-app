import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/layout/navbar/Navbar';
import CreatePost from './components/posts/createPost/CreatePost';
import PostDetails from './components/posts/postDetails/PostDetails';
import EditPost from './components/posts/editPost/EditPost';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/create" component={CreatePost} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/edit/:id" component={EditPost} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
