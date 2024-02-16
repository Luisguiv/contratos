import React from "react";
import { useState } from "react";
import axios from "axios";

type UnidadeFederacao = {
  nome: string;
};

type Cidade = {
  id: string;
  nome: string;
  unidadeFederacao: UnidadeFederacao;
};

type Bairro = {
  id: string;
  nome: string;
};

type TipoLogradouro = {
  nome: string;
};

type Logradouro = {
  id: string;
  nome: string;
  tipoLogradouro: TipoLogradouro;
};

type Endereco = {
  cep: string;
  cidade: Cidade;
  bairro: Bairro;
  logradouro: Logradouro;
};

type CitiesProps = {
  cidades: Endereco[];
};

export function Contract({ visible, onClose }, { cidades }: CitiesProps) {
  if (!visible) return null;

  // Estado para cada campo
  const [objeto, setObjeto] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [valorContratado, setValorContratado] = useState("");
  const [numEndereco, setNumEnd] = useState("");
  const [complementoEnd, setComplementoEnd] = useState("");
  const [empresaContratada, setEmpresaContratada] = useState("");
  const [representanteLegal, setRepresentanteLegal] = useState("");
  const [gestorContrato, setGestorContrato] = useState("");

  const [idCidade, setCidadeSelecionada] = useState("");
  const [idBairro, setBairroSelecionada] = useState("");
  const [idLogradouro, setLogradouroSelecionada] = useState("");

  // Função para tratar o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    const Contrato = {
      objeto,
      dataInicio,
      dataFim,
      valorContratado,
      numEndereco,
      complementoEnd,
      empresaContratada,
      representanteLegal,
      gestorContrato,
    };

    try {
      // Substitua pela URL do seu endpoint
      await axios.post("http://localhost:8080/contrato", {
        Contrato,
        idCidade,
        idBairro,
        idLogradouro,
      });
      onClose(); // Feche o modal após o sucesso
    } catch (error) {
      console.error("Erro ao cadastrar contrato:", error);
    }
  };
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="m-auto">
        <div>
          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex items-center justify-center p-2">
              <h2>
                <strong>Cadastrar Contrato</strong>
              </h2>
            </div>
            <div className="px-5 pb-5">
              <input
                placeholder="Objeto do Contrato"
                value={objeto}
                onChange={(e) => setObjeto(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Data Inicio"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <div className="flex">
                <div className="flex-grow w-1/4 pr-2">
                  <input
                    placeholder="Data Fim"
                    value={dataFim}
                    onChange={(e) => setDataFim(e.target.value)}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    placeholder="Valor Contratado"
                    value={valorContratado}
                    onChange={(e) => setValorContratado(e.target.value)}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div className="px-5 pb-5">
              <input
                placeholder="Numero do Endereco"
                value={numEndereco}
                onChange={(e) => setNumEnd(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Complemento do Endereco"
                value={complementoEnd}
                onChange={(e) => setComplementoEnd(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <div className="flex">
                <div className="flex-grow">
                  <input
                    placeholder="Empresa Contratada"
                    value={empresaContratada}
                    onChange={(e) => setEmpresaContratada(e.target.value)}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <input
                placeholder="Representante Legal da Empresa Contratada"
                value={representanteLegal}
                onChange={(e) => setRepresentanteLegal(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Gestor do Contrato (Empresa Contratante)"
                value={gestorContrato}
                onChange={(e) => setGestorContrato(e.target.value)}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div className="flex">
              <div className="flex-1 mx-2">
                <input
                  type="checkbox"
                  id="sortbox"
                  className="hidden absolute"
                />
                <label
                  htmlFor="sortbox"
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <span className="text-lg">Cidade</span>
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </label>

                <div
                  id="sortboxmenu"
                  className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
                >
                  <ul className="block text-right text-gray-900">
                    {cidades.map((cidade, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setCidadeSelecionada(cidade.cidade.id)}
                          className="block px-3 py-2 hover:bg-gray-200"
                        >
                          {cidade.cidade.nome}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 mx-2">
                <input
                  type="checkbox"
                  id="sortbox"
                  className="hidden absolute"
                />
                <label
                  htmlFor="sortbox"
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <span className="text-lg">Bairro</span>
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </label>

                <div
                  id="sortboxmenu"
                  className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
                >
                  <ul className="block text-right text-gray-900">
                    {cidades.map((cidade, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setBairroSelecionada(cidade.bairro.id)}
                          className="block px-3 py-2 hover:bg-gray-200"
                        >
                          {cidade.bairro.nome}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 mx-2">
                <input
                  type="checkbox"
                  id="sortbox"
                  className="hidden absolute"
                />
                <label
                  htmlFor="sortbox"
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <span className="text-lg">Logradouro</span>
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </label>

                <div
                  id="sortboxmenu"
                  className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
                >
                  <ul className="block text-right text-gray-900">
                    {cidades.map((cidade, index) => (
                      <li key={index}>
                        <button
                          onClick={() =>
                            setLogradouroSelecionada(cidade.logradouro.id)
                          }
                          className="block px-3 py-2 hover:bg-gray-200"
                        >
                          {cidade.logradouro.nome}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                      opacity=".3"
                    ></path>
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                  </svg>
                  <span className="pl-2 mx-1">Cadastrar</span>
                </button>
              </div>
              <div className="flex-initial">
                <button
                  onClick={onClose}
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-blue-200 hover:fill-current hover:text-blue-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M8 9h8v10H8z" opacity=".3"></path>
                    <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                  </svg>
                  <span className="pl-2 mx-1">Voltar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
