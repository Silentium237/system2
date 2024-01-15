import style from "../styles/Mission.module.css"

export default function Mission() {





    return (
        <>
            <div style={{display: "flex", paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (180 - 60) + 60px)"}}>
                <img  width="100%" src="../Group81.svg"/>
                <div style={{position: "absolute", paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (170 - 50) + 50px)", left: "calc( (100vw - 768px)/(1900 - 768) * (1050 - 400) + 400px)"}}>
                    <div className={style.title}>
                        Миссия
                    </div>

                    <div className={style.subTitle}>
                        Реализация инновационных идей IT <br/>
                        индустрии, воплощение их в успешные <br/>
                        бизнес-проекты для наших клиентов <br/>
                        в различных сферах бизнеса.
                    </div>
                </div>
            </div>

        </>

    )
}
