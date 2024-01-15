import style from "../styles/Index.module.css"

export default function LineInfoSecond() {
    return (
        <>
            <div style={{ height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 150) + 150px)", marginTop:"calc( (100vw - 768px)/(2400 - 768) * (250 - 150) + 150px)",}}>
                <div style={{display: "flex"}}>
                        <span >
                             <img src="../1787.svg" style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)",  }} />
                        </span>
                        <span style={{position: "absolute", }}>
                             <img src="../bgsS.png" style={{width: "calc( (100vw - 768px)/(2400 - 768) * (2400 - 768) + 768px)",
                                 height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)", opacity: 0.3  }} />
                        </span>
                    <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                    <span className={style.textSellwinDescription}>
                             Важнейшими преимуществами программных продуктов,
                            произведенных компанией, является их глубочайшая
                            отраслевая экспертиза, конкурентная цена, высокий
                            уровень обслуживания.
                        </span>
                    <span>
                               <img  src="../1786.svg"  style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)" }} />
                        </span>
                </div>
            </div>
        </>

    )
}
