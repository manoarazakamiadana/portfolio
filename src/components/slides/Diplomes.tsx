


export default function () {
    return (
        <div className="overflow-y-scroll h-full
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-neutral-700
            [&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h1 className="text-center text-2xl font-semibold mt-2">Mes diplomes et certification</h1>
            <div className="mt-4 mx-3">
                <ul className="list-disc list-inside">
                    <li>
                        <span className="font-bold">Depuis octobre 2023</span>: Licence (en cours) à INSI
                        University
                    </li>
                    <br />
                    <li>
                        <span className="font-bold">17 au 21 mars 2025</span>:  Formation en IA et machine learning
                        par Orange Digital Center Madagascar
                    </li>
                    <br />
                    <li>
                        <span className="font-bold">2023</span>: Baccalauréat général malgache en série S avec mention Assez Bien
                    </li>
                </ul>
            </div>
        </div>
    )
}

