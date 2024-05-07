import '../App.css'
import React, { useState } from 'react'
import { BiBell, BiPlus, BiSearch } from 'react-icons/bi'

const NavBar = () => {
    const [input, setInput] = useState({ search: '' })
    const onChange = (e) => {
        setInput({ [e.target.name]: e.target.value })
    }
    return (
        <>
            <nav className='navbar flex font-style' style={{ backgroundColor: '#00264d' }}>
                <div className="container-fluid scrollbar-fixed">
                    <div className="container col-4">
                        <form className='navbar-search' action="">
                            <div className="input-group mx-5">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" style={{ borderTopLeftRadius: 50, borderBottomLeftRadius: 50, backgroundColor: 'whitesmoke', color: 'black', border: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Patients
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </div>
                                <input className='form-control search' style={{ border: 'none' }} type="text" id='search' name='search' value={input.search} placeholder='Search...' onChange={onChange} />
                                <button type='submit' className="btn btn-outline-secondary" style={{ borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: 'white', border: 'none' }}><BiSearch /></button>
                                <button className="btn btn-outline-secondary mx-2" style={{ borderRadius: 50, backgroundColor: '#009933', color: 'white', border: 'none' }}><BiPlus /> Add New</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex">
                        <button className="btn btn-outline-secondary" style={{ fontSize: 25, borderRadius: 50, backgroundColor: '#4d4d4d', color: 'white', border: 'none' }}><BiBell /></button>
                        <button className="btn btn-outline-light" style={{ borderRadius: 50, border: 'none' }}><img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" style={{ height: 45, width: 45, borderRadius: 50 }} /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
