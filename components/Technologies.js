import style from "../styles/Technologies.module.css"

export default function Technologies({tekhnologii}) {

    let styleSmall ={
        width: "calc( (100vw - 768px)/(1900 - 768) * (164 - 105) + 105px)",
        height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)"
    }
    let styleBig ={
        width: "calc( (100vw - 768px)/(1900 - 768) * (256 - 150) + 150px)",
        height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)"
    }



    return (
        <>
            <div style={{display: "flex", alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                width: "calc( (100vw - 768px)/(1900 - 768) * (1300 - 600) + 600px)",
                paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (250 - 100) + 100px)"
            }}>
                <span >


                      <div className={style.title} style={{paddingBottom: "calc( (100vw - 768px)/(1900 - 768) * (130 - 100) + 100px)"}}>
                        Технологии
                    </div>

                <div style={{
                    backgroundImage: "Url(/technologies.svg)",
                    backgroundRepeat: "no-repeat",
                    height: "calc( (100vw - 768px)/(1900 - 768) * (700 - 400) + 400px)",
                    width:"calc( (100vw - 768px)/(1900 - 768) * (600 - 350) + 350px)",
                    marginRight: 10
                }}>

                    <div style={{
                        display: "flex",
                        width:"calc( (100vw - 768px)/(1900 - 768) * (400 - 300) + 300px)",
                        padding: "calc( (100vw - 768px)/(1900 - 768) * (60 - 30) + 30px)",
                        marginLeft: "calc( (100vw - 768px)/(1900 - 768) * (30 - 20) + 20px)",
                        paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (150 - 100) + 100px)",
                    }} className={style.cardText}>
                        Sellwin System предоставляет услуги по разработке,
                        внедрению и сопровождению программного обеспечения
                        для дистрибуции, розничной торговли и производства,
                        а также иные услуги в сфере информационных технологий
                        на рынке Республики Беларусь.
                    </div>

                </div>

                </span>

                <span >
                       <div style={{
                           marginTop: "calc( (100vw - 768px)/(1900 - 768) * (1 - 20) + 20px)",
                           display: "flex",
                           width:"calc( (100vw - 768px)/(1900 - 768) * (500 - 300) + 300px)",
                           paddingBottom: "calc( (100vw - 768px)/(1900 - 768) * (70 - 40) + 40px)"
                       }} className={style.subTitle} >
                        В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                    </div>
                <div style={{
                    display: "inline-grid",
                    width:"calc( (100vw - 768px)/(1900 - 768) * (500 - 300) + 300px)",
                    position: "relative",
                    height: "calc( (100vw - 768px)/(1900 - 768) * (700 - 420) + 420px)",}}>

                      <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{
                              width: "calc( (100vw - 768px)/(1900 - 768) * (256 - 170) + 170px)",
                              height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)",
                              marginRight:10}}>
                        MS Sharepoint
                    </span>
                        <span className={style.textForTechnologies} style={styleBig}>
                       JavaScript
                    </span>
                          </div>
                        <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        Java
                    </span>
                            <span className={style.textForTechnologies} style={styleBig}>
                        Net Framework
                    </span>
                            </div>
                        <div style={{  position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleSmall}>
                      1 С
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        MS SQL
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        Oracle
                    </span>
                    </div>    <div style={{ position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleSmall}>
                        MS Olap
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        С#
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        Node.JS
                    </span>
                    </div>
                    <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        Angular
                    </span>  <span className={style.textForTechnologies} style={styleBig}>
                        jQuery
                    </span>
                    </div>
                    <div style={{ justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        ASP.NET
                    </span>  <span className={style.textForTechnologies} style={styleBig}>
                       React
                    </span>
                    </div>
                </div>
                </span>



            </div>

        </>

    )
}
