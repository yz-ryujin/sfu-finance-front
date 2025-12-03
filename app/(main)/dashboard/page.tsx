"use client";

import React from "react";

export default function DashboardHome() {
  const atividadesRecentes = [
    { id: 1, usuario: "João Silva", acao: "Novo cadastro", data: "2025-12-01 10:30" },
    { id: 2, usuario: "Maria Souza", acao: "Atualizou informações", data: "2025-12-02 14:12" },
    { id: 3, usuario: "Empresa X", acao: "Nova fatura gerada", data: "2025-12-03 09:45" },
    { id: 4, usuario: "Carlos Lima", acao: "Pagamento recebido", data: "2025-12-03 15:20" },
  ];

  return (
    <div className="p-6 md:p-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Inicial</h1>
        <p className="text-gray-600 mt-1">Visão geral do sistema e atividades recentes dos usuários.</p>
      </div>

      {/* Cards resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold text-gray-800">Clientes Ativos</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">120</p>
          <span className="text-gray-500 text-sm mt-1 block">Clientes cadastrados no sistema</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-green-500">
          <h2 className="text-lg font-semibold text-gray-800">Novos Cadastros</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">8</p>
          <span className="text-gray-500 text-sm mt-1 block">Nos últimos 7 dias</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-yellow-500">
          <h2 className="text-lg font-semibold text-gray-800">Contatos Agendados</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">15</p>
          <span className="text-gray-500 text-sm mt-1 block">Para os próximos dias</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border-l-4 border-red-500">
          <h2 className="text-lg font-semibold text-gray-800">Tarefas Pendentes</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">5</p>
          <span className="text-gray-500 text-sm mt-1 block">Ações ainda não concluídas</span>
        </div>
      </div>

      {/* Seção de atividades recentes */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Atividades Recentes</h2>
        <ul className="divide-y divide-gray-200">
          {atividadesRecentes.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-3 hover:bg-gray-50 transition rounded px-2">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.usuario}</p>
                <p className="text-sm text-gray-500">{item.acao}</p>
              </div>
              <div className="text-sm text-gray-400">{item.data}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
