import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './demo/App';
import DateMaskDemo from './dateMask/DateMaskDemo';
import CursorPositionSaver from './saveCursorPosition/CursorPositionSaver';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/date-mask">Маска для даты</Link>
          </li>
          <li>
            <Link to="/save-cursor">Сохр. позиции курсора</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route
            path="/date-mask"
            render={props =>
              <DateMaskDemo  {...props} />}
          />

          <Route
            path="/save-cursor"
            render={props =>
              <CursorPositionSaver  {...props} />}
          />


        </Switch>
      </div>
    </Router>
  );
}