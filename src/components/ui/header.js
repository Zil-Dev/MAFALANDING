import Image from "next/image"
import Link from "next/link"
import MAFA_logo from '../../assets/MAFA_logo.png'
export default () => {

    return (
        <div className="absolute  top-0 z-50 h-14 w-full flex flex-row justify-between ">
            <Image src={MAFA_logo} height={100} width={100} />

            <div
                className="h-[100%] w-96 flex flex-row justify-between"
            >

                {/* <div
                    className="h-[80%] w-auto text-center"
                >
                    <Link href={"/"}>Inicio</Link>
                </div>

                <div
                    className="h-[80%] w-auto text-center"
                >
                    <Link href={"/routes/about"}>about</Link>
                </div> */}

            </div>
        </div>
    )
}