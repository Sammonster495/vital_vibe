export default function HomeCard(props){
    return(
        <div className="w-max h-max relative m-auto my-10">
            <img
              src={props.image}
              alt={props.image}
              className="rounded-[30px] my-shadow"
            />
            <p className={`absolute bottom-[${props.position}%] left-3 text-4xl`}>{props.text}</p>
        </div>
    )
}