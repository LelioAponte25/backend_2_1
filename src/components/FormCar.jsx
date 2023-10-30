import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormCar = ({createNewCar, updateInfo, updateCarById, setUpdateInfo}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)
    },[updateInfo])


    const submit = data => {

        if(updateInfo){
            //update
            updateCarById('/users', updateInfo.id, data )
            setUpdateInfo(undefined)
        }else {
            //Create
            createNewCar('/users/', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }



    return (
<form onSubmit={handleSubmit(submit)}>
    <h2>{updateInfo ? 'Update this user' : 'Create New User'}</h2>
    <div>
        <label htmlFor="first_name">First_name  </label>
        <input {...register('first_name')} type="text" id="first_name" />
    </div>
    <div>
        <label htmlFor="last_name">last_name </label>
        <input {...register('last_name')}  type="text" id="last_name" />
    </div>
    <div>
        <label htmlFor="email">email </label>
        <input {...register('email')} type="text" id="email" />
    </div>
    <div>
        <label htmlFor="password">password </label>
        <input {...register('password')} type="password" id="password" />
    </div>
    <div>
        <label htmlFor="birthday">birthday </label>
        <input {...register('birthday')} type="text" id="birthday" />
    </div>
    <br />
    <button>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
)
}

export default FormCar