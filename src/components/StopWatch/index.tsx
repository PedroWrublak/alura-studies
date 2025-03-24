import Button from "../Button";
import Clock from "./Clock";
import Style from "./StopWatch.module.scss"

export default function StopWatch() {
    return (
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}