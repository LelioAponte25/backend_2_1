const userInfo = ({user, deleteCarById, setUpdateInfo}) => {

    //funciones de los botones 
    const handleDelete = () => {
        deleteCarById('/users', user.id )
    }
      
    //funcion del boton update
    const handleEdit = () => {
        setUpdateInfo(user)
    }

    return (
<article>
    <h3>{`#${user.id} ${user.first_name} ${user.last_name} `}</h3>
    <ul>
        <li><span>first_name: </span><span>{user.first_name}</span></li>
        <li><span>last_name: </span><span>{user.last_name}</span></li>
        <li><span>email: </span><span>{user.email}</span></li>
        <li><span>password: </span><span>{user.password}</span></li>
        <li><span>birthday: </span><span>{user.birthday}</span></li>
    </ul>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleEdit}>Edit</button>

    </article>
)
}

export default userInfo;