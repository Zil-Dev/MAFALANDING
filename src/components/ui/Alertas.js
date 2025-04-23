import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAlerta } from "../../redux/features/alertas";

export const Alertas = () => {
    const {alertas} = useSelector((state) => state.alertas)

    return (
        <div className="absolute overflow-hidden  bottom-2 right-2 z-50 h-96 w-80 flex flex-col justify-end gap-3"> 
            {alertas && alertas.map((a, index) => {
                return <Alerta title={a.title} message={a.message} status={a.status} index={index}/>
            })}
        </div>
    )
}

const Alerta = ({ title, message, status, index }) => {
    const dispatch = useDispatch();
    const [statusColor, setStatusColor] = useState("bg-green-400");
    const [isVisible, setIsVisible] = useState(false); // inicia oculto
    const { alertas } = useSelector((state) => state.alertas);

    const color = () => {
        if (status === "warning") setStatusColor("bg-orange-400");
        if (status === "danger") setStatusColor("bg-red-400");
    };

    const eliminarNotificacion = () => {
        setIsVisible(false); // activa animación de salida
        setTimeout(() => {
            dispatch(deleteAlerta(index)); // elimina tras animación
        }, 300);
    };

    useEffect(() => {
        color();

        // delay para activar la clase de entrada
        setTimeout(() => setIsVisible(true), 10);

        if (alertas.length > 0) {
            setTimeout(() => {
                eliminarNotificacion();
            }, 10000);
        }
    }, []);

    return (
        <div
            key={index}
            className={`
                transition-all duration-300 ease-in-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
                overflow-hidden h-auto w-80 bg-white rounded-xl shadow-2xl ring-1 ring-black/10 
                flex flex-row justify-start
            `}
        >
            <div className={`${statusColor} h-full w-5 min-w-5`}></div>
            <div className="p-5">
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="font-semibold text-sm">{message}</p>
            </div>
        </div>
    );
};