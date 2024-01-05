import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function Project2() {

    let cardText = [
        {
            title: "BeautyHouse",
            url: "../BH2.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../b2b.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../pm.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../shopSellwin.png",
            link: "/beautyhouse",
            text: "..."
        },
        // {
        //     title: "Проектная разработка",
        //     url: "../cooperation2.svg",
        //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus orci sit" +
        //         " tortor imperdiet est eu tortor,perdiet est eu tortor, sagittis. Lorem ipsum perdiet est eu tortor, sagittis. Lorem ipsum perdiet est eu tortor, sagittis. Lorem ipsum  sagittis. Lorem ipsum dolor" +
        //         " sit amet, consectetur adipiscing elit.",
        // },
        // {
        //     title: "Расширение команды",
        //     url: "../cooperation3.svg",
        //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus orci sit" +
        //         " tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor" +
        //         " sit amet, consectetur adipiscing elit.",
        // }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)

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
                Проекты и решения
            </div>


                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?

                            <div style={{display: "flex", alignItems: "center", margin: "auto", justifyContent: "space-between", width: 1090, paddingTop: 50}}>
                                <div>
                                    <img style={{padding: 20}} height="540px" width="746px" src="../bh2.jpg"/>
                                <div style={{position: "absolute", marginTop: -105, marginLeft:20, width: 705, height: 82, backgroundColor: "#7ddbff", opacity: 0.80}}>

                                </div>
                                    <div  className={styles.textButtonStyle} style={{position: "absolute",marginTop: -75, marginLeft:50, }}>
                                    ПОДРОБНЕЕ
                                        <img style={{position: "absolute", left: 150}} src="../ArrowNext.svg"/>
                                        <img style={{position: "absolute",marginTop: -10, left: 600}} src="../ArrowSquareOut.svg"/>

                                </div>




                                {/*<span style={{background: "rgba(0, 128, 223, 0.05)", height: 555, width: 624 }}>*/}
                                {/*    <p style={{paddingTop:38, paddingLeft: 92}} >*/}
                                {/*            <button style={{width: 532}} className={styles.buttonStyle}>*/}
                                {/*    <span style={{paddingRight:350}} className={styles.textButtonStyle}>*/}
                                {/*    подробнее*/}
                                {/*        <img style={{position: "absolute", top: 25, left: 150}} src="../ArrowNext.svg"/>*/}
                                {/*        <img style={{position: "absolute", top: 15, left: 450}} src="../ArrowSquareOut.svg"/>*/}

                                {/*</span>*/}
                                {/*</button>*/}
                                {/*    </p>*/}

                                {/*</span>*/}





                                </div>
                                <div>
                                    <div>
                                        <img style={{padding: 20}} height="270px" width="370px" src="../bh1.jpg"/>
                                    </div>
                                    <div>
                                        <img style={{padding: 20}} height="270px" width="370px" src="../bh3.jpg"/>
                                    </div>
                                </div>

                            </div>




                            : null
                        }
                    </>
                ))}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1150, paddingTop: 35, marginLeft: -70}}>
                <button style={{width: 75, height: 75, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                        onClick={() => changeCardNumber("left")}>  <img
                    src="../right.svg"/> </button>
                <button style={{width: 75, height: 75, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>  <img
                    src="../left.svg"/></button>
            </div>

        </>

    )
}
