import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

// export default function User({value}) {
//     const {query} = useRouter()
//     return (
//         <MainContainer keywords={value.data.name}>
//             <div className={styles.user}>
//                 <h1>Пользователь c id {query.id}</h1>
//                 <div>Имя пользователя - {value.data.name}</div>
//             </div>
//         </MainContainer>
//     )
// };


import style from "../../styles/Service.module.css"

import styleTechnoOne from "../../styles/TechnologiesOne.module.css"
import Cooperation from "../../components/Cooperation";
import Partners from "../../components/Partners";
import WriteMe from "../../components/WriteMe";
import MainImgForAnotherPage from "../../components/MainImgForAnotherPage";
import {useState} from "react";

export default function technologiesOne({value, modeliSotrudnichestva, tekhnologii, services}) {
    const {query} = useRouter()
    const [showCardInfo, setShowCardInfo] = useState(false)
    const [indexToShowCardInfo, setIndexToShowCardInfo] = useState(777)
    let array = [
        {
            text: "Автоматизация: 1С: Конвертация данных позволяет автоматизировать процесс конвертации" +
                " данных из одной системы в другую. Она может обрабатывать большие объемы" +
                " данных и выполнять сложные преобразования, что позволяет значительно " +
                "сократить время и усилия, затрачиваемые на ручную конвертацию данных.",
            icon: "../lider.svg",
            number: 1
        },
        {
            text: "Сохранение данных: При конвертации данных с использованием 1С: Конвертации" +
                " данных соблюдаются все правила и ограничения исходных данных, что позволяет сохранить" +
                " целостность и точность информации. Это важно для бизнеса, чтобы избежать" +
                " потери или искажения данных, которые могут повлиять на принятие важных решений",
            icon: "../lider.svg",
            number: 2
        },
        {
            text: " Гибкость и настраиваемость: 1С: Конвертация данных предоставляет широкие " +
                "функциональные возможности и гибкую настройку. Это позволяет адаптировать процесс " +
                "конвертации под конкретные потребности и требования бизнеса. Можно определить различные правила преобразования, " +
                "добавить дополнительные проверки и действия, а также настроить форматы и " +
                "маппинги данных в соответствии с конкретными требованиями.",
            icon: "../lider.svg",
            number: 3
        }
    ]
    let array2 = [
        {
            text: "Автоматизация: 1С: Конвертация данных позволяет автоматизировать процесс конвертации" +
                " данных из одной системы в другую. Она может обрабатывать большие объемы" +
                " данных и выполнять сложные преобразования, что позволяет значительно ",
            img: "../serviceImg1.png",
            title: "Сохранение данных"
        },
        {
            text: "Сохранение данных: При конвертации данных с использованием 1С: Конвертации" +
                " данных соблюдаются все правила и ограничения исходных данных, что позволяет сохранить" +
                " целостность и точность информации. Это важно для бизнеса, чтобы избежать",
            img: "../serviceImg2.png",
            title: "Это важно для бизнеса"
        },
        {
            text: " Гибкость и настраиваемость: 1С: Конвертация данных предоставляет широкие " +
                "функциональные возможности и гибкую настройку. Это позволяет адаптировать процесс " +
                "конвертации под конкретные потребности и требования бизнеса. Можно определить различные",
            img: "../serviceImg1.png",
            title: "Конвертация данных"
        }
    ]

    const showAdvantage = (index) => {
        setShowCardInfo(!showCardInfo)
        setIndexToShowCardInfo(index)
    }
    const showAdvantageOnMouseLeave = () => {
        setShowCardInfo(false)
        setIndexToShowCardInfo(777)
    }


    return (
        <MainContainer services={services} tekhnologii={tekhnologii}>
            <MainImgForAnotherPage/>
            <div style={{width: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span>Технологии &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>{value.data.name}</span>
                </div>
            </div>
            <div style={{backgroundImage: "Url(/technoOne.png)"}} className={styleTechnoOne.firstImgLogo}>
                <div className={styleTechnoOne.firstImgLogoText}>
                    С нами выигрывают, <br/>
                    используя {value.data.name}
                </div>
            </div>

            <div className={styleTechnoOne.title}>
                Преимущества
            </div>
            {/*<div className={styleTechnoOne.smallCardBlock}>*/}
            {/*    {array.map((item , index)=> (*/}
            {/*        <span key={index} className={styleTechnoOne.smallCard}>*/}
            {/*       <img style={{paddingTop: 34, paddingLeft: 34}} src={item.icon}/>*/}
            {/*       <div className={styleTechnoOne.bigNumber}>*/}
            {/*           {item.number}*/}
            {/*       </div>*/}
            {/*        <div className={styleTechnoOne.smallCardText}>*/}
            {/*            {item.text}*/}
            {/*        </div>*/}
            {/*   </span>*/}
            {/*    ))}*/}
            {/*</div> */}
            <div className={styleTechnoOne.smallCardBlock}>
                {value.data.link.map((item, index) => (
                    <>
                        {showCardInfo && index === indexToShowCardInfo ?
                            <span key={index}
                                  onClick={() => showAdvantage(index)}
                                  onMouseLeave={() => showAdvantage()}
                                  className={styleTechnoOne.smallCard}
                                  style={{
                                      backgroundImage: `url(${item.img})`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "cover"
                                  }}
                            >
                            <div className={styleTechnoOne.smallCardText} style={{backgroundColor: "#b4ddfa", width: 348, height: 387, paddingTop: 25, opacity: 0.75}}>
                        {item.text}
                    </div>
               </span>
                            :
                            <span key={index}
                                  onClick={() => showAdvantage(index)}
                                  className={styleTechnoOne.smallCard}
                                  style={{
                                      backgroundImage: `url(${item.img})`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "cover"
                                  }}
                            >
                        <div className={styleTechnoOne.smallCardTitleText}
                             style={{marginTop: index * 70, width: 340,  paddingTop: 25, opacity: 0.75}}>
                            {item.name}
                        </div>
               </span>
                        }
                    </>


                ))}
            </div>


            <div style={{paddingTop: 251}} className={styleTechnoOne.title}>
                в наших проектах мы <br/> используем {value.data.name}
            </div>
            <div className={styleTechnoOne.mainInfoBlock}>
                <span>
                    <p className={styleTechnoOne.textMainInfoBlock}>
                        {value.data.detail_text}
                    </p>
                   </span>
                <span>
                    { value.data.name.includes("1С:") ?
                        <>
                            <div style={{width: 546, height: 570, backgroundColor: "#fdba06"}}>
                                <div style={{fontSize: 52, fontWeight: "bold", color: "#7c3300", padding: 20}}>{value.data.name}</div>
                                <div style={{position: "absolute", width: 200, height: 410, background: "linear-gradient(#fdba06, #d25e01)"}}>

                                </div>
                                <img src="../ico_1c_logo_opt.svg" style={{width: 200, height: 100, float: "right", marginTop: 270, marginRight: 50}}/>
                                {/*<img src={value.data.detail_img}/>*/}
                            </div>
                        </> :  <img src={value.data.detail_img} style={{width: 532, height: 572}}/>}


                </span>
            </div>

            <Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/detail.php?ID=${params.id}`)
    const value = await response.json()
    const res3_modeliSotrudnichestva = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3_modeliSotrudnichestva.json()
    const res_tekhnologii = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res_tekhnologii.json()
    const response_services = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response_services.json()
    return {
        props: {
            value,
            modeliSotrudnichestva,
            tekhnologii,
            services
        }, // will be passed to the page component as props
    }
}