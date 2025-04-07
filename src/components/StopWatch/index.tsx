import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { Itask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import Style from "./StopWatch.module.scss";

interface Props {
    selected: Itask | undefined
}

export default function StopWatch({ selected }: Props) {
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
    return (
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={Style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}