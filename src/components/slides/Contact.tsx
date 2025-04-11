import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function () {
    return (
        <div className="overflow-y-scroll h-full
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-neutral-700
            [&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h1 className="text-center text-2xl font-semibold mt-2">Contact</h1>
            <div className="m-3">
                <div className="md:flex">
                    <div className="flex gap-4 my-4 md:w-1/2 md:my-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-xl" /> <p>manoarazakamiadana@gmail.com</p>
                    </div>
                    <div className="flex gap-4 my-4 md:w-1/2 md:my-2">
                        <FontAwesomeIcon icon={faHouse} className="text-xl" /> <p>II N 29 BA Analamahitsy</p>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="flex gap-4 my-4 md:w-1/2 md:my-2">
                        <FontAwesomeIcon icon={faLocationDot} className="text-xl" /> <p>Antananarivo, Madagascar</p>
                    </div>
                    <div className="flex gap-4 my-4 md:w-1/2 md:my-2">
                        <FontAwesomeIcon icon={faPhone} className="text-xl" /> <p>+261 64 42 044 87</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
