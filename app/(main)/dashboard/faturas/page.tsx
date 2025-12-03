"use client";

import React, { useState } from "react";
import ComprovanteModal from "@/components/common/comprovante-modal"; 

interface Fatura {
  id: number;
  fatura: string;
  codigoComprovante: string;
  aluno: {
    nome: string;
    cpd: string;
    dataNascimento: string;
    idade: number;
    curso: string;
  };
  pagamento: {
    referencia: string;
    parcela: string;
    dataVencimento: string;
    dataPagamento: string;
    valor: number;
  };
  status: string;
  comprovanteUrl: string;
}

export default function DashboardFaturas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [faturaSelecionada, setFaturaSelecionada] = useState<Fatura | null>(null);

  const faturas: Fatura[] = [
    {
      id: 1,
      fatura: "FAT-00123",
      codigoComprovante: "CMP-202512-001",
      aluno: {
        nome: "João Silva",
        cpd: "123456",
        dataNascimento: "2000-05-12",
        idade: 25,
        curso: "Administração",
      },
      pagamento: {
        referencia: "2025-12",
        parcela: "1/3",
        dataVencimento: "2025-12-10",
        dataPagamento: "2025-12-08",
        valor: 1250.5,
      },
      status: "pago",
      comprovanteUrl: "/comprovantes/fat00123.pdf",
    },
    {
      id: 2,
      fatura: "FAT-00124",
      codigoComprovante: "CMP-202512-002",
      aluno: {
        nome: "Maria Souza",
        cpd: "654321",
        dataNascimento: "1998-03-22",
        idade: 27,
        curso: "Direito",
      },
      pagamento: {
        referencia: "2025-12",
        parcela: "2/2",
        dataVencimento: "2025-12-15",
        dataPagamento: "",
        valor: 980.0,
      },
      status: "pendente",
      comprovanteUrl: "",
    },
  ];

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pago":
      case "concluído":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "atrasado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const abrirModal = (fatura: Fatura) => {
    setFaturaSelecionada(fatura);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setFaturaSelecionada(null);
  };

  return (
    <div className="p-6 md:p-12">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Faturas</h1>
        <p className="text-gray-600 mt-1">Acompanhe o status das faturas e pagamentos dos alunos.</p>
      </div>

      {/* Cards Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold text-gray-800">Total de Faturas</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">{faturas.length}</p>
          <span className="text-gray-500 text-sm mt-1 block">Inclui todas as faturas cadastradas</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-green-500">
          <h2 className="text-lg font-semibold text-gray-800">Pagas</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">{faturas.filter(f => f.status === "pago").length}</p>
          <span className="text-gray-500 text-sm mt-1 block">Faturas concluídas</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-yellow-500">
          <h2 className="text-lg font-semibold text-gray-800">Pendentes</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">{faturas.filter(f => f.status === "pendente").length}</p>
          <span className="text-gray-500 text-sm mt-1 block">Faturas em aberto</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-red-500">
          <h2 className="text-lg font-semibold text-gray-800">Atrasadas</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">{faturas.filter(f => f.status === "atrasado").length}</p>
          <span className="text-gray-500 text-sm mt-1 block">Faturas vencidas</span>
        </div>
      </div>

      {/* Tabela de Faturas */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Fatura", "Aluno", "Valor", "Vencimento", "Pagamento", "Comprovante", "Status", "Ações"].map((head) => (
                <th
                  key={head}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faturas.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fatura}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.aluno.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">R$ {item.pagamento.valor.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.pagamento.dataVencimento}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.comprovanteUrl ? "PDF" : "Aguardando"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                  {item.comprovanteUrl && (
                    <button
                      onClick={() => abrirModal(item)}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                    >
                      Ver
                    </button>
                  )}
                  {item.comprovanteUrl && (
                    <a
                      href={item.comprovanteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
                    >
                      Baixar
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Comprovante */}
      {faturaSelecionada && (
        <ComprovanteModal
          isOpen={modalOpen}
          onClose={fecharModal}
          fatura={faturaSelecionada}
        />
      )}
    </div>
  );
}