import { useState } from 'react';
import TopInfos from '../components/TopInfos'
import Pagination from '../components/Pagination'
import { statuses, students, studentsTopInfos } from '../assets/MenuData';

const Students = () => {

    const [status, setStatus] = useState('All')
    const [studentsData, setStudentsData] = useState(students);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = studentsData.slice(firstPostIndex, lastPostIndex);
    return(
      <>
      <TopInfos data={studentsTopInfos} />
        <div className='students'>
        <div className='students-header'>
            <div className='left-side'>
                <span>Hamma O`quvchilar</span>
                <p>Faol O`quvchilar</p>
            </div>
            <div className='right-side'>
            <div className="students-input">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input placeholder="Qidiruv" />
        </div>
        <select onChange={(e) => setStatus(e.target.value)}>
              {statuses?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            </div>
        </div>
         <div className='students-list'>
            <table className="table">
            <thead className="text-dark">
              <tr className='heads'>
                <td>F.I.O</td>
                <td>Yo`nalish</td>
                <td>Telefon nomer</td>
                <td>To`lov</td>
                <td>Guruh</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {currentPosts?.map((item) => (
                <tr key={item.name} className='student-infos'>
                  <td>{item.name}</td>
                  <td>{item.field}</td>
                  <td>{item.number}</td>
                  <td>{item.price}</td>
                  <td>{item.group}</td>
                  <td>{
                    item.status === 'Avtive' ? (
                      <button className='active-btn'>Active</button>
                    ) : (
                      <button className='inactive-btn'>Inactive</button>
                    )
                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
           <Pagination
                totalPosts={studentsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
         </div>   
        </div>
        </>
    )
}

export default Students;