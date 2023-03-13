import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {
    const schema = yup.object().shape({
        title: yup.string().required("Needed"),
        description: yup.string().required("Needed"),
    })

    const { register, handleSubmit } = useForm ({
        resolver: yupResolver(schema),
    })

    const onCreatePost = (data) => {
        console.log(data)

    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder="Title ..." {...register('title')} className="border"/>
            <textarea placeholder="description" className="border"/>
            <button type="submit" className="border">Submit</button>
        </form>
    )
}