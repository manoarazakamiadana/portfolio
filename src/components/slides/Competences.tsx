import ProgressBar from "../utils/ProgressBar"

export default function () {
    return (
        <div className="overflow-y-scroll h-full
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-neutral-700
            [&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h1 className="text-center text-2xl font-semibold mt-2">Mes compétences</h1>
            <div>
                <div className="md:flex">
                    <div className="my-4 mx-2 md:w-1/2">
                        Algorithme
                        <div>
                            <ProgressBar progress="w-[85%]" />
                        </div>
                    </div>
                    <div className="my-4 mx-2 md:w-1/2">
                        Back end (django)
                        <div>
                            <ProgressBar progress="w-[80%]" />
                        </div>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="my-4 mx-2 md:w-1/2">
                        Front end (vue, react)
                        <div>
                            <ProgressBar progress="w-[80%]" />
                        </div>
                    </div>
                    <div className="my-4 mx-2 md:w-1/2">
                        Dev mobile (react native)
                        <div>
                            <ProgressBar progress="w-[60%]" />
                        </div>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="my-4 mx-2 md:w-1/2">
                        Design
                        <div>
                            <ProgressBar progress="w-[50%]" />
                        </div>
                    </div>
                    <div className="my-4 mx-2 md:w-1/2">
                        AI (Machine learning)
                        <div>
                            <ProgressBar progress="w-[25%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
