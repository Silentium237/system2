import styles from '../styles/WriteMe.module.css'
import style from "../styles/Index.module.css";
import style2 from "../styles/user.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function WriteMe() {


    return (

        <div style={{
            display: "flex",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 200
        }}>
            <img style={{position: "absolute",}} src="../Group59.svg"/>
            <span style={{
                backgroundImage: "Url(/writeMe.png)",
                height: 585,
                width: 580,
                paddingTop: 120,
                paddingLeft: 50,
                marginTop: 300
            }}>
                <div className={styles.mainText}>
                 Есть вопросы?  <br/> напиши нам!
                </div>

           </span>
            <span className={styles.cardStyle}
                  style={{height: 585, width: 580, textAlign: "center", marginTop: 300, paddingTop: 100}}>

                        <div className={styles.formText}>
                            Заполните форму для получения обратной связи
                        </div>



  <Box
      component="form"
      sx={{
          '& .MuiTextField-root': {m: 1, width: '45ch'},
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
      <TextField
                            id="standard-textarea"
                            label="Ваш вопрос"
                            placeholder="Ваш вопрос"
                            multiline
                            variant="standard"
                        />
                            </Box>


                {/*    <div  className={style2.form__group} style={{paddingBottom: 20}}>*/}
                {/*    <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                {/*    <label style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Имя*</label>*/}
                {/*</div>*/}
                {/*        <div className={style2.form__group} style={{paddingBottom: 20}}>*/}
                {/*    <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                {/*    <label  style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Email*</label>*/}
                {/*</div>*/}
                {/*        <div className={style2.form__group}  style={{paddingBottom: 60}}>*/}
                {/*    <input style={{width: 400}} type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required/>*/}
                {/*    <label  style={{paddingLeft: 80}} htmlFor="name" className={style2.form__label}>Телефон*</label>*/}
                {/*</div>*/}


                <button style={{width: 400, marginTop: 50, marginLeft: 5}} className={style.inputButton}>
                            отправить
                        </button>


           </span>
        </div>


    )
}
