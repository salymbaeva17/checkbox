import React, {useEffect, useState} from "react";
import axios from "axios"
import UserItem from "./components/User";

const App = ({isChecked}) => {
    const [users, setUsers] = useState([])
    const [isCheckedAll, setCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])

    const handleCheck = (id) => {
        setSelected([...selected, users.find(item => item.id === id)])
    }

    useEffect(() => {
        axios(`https://614dcadde3cf1f001712d359.mockapi.io/api/employers`)
            .then(({data}) => setUsers(data))
    },[users])
  return (
      <div className='col-6 p-5 offset-3'>
          <table className="table">
              <thead className='table-success'>
              <tr>
                  <th scope="col">
                      <input type="checkbox"
                             onChange={(e) => setCheckedAll(e.target.checked)}/>
                  </th>
                  <th scope="col">Имя</th>
                  <th scope="col">Фамилия</th>
                  <th scope="col">Возраст</th>
              </tr>
              </thead>
              {
                  users.map(item =>
                      <UserItem key={item.id} item={item}
                                    isCheckedAll={isCheckedAll}
                                    handleCheck={handleCheck}
                      />
                  )
              }
          </table>
          <p>Пользователи:{
              selected.map(el =>
                  <span>{el.name }, </span>
              )}</p>
      </div>
  );
}

export default App;
