import './App.css';
import { useRoutes } from 'react-router-dom';
import Routs from './Routs';
import { useContext, useEffect, useState } from 'react';
import api from './Pages/Api';
import AuthContext from './Context/authContext';



function App() {
  const [userInfo , setUserInfo] = useState(null)
  const [userID , setUserID] = useState(null)
  const [isLogin , setIsLogin] = useState(false)


  const logOutUser = () => {
    setIsLogin(false)
    localStorage.removeItem("token")
    setUserInfo(null)
  }

  useEffect(() => {

    if (localStorage.getItem("token")) {
       let token = (localStorage.getItem("token")) 

      fetch(`${api}users.json`)
        .then(res => res.json())
        .then(data => {
          for (const key in data) {
           if(data[key].id == token){
            setUserInfo(data[key])
            setIsLogin(true)
            setUserID(key)
           }  
          }
        })
    }


  }, [isLogin ])

  const Router = useRoutes(Routs)

  useEffect(() => {
    window.scrollTo(0 , 0)
  } , [Router])

  return (
    <AuthContext.Provider value={{logOutUser , isLogin , userInfo , setIsLogin ,userID}}>
      {Router}
    </AuthContext.Provider>
  );
}

export default App;
