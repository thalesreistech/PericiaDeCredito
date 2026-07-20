import React from 'react';
import PageFooter from "../../molecules/PageFooter";

interface Page6Props {
  processosCount: number;
  totalProcessos: number;
  lesivosImagemCount: number;
  criminalOcorrenciasCount: number;
  totalPoloAtivo: number;
  totalPoloPassivo: number;
  valorPoloPassivo: number;
  processosRows: any[];
  showAllProcessos: boolean;
  setShowAllProcessos: (val: boolean) => void;
  cpf: string;
  formatBRL: (val: number) => string;
}

export default function Page6({
  processosCount,
  totalProcessos,
  lesivosImagemCount,
  criminalOcorrenciasCount,
  totalPoloAtivo,
  totalPoloPassivo,
  valorPoloPassivo,
  processosRows,
  showAllProcessos,
  setShowAllProcessos,
  cpf,
  formatBRL
}: Page6Props) {
  return (
    <div className="print-page w-[210mm] min-h-[297mm] bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-10 page-break-after">
      <div>
        {/* HEADER PRINCIPAL PROCESSOS */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-150 pb-2.5">
            <div className="w-1.5 h-4.5 bg-slate-700 rounded-none shrink-0"></div>
            <h2 className="text-sm font-display font-black tracking-wider text-slate-700 uppercase">
              Ações e Processos Judiciais Ativos
            </h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-50 p-3 rounded-none border border-slate-100 text-center">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Total Processos</span>
              <span className="text-2xl font-display font-black text-rose-500 mt-1 block">{processosCount}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-none border border-slate-100 text-center col-span-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Valor Total Consolidado</span>
              <span className="text-lg font-display font-black text-rose-500 mt-1.5 block">{formatBRL(totalProcessos)}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-none border border-slate-100 text-center">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Última Distribuição</span>
              <span className="text-xs font-bold text-slate-700 mt-2 block">16/03/2026</span>
            </div>
          </div>

          {/* Indicadores Lesivos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Lesivo à imagem */}
            <div className="p-4 bg-amber-50/40 border border-amber-200/50 rounded-none">
              <span className="text-xs font-mono font-bold text-amber-700 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-500 rounded-none"></span>
                Indicadores Lesivos à Imagem
              </span>
              <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
                Avaliação de processos que impactam a credibilidade pública criminal ou reputacional do cliente.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                <div className="bg-white p-2 rounded-none border border-amber-100">
                  <span className="text-[9px] text-slate-400 block">Quantidade Ativa</span>
                  <span className="font-bold text-amber-700">
                    {lesivosImagemCount === 0 ? "Nenhum" : `${lesivosImagemCount} ${lesivosImagemCount === 1 ? "Processo" : "Processos"}`}
                  </span>
                </div>
                <div className="bg-white p-2 rounded-none border border-amber-100">
                  <span className="text-[9px] text-slate-400 block">Criminal</span>
                  <span className={`font-bold ${criminalOcorrenciasCount === 0 ? "text-emerald-600" : "text-rose-600"}`}>
                    {criminalOcorrenciasCount === 0 ? "Nada Consta" : `${criminalOcorrenciasCount} ${criminalOcorrenciasCount === 1 ? "Ocorrência" : "Ocorrências"}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Lesivo ao crédito */}
            <div className="p-4 bg-rose-50/40 border border-rose-200/50 rounded-none">
              <span className="text-xs font-mono font-bold text-rose-700 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 bg-rose-500 rounded-none"></span>
                Indicadores Lesivos ao Crédito
              </span>
              <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
                Ações de execução econômica ativa com alto potencial de restrição patrimonial.
              </p>
              <div className="grid grid-cols-4 gap-2 mt-3 text-xs">
                <div className="bg-white p-2 rounded-none border border-rose-100 text-center col-span-1">
                  <span className="text-[8px] text-slate-400 block">Total</span>
                  <span className="font-bold text-rose-700">{processosCount}</span>
                </div>
                <div className="bg-white p-2 rounded-none border border-rose-100 text-center col-span-1">
                  <span className="text-[8px] text-slate-400 block">Polo Ativo</span>
                  <span className="font-bold text-slate-700">{totalPoloAtivo === 0 ? "—" : totalPoloAtivo}</span>
                </div>
                <div className="bg-white p-2 rounded-none border border-rose-100 text-center col-span-1">
                  <span className="text-[8px] text-slate-400 block">Polo Pass.</span>
                  <span className="font-bold text-rose-600">{totalPoloPassivo}</span>
                </div>
                <div className="bg-white p-2 rounded-none border border-rose-100 text-center col-span-1">
                  <span className="text-[8px] text-slate-400 block">Valor Pass.</span>
                  <span className="font-bold text-rose-700 text-[10px] tracking-tight">
                    {valorPoloPassivo >= 1000000 ? `R$ ${(valorPoloPassivo/1000000).toFixed(1)}M` : formatBRL(valorPoloPassivo)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* List of Processos */}
          <div className="border border-slate-100 rounded-none overflow-hidden text-[10px]">
            <div className="bg-slate-50 p-2 border-b border-slate-100 flex justify-between items-center text-xs font-mono font-bold">
              <span className="text-slate-500">LISTAGEM DOS PRINCIPAIS PROCESSOS</span>
              <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded-none">Exibindo {Math.min(processosRows.length, showAllProcessos ? processosRows.length : 5)} de {processosCount}</span>
            </div>
            
            <div className="divide-y divide-slate-100">
              {processosRows.length === 0 ? (
                <div className="p-4 text-center text-slate-400 italic">Nenhum processo judicial ativo registrado</div>
              ) : (
                processosRows.slice(0, showAllProcessos ? processosRows.length : 5).map((row, idx) => {
                  const originalIdx = processosRows.indexOf(row);
                  const isPoloAtivo = originalIdx % 6 === 0;
                  return (
                    <div key={idx} className="p-3 hover:bg-slate-50/50 flex flex-col md:flex-row justify-between gap-2 md:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-indigo-700 bg-indigo-50 px-1 py-0.2 rounded-none text-[9px] font-mono">{row.orgao}</span>
                          <span className="font-mono text-slate-600 font-semibold">{row.numero}</span>
                          <span className={`px-2 py-0.2 rounded-none text-[8px] font-mono font-bold uppercase ${
                            row.situacao === "EM TRAMITACAO" ? "bg-amber-100 text-amber-800" :
                            row.situacao === "SUSPENSO" ? "bg-rose-100 text-rose-800" :
                            "bg-slate-100 text-slate-600"
                          }`}>{row.situacao}</span>
                          <span className={`px-2 py-0.2 rounded-none text-[8px] font-mono font-bold uppercase ${
                            isPoloAtivo ? "bg-indigo-100 text-indigo-800" : "bg-slate-100 text-slate-600"
                          }`}>
                            {isPoloAtivo ? "Polo Ativo" : "Polo Passivo"}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium mt-1 font-display leading-tight">{row.classe}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 font-mono">Distribuição: {row.distribuicao} | Assunto: {row.assunto}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Valor da Causa</span>
                        <span className="text-xs font-mono font-black text-rose-600">{formatBRL(row.valor)}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {!showAllProcessos && processosRows.length > 5 && (
              <div className="p-2.5 bg-slate-50 text-center border-t border-slate-100 no-print">
                <button 
                  onClick={() => setShowAllProcessos(true)} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                >
                  Ver mais ({processosRows.length - 5} processos restantes)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer da folha */}
      <PageFooter pageNumber={6} totalPages={8} documentId={cpf} />
    </div>
  );
}
