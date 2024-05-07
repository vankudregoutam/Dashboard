import '../App.css'
import React from 'react'
import { GrGroup } from 'react-icons/gr'
import ConsultantSideBar from './ConsultantSideBar'

const Consultant = () => {
    return (
        <>
            <div className='card p-1' style={{ borderRadius: 5, marginTop: '-950px', marginLeft: '180px', width: 'auto', marginRight: '10px', border: 'none' }}>
                <h4 style={{ color: '#009933', marginLeft: '10px' }}><GrGroup style={{ fontSize: '30px' }} /> Consultants</h4>
            </div><hr style={{ marginTop: '-2px', width: '11%', marginLeft: '190px', color: 'solid #009933' }} /><br />
            <div className="container" style={{ backgroundColor: 'white', marginLeft: '180px', width: 'auto', border: 'none', display: 'flex', alignItems: 'center', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                <div className="talkbubble" style={{ alignContent: 'center', marginLeft: '-12px' }}>
                    <h4 style={{ marginLeft: '20px' }}>Filters</h4>
                </div>
                <div className="dropdown" style={{ marginLeft: '50px' }}>
                    <button className="btn btn-secondary dropdown-toggle" style={{ borderRadius: 50, backgroundColor: 'white', color: 'black', borderColor: 'gray' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Range
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </div>
                <form style={{ marginLeft: '50px', width: '250px' }}>
                    <input style={{ marginRight: '2%' }} type="radio" id="summary" name="fav_language" value="Summary" />
                    <label htmlFor="summary">Summary</label>
                    <input style={{ marginLeft: '30px', marginRight: '2%' }} type="radio" id="branchwise" name="fav_language" value="Branch Wise" />
                    <label htmlFor="branchwise">Branch Wise</label>
                </form>
            </div><br />
            <ConsultantSideBar />
        </>
    )
}

export default Consultant
