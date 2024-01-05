import Link from "next/link";
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Image from 'next/image';

import style from "../styles/Index.module.css"
import style2 from "../styles/user.module.scss"
import AboutUs from "../components/AboutUs";
import OurValue from "../components/OurValue";
import styleValue from '../styles/AboutUs.module.css'
import Mission from "../components/Mission";
import Technologies from "../components/Technologies";
import Cooperation from "../components/Cooperation";
import Project from "../components/Project";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import {useState} from "react";
import MainImg from "../components/MainImg";
import SendForm from "../components/SendForm";
import styleOfferText from "../styles/Offer.module.css"
import styleButton from "../styles/Index.module.css";
import Project2 from "../components/Project2";
import Cooperation2 from "../components/Cooperation2";




const Index = ({cardText, tekhnologii, modeliSotrudnichestva,services}) => {

    return (
        <MainContainer keywords={"main page"} services={services} tekhnologii={tekhnologii}>
            <div>
                <MainImg/>
                <SendForm/>


                <div>

                    <div style={{display: "flex",   margin: "auto", paddingTop: 300, width: 1100 }}>
                         <span className={style.imgStyle}>
                         </span>
                        <span >

                         <img src="../whyWeAre.png" style={{zIndex: 2}} />
                        <img src="../Group59.svg" style={{position: "absolute", zIndex: 1, left: 0}} />
                         </span>
                        <span style={{paddingLeft: 150, paddingTop: 50}}>
                            <div className={style.textWhoWeAreMain} style={{paddingBottom: 20}}>
                                Кто мы?
                            </div>

                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                                Мы - молодая, динамично развивающаяся <br/>
                                и финансово независимая IТ-компания, часть <br/>
                                международного холдинга Sellwin Group, <br/>
                                резидент Парка Высоких Технологий.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             Специализируемся на разработке программного <br/>
                                обеспечения для дистрибьюции, розничной <br/>
                                торговли и производства.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             У нас 20 высококвалифицированных специалистов,<br/>
                                которые детально погружены в бизнес клиентов.
                            </div>

                        </span>
                    </div>


                </div>

                <div style={{backgroundImage: "Url(/1781.png)", height: 370, marginTop:250}}>
                    <div style={{display: "flex"}}>
                        <span>
                             <img src="../1787.svg" />
                        </span>
                        <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                        <span className={style.textSellwinDescription}>
                              Анализ, проектирование, разработка программного <br/>
                            обеспечения информационных систем.
                            Разработка <br/> мобильных приложений, отчетность,
                            аналитика, <br/> а также аутсорсинговые услуги.
                        </span>
                        <span style={{float: "right"}}>
                               <img  src="../1786.svg" />
                        </span>
                    </div>
                </div>
                <div style={{paddingTop: 244}}>
                    <img src="../ill.png" style={{position: "absolute", left: "21%", }} />
                    <div style={{backgroundImage: "linear-gradient(to bottom right, #c2e8ff, #a8d0ff)", width: 1078, margin: "auto", height: 450, borderRadius: 20}}>
                        <div className={styleOfferText.mainTextOffer}>
                        Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", paddingTop:165}}>
                            <span style={{zIndex: 777, paddingLeft: 80,}}>
                                 <button className={style.inputButton} style={{width: 270}}>
                                    Написать нам
                                </button>
                            </span>
                            <span style={{zIndex: 777,  position: "absolute" , marginTop: -100, left: "60%"}}>
                                 <img src="../ill_2.svg"  />
                            </span>
                        </div>
                    </div>
                </div>


                {/*<AboutUs/>*/}



                <OurValue cardText={cardText}/>

                <Mission/>

                <div style={{backgroundImage: "Url(/bgsS.png)", height: 495, marginTop:254}}>
                    <div style={{display: "flex"}}>
                        <span>
                             <img src="../bgLeft.png" />
                        </span>
                        <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                        <span className={style.textSellwinDescription}>
                            Важнейшими преимуществами программных продуктов, <br/>
                            произведенных компанией, является их глубочайшая<br/>
                            отраслевая экспертиза, конкурентная цена, высокий <br/>
                            уровень сервисного обслуживания.
                        </span>
                        <span style={{float: "right"}}>
                               <img  src="../bgRight.png" />
                        </span>
                    </div>
                </div>

                <div style={{paddingTop: 244}}>
                    <img src="../ill.png" style={{position: "absolute", left: "21%", }} />
                    <div style={{backgroundImage: "linear-gradient(to bottom right, #c2e8ff, #a8d0ff)", width: 1078, margin: "auto", height: 450, borderRadius: 20}}>
                        <div className={styleOfferText.mainTextOffer}>
                            Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", paddingTop:165}}>
                            <span style={{zIndex: 777, paddingLeft: 80,}}>
                                 <button className={style.inputButton} style={{width: 270}}>
                                    Написать нам
                                </button>
                            </span>
                            <span style={{zIndex: 777,  position: "absolute" , marginTop: -100, left: "60%"}}>
                                 <img src="../ill_2.svg"  />
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{paddingTop: 250}}>
                    <img src="../ill.png" style={{position: "absolute", left: "21%", }} />
                    <div style={{backgroundImage: "linear-gradient(to bottom right, #c2e8ff, #a8d0ff)", width: 1078, margin: "auto", height: 450, borderRadius: 20}}>
                        <div className={styleOfferText.mainTextOffer}>
                            Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", paddingTop:165}}>
                            <span style={{zIndex: 777, paddingLeft: 80,}}>
                                 <button className={style.inputButton} style={{width: 270}}>
                                    Написать нам
                                </button>
                            </span>
                            <span style={{zIndex: 777,  position: "absolute" , marginTop: -100, left: "60%"}}>
                                 <img src="../ill_2.svg"  />
                            </span>
                        </div>
                    </div>
                </div>


                <Technologies tekhnologii={tekhnologii}/>
                {/*<Project/>*/}
                <Project2/>




                {/*<Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>*/}
                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>

                <Partners/>
                <WriteMe/>

            </div>
        </MainContainer>
    );


};

export default Index;

export const getServerSideProps = async () =>{
    console.log("11111111111")


    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}
