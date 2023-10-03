import React from 'react'
import './style.css'

export function Dropdown() {
    return (
        <div className="relative w-full h-full">
            <input type="checkbox" id="sortbox" className="hidden absolute" />
            <label
                htmlFor="sortbox"
                className="flex items-center space-x-1 cursor-pointer text-gray-200"
            >
                <span className="text-lg text-gray-200">Tipo</span>
            </label>

            <div
                id="sortboxmenu"
                className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
            >
                <ul className="block text-right text-gray-900">
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 hover:bg-gray-200"
                        >
                            Software
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 hover:bg-gray-200"
                        >
                            Obras
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 hover:bg-gray-200"
                        >
                            Serviço
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
