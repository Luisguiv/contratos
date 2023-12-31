import React from 'react'
import './style.css'

export function Search() {
    return (
        <div className="relative pt-6 w-full sm:max-w-3xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-3">
                <form
                    role="form"
                    className="relative flex z-50 bg-white rounded-full"
                >
                    <input
                        type="text"
                        placeholder="Digite o número do contrato"
                        className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-gray-800 text-white rounded-full font-semibold px-8 py-4 hover:bg-gray-400 focus:bg-gray-600 focus:outline-none">
                        Buscar
                    </button>
                </form>
                <div className="glow glow-1 z-10 bg-teal-400 absolute"></div>
                <div className="glow glow-2 z-20 bg-cyan-600 absolute"></div>
                <div className="glow glow-3 z-30 bg-sky-400 absolute"></div>
                <div className="glow glow-4 z-40 bg-blue-600 absolute"></div>
            </div>
        </div>
    )
}
