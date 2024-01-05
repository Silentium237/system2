import style from "../styles/Technologies.module.css"

export default function Technologies({tekhnologii}) {





    return (
        <>
            <div style={{display: "flex", alignItems: "center",justifyContent: "center", margin: "auto", width: 1300, paddingTop: 250}}>
                <span >


                      <div className={style.title} style={{paddingBottom: 130}}>
                        Технологии
                    </div>

                <div style={{ backgroundImage: "Url(/technologies.svg)", backgroundRepeat: "no-repeat", height: 700, width:600}}>

                    <div style={{display: "flex", width: 400, padding: 60, marginLeft: 30, paddingTop: 150}} className={style.cardText}>
                        Sellwin System предоставляет услуги по разработке,
                        внедрению и сопровождению программного обеспечения
                        для дистрибуции, розничной торговли и производства,
                        а также иные услуги в сфере информационных технологий
                        на рынке Республики Беларусь.
                    </div>


                </div>

                </span>

                <span >
                       <div style={{display: "flex", width: 500, paddingBottom: 70}} className={style.subTitle} >
                        В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                    </div>
                <div style={{  display: "inline-grid", width: 500, position: "relative", height: 700}}>

                      <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 256, height: 94, marginRight:10}}>
                        MS Sharepoint
                    </span>
                        <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                       JavaScript
                    </span>

                          </div>

                        <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                        Java
                    </span>
                            <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                        Net Framework
                    </span>

                            </div>

                        <div style={{  position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                      1 С
                    </span>  <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                        MS SQL
                    </span>  <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                        Oracle
                    </span>

                    </div>    <div style={{ position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                        MS Olap
                    </span>  <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                        С#
                    </span>  <span className={style.textForTechnologies} style={{width: 164, height: 94}}>
                        Node.JS
                    </span>

                    </div>
                    <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                        Angular
                    </span>  <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                        jQuery
                    </span>


                    </div>
                    <div style={{ justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                        ASP.NET
                    </span>  <span className={style.textForTechnologies} style={{width: 256, height: 94}}>
                       React
                    </span>



                    </div>

                </div>
                </span>



            </div>

        </>

    )
}
