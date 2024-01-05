import styles from '../styles/Partners.module.css'



export default function Partners() {

    let imgList = [
        {
            url: "../partnerCosmo.svg",
        },
        {
            url: "../partnerOilMotor.svg",
        },
        {
            url: "../partnerSellwin2.svg",
        },
        {
            url: "../partnerSellwin3.svg",
        },
    ]


    return (
        <>
            <p className={styles.winText}>
                Win
            </p>
            <div style={{width: "100%", backgroundColor: "rgba(0, 128, 223, 0.07)", height: 400, marginTop: 300, textAlign: "center" }}>

                <div className={styles.mainText} >
                    Нани партнеры
                </div>
                {imgList.map(item =>(
                    <span style={{ margin: 40}}>
                        <img src={item.url}/>
                </span>
                ))}


            </div>
        </>


    )
}
