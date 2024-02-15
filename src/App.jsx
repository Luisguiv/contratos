import { Chart } from './components/Chart/Chart'
import { Navbar } from './components/Navbar/Navbar'
import { Table } from './components/Table/Table'
import { Search } from './components/Filter/Search'
import { Dropdown } from './components/Filter/Dropdown'
import { CButton } from './components/Calendar/CButton'
import { Contract } from './components/Contract/Contract'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get('https://localhost:8080/contrato');
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)

    const [showMyContract, setShowMyContract] = useState(false)

    const handleOnCloseContract = () => {
        fetchData();
        setShowMyContract(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="w-screen h-screen bg-gray-800 overflow-hidden">
                <div className="flex flex-col justify-center">
                    <div className="h-full my-4 mx-4">
                        <Navbar />
                    </div>

                    <div className="bg-gray-600 text-gray-800 rounded-xl w-[1520px] h-screen mx-auto flex flex-row items-center justify-center">
                        <div className="w-screen h-full flex flex-col mt-12">
                            <div>
                                <Chart />
                            </div>

                            <div className="flex flex-row">
                                <div className="inset-0 ml-6 w-1/2 mr-[450px]">
                                    <Search />
                                </div>

                                <div className="flex items-end">
                                    <button
                                        onClick={() => setShowMyContract(true)}
                                    >
                                        <div className="flex items-end mr-5">
                                            <div className="relative bg-blue-500 hover:bg-gray-800 text-white font-bold rounded p-2">
                                                <span className="text-lg text-gray-200">
                                                    Contrato+
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className="flex items-end">
                                    <button onClick={() => setShowMyModal(true)}>
                                        <div className="flex items-end mr-5">
                                            <div className="relative bg-blue-500 hover:bg-gray-800 text-white font-bold rounded p-2">
                                                <span className="text-lg text-gray-200">
                                                    Data
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Table items={items} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contract
                onClose={handleOnCloseContract}
                visible={showMyContract}
            />
            <CButton onClose={handleOnClose} visible={showMyModal} />
        </>
    )
}

export default App
