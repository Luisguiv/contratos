import React from 'react'

export function Table() {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-200 bg-gray-800 uppercase border-b border-gray-400">
                                <th className="px-4 py-3">Tipo</th>
                                <th className="px-4 py-3">Empresa</th>
                                <th className="px-4 py-3">Valor</th>
                                <th className="px-4 py-3">Inicio</th>
                                <th className="px-4 py-3">Fim</th>
                                <th className="px-4 py-3">Progresso</th>
                                <th className="px-4 py-3">Relatorio</th>
                                <th className="px-4 py-3">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">Obras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">Petrobras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">6/4/2002</td>
                                <td className="px-4 py-3 text-sm border">
                                    <div>

                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className='flex items-center justify-center'>
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">Obras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">Petrobras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">6/4/2002</td>
                                <td className="px-4 py-3 text-sm border">
                                    <div>

                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className='flex items-center justify-center'>
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">Obras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">Petrobras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">6/4/2002</td>
                                <td className="px-4 py-3 text-sm border">
                                    <div>

                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className='flex items-center justify-center'>
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">Obras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">Petrobras</td>
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">6/4/2002</td>
                                <td className="px-4 py-3 text-sm border">
                                    <div>

                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className='flex items-center justify-center'>
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}