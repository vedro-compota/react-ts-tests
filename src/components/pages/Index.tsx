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
import ImaskKeepCursorPosition from './imaskKeepCursorPoz/ImaskKeepCursorPosition';
import SqlStringTest from './sqlstring-test/SqlStringTest';
import FlexColumnWidthNotByContent from './CSS/flex-column-width-not-by-content/FlexColumnWidthNotByContent';
import {SizeCheckerDemo} from './sizeCheck';
import RelativeInRelativeExample from "./CSS/relativeInRelativeExmaple/relativeInRelativeExmaple";
import { UseNotInitialEffectDemo } from "./hooks/UseNotInitialEffectDemo";
import { ExportToCsvDemo } from "./libs-tests/export-to-csv/ExportToCsvDemo";
import { Json2CsvDemo } from "./libs-tests/json2csv/Json2CsvDemo";
import { TooltipDemo } from "./libs-tests/material-ui/tooltip/TooltipDemo";
import { RmwcTooltipDemo } from "./libs-tests/rmwc-tooltip/TooltipDemo";
import { UseRefForObjectTest } from "./react/useRefForObjectTest";
import { RefCurrentAsPropTest } from "./react/refCurrentAsPropTest";
import FlexWithSpanChild from "./CSS/flex-with-span-child/FlexWithSpanChild";
import CannotUpdateWhileRenderDifferent from "./redux/redux-injectors/CannotUpdateWhileRenderDifferent/CannotUpdateWhileRenderDifferent";

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
          <li>
            <Link to="/imask-keep-cursor-position">imask Сохр. позиции курсора</Link>
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
          <Route
            path="/imask-keep-cursor-position"
            render={props =>
              <ImaskKeepCursorPosition  {...props} />}
          />
          <Route
            path="/sqlstring-test"
            render={props =>
              <SqlStringTest  {...props} />}
          />
          <Route
            path="/css/flex-column-width-not-by-content"
            render={props =>
              <FlexColumnWidthNotByContent  {...props} />}
          />
          <Route
            path="/size-checker-demo"
            render={props =>
              <SizeCheckerDemo  {...props} />}
          />
          <Route
            path="/relative-in-relative"
            render={props =>
              <RelativeInRelativeExample  {...props} />}
          />

          <Route
            path="/hooks/use-not-initial-effect"
            render={props =>
              <UseNotInitialEffectDemo  {...props} />}
          />

          <Route
            path="/libs/export-to-csv"
            render={props =>
              <ExportToCsvDemo  {...props} />}
          />

          <Route
            path="/libs/json2csv"
            render={props =>
              <Json2CsvDemo  {...props} />}
          />

          <Route
            path="/libs/mui/tooltip"
            render={props =>
              <TooltipDemo  {...props} />}
          />

          <Route
            path="/libs/rmwc-tooltip/tooltip"
            render={props =>
              <RmwcTooltipDemo  {...props} />}
          />

          <Route
            path="/react/use-ref-test"
            render={props =>
              <UseRefForObjectTest  {...props} />}
          />

          <Route
            path="/react/ref-current-as-prop"
            render={props =>
              <RefCurrentAsPropTest  {...props} />}
          />

          <Route
            path="/css/flex-with-span-child"
            render={props =>
              <FlexWithSpanChild  {...props} />}
          />
          <Route
            path="/redux/redux-injectors/CannotUpdateWhileRenderDifferent"
            render={props =>
              <CannotUpdateWhileRenderDifferent  {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}