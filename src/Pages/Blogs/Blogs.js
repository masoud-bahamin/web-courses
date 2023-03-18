import React, { useEffect, useState } from 'react'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import api from '../Api'
import Breadcrump from "./../../Components/Breadcrump/Breadcrump"

export default function Blogs() {

    const [articles, setArticles] = useState([])


    const getAllArticles = () => {
        fetch(`${api}articles.json`)
            .then(res => res.json())
            .then(data => setArticles(Object.entries(data)))
    }

    useEffect(() => {
        getAllArticles()
    }, [])

  return (
    <>
        <Header />
        <Breadcrump title="HOME" subTitle="Blogs" titleHref="/" />

        <div className='container py-5'>
            <div className='row'>
                {articles.map(article => (
            <ArticleBox {...article[1]} />
        ))}
            </div>
        </div>

        

        <Footer />
    </>
  )
}
