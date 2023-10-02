import { Chart } from './components'
import Progressbar from './components/Chart/Progressbar'
import { Navbar } from './components/Navbar/Navbar'
import { Table } from './components/Table/Table'

function App() {
    return (
        <div className='w-screen h-screen bg-gray-800 overflow-hidden'>
            <div className='flex flex-col justify-center'>
                <div className='h-full my-4 mx-4'>
                <Navbar/>
                </div>
            
                <div className="bg-gray-600 text-gray-800 rounded-xl w-[1520px] h-screen mx-auto flex flex-row items-center justify-center">
                    <div className='w-screen h-full flex flex-col mt-12'>
                        <div>
                            <Chart/>
                        </div>
                        <div>
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
