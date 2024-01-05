import style from "../styles/Index.module.css"
import {useState} from "react";
import {Inter, Lora, Source_Sans_3, Montserrat} from 'next/font/google'

export default function MainImg() {
    let backGroundImage1 = "Url(/newMainImg.png)"
    let backGroundImage2 = "Url(/mainImg2.png)"
    let backGroundImage3 = "Url(/mainImg3.png)"
    const [rotate, setRotate] = useState('rotate(0deg)')
    const [mainImg, setMainImg] = useState(backGroundImage1)
    const [value, setValue] = useState(1)
    const [colorText, setColorText] = useState("#FFFFFF")

    const changeRight = (value) => {
        if (value === 1) {
            setMainImg(backGroundImage2)
            setRotate('rotate3d(0, 20, 0, 180deg)')
            setValue(value + 1)
            setColorText("#0b334c")

        } else if (value === 2) {
            setRotate('rotate(360deg)')
            setMainImg(backGroundImage3)
            setValue(value + 1)
        }

    }
    const changeLeft = (value) => {
        if (value === 2) {
            setValue(value - 1)
            setRotate('rotate3d(0, 20, 0, 0deg)')
            setMainImg(backGroundImage1)
            setColorText("#125E97")
        } else if (value === 3) {
            setValue(value - 1)
            setRotate('rotate3d(0, 20, 0, 180deg)')
            setMainImg(backGroundImage2)
        }

    }


    return (
        <>
            <div style={{
                backgroundImage: mainImg,
                height: 1080, backgroundRepeat: "no-repeat center center fixed",
                width: "100%", margin: "auto", backgroundSize: "cover", transition: "1s ease-out 0.5s", display: "flex"
            }}>
                {/*<div style={{backgroundImage: "Url(/1773.svg)", paddingTop: 122, width: "100%"}}>*/}
                {/*    <img src="../1741.svg" style={{transform: rotate, transition: "1s ease-out 0.5s"}}/>*/}
                {/*</div>*/}


                {/*<div className={style.divMain}>*/}
                {/*    <p className={style.mainText1}>С НАМИ </p>*/}
                {/*    <p className={style.mainText2} style={{color: colorText, transition: "1s ease-out 0.5s"}}>ВЫИГРЫВАЮТ!</p>*/}
                {/*    <p className={style.subMainText}>Полный цикд создания, масштабирования и поставки <br/>*/}
                {/*        защищенного программного обеспечения</p>*/}
                {/*</div> */}

            </div>
            <div className={style.divMain}>
                <p className={style.mainText1}>С НАМИ </p>
                <p className={style.mainText1}
                   style={{color: colorText, transition: "1s ease-out 0.5s"}}>ВЫИГРЫВАЮТ!</p>
                {/*<p className={style.subMainText}>Полный цикд создания, масштабирования и поставки <br/>*/}
                {/*    защищенного программного обеспечения</p>*/}
            </div>

            {/*<button className={style.buttonConsult}>*/}
            {/*    <h className={style.buttonText}>получить консультацию</h>*/}
            {/*</button>*/}
            <div style={{width: 1024, }}>
                <div style={{float: "left"}}>
                          <span className={style.numberActive}>
                            {value}
                        </span>
                    <span className={style.numberNotActive}>
                             / 3
                        </span>
                </div>

                <span style={{float: "right"}}>
                            <button className={style.buttonLeft} onClick={() => changeLeft(value)}>  <img
                                src="../right.svg"/> </button>
                            <button className={style.buttonRight} onClick={() => changeRight(value)}>  <img
                                src="../left.svg"/></button>
                </span>
            </div>
        </>

    )
}
