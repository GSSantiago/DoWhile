import { useContext } from "react"
import {VscGithubInverted, VscMultipleWindows} from "react-icons/vsc"
import { AuthContext } from "../../context/auth"


import styles from "./styles.module.scss"



export function LoginBox(){
     
    const {signInUrl} = useContext(AuthContext)
    
   
    return(

        <div className={styles.LoginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInGitHub}>
                <VscGithubInverted size="24"/>
                Entrar com GitHub
            </a>

        </div>
    )
}