import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={UploadMedia} />
          <Route path="/media/:id" component={MediaDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
