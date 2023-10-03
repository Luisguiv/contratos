import React from 'react'
import { Calendar } from './Calendar'

export function CButton({ visible, onClose }) {
    if (!visible) return null

    return (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <Calendar />
            <div className="absolute right-0 top-0 bg-blue-500 text-white m-4 p-2 rounded">
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}
