import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout/Layout";
import "./App.css";


function App(): React.ReactElement {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default withErrorBoundary(App, {
  fallback: <div>Something went wrong</div>
});
