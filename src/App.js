import React from 'react';
import './App.css';

const data = [
  {id:1, name:"Sam", salary:"95000", age:"45", gender:"Male", dept:"Operations"},
  {id:2, name:"Bob", salary:"80000", age:"21", gender:"Male", dept:"Support"},
  {id:3, name:"Anne", salary:"125000", age:"25", gender:"Female", dept:"Analytics"},
  {id:4, name:"Julia", salary:"73000", age:"30", gender:"Female", dept:"Analytics"},
  {id:5, name:"Matt", salary:"159000", age:"33", gender:"Male", dept:"Sales"},
  {id:6, name:"Jeff", salary:"112000", age:"27", gender:"Male", dept:"Operations"},
]

function App() {

  return (
    <div className="App">
      <table>
        <tr style={{backgroundColor: "#FAFAFA"}}>
          <th>e_id</th>
          <th>e_name</th>
          <th>e_salary</th>
          <th>e_age</th>
          <th>e_gender</th>
          <th>e_dept</th>
        </tr>
        {data.map((val, key)=>{
          return(
            <tr key={key}>
              <td style={{textAlign:"end"}}>{val.id}</td>
              <td>{val.name}</td>
              <td style={{textAlign:"end"}}>{val.salary}</td>
              <td style={{textAlign:"end"}}>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.dept}</td>
            </tr>
          )
          
        })}

      </table>
    </div>
  );
}

export default App;
