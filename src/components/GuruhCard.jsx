import ProgressBar from "@ramonak/react-progress-bar";

const GuruhCard = ({ item }) => {
    return(
        <div className='guruh-card' style={{background: item.type === 'blue' ? "#DBF6FD" : "#FEE4CB"}}>
            <span className='card-title'>{item.date}</span>
            <span className='card-group'>{item.group}</span>
            <span className='card-students'>O`quvchilar soni: {item.students}</span>
            <span className='card-result'>O`rtacha o`z</span>
            <ProgressBar
                completed={item.skill * 1}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
            />
        </div>
    )
}

export default GuruhCard;