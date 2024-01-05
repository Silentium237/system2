import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function Cooperation2({modeliSotrudnichestva}) {

    let cardText = [
        {
            title: "Выделенная команда",
            url: "../cooperationFirstImg.png",
            text: "За каждым действующим проектом закреплена своя собственная команда, " +
                "что позволяет максимально покрузится в детали проекта и бизнес логику," +
                " проработать все скрытые моменты и избежать каких-либо нюансов при запуске.  ",
        },
        {
            title: "Проектная разработка",
            url: "../cooperationSecondImg.png",
            text: "Широй кругозор и огромная база знаний позволят создать для Вас" +
                " уникальный продукт, благодаря которому вы сможете воплотить все свои мечты в реальность",
        },
        {
            title: "Расширение команды",
            url: "../cooperationThirdImg.png",
            text: "Благодаря грамотному тайм менеджменту и наличию резервов, " +
                "скорость реализации проекта будет оставаться стабильной на протяжении всего времени реализации.",
        }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)
    const [showDetail, setShowDetail] = useState(false)

    const changeCardNumber = (item) => {
        if (item === "right") {
            if (showCardItem < 2) {
                setShowCardItem(showCardItem + 1)
                setPxLength(pxLength + 80)
            }
        } else if (item === "left") {
            if (showCardItem > 0) {
                setShowCardItem(showCardItem - 1)
                setPxLength(pxLength - 80)
            }
        }
    }


    return (
        <>
            <div className={styles.cooperation}>
                Модель Сотрудничества
            </div>
            <div className={styles.titleCoopNext}>Фиксированный проект (Fixed Project)</div>
            <hr style={{width: "50%", backgroundColor: "#1d88d9", color: "#197fc9", border: "none", height: 1, marginTop: 22 }}/>
            <div style={{width: 1074, display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto"}}>
                <span style={{width: 522}} >
                    <div className={styles.subTitleCoopNext}>Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>
                    <div className={styles.subTitleCoopNext}>Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>
                    <div className={styles.subTitleCoopNext} >Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>

                    <div style={{backgroundColor: "#125E97",
                        width: 355,
                        height: 70 ,
                        textAlign: "center",
                        paddingTop: 26,
                        color: "white",
                        fontWeight:600,
                        fontSize: 16,
                        position: "absolute"
                    }}>НАЧАТЬ СОТРУДНИЧЕСТВО</div>
                </span>
                <span>
                    <img src="../serviceImg1.png" width="502px" height="423px"/>
                </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1150, paddingTop: 65, marginLeft: -75}}>
                <button style={{width: 75, height: 75, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                        onClick={() => changeCardNumber("left")}>  <img
                    src="../right.svg"/> </button>
                <button style={{width: 75, height: 75, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>  <img
                    src="../left.svg"/></button>
            </div>

           {/* <div*/}
           {/*     style={showDetail ? {display: "none"}:{height: 900, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center",}}>*/}
           {/*<span>*/}
           {/*     <p style={{*/}
           {/*         borderLeft: "8px solid #0092FF",*/}
           {/*         height: 80,*/}
           {/*         position: "absolute",*/}
           {/*         marginTop: pxLength*/}
           {/*     }}></p>*/}

           {/*<p style={{*/}
           {/*    borderLeft: "8px solid rgba(178, 179, 179, 0.5)",*/}
           {/*    height: 240*/}
           {/*}}></p>*/}
           {/*<p style={{paddingTop: 50}}>*/}
           {/*                 <button style={{width: 50, height: 50, marginRight: 15, border: 0}}*/}
           {/*                         onClick={() => changeCardNumber("left")}>  <img*/}
           {/*                     src="../right.svg"/> </button>*/}
           {/*                 <button style={{width: 50, height: 50, border: 0}}*/}
           {/*                         onClick={() => changeCardNumber("right")}>  <img*/}
           {/*                     src="../left.svg"/></button>*/}
           {/*             </p>*/}
           {/*</span>*/}

           {/*     {modeliSotrudnichestva.data.map((item, index) => (*/}
           {/*         <>*/}
           {/*             {index === showCardItem ?*/}
           {/*                 <>*/}
           {/*                     {!showDetail ? <div style={{display: "inline-flex", padding: 50,}} key={index}>*/}
           {/*                     <span>*/}
           {/*                       <img src={item.preview_img}/>*/}
           {/*                     </span>*/}
           {/*                         <span style={{height: 100, paddingLeft: 50,}}>*/}
           {/*                            <div className={styles.title}>*/}
           {/*                         {item.name}*/}
           {/*                     </div>*/}
           {/*                     <hr style={{*/}
           {/*                         backgroundColor: "rgba(18, 94, 151, 0.5)",*/}
           {/*                         padding: 1,*/}
           {/*                         margin: 20,*/}
           {/*                         border: 0*/}
           {/*                     }}/>*/}
           {/*                     <div className={styles.subTitle}>*/}
           {/*                         {item.preview_text}*/}
           {/*                     </div>*/}
           {/*                     <button className={styles.buttonStyle} onClick={() => setShowDetail(!showDetail)}>*/}
           {/*                         <div className={styles.textButtonStyle}>*/}
           {/*                         подробнее  <img style={{position: "absolute", top: 25, left: 200}}*/}
           {/*                                         src="../ArrowNext.svg"/>*/}
           {/*                     </div>*/}
           {/*                     </button>*/}
           {/*                     </span>*/}
           {/*                     </div> : null*/}
           {/*                     }*/}
           {/*                 </>*/}
           {/*                 : null*/}
           {/*             }*/}
           {/*         </>*/}
           {/*     ))}*/}
           {/* </div>*/}
           {/* {modeliSotrudnichestva.data.map((item, index) => (*/}
           {/*     <>*/}
           {/*         {index === showCardItem && showDetail ?*/}
           {/*             <>*/}
           {/*                 <div style={{height: 900, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -150}}key={index}>*/}

           {/*                         <span style={{height: 100}}>*/}
           {/*                            <div className={styles.title} style={{width: "100%"}}>*/}
           {/*                         {item.name}*/}
           {/*                     </div>*/}
           {/*                     <hr style={{*/}
           {/*                         backgroundColor: "rgba(18, 94, 151, 0.5)",*/}
           {/*                         padding: 1,*/}
           {/*                         margin: 20,*/}
           {/*                         border: 0*/}
           {/*                     }}/>*/}
           {/*                     <div className={styles.subTitle} style={{width: 1024}}>*/}
           {/*                         {item.preview_text}*/}
           {/*                     </div>*/}
           {/*                     <button className={styles.buttonStyle} onClick={() => setShowDetail(!showDetail)}>*/}
           {/*                         <div className={styles.textButtonStyle} onClick={() => setShowDetail(true)}>*/}
           {/*                         назад*/}
           {/*                         </div>*/}
           {/*                         <img style={{position: "absolute", top: 25, left: 200, transform: "rotate(180deg)"}} src="../ArrowNext.svg"/>*/}

           {/*                     </button>*/}
           {/*                     </span>*/}
           {/*                 </div>*/}
           {/*             </>*/}
           {/*             : null*/}
           {/*         }*/}
           {/*     </>*/}
           {/* ))}*/}
        </>

    )
}
