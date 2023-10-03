import React from 'react'
import { Progressbar } from '../Chart'

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
                                <th className="px-4 py-3">Início</th>
                                <th className="px-4 py-3">Fim</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Progresso</th>
                                <th className="px-4 py-3">Relatório</th>
                                <th className="px-4 py-3">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Obras
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    MEGA BR LTDA
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 80.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    6/4/2023
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    2/4/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Alto</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>35</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Software
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    INNOVA LTDA
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 40.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    8/8/2023
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    1/2/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Baixo</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>20</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Serviço
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    FMC PROMOT
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 16.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    13/1/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    2/2/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Baixo</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>0</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Serviço
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    PETROBRAS
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 90.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    6/12/2022
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    7/9/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Médio</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>60</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Software
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    APPLE INC.
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 95.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    16/7/2022
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    6/6/2025
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Alto</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>75</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Serviço
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    TECNOMYL
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 80.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    1/9/2024
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    13/1/2026
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Médio</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>0</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-200">
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    Serviço
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    ITAIPU
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">
                                    R$ 75.000
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    1/9/2022
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    3/12/2023
                                </td>
                                <td className="px-4 py-3 text-sm border">
                                    <span className="inline-flex items-center m-2 px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-full text-sm font-semibold text-yellow-600">
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                        <span className="ml-1">Médio</span>
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm border w-0">
                                    <div className="flex flex-row items-center justify-center">
                                        <div>
                                            <Progressbar />
                                        </div>
                                        <div className="ml-2">
                                            <strong>
                                                <span>50</span>%
                                            </strong>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                className="rounded hover:bg-indigo-700"
                                                href="#"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-file-earmark-text"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm border">
                                    <div className="flex items-center justify-center">
                                        <a
                                            className="rounded hover:bg-indigo-700"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pen"
                                                viewBox="0 0 16 16"
                                            >
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
