import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import MainImg from "../components/MainImg";
import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import styleTechno from "../styles/MainTechnoPage.module.css";
import Slider from "react-slick";
import Link from "next/link";

export default function techno({tekhnologii, services, modeliSotrudnichestva}) {
    let listItemFrontEnd = []
    let listItemBackEnd = []
    let listItemMobile = []
    let listItem1C = []

    const items = [
        {title: "FRONTEND"},
        {title: "BACKEND"},
        {title: "МОБИЛЬНАЯ РАЗРАБОТКА"},
        {title: "1С РАЗРАБОТКА"},
    ]
    for (let i=0; i< tekhnologii.data.length; i++){
        if (tekhnologii.data[i].group === "FRONTEND"){
            listItemFrontEnd.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "BACKEND"){
            listItemBackEnd.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "МОБИЛЬНАЯ РАЗРАБОТКА"){
            listItemMobile.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "1С РАЗРАБОТКА"){
            listItem1C.push(tekhnologii.data[i])
        }
    }

    const [showCard, setShowCard] = useState(false)
    const ClickButtonShowCard = () => {
        setShowCard(!showCard)
    }
    const [number, setNumber] = useState(0)
    const [delNumber, setDelNumber] = useState(2)

    const changeCardNumber = (value) => {
        if (value === "right" && number !== listItemFrontEnd.length - 1) {
            setNumber(number + 1)
            setDelNumber(delNumber + 1)
        } else if (value === "left" && number > 0) {
            setNumber(number - 1)
            setDelNumber(delNumber - 1)
        }
    }


    return (
        <MainContainer tekhnologii={tekhnologii} services={services}>
            {/*<MainImgForAnotherPage/>*/}
            <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Технологии</span>
                </div>
                <div className={style.title}>Технологии</div>

                <div style={{
                    width: 1084,
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 70,
                    flexWrap: "wrap"
                }}>
                    {items.map((itemTitle, index) => (
                        <div key={index} className={styleTechno.cardTechno}>
                            <div className={styleTechno.titleCardTechno}>
                                {itemTitle.title}
                            </div>
                            <div style={{paddingTop: 22}}>
                                <ul style={{listStyleType: "none"}}>
                                    {tekhnologii.data.map((item, index) => (
                                        <>
                                            {itemTitle.title === item.group ? <li key={index} className={styleTechno.li}><img src="../Ellipse.svg"/> {item.name}</li>: null}
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>


            </div>


            <div>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>Frontend</div>
                </div>
                <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{
                        width: 1084,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 70,
                        flexWrap: "wrap"
                    }}>
                    {listItemFrontEnd.slice(number, delNumber).map((item, index) => (
                                <div key={index} className={styleTechno.cardTechnologies}>
                                    <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                    <div className={styleTechno.titleCardTechnologies}>
                                        {item.name}
                                    </div>
                                    <div className={styleTechno.subTitleCardTechnologies}>
                                        {item.preview_text}
                                    </div>
                                    <Link href={`/techno/${item.id}`}>
                                        <div className={styleTechno.buttonNext}>
                                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                           src="../Arrow2.svg"/>
                                        </div>
                                    </Link>
                                </div>
                    ))}
                </div>
                <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    ><img
                        src="../right.svg"/></button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    ><img
                        src="../left.svg"/></button>
                </div>
            </div>
            <div>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>BACKEND</div>
                </div>
                <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{
                        width: 1084,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 70,
                        flexWrap: "wrap"
                    }}>
                    {listItemBackEnd.slice(number, delNumber).map((item, index) => (
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}>
                                <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.name}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.preview_text}
                                </div>
                                <div className={styleTechno.buttonNext}>
                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                   src="../Arrow2.svg"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    ><img
                        src="../right.svg"/></button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    ><img
                        src="../left.svg"/></button>
                </div>
            </div>
            <div>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>МОБИЛЬНАЯ РАЗРАБОТКА</div>
                </div>
                <hr style={{width: 900, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{
                        width: 1084,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 70,
                        flexWrap: "wrap"
                    }}>
                    {listItemMobile.slice(number, delNumber).map((item, index) => (
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}>
                                <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.name}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.preview_text}
                                </div>
                                <div className={styleTechno.buttonNext}>
                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                   src="../Arrow2.svg"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    ><img
                        src="../right.svg"/></button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    ><img
                        src="../left.svg"/></button>
                </div>
            </div>
            <div>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.title}>1C РАЗРАБОТКА</div>
                </div>
                <hr style={{width: 700, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                <div
                    // className={styleTechno.aaa}
                    style={{
                        width: 1084,
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 70,
                        flexWrap: "wrap"
                    }}>
                    {listItem1C.slice(number, delNumber).map((item, index) => (
                        <>
                            <div key={index} className={styleTechno.cardTechnologies}>
                                <div style={{width: 522, height: 340, backgroundColor: "#fdba06"}}>
                                    <div style={{fontSize: 32, fontWeight: "bold", color: "#7c3300", padding: 20}}>{item.name}</div>
                                    <div style={{position: "absolute", width: 200, height: 263, background: "linear-gradient(#fdba06, #d25e01)"}}>

                                    </div>
                                    <img src="../ico_1c_logo_opt.svg" style={{width: 200, height: 100, float: "right", marginTop: 120, marginRight: 50
                                        }}/>
                                </div>
                                {/*<img src={item.preview_img} style={{width: 522, height: 340}}/>*/}
                                <div className={styleTechno.titleCardTechnologies}>
                                    {item.name}
                                </div>
                                <div className={styleTechno.subTitleCardTechnologies}>
                                    {item.preview_text}
                                </div>
                                <Link href={`/techno/${item.id}`}>
                                    <div className={styleTechno.buttonNext}>
                                        Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                       src="../Arrow2.svg"/>
                                    </div>
                                </Link>

                            </div>
                        </>
                    ))}
                </div>
                <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                    <button style={{width: 50, height: 50, marginRight: 15}}
                            onClick={() => changeCardNumber("left")}
                    ><img
                        src="../right.svg"/></button>
                    <button style={{width: 50, height: 50}}
                            onClick={() => changeCardNumber("right")}
                    ><img
                        src="../left.svg"/></button>
                </div>
            </div>


            <Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>

        </MainContainer>
    )
}

export const getServerSideProps = async () => {
    console.log("tekhnologii")
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    return {
        props: {
            tekhnologii,
            services,
            modeliSotrudnichestva
        },
    }
}