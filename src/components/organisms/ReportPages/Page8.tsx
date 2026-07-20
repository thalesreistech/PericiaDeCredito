import React from 'react';
import { CheckCircle, Award } from "lucide-react";
import PageFooter from "../../molecules/PageFooter";

interface Page8Props {
  bacenOperacoesRows: any[];
  showAllBacenOperacoes: boolean;
  setShowAllBacenOperacoes: (val: boolean) => void;
  cpf: string;
  formatBRL: (val: number) => string;
}

export default function Page8({
  bacenOperacoesRows,
  showAllBacenOperacoes,
  setShowAllBacenOperacoes,
  cpf,
  formatBRL
}: Page8Props) {
  return (
    <div className="print-page w-[210mm] min-h-[297mm] bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-10 page-break-after">
      <div>
        {/* OPERAÇÕES DETALHADAS BACEN */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-150 pb-2.5">
            <div className="w-1.5 h-4.5 bg-sky-500 rounded-none shrink-0"></div>
            <h2 className="text-sm font-display font-black tracking-wider text-sky-600 uppercase">
              Detalhamento por Modalidade SCR
            </h2>
          </div>

          <div className="space-y-4">
            {bacenOperacoesRows.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-slate-200 rounded-none bg-slate-50/60 my-2">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-sm font-display font-bold text-slate-800">Nenhuma Operação de Crédito Ativa</h4>
                <p className="text-[10px] text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                  Não foram encontradas modalidades de crédito com saldo devedor ativo reportadas ao SCR do Banco Central do Brasil para este CPF no período consultado.
                </p>
              </div>
            ) : (
              bacenOperacoesRows.slice(0, showAllBacenOperacoes ? bacenOperacoesRows.length : 4).map((mod, mIdx) => (
                <div key={mIdx} className="p-3 bg-slate-50/70 border border-slate-100 rounded-none">
                  <div className="flex justify-between items-start mb-2 pb-1 border-b border-slate-200/50">
                    <div>
                      <span className="text-[8px] font-mono font-black text-indigo-600 bg-indigo-50 px-1 py-0.2 rounded-none">{mod.modalidade}</span>
                      <h4 className="text-xs font-display font-bold text-slate-800 mt-1">{mod.descricao}</h4>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-[9px] text-slate-400 block">Total</span>
                      <span className="text-xs font-bold text-slate-900">{formatBRL(mod.total)}</span>
                    </div>
                  </div>

                  <div className="text-[9px] overflow-hidden rounded-none border border-slate-100 bg-white">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-100/50 text-slate-400 font-mono text-[8px] border-b border-slate-100">
                          <th className="py-1 px-2">Código</th>
                          <th className="py-1 px-2">Descrição</th>
                          <th className="py-1 px-2 text-right">Valor</th>
                          <th className="py-1 px-2 text-right">Restritivo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {mod.detalhes?.map((det, dIdx) => (
                          <tr key={dIdx}>
                            <td className="py-1 px-2 font-mono text-slate-500">{det.codigo}</td>
                            <td className="py-1 px-2 text-slate-700 font-medium">{det.descricao}</td>
                            <td className="py-1 px-2 font-mono font-bold text-slate-800 text-right">{formatBRL(det.valor)}</td>
                            <td className="py-1 px-2 text-right">
                              <span className={`px-1.5 py-0.5 rounded-none font-mono font-bold text-[8px] inline-block ${
                                det.restritivo === "Sim" ? "bg-rose-50 text-rose-600 border border-rose-200" : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              }`}>{det.restritivo}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}

            {!showAllBacenOperacoes && bacenOperacoesRows.length > 4 && (
              <div className="p-2.5 bg-slate-50 text-center border border-slate-100 rounded-none no-print">
                <button 
                  onClick={() => setShowAllBacenOperacoes(true)} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer text-xs"
                >
                  Ver mais ({bacenOperacoesRows.length - 4} modalities restantes)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* TERMOS E CONFORMIDADE LGPD */}
        <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-[10px] leading-relaxed text-slate-500">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 mb-2 font-display">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Minuta de Declaração LGPD e Termos de Conformidade</span>
          </div>
          <p className="mb-2">
            As informações apresentadas nesta consulta de crédito são confidenciais e destinam-se exclusivamente ao processo de análise, avaliação de risco e orientação em transações comerciais. Qualquer uso diverso, em desacordo com a legislação vigente, incluindo a Lei Geral de Proteção de Dados (Lei 13.709/18 - LGPD), poderá acarretar responsabilidade civil e criminal pelos danos causados a terceiros.
          </p>
          <p>
            Declaro que a utilização dos dados obtidos por meio desta consulta respeitará as finalidades legítimas previstas em lei, bem como os princípios e procedimentos estabelecidos pela Lei Geral de Proteção de Dados (Lei 13.709/18 - LGPD), conforme divulgado em nossa página inicial de acesso.
          </p>
        </div>
      </div>

      {/* Footer da folha */}
      <PageFooter pageNumber={8} totalPages={8} documentId={cpf} />
    </div>
  );
}
