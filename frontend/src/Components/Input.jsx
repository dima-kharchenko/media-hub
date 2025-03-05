function Input(props){
    return(
        <input type={props.type} name={props.name} id={props.id} className={`w-full h-11 px-6 rounded-md bg-surface-a20 text-sm text-white placeholder-white shadow-[0_0_1px_1px] shadow-primary-a10 hover:shadow-[0_0_4px_1px] focus:shadow-[0_0_4px_1px] duration-150 focus:outline-none ${props.className || ""}`} placeholder={props.placeholder} required=""/>
    );
}

export default Input
