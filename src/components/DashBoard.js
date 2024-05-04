import '../App.css'
import React from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import { BsCashStack } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { DiDatabase } from 'react-icons/di'
import { FaHouseChimney } from 'react-icons/fa6'
import { FiFilter } from 'react-icons/fi'
import { HiEyeDropper } from 'react-icons/hi2'
import { MdDescription } from 'react-icons/md'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    const handleClick = () => {

    }

    return (
        <>
            <div className="card" style={{ width: '160px', padding: '15px', border: 'none' }}>
                <p>Dashboards</p>
                <div className="card" style={{ border: 'none', boxShadow: '0 0 10px #bdbdbd' }}>
                    <Link to={'/'} className="btn btn" onClick={handleClick}>
                        <div className="style">
                            <CgProfile style={{ fontSize: '30px' }} />
                        </div>
                        <p style={{ marginBottom: '-1px' }}>Patients</p>
                    </Link><hr />
                    <Link to={'/'} className="btn btn" style={{backgroundColor: '#009933'}}>
                        <div className="style">
                            <DiDatabase style={{ fontSize: '30px', marginTop: '-30px' }} />
                            <p style={{ marginBottom: '-2px' }}>HR</p>
                        </div>
                    </Link><hr />
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <FiFilter style={{ fontSize: '30px', marginTop: '-30px' }} />
                            <p style={{ marginBottom: '-2px' }}>Labs</p>
                        </div>
                    </Link><hr />
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <FaHouseChimney style={{ fontSize: '30px', marginTop: '-30px' }} />
                            <p style={{}}>Pharma</p>
                        </div>
                    </Link>
                </div><br />
                <p>Processes</p>
                <div className="card" style={{ border: 'none', boxShadow: '0 0 10px #bdbdbd' }}>
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <BiCopyAlt style={{ fontSize: '30px' }} />
                            <p style={{ marginBottom: '-1px' }}>Registration</p>
                        </div>
                    </Link><hr />
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <MdDescription style={{ fontSize: '30px' }} />
                            <p style={{ marginBottom: '-1px' }}>Consultation</p>
                        </div>
                    </Link><hr />
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <HiEyeDropper style={{ fontSize: '30px', marginTop: '-30px' }} />
                            <p style={{ marginBottom: '-1px' }}>Tests & Report</p>
                        </div>
                    </Link><hr />
                    <Link to={'/'} className="btn btn">
                        <div className="style">
                            <BsCashStack style={{ fontSize: '30px', marginTop: '-30px' }} />
                            <p style={{  }}>Billing</p>
                        </div>
                    </Link>
                </div>
            </div><br />
        </>
    )
}

export default DashBoard
