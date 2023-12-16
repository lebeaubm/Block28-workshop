import { Link, useParams } from 'react-router-dom'


const SingleUser = ({ users }) => {

    const params = useParams()
    const id = params.id * 1


    const oneUser = users.find((user) => {
        return user.id === id
    })

    if(!oneUser) {
        return null
      } 
      
    return (
        <div>
            <h1>{oneUser.name}</h1>
            <h5>Address: {oneUser.address.city} </h5>
            <h5>Company: {oneUser.company.name}</h5>
            <h5>Email: {oneUser.email}</h5>
            <h5>Phone: {oneUser.phone}</h5>
            <h5>Username: {oneUser.username} </h5>
            <h5>Website: {oneUser.website} </h5>
            <Link to='/users'>All Users</Link>
        </div>
    )
    

}

export default SingleUser