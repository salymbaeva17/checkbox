import {useEffect, useState} from "react";

const UserItem = ({person, idx, selectAll, selectedUser, setSelectedUser, people, setSelectAll, setType, type}) => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        // проверяет равно ли общее количество количеству добавленных
        if (people.length === selectedUser.length){
            setType("all")
            setSelectAll(true)
        } else {
            setType("one")
            setSelectAll(false)
        }
    }, [people.length, selectedUser.length, setSelectAll, setType])


    // смотрит за изменением типа события и изменилась ли общая галочка
    useEffect(() => {
        if (type === 'all'){
            setChecked(selectAll)
        }
    }, [selectAll, type])

    const isCheck =  (e) => {
        setChecked(e.target.checked)
        if (e.target.checked) {
            // если отметили то добавляем в массив выбранных
            setSelectedUser([...selectedUser, person])
        } else {
            // если стало false то удаляем из массива
            setSelectedUser(selectedUser.filter(item => item.id !== person.id))
        }
    }
    return (
        <tr key={person.id}>
            <td><input type="checkbox" checked={checked} onChange={isCheck}/></td>
            <td>{idx + 1}</td>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.age}</td>
        </tr>
    );
};

export default UserItem;