import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import api from '../Api'
import domPurify from 'dompurify'

export default function Article() {


    const [articleInfo, setArticleInfo] = useState([])
    const [lastArticles, setLastArticles] = useState([])

    let { articleId } = useParams()


    const getAllArticles = () => {
        fetch(`${api}articles.json`)
            .then(res => res.json())
            .then(data => {
                setArticleInfo((Object.entries(data)).find(article => article[1].shortname === articleId))
                setLastArticles(Object.entries(data).reverse().slice(0, 3))
            })
    }

    useEffect(() => {
        getAllArticles()
    }, [articleId])

    console.log(articleInfo.htmlData);

    return (
        <>

            <Header />
            <Breadcrump title="HOME" subTitle={articleId} titleHref="/" />

            <div class="container-fluid py-5">
                <div class="container py-5">
                    {articleInfo.length > 0 &&
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="mb-5">
                                    <h6 class="text-primary mb-3">{articleInfo[1].date?.slice(0, 10)}</h6>
                                    <h1 class="mb-5">{articleInfo[1].title}</h1>
                                    <img class="img-fluid rounded w-100 mb-4" src={`/img/${articleInfo[1].image}`} alt="Image" />
                                    <p>{articleInfo[1].description}</p>
                                    <h2 class="mb-4">Est dolor lorem et ea</h2>
                                    <img class="img-fluid rounded w-50 float-left mr-4 mb-3" src="/img/blog-1.jpg" alt="Image" />
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                        est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                        sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                        nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                        sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                        voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                                        Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et,
                                        magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo
                                        tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed
                                        sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam
                                        takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet
                                        labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit.</p>
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                        est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                        sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                        nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                        sadipscing gubergren erat.</p>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: domPurify.sanitize(articleInfo[1].htmlData)}}></div>
                            </div>

                            <div class="col-lg-4 mt-5 mt-lg-0">
                                {/* <!-- Author Bio --> */}
                                <div class="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                    <img src="/img/user.jpg" class="img-fluid rounded-circle mx-auto mb-3" style={{ width: 100 }} />
                                    <h3 class="text-primary mb-3">John Doe</h3>
                                    <h3 class="text-uppercase mb-4" >Tag Cloud</h3>
                                    <p class="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
                                        no ut est ipsum erat kasd amet elitr</p>
                                </div>

                                {/* <!-- Search Form --> */}
                                <div class="mb-5">
                                    <form action="">
                                        <div class="input-group">
                                            <input type="text" class="form-control form-control-lg" placeholder="Keyword" />
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-transparent text-primary"><i
                                                    class="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* <!-- Category List --> */}
                                <div class="mb-5">
                                    <h3 class="text-uppercase mb-4" >Categories</h3>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Web Design</a>
                                            <span class="badge badge-primary badge-pill">150</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Web Development</a>
                                            <span class="badge badge-primary badge-pill">131</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Online Marketing</a>
                                            <span class="badge badge-primary badge-pill">78</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Keyword Research</a>
                                            <span class="badge badge-primary badge-pill">56</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Email Marketing</a>
                                            <span class="badge badge-primary badge-pill">98</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!-- Recent Post --> */}
                                {lastArticles.length > 0 &&
                                    <div class="mb-5">
                                        <h3 class="text-uppercase mb-4" >Recent Post</h3>

                                        {lastArticles.map(article => (
                                            <Link key={article[0]}
                                                class="d-flex align-items-center text-decoration-none mb-3" to={`/article/${article[1].shortname}`}>
                                                <img class="img-fluid rounded" src={`/img/${article[1].image}`} alt="" style={{ width: 80 }} />
                                                <div class="pl-3">
                                                    <h6 class="m-1">{article[1].title}</h6>
                                                    <small>{article[1].date?.slice(0, 10)}</small>
                                                </div>
                                            </Link>
                                        ))}


                                    </div>}

                                {/* <!-- Tag Cloud --> */}
                                <div class="mb-5">
                                    <h3 class="text-uppercase mb-4" >Tag Cloud</h3>
                                    <div class="d-flex flex-wrap m-n1">
                                        <a href="" class="btn btn-outline-primary m-1">Design</a>
                                        <a href="" class="btn btn-outline-primary m-1">Development</a>
                                        <a href="" class="btn btn-outline-primary m-1">Marketing</a>
                                        <a href="" class="btn btn-outline-primary m-1">SEO</a>
                                        <a href="" class="btn btn-outline-primary m-1">Writing</a>
                                        <a href="" class="btn btn-outline-primary m-1">Consulting</a>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
            <Footer />
        </>
    )
}
