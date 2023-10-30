import { useEffect, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import FormCar from './components/FormCar'
import UserInfo from './components/UserInfo'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const baseUrl = 'https://backend-2-dev-xade.3.us-1.fl0.io'
  const [users,
      getAllCars,
      createNewCar,
      deleteCarById,
      updateCarById
  ] = useFecth(baseUrl)
  

    useEffect(() => {
      getAllCars('/users/')
    },[])

    console.log(users)

  return (
    <div>
      <FormCar
      createNewCar={createNewCar}
      updateInfo={updateInfo}
      updateCarById={updateCarById}
      setUpdateInfo={setUpdateInfo}
      />
      <div>
        {
          users?.map(user => (
            <UserInfo
            key={user.id}
            user={user}
            deleteCarById={deleteCarById}
            setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
