import React from "react";
import Table from './table'
const  App = ()=> {
  const [title, setTitle] = React.useState("React Test App");

  return (
    <main>
      <h1 >{title}</h1>
      <Table></Table>
    </main>
  );
}

export default App;
