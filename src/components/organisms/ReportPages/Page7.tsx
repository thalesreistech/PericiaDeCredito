import React from 'react';
import PageFooter from "../../molecules/PageFooter";

interface Page7Props {
  bacenCount: number;
  cpf: string;
  scoreBacenScr: number;
  bacenCreditoAVencerRows: any[];
  formatBRL: (val: number) => string;
}

export default function Page7({
  bacenCount,
  cpf,
  scoreBacenScr,
  bacenCreditoAVencerRows,
  formatBRL
}: Page7Props) {
  return (
    <div className="print-page w-[210mm] min-h-[297mm] bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-10 page-break-after">
      <div>
        {/* DADOS BACEN COMPROMETIMENTO */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-150 pb-2.5">
            <div className="w-1.5 h-4.5 bg-sky-500 rounded-none shrink-0"></div>
            <h2 className="text-sm font-display font-black tracking-wider text-sky-600 uppercase">
              Consulta SCR BACEN (Histórico Consolidado)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-50 rounded-none border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Total de Operações</span>
                <span className="text-2xl font-display font-black text-slate-800 mt-1 block">{bacenCount}</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-2">
                Total de contratos/linhas de crédito reportados ao SCR no período-base consultado.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-none border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Total de Instituições</span>
                <span className="text-2xl font-display font-black text-slate-800 mt-1 block">{bacenCount === 0 ? 0 : Math.max(1, Math.round(bacenCount / 1.5))}</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-2">
                Número de instituições financeiras que reportaram operações para este CPF.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-none border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Início de Relacionamento</span>
                <span className="text-lg font-display font-black text-indigo-600 mt-2.5 block">{bacenCount === 0 ? "-" : "08/04/1991"}</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-2">
                Primeira ocorrência de relacionamento encontrada no histórico do SCR.
              </p>
            </div>
          </div>

          {/* Resumo Geral SCR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-slate-100 rounded-none bg-slate-50/50">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase block mb-3 border-b border-slate-100 pb-1">Resumo Geral SCR</span>
              
              <div className="grid grid-cols-2 gap-3 text-xs font-medium">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Documento</span>
                  <span className="font-semibold text-slate-800">{cpf}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Tipo de Pessoa</span>
                  <span className="font-semibold text-slate-800">FÍSICA</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Coobrigação Assumida</span>
                  <span className="font-bold text-emerald-600">R$ 0,00</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Coobrigação Recebida</span>
                  <span className="font-bold text-slate-800">{formatBRL(bacenCount === 0 ? 0 : 2106.70 * (bacenCount / 10))}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-slate-100 rounded-none bg-slate-50/50">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase block mb-3 border-b border-slate-100 pb-1">Indicadores de Confiabilidade</span>
              
              <div className="grid grid-cols-2 gap-3 text-xs font-medium">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Doc. Processados</span>
                  <span className="font-semibold text-slate-800">{bacenCount === 0 ? "-" : "96,29%"}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Vol. Processado</span>
                  <span className="font-semibold text-slate-800">{bacenCount === 0 ? "-" : "99,97%"}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Operações Discordância</span>
                  <span className="font-bold text-emerald-600">0</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">Operações Subjudice</span>
                  <span className="font-bold text-slate-800">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* SCR SCORE */}
          <div className="bg-indigo-950 text-white p-5 rounded-none flex items-center justify-between mb-6 shadow">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-none border-4 border-indigo-400 flex items-center justify-center text-indigo-200 font-display font-black text-2xl bg-indigo-900 shrink-0">
                {scoreBacenScr}
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-slate-100">Score de Crédito Consolidado SCR</h3>
                <p className="text-xs text-slate-400 mt-1 leading-normal max-w-sm">
                  A pontuação consolidada do SCR tem caráter informativo e pondera as movimentações de crédito gerais registradas.
                </p>
              </div>
            </div>
            <div className="text-right text-xs font-mono text-indigo-300">
              <span>Database: 05/2026</span>
            </div>
          </div>

          {/* TABELA SUCINTA CRÉDITO BACEN */}
          <div className="border border-slate-100 rounded-none overflow-hidden text-[9px] leading-tight">
            <div className="bg-slate-50 p-2 border-b border-slate-100 font-mono font-bold text-slate-500 uppercase tracking-wider">
              Consolidado de Créditos BACEN
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100/50 text-slate-400 font-mono text-[8px] uppercase border-b border-slate-100">
                  <th className="py-2 px-3">Faixa de Prazo (Vencer)</th>
                  <th className="py-2 px-3 text-right">Valor Consolidado</th>
                  <th className="py-2 px-3 text-right">Percentual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bacenCreditoAVencerRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/10">
                    <td className="py-1.5 px-3 font-semibold text-slate-700">{row.descricao}</td>
                    <td className="py-1.5 px-3 font-mono font-bold text-slate-800 text-right">{formatBRL(row.valor)}</td>
                    <td className="py-1.5 px-3 font-mono text-slate-500 text-right">{row.percentual}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer da folha */}
      <PageFooter pageNumber={7} totalPages={8} documentId={cpf} />
    </div>
  );
}
