"use client";

import Image from "next/image";
import React from "react";

interface ComprovanteModalProps {
  isOpen: boolean;
  onClose: () => void;
  fatura: {
    fatura: string;
    codigoComprovante: string;
    aluno: {
      nome: string;
      cpf: string;
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
    comprovanteUrl: string;
  };
}

export default function ComprovanteModal({
  isOpen,
  onClose,
  fatura,
}: ComprovanteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto scrollbar-hide"
      >
        {/* Header com logo */}
        <div className="flex flex-col space-y-2 items-center mb-6">
          <Image
            width={150}
            height={80}
            src={"/assets/img/logo/unideSc_logo.svg"}
            alt="Logo da Empresa"
            className="w-50 h-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">
            Comprovante de Pagamento
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Código do Comprovante:{" "}
            <span className="font-mono">{fatura.codigoComprovante}</span>
          </p>
        </div>

        <div className="mb-6 border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Dados do Aluno
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="font-semibold">Nome:</span> {fatura.aluno.nome}
            </div>
            <div>
              <span className="font-semibold">CPF:</span> {fatura.aluno.cpf}
            </div>
            <div>
              <span className="font-semibold">Data de Nascimento:</span>{" "}
              {fatura.aluno.dataNascimento}
            </div>
            <div>
              <span className="font-semibold">Idade:</span> {fatura.aluno.idade}
            </div>
            <div>
              <span className="font-semibold">Curso:</span> {fatura.aluno.curso}
            </div>
          </div>
        </div>

        <div className="mb-6 border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Detalhes do Pagamento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="font-semibold">Referência:</span>{" "}
              {fatura.pagamento.referencia}
            </div>
            <div>
              <span className="font-semibold">Parcela:</span>{" "}
              {fatura.pagamento.parcela}
            </div>
            <div>
              <span className="font-semibold">Data de Vencimento:</span>{" "}
              {fatura.pagamento.dataVencimento}
            </div>
            <div>
              <span className="font-semibold">Data de Pagamento:</span>{" "}
              {fatura.pagamento.dataPagamento || "—"}
            </div>
            <div>
              <span className="font-semibold">Valor:</span> R${" "}
              {fatura.pagamento.valor.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="mb-6 border flex justify-center overflow-hidden">
          <Image
            alt="qrcode"
            width={150}
            height={150}
            src={"/assets/img/dashboard/qrcode.png"}
            className="w-60 h-60"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          >
            Fechar
          </button>
          <a
            href={fatura.comprovanteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Baixar / Imprimir
          </a>
        </div>
      </div>

      {/* CSS para esconder a scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
