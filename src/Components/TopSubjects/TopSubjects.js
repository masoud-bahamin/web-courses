import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import SubjectBox from '../SubjectBox/SubjectBox'
import "./TopSubjects.css"

export default function TopSubjects({title}) {
    return (
        <div class="container-fluid py-5">
            <div class="container pt-5 pb-3">
                <SectionHeader title={title} subTitle={`Explore Top ${title}`}/>
                <div class="row">

                    <SubjectBox cover="/img/cat-1.jpg" title="Web Design" count="30 Courses" href="/category/Web"/>
                    <SubjectBox cover="/img/cat-2.jpg" title="Frontend" count="38 Courses" href="/category/Frontend"/>
                    <SubjectBox cover="/img/cat-3.jpg" title="Backend" count="22 Courses" href="/category/Backend"/>
                    <SubjectBox cover="/img/cat-4.jpg" title="Web Design" count="14 Courses" href="/category/Web-design"/>
                    <SubjectBox cover="/img/cat-5.jpg" title="Marketing" count="8 Courses" href="/category/Marketing"/>
                    <SubjectBox cover="/img/cat-6.jpg" title="Research" count="19 Courses" href="/category/Research"/>
                    <SubjectBox cover="/img/cat-7.jpg" title="Game" count="7 Courses" href="/category/Game"/>
                    <SubjectBox cover="/img/cat-8.jpg" title="SEO" count="76 Courses" href="/category/Seo"/>

                </div>
            </div>
        </div>
    )
}
