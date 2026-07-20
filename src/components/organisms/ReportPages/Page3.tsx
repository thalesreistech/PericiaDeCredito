import React from 'react';
import PageFooter from "../../molecules/PageFooter";

interface Page3Props {
  notaFaturas: string;
  notaContratos: string;
  consultasRows: any[];
  consultasCount: number;
  showAllConsultas: boolean;
  setShowAllConsultas: (val: boolean) => void;
  cpf: string;
  highlight: (text: string) => React.ReactNode;
}

export default function Page3({
  notaFaturas,
  notaContratos,
  consultasRows,
  consultasCount,
  showAllConsultas,
  setShowAllConsultas,
  cpf,
  highlight
}: Page3Props) {
  const getFaturasBadgeStyle = (nota: string) => {
    switch (nota) {
      case "A": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "B": return "text-teal-600 bg-teal-50 border-teal-200";
      case "C": return "text-amber-600 bg-amber-50 border-amber-200";
      case "D": return "text-rose-600 bg-rose-50 border-rose-200";
      case "E": return "text-red-700 bg-red-50 border-red-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getFaturasLetterStyle = (currentNota: string, targetNota: string) => {
    if (currentNota === targetNota) {
      switch (targetNota) {
        case "A": return "bg-emerald-500 text-white shadow-md shadow-emerald-100";
        case "B": return "bg-teal-500 text-white shadow-md shadow-teal-100";
        case "C": return "bg-amber-500 text-white shadow-md shadow-amber-100";
        case "D": return "bg-rose-500 text-white shadow-md shadow-rose-100";
        case "E": return "bg-red-600 text-white shadow-md shadow-red-100";
      }
    }
    return "bg-slate-200 text-slate-400";
  };

  return (
    <div className="print-page w-[210mm] min-h-[297mm] bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-10 page-break-after">
      <div>
        {/* COMPROMETIMENTO E FATURAS */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-2.5">
            <div className="w-1.5 h-4.5 bg-nexa-blue rounded-none shrink-0"></div>
            <h2 className="text-xs font-display font-black tracking-wider text-nexa-blue uppercase">
              Indicadores de Comportamento Comercial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Faturas em atraso */}
            <div className="p-4 bg-slate-50 rounded-none border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Faturas em Atraso</span>
                  <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-none border ${getFaturasBadgeStyle(notaFaturas)}`}>
                    NOTA {notaFaturas}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                  Indica uma nota para o máximo de dias que 1 fatura ficou em atraso nos últimos 6 meses.
                </p>
              </div>
              
              {/* Note scale */}
              <div>
                <div className="grid grid-cols-5 gap-1.5 text-center font-bold text-xs font-display mb-3">
                  {["A", "B", "C", "D", "E"].map((letter) => (
                    <div key={letter} className={`p-1 rounded-none transition-all ${getFaturasLetterStyle(notaFaturas, letter)}`}>
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-[9px] text-slate-400 leading-tight block">
                  Quanto mais próximo de <span className="font-bold text-slate-600">A</span>, menos dias em atraso. Mais perto de <span className="font-bold text-slate-600">E</span> indica atraso crítico.
                </span>
              </div>
            </div>

            {/* Contratos Recentes */}
            <div className="p-4 bg-slate-50 rounded-none border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Contratos Recentes</span>
                  <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-none border ${getFaturasBadgeStyle(notaContratos)}`}>
                    NOTA {notaContratos}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                  Indica uma nota para o nível de comprometimento de crédito, baseado na quantidade de novos contratos fechados nos últimos 6 meses.
                </p>
              </div>

              {/* Note scale */}
              <div>
                <div className="grid grid-cols-5 gap-1.5 text-center font-bold text-xs font-display mb-3">
                  {["A", "B", "C", "D", "E"].map((letter) => (
                    <div key={letter} className={`p-1 rounded-none transition-all ${getFaturasLetterStyle(notaContratos, letter)}`}>
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-[9px] text-slate-400 leading-tight block">
                  Quanto mais próximo de <span className="font-bold text-slate-600">A</span>, menos contratos foram fechados, indicando conservação de limite.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HISTÓRICO DE CONSULTAS */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-2.5">
            <div className="w-1.5 h-4.5 bg-nexa-blue rounded-none shrink-0"></div>
            <h2 className="text-xs font-display font-black tracking-wider text-nexa-blue uppercase">
              Histórico Recente de Consultas
            </h2>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-slate-400">Exibindo as últimas {Math.min(consultasRows.length, showAllConsultas ? consultasRows.length : 5)} de um total de {consultasCount} consultas registradas.</span>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-none">Total: {consultasCount}</span>
          </div>

          <div className="border border-slate-100 rounded-none overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-100">
                  <th className="py-2.5 px-4">Data</th>
                  <th className="py-2.5 px-4">Empresa / Solicitante</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {consultasRows.slice(0, showAllConsultas ? consultasRows.length : 5).map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-4 font-mono font-semibold text-slate-800">
                      {row.data} <span className="text-slate-400 font-normal text-[10px] ml-1">({row.tempoAtras})</span>
                    </td>
                    <td className="py-2.5 px-4 font-semibold text-slate-700">{highlight(row.empresa)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!showAllConsultas && consultasRows.length > 5 && (
              <div className="p-2.5 bg-slate-50 text-center border-t border-slate-100 no-print">
                <button 
                  onClick={() => setShowAllConsultas(true)} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer text-xs"
                >
                  Ver mais ({consultasRows.length - 5} consultas restantes)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer da folha */}
      <PageFooter pageNumber={3} totalPages={8} documentId={cpf} />
    </div>
  );
}
