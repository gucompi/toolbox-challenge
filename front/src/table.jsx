import React,  { useState, useEffect } from "react";
import {Table} from 'react-bootstrap'
const  App = ()=> {
  const [title, setTitle] = useState("React Test App");
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/files/data').then((res)=>res.json()).then((json)=>{
      setData(json)
    })
  }, []);
  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row)=>{
            return (
              <>
              {
              row.lines.map((line)=>{
                return (
              <tr>
                <td>{row.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>

                )
              })
            }
              </>
            )
          })}
        </tbody>
    </Table>
  );
}

export default App;
