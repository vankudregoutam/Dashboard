import React from 'react'

const Table = () => {

    const data = [
        { name: 'John Smith', patient_count: 12, labs: 3, diet_plans: 6 },
        { name: 'John Doe', patient_count: 8, labs: 2, diet_plans: 4 },
        { name: 'Mark Johnson', patient_count: 6, labs: 1, diet_plans: 2 },
        { name: 'Mary Lee', patient_count: 10, labs: 4, diet_plans: 8 },
        { name: 'David Chen', patient_count: 14, labs: 5, diet_plans: 9 },
        { name: 'Emily Wana', patient_count: 5, labs: 2, diet_plans: 3 },
    ];

    return (
        <>
            <div className="container-fluid my-4">
                <div className="card" style={{ marginLeft: '168px', border: 'none' }}>
                    <h3 style={{ marginLeft: '40px', marginTop: '30px', marginBottom: '20px' }}>Consultants</h3>
                    <table style={{ textAlign: 'center', marginLeft: '40px', marginRight: '40px', marginBottom: '50px' }} >
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>PATIENT COUNT</th>
                                <th>LABS</th>
                                <th>DIET PLANS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.patient_count}</td>
                                    <td>{item.labs}</td>
                                    <td>{item.diet_plans}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table
