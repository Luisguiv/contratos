import React from 'react'
import './style.css'

export function Contract({ visible, onClose }) {
    if (!visible) return null

    return (
        <div className="contract-container overflow-hidden">
            <h2>
                <strong>Cadastro de Contrato</strong>
            </h2>
            <form>
                <div className="form-group">
                    <label htmlFor="objeto-contrato">Objeto do Contrato</label>
                    <textarea
                        id="objeto-contrato"
                        name="objeto-contrato"
                        rows={4}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="entregas-servicos">
                        Entregas / Serviços
                    </label>
                    <textarea
                        id="entregas-servicos"
                        name="entregas-servicos"
                        rows={4}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="periodo-contrato">
                        Período de Vigência
                    </label>
                    <input
                        type="text"
                        id="periodo-contrato"
                        name="periodo-contrato"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="valor-contrato">Valor Contratado</label>
                    <input
                        type="text"
                        id="valor-contrato"
                        name="valor-contrato"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="local-execucao">
                        Local de Execução do Contrato
                    </label>
                    <input
                        type="text"
                        id="local-execucao"
                        name="local-execucao"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="forma-pagamento">Forma de Pagamento</label>
                    <input
                        type="text"
                        id="forma-pagamento"
                        name="forma-pagamento"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prestacao-contas">
                        Prestação de Contas e Evidências
                    </label>
                    <textarea
                        id="prestacao-contas"
                        name="prestacao-contas"
                        rows={4}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="empresa-contratada">
                        Empresa Contratada
                    </label>
                    <input
                        type="text"
                        id="empresa-contratada"
                        name="empresa-contratada"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="representante-legal">
                        Representante Legal da Empresa Contratada
                    </label>
                    <input
                        type="text"
                        id="representante-legal"
                        name="representante-legal"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gestor-contrato">
                        Gestor do Contrato (Empresa Contratante)
                    </label>
                    <input
                        type="text"
                        id="gestor-contrato"
                        name="gestor-contrato"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-gray-700 text-white p-2 m-2">
                        Cadastrar Contrato
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="bg-gray-700 text-white p-2 m-2"
                >
                    Voltar
                </button>
            </div>
        </div>
    )
}
