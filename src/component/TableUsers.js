import axios from 'axios'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fectchAllUser } from '../services/UserServices';

const TableUser = (props) =>{

   useEffect(()=>{
      //call api
      // axios.get("https://reqres.in/api/users?page=1").then(data =>{
      //    console.log('...check data', data);
      // })
      getUsers();
   }, [])

   const getUsers = async () =>{
      let res = await fectchAllUser();
      console.log("..check res", res);
   }
return (
   <> <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table></>
)

}
export default TableUser;