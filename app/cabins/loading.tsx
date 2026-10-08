import Spinner from "../_components/spinner"


function Loading() {
    return (
        <div className="grid items-center justify-center">
            <p className="text-2xl text-primary-200">Loading cabin data...</p>
            <Spinner />
        </div>
    )
}

export default Loading