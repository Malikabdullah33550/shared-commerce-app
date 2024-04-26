import React from 'react'

const Users = ({usersArray}) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            UserName
          </th>
          <th>
            Password
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
          usersArray.map((user, ind)=>{
            return <tr key={ind}>
              <td>{ind+1}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td><button className='btn'>DEL</button></td>
              <td><button className='btn'>EDIT</button></td>
              </tr>
          })
          }
      </tbody>
    </table>
    </>
  )
}

export default Users
