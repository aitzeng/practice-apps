import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

// const { useState, useEffect } = React;

// const [page, setPage ] = useState('')

render(

  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <App />
  </div>,
  document.getElementById("root")
);

