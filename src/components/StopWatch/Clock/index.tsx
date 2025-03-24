import Style from "./Clock.module.scss"

export default function Clock() {
    return (
        // Utilizar tags em branco para servirem como parent dos spans
        <> 
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioDivisao}>:</span>
        <span className={Style.relogioNumero}>0</span>
        <span className={Style.relogioNumero}>0</span>
        </>
    )
}