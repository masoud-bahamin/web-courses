import React, { useEffect, useState } from 'react'
import api from '../../Pages/Api'
import SectionHeader from '../SectionHeader/SectionHeader'
import TeacherBox from '../TeacherBox/TeacherBox'

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


  return (
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-5">
                <SectionHeader title="Teachers"  subTitle="Meet Our Teachers" />
            </div>
            <div class="row">
              {teachers.map(teacher => (
                <TeacherBox  key={teacher[0]} {...teacher[1]} job="Web Designer"/>
              ))}
                
                {/* <TeacherBox cover="/img/team-2.jpg" name="Jim Kary" job="Web Designer"/>
                <TeacherBox cover="/img/team-3.jpg" name="Dol Mount" job="Web Designer"/>
                <TeacherBox cover="/img/team-4.jpg" name="Jim Lory" job="Web Designer"/> */}

            </div>
        </div>
    </div>
  )
}
