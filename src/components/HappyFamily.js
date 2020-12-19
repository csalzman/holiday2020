
const HappyFamily = (props) => {
    const {title, subHead, imgSrc} = props
    return (
        <div className="">
            <h1>{title}</h1>
            <img src={imgSrc} className='m-auto p-10'/>
            <h2>{subHead}</h2>
        </div>
    )
}

export default HappyFamily