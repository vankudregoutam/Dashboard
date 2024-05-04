import React from 'react'
import { FaChartBar, FaMoneyBill, FaMoneyCheckDollar } from 'react-icons/fa6'
import { GrGroup } from 'react-icons/gr'

const Consultant = () => {
    return (
        <>
            <div className="container sidebar">
                <div className="row">
                    <div className="card col-3 " style={{ borderLeft: '4px solid #ffcc99', width: '270px' }}>
                        <div className="card-body">
                            <h6 style={{ color: '#009933' }}>Consultant Count</h6>
                            <h5>90 / 900</h5>
                            <p style={{ color: 'gray' }}>Today/Period</p>
                            <button className="btn btn-outline-secondary symbol" style={{ backgroundColor: '#ffcc99' }}><GrGroup /></button>
                        </div>
                    </div>
                    <div className="card col-3 consultant" style={{ borderLeft: '4px solid #91b6fa' }}>
                        <div className="card-body">
                            <h6 style={{ color: '#009933' }}>Consultants</h6>
                            <h5>11 / 25</h5>
                            <p style={{ color: 'gray' }}>Today/Period</p>
                            <button className="btn btn-outline-secondary symbol" style={{ backgroundColor: '#91b6fa' }}><FaChartBar /></button>
                        </div>
                    </div>
                    <div className="card col-3 consultant" style={{ borderLeft: '4px solid #9ef0a5' }}>
                        <div className="card-body">
                            <h6 style={{ color: '#009933' }}>Labs</h6>
                            <h5>25 / 560</h5>
                            <p style={{ color: 'gray' }}>Today/Period</p>
                            <button className="btn btn-outline-secondary symbol" style={{ backgroundColor: '#9ef0a5' }}><FaMoneyBill /></button>
                        </div>
                    </div>
                    <div className="card col-3 consultant" style={{ borderLeft: '4px solid #e5bbfa' }}>
                        <div className="card-body">
                            <h6 style={{ color: '#009933' }}>DietPlans</h6>
                            <h5>25 / 250</h5>
                            <p style={{ color: 'gray' }}>Today/Period</p>
                            <button className="btn btn-outline-secondary symbol" style={{ backgroundColor: '#e5bbfa' }}><FaMoneyCheckDollar /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultant
