import { Chart } from './components/Chart/Chart'
import { Navbar } from './components/Navbar/Navbar'
import { Table } from './components/Table/Table'
import { Search } from './components/Filter/Search'
import { Dropdown } from './components/Filter/Dropdown'
import { CButton } from './components/Calendar/CButton'
import { useState } from 'react'

function App() {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)

    return (
        <>
            <div className="w-screen h-screen bg-gray-800 overflow-x-hidden">
                <div className="flex flex-col justify-center">
                    <div className="bg-gray-600 text-gray-800 rounded-xl w-[1520px] h-screen mx-auto mt-20 flex flex-row items-center justify-center">
                        <div className="w-screen h-full flex flex-col mt-12">
                            <div>
                                <Chart />
                            </div>

                            <div className="flex flex-row">
                                <div className="inset-0 ml-6 w-1/2 mr-[580px]">
                                    <Search />
                                </div>

                                <div className="flex items-end">
                                    <button
                                        onClick={() => setShowMyModal(true)}
                                    >
                                        <div className="flex items-end mr-5">
                                            <div className="relative bg-blue-500 hover:bg-gray-800 text-white font-bold rounded p-2">
                                                <span className="text-lg text-gray-200">
                                                    Data
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className="flex items-end">
                                    <div className="bg-blue-500 hover:bg-gray-800 text-white font-bold rounded p-2">
                                        <Dropdown />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 mb-4 mx-4 overflow-auto">
                    <Navbar />
                </div>
            </div>
            <CButton onClose={handleOnClose} visible={showMyModal} />
        </>
    )
}

export default App
