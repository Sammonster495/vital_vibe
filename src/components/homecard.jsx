export default function HomeCard(props){
    return(
        <div className="sm:h-auto sm:w-auto h-[294px] relative m-4">
            <img
              src={props.image}
              alt={props.image}
              className="lg:rounded-[30px] md:rounded-3xl sm:rounded-2xl rounded-[26px] sm:h-auto h-[290px] my-shadow"
            />
            <div className={`absolute ${props.position}`}>
                <p className="lg:text-5xl md:text-4xl sm:text-3xl text-4xl font-kou">{props.text}</p>
            </div>
        </div>
    )
}