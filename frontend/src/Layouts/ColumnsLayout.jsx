import Header from "../Components/Header"

function ColumnsLayout(props){
    return(
    <div className="py-12">
       <Header /> 
        <div className="w-8/12 mx-auto mt-5 grid grid-cols-4 gap-12">
            <div className="col-span-1">
                <div className="grid gap-y-6 sticky top-17">
                    {props.left}
                </div>
            </div>
            <div className="col-span-2">
                <div className="grid gap-y-6">
                    {props.center}
                </div>
            </div>
            <div className="col-span-1">
                <div className="grid gap-y-6 sticky top-17">
                    {props.right}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ColumnsLayout
