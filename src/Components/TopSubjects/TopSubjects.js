import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import SubjectBox from '../SubjectBox/SubjectBox'
import "./TopSubjects.css"
import Img1 from "./../../img/cat-1.jpg"
import Img2 from "./../../img/cat-2.jpg"
import Img3 from "./../../img/cat-3.jpg"
import Img4 from "./../../img/cat-4.jpg"
import Img5 from "./../../img/cat-5.jpg"
import Img6 from "./../../img/cat-6.jpg"
import Img7 from "./../../img/cat-7.jpg"
import Img8 from "./../../img/cat-8.jpg"

export default function TopSubjects({title}) {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <SectionHeader title={title} subTitle={`Explore Top ${title}`}/>
                <div className="row">

                    <SubjectBox cover={Img1} title="Web Design" count="30 Courses" href="/category/Web"/>
                    <SubjectBox cover={Img2} title="Frontend" count="38 Courses" href="/category/Frontend"/>
                    <SubjectBox cover={Img3} title="Backend" count="22 Courses" href="/category/Backend"/>
                    <SubjectBox cover={Img4} title="Web Design" count="14 Courses" href="/category/Web-design"/>
                    <SubjectBox cover={Img5} title="Marketing" count="8 Courses" href="/category/Marketing"/>
                    <SubjectBox cover={Img6} title="Research" count="19 Courses" href="/category/Research"/>
                    <SubjectBox cover={Img7} title="Game" count="7 Courses" href="/category/Game"/>
                    <SubjectBox cover={Img8} title="SEO" count="76 Courses" href="/category/Seo"/>

                </div>
            </div>
        </div>
    )
}
