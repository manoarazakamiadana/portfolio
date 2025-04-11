

export default function (props: {progress: string}) {
    

    return (
        <div className="border border-white w-full h-4">
            <div className={`bg-white ${props.progress} h-full`}></div>
        </div>
    )
}

