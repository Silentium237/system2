import style from "../styles/Mission.module.css"

export default function Mission() {





    return (
        <>
            <div style={{display: "flex", paddingTop: 180}}>
                <img  width="100%" src="../Group81.svg"/>
                <div style={{position: "absolute", paddingTop: "10%", left: "56%"}}>
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
