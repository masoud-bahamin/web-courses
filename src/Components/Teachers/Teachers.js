import React, { useEffect, useState } from 'react'
import api from '../../Pages/Api'
import SectionHeader from '../SectionHeader/SectionHeader'
import TeacherBox from '../TeacherBox/TeacherBox'
import Img1 from "./../../img/team-1.jpg"
import Img2 from "./../../img/team-2.jpg"
import Img3 from "./../../img/team-3.jpg"
import Img4 from "./../../img/team-4.jpg"

export default function Teachers() {

  const [teachers , setTeachers] = useState([])

  const getAllUsers = () => {
    fetch(`${api}users.json`)
      .then(res => res.json())
      .then(data => {
        let allTeachers = (Object.entries(data)).filter(user => user[1].role ==="ADMIN")
        setTeachers(allTeachers)
      })
  }

  useEffect(() => {
    getAllUsers()
  } ,[])

  const images = [Img1 ,Img2 , Img3 , Img4]

  return (
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <SectionHeader title="Teachers"  subTitle="Meet Our Teachers" />
            </div>
            <div className="row">
              {teachers.map((teacher , index) => (
                <TeacherBox  key={teacher[0]} {...teacher[1]} job="Web Designer" img={images[index]}/>
              ))}
                
                {/* <TeacherBox cover="/img/team-2.jpg" name="Jim Kary" job="Web Designer"/>
                <TeacherBox cover="/img/team-3.jpg" name="Dol Mount" job="Web Designer"/>
                <TeacherBox cover="/img/team-4.jpg" name="Jim Lory" job="Web Designer"/> */}

            </div>
        </div>
    </div>
  )
}
