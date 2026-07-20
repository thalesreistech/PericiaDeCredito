import React from 'react';
import PageFooter from "../../molecules/PageFooter";

interface Page5Props {
  protestosCount: number;
  totalProtestos: number;
  protestosRows: any[];
  showAllProtestos: boolean;
  setShowAllProtestos: (val: boolean) => void;
  bancariasCount: number;
  totalBancarias: number;
  bancariasRows: any[];
  showAllBancarias: boolean;
  setShowAllBancarias: (val: boolean) => void;
  chequesCount: number;
  cpf: string;
  highlight: (text: string) => React.ReactNode;
  formatBRL: (val: number) => string;
}

export default function Page5({
  protestosCount,
  totalProtestos,
  protestosRows,
  showAllProtestos,
  setShowAllProtestos,
  bancariasCount,
  totalBancarias,
  bancariasRows,
  showAllBancarias,
  setShowAllBancarias,
  chequesCount,
  cpf,
  highlight,
  formatBRL
}: Page5Props) {
  return (
    <div className="print-page w-[210mm] min-h-[297mm] bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-10 page-break-after">
      <div>
        {/* TÍTULOS PROTESTADOS */}
        <div className="mb-8">
          <div className="flex justify-between items-center border-b border-rose-100 pb-2.5 mb-4 gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-4.5 bg-rose-500 rounded-none shrink-0"></div>
              <h2 className="text-xs font-display font-black tracking-wider text-rose-600 uppercase">
                Títulos Protestados em Cartório
              </h2>
            </div>
            <div className="text-right text-xs font-mono shrink-0">
              <span className="text-slate-400">Ocorrências: <span className="font-bold text-slate-700">{protestosCount}</span> | Total: </span>
              <span className="font-bold text-rose-600">{formatBRL(totalProtestos)}</span>
            </div>
          </div>

          <div className="border border-slate-100 rounded-none overflow-hidden text-[9px]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-mono text-[8px] uppercase border-b border-slate-100">
                  <th className="py-2 px-3">Data</th>
                  <th className="py-2 px-3">Cartório</th>
                  <th className="py-2 px-3">Cidade</th>
                  <th className="py-2 px-3">Estado</th>
                  <th className="py-2 px-3">Vencimento</th>
                  <th className="py-2 px-3 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {protestosRows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-4 text-center text-slate-400 italic">Nenhum título protestado registrado</td>
                  </tr>
                ) : (
                  protestosRows.slice(0, showAllProtestos ? protestosRows.length : 10).map((row, idx) => (
                    <tr key={idx} className="hover:bg-rose-50/10">
                      <td className="py-2 px-3 font-mono text-slate-500">{row.data}</td>
                      <td className="py-2 px-3 font-semibold text-slate-700">{row.cartorio}</td>
                      <td className="py-2 px-3 text-slate-600">{highlight(row.cidade)}</td>
                      <td className="py-2 px-3 text-slate-500">{row.estado}</td>
                      <td className="py-2 px-3 font-mono text-slate-400 text-center">{row.vencimento}</td>
                      <td className="py-2 px-3 font-mono font-bold text-rose-600 text-right">{formatBRL(row.valor)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {!showAllProtestos && protestosRows.length > 10 && (
              <div className="p-2 bg-slate-50 text-center border-t border-slate-100 no-print">
                <button 
                  onClick={() => setShowAllProtestos(true)} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                >
                  Ver mais ({protestosRows.length - 10} restantes)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* DETALHAMENTO: PENDÊNCIAS BANCÁRIAS */}
        <div className="mb-8">
          <div className="flex justify-between items-center border-b border-amber-100 pb-2.5 mb-4 gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-4.5 bg-amber-500 rounded-none shrink-0"></div>
              <h2 className="text-xs font-display font-black tracking-wider text-amber-600 uppercase">
                Pendências Financeiras Bancárias
              </h2>
            </div>
            <div className="text-right text-xs font-mono shrink-0">
              <span className="text-slate-400">Ocorrências: <span className="font-bold text-slate-700">{bancariasCount}</span> | Total: </span>
              <span className="font-bold text-rose-600">{formatBRL(totalBancarias)}</span>
            </div>
          </div>

          <div className="border border-slate-100 rounded-none overflow-hidden text-[9px]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-mono text-[8px] uppercase border-b border-slate-100">
                  <th className="py-2.5 px-3">Data</th>
                  <th className="py-2.5 px-3">Disponib.</th>
                  <th className="py-2.5 px-3">Informante Bancário</th>
                  <th className="py-2.5 px-3">Tipo Operação</th>
                  <th className="py-2.5 px-3 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bancariasRows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-slate-400 italic">Nenhuma pendência bancária registrada</td>
                  </tr>
                ) : (
                  bancariasRows.slice(0, showAllBancarias ? bancariasRows.length : 5).map((row, idx) => (
                    <tr key={idx} className="hover:bg-rose-50/10">
                      <td className="py-2.5 px-3 font-mono text-slate-500">{row.data}</td>
                      <td className="py-2.5 px-3 font-mono text-slate-500">{row.disponib}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">{highlight(row.informante)}</td>
                      <td className="py-2.5 px-3 text-slate-500 font-mono">{row.tipo}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-rose-600 text-right">{formatBRL(row.valor)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {!showAllBancarias && bancariasRows.length > 5 && (
              <div className="p-2 bg-slate-50 text-center border-t border-slate-100 no-print">
                <button 
                  onClick={() => setShowAllBancarias(true)} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer text-xs"
                >
                  Ver mais ({bancariasRows.length - 5} ocorrências restantes)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CHEQUES SEM FUNDO */}
        <div>
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5 mb-4 gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-4.5 bg-amber-500 rounded-none shrink-0"></div>
              <h2 className="text-xs font-display font-black tracking-wider text-amber-600 uppercase">
                Cheques sem Fundos
              </h2>
            </div>
            <div className="text-right text-xs font-mono shrink-0">
              <span className="text-slate-400">Ocorrências: </span>
              <span className="font-bold text-rose-600">{chequesCount}</span>
            </div>
          </div>
          
          <div className="border border-slate-100 rounded-none overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-100">
                  <th className="py-2 px-4">Data</th>
                  <th className="py-2 px-4">Agência</th>
                  <th className="py-2 px-4">Banco</th>
                  <th className="py-2 px-4 text-center">Quantidade</th>
                  <th className="py-2 px-4 text-right">Motivo</th>
                </tr>
              </thead>
              <tbody>
                {chequesCount === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-slate-400 italic animate-pulse">Nenhum cheque sem fundos registrado</td>
                  </tr>
                ) : (
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-slate-600">05/2026</td>
                    <td className="py-3 px-4 font-mono text-slate-800">9022</td>
                    <td className="py-3 px-4 font-semibold text-slate-800">748 COOPERATIVA CRÉDITO COOPVALES S.A.</td>
                    <td className="py-3 px-4 font-bold text-center text-rose-500">1</td>
                    <td className="py-3 px-4 font-mono text-right font-bold text-slate-700">12 (MOTIVO 12)</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer da folha */}
      <PageFooter pageNumber={5} totalPages={8} documentId={cpf} />
    </div>
  );
}
