const Buttons = (props) => {
    const {buttonOptions} = props
    
    return(
        <div className="bg-black text-white flex flex-col">
        <h2>BUTTONS</h2>
            {buttonOptions.map((button) => {
                return button.name
            })}
        </div>
    ) 
}

export default Buttons