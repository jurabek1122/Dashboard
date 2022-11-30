const TopInfos = ({ data }) => {
    return(
        <div className='top-infos'>
            {
                data.map((item, i) => (
                    <div key={i} className='top-card'>
                        {item.image}
                        <div className='top-card-infos'>
                            <span className='top-card-text'>{item.text}</span>
                            {item.soni && <span className='top-card-soni'>{item.soni}</span>}
                            {item.image2 && item.type === 'green' &&  <span className='top-card-change'>{item.image2}{item.change} <span>oylik</span></span>}
                            {item.image2 && item.type === 'red' && <span className='top-card-change red'>{item.image2}{item.change} oylik</span>}
                           
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TopInfos;