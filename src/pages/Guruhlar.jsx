import TopInfos from '../components/TopInfos'
import GuruhCard from '../components/GuruhCard'
import { guruhlarTopInfos } from '../assets/MenuData';
import { useSelector } from 'react-redux';

const Guruhlar = () => {

    const { guruhCards } = useSelector(store => store.students)

    return(
        <>
            <TopInfos data={guruhlarTopInfos} />
            <div className='guruhlar'>
                <div className='guruhlar-header'>
                    <span>Guruhlar</span>
                    <p>Noyabr, 30</p>
                </div>
                <div className='guruhlar-st'>
                    <div>
                        <span>7</span>
                        <p>Faol Guruhlar</p>
                    </div>
                    <div>
                        <span>2</span>
                        <p>Tugatgan Guruh</p>
                    </div>
                    <div>
                        <span>9</span>
                        <p>Umumiy Guruh</p>
                    </div>
                </div>
                <div className='guruhlar-cards'>
                    {guruhCards?.map((item, i) => <GuruhCard key={i} item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Guruhlar;