import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import MainImg from "../components/MainImg";
import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";

export default function service ({services, tekhnologii, modeliSotrudnichestva}){
    let listItemFirst = [
        {
            text: "Проектная разработка",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""

    },
        {
            text: "Разработка 1С решений",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg2.png",
            link: ""
    },
        {
            text: "Выделенная команда",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg3.png",
            link: ""
    },
        {
            text: "Разработка мобильных приложений",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
    },
        {
            text: "Архитектура IT-решений",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg5.png",
            link: ""
    },
        {
            text: "Расширение IT-команды",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg6.png",
            link: ""
    },
        {
            text: "Разработка пользовательского ПО",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""
    }
    ]
    let listItemSecond = [
        {
            text: "Разработка облачных сервисов",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""
    },
        {
            text: "Контроль качества ПО",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg2.png",
            link: ""
    },
        {
            text: "Разработка Веб-приложений",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg3.png",
            link: ""
    },
        {
            text: "Управление IT-проектами",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg4.png",
            link: ""
    },
        {
            text: "UI/UX дизайн",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg5.png",
            link: ""
    },
        {
            text: "Техническая поддержка",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg6.png",
            link: ""
    },
        {
            text: "Разработка баз данных для бизнеса",
            subText: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Cursus orci sit tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Lorem ipsum dolor sit amet, consec. Lorem ipsum dolor sit amet, consec",
            urlImg: "../serviceImg1.png",
            link: ""
    }
    ]

    const [showCard , setShowCard] = useState(false)
    const ClickButtonShowCard = () =>{
        setShowCard(!showCard)
    }

    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            {/*<MainImgForAnotherPage/>*/}
            <div style={{width: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Услуги</span>
                </div>
                <div className={style.title}>Услуги</div>
                <div className={style.cardList}  >
                    <span style={{paddingTop:22}} >
                        <ul style={{listStyleType: "none", columnCount: 2}}>
                            {services.data.map((item, index )=>(
                                <li key={index} className={style.li}><img src="../Ellipse.svg"/> {item.name}</li>
                            ))}
                        </ul>
                    </span>
                </div>

            </div>

            <div style={{width: 1084,   margin: "auto", display: "flex", justifyContent: "space-between", paddingTop: 150, flexWrap: "wrap"}}>
                {listItemFirst.map((item, index) =>(
                    <div key={index} className={style.cardStyle} >
                        <img src={item.urlImg}/>
                        <div className={style.titleCardText}>
                            {item.text}
                        </div>
                        <div className={style.subTitleCardText}>
                            {item.subText}
                        </div>
                        <div className={style.nextButtonStyle}>
                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                        </div>
                    </div>
                ))}
                {showCard ? listItemSecond.map((item, index) =>(
                    <div key={index} className={style.cardStyle} >
                        <img src={item.urlImg}/>
                        <div className={style.titleCardText}>
                            {item.text}
                        </div>
                        <div className={style.subTitleCardText}>
                            {item.subText}
                        </div>
                        <div className={style.nextButtonStyle}>
                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                        </div>
                    </div>
                )) :null}



            </div>
            <div style={{margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 70, paddingBottom:250}}>
                <button onClick={()=> ClickButtonShowCard()} className={style.buttonSeeAll}>
                    <div className={style.textButtonSeeAll}>
                        смотреть все
                    </div>
                </button>
            </div>
            <Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>
        </MainContainer>
    )
}

export const getServerSideProps = async () =>{
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