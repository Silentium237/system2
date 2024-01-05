import MainContainer from "../components/MainContainer";

import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";

import styles from "../styles/WriteMe.module.css";
import style2 from "../styles/user.module.scss";
import style from "../styles/Index.module.css";
import styleTitle from "../styles/Service.module.css";
import styleContact from "../styles/Contacts.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function contact ({cardText, tekhnologii, modeliSotrudnichestva,services}){



    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            {/*<MainImgForAnotherPage/>*/}
            <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={styleTitle.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Контакты</span>
                </div>
                <div style={{paddingBottom:90}} className={styleTitle.title}>Контакты</div>
            </div>
            <div className={styleContact.cardInfo} >
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <span style={{paddingTop: 100}} >
                        <div className={styleContact.cardPhoneEmailText}>
                             ТЕЛЕФОНЫ:
                        </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                            +375 (17) 269 33 33
                        </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                           +375 (29) 397 57 37
                        </div>

                    </span>
                    <span style={{paddingTop: 70}}  >
                       <div className={styleContact.cardPhoneEmailText}>
                          адрес:
                       </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                         Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                       </div>
                    </span>
                    <span style={{paddingTop: 70}}  >
                        <div className={styleContact.cardPhoneEmailText}>
                               E-MAIL:
                        </div>
                      <div className={styleContact.emailLink}>
                              info@sellwin-system.by
                        </div>


                    </span>

                </div>
            </div>

            <div className={styleContact.backgroundSendForm} style={{paddingTop: 150, marginTop: 150}}>
                <img style={{position: "absolute", paddingTop: 100, width: "100%"}} src="../Group59.svg"/>
                <div className={styleContact.sendFormCard} >

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch', marginLeft: 10, marginTop: 5 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="standard-textarea"
                                label="Имя*"
                                placeholder="Ваше имя"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                id="standard-textarea"
                                label="Email*"
                                placeholder="Ваш email"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-textarea"
                                label="Имя*"
                                placeholder="Ваше имя"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                id="standard-textarea"
                                label="Email*"
                                placeholder="Ваш email"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div>
                            <TextField
                                style={{width: 800, marginTop: 100}}
                                id="outlined-multiline-static"
                                label="Текст сообщения"
                                multiline
                                rows={4}

                            />

                        </div>


                            <button style={{width: 295, marginLeft: 580, marginTop: 18}} className={style.inputButton}>
                                отправить
                            </button>
                    </Box>


                    {/*<form  >*/}

                    {/*    <div style={{paddingTop: 90, paddingLeft: 60}}>*/}
                    {/*        <span  className={style2.form__group} style={{paddingBottom: 20, paddingRight: 60}}>*/}
                    {/*            <input style={{width: 348}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                    {/*            <label style={{paddingLeft: 20, marginTop: -10}} htmlFor="name" className={style2.form__label}>Имя*</label>*/}
                    {/*        </span>*/}
                    {/*        <span className={style2.form__group} style={{paddingBottom: 20}}>*/}
                    {/*            <input style={{width: 348}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                    {/*            <label  style={{paddingLeft: 440, marginTop: -10}} htmlFor="name" className={style2.form__label}>Email*</label>*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <div style={{paddingTop: 60, paddingLeft: 60}}>*/}
                    {/*        <span className={style2.form__group} style={{paddingBottom: 20, paddingRight: 60}}>*/}
                    {/*            <input style={{width: 348}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                    {/*            <label  style={{paddingLeft: 20, marginTop: -10}} htmlFor="name" className={style2.form__label}>Email*</label>*/}
                    {/*        </span>*/}
                    {/*        <span className={style2.form__group}  style={{paddingBottom: 60}}>*/}
                    {/*            <input style={{width: 348}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                    {/*            <label  style={{paddingLeft: 440, marginTop: -10}} htmlFor="name" className={style2.form__label}>Телефон*</label>*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <div style={{paddingTop: 60, paddingLeft: 60}}>*/}
                    {/*        <span className={style2.form__group}  style={{paddingBottom: 60}}>*/}
                    {/*            <input style={{width: 800, height: 185, border: "1px solid rgba(0, 0, 0, 0.2)"}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                    {/*            <label  style={{paddingLeft: 20 ,position: "absolute", top: -70 }} htmlFor="name" className={style2.form__label}  >Текст сообщения*</label>*/}
                    {/*        </span>*/}

                    {/*    </div>*/}




                    {/*    <button style={{width: 295, marginLeft: 565, marginTop: 18}} className={style.inputButton}>*/}
                    {/*        отправить*/}
                    {/*    </button>*/}

                    {/*</form>*/}
                </div>
            </div>

            <div style={{backgroundImage: "Url(/map.png)", height: 475, width: "100%"}}>
                <img src="../mapPoint.svg" style={{position: "absolute", paddingTop: 120, left: "70%"}}/>
                <div className={styleContact.mapTextBackground}>
                    <div className={styleContact.mapText}>
                        Мы на карте
                    </div>
                </div>
            </div>






        </MainContainer>

    )
}
export const getServerSideProps = async () =>{
    console.log("11111111111")


    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}