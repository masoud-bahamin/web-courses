import React, { useEffect, useState } from 'react'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import api from '../Api'
import Breadcrump from "./../../Components/Breadcrump/Breadcrump"
import { useFetch } from '../../Hooks/useFetch'
import Loader from '../../Components/Loader/Loader'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert'

export default function Blogs() {

    const [articles, setArticles] = useState([])

    const [data, loading, error] = useFetch("articles.json")

    if (loading) return <Loader />

    return (
        <>
            <Header />
            <Breadcrump title="HOME" subTitle="Blogs" titleHref="/" />

            <div className='container py-5'>
                {error ? <ErrorAlert error={error} /> : (
                    <div className='row'>
                        {data.map(article => (
                            <ArticleBox key={article[0]} {...article[1]} />
                        ))}
                    </div>
                )}

            </div>



            <Footer />
        </>
    )
}
