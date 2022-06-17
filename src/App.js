import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import {fetchUsersList} from './redux/slices/usersSlice';
import {fetchUserData} from './redux/slices/userSlice';

import {Routes,Route} from "react-router-dom"
import Login from './Login';
import Todos from './Todos';





function App(){





  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100%"}}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todos" element={<Todos/>} />
      </Routes>
    </div>
  )
}





















// function App() {
//   const dispatch = useDispatch()

//   const {users,status} = useSelector(store => store.users);

//   const {user,status:userStatus} = useSelector(store=>store.user)
//   return (
//     <div className="App">
//       <button onClick={()=>dispatch(fetchUsersList())}>fetch data</button>
//       <span>{status}</span>
//       {users.map(user => <div key={user.id}>{user.name}</div>)}
//       <br />
//       <br />
//       <br />
//       <br />
//       <h1>user:</h1>
//       <span>{userStatus}</span>
//       <button onClick={()=>dispatch(fetchUserData(1))}>get user</button>
//       <span>{user?.name}</span>
//     </div>
//   );
// }

export default App;
