import style from "../styles/Index.module.css";
import style2 from "../styles/user.module.scss";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function SendForm() {

    const [inputWidth , setInputWidth] = useState("20ch")


    return (
        <>

            {/*<div className={style.divForForm}>*/}
            {/*    <form  >*/}
            {/*        <div className={style.inputHeaderText}>*/}
            {/*            Заполните форму для получения обратной связи*/}
            {/*        </div>*/}


            {/*        <div style={{display: "inline-flex", paddingLeft: 60}}>*/}
            {/*            <span className={style2.form__group}>*/}
            {/*            <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
            {/*            <label htmlFor="name" className={style2.form__label}>Имя*</label>*/}
            {/*        </span>*/}
            {/*            <span className={style2.form__group}>*/}
            {/*            <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
            {/*            <label htmlFor="name" className={style2.form__label}>Email*</label>*/}
            {/*        </span>*/}
            {/*            <span className={style2.form__group}>*/}
            {/*            <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
            {/*            <label htmlFor="name" className={style2.form__label}>Телефон*</label>*/}
            {/*        </span>*/}

            {/*        </div>*/}
            {/*        <button className={style.inputButton}>*/}
            {/*            отправить*/}
            {/*        </button>*/}

            {/*    </form>*/}

            {/*</div>*/}


            <div className={style.divForForm}>

                    <div className={style.inputHeaderText}>
                        Заполните форму для получения обратной связи
                    </div>


                    <div style={{display: "inline-flex", paddingLeft: 60, paddingRight: 50}}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: inputWidth },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                        <TextField
                            id="standard-textarea"
                            label="Имя*"
                            placeholder="Ваше имя"
                            multiline
                            variant="standard"
                        />   <TextField
                        id="standard-textarea"
                        label="Email*"
                        placeholder="Ваш email"
                        multiline
                        variant="standard"
                    />
                        <TextField
                            id="standard-textarea"
                            label="Телефон*"
                            placeholder="Ваш телефон"
                            multiline
                            variant="standard"
                        />
                            </Box>
                        <button className={style.inputButton}>
                            отправить
                        </button>
                    </div>



            </div>

        </>

    )
}
