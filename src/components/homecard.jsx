export default function HomeCard(props){
    return(
        <div className="w-max h-max relative lg:m-auto lg:my-10 md:my-8">
            <img
              src={props.image}
              alt={props.image}
              className="rounded-[30px] my-shadow"
            />
            <div className={`absolute left-8 ${props.position}`}>
                <p className="text-5xl font-kou">{props.text}</p>
            </div>
        </div>
    )
}