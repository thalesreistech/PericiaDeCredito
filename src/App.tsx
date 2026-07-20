import { useState, useEffect } from "react";
import Sidebar from "./components/organisms/Sidebar";
import A4Pages from "./components/A4Pages";
import { 
  DADOS_CADASTRAIS,
  PENDENCIAS_FINANCEIRAS_ROWS,
  RESTRICOES_FINANCEIRAS_ROWS,
  TITULOS_PROTESTADOS_ROWS,
  PENDENCIAS_BANCARIAS_ROWS,
  PROCESSOS_JUDICIAIS,
  HISTORICO_CONSULTAS,
  BACEN_CREDITO_A_VENCER,
  OPERACOES_DADOS
} from "./data/reportData";
import { PEOPLE_BANK, Person } from "./data/peopleBank";
import { FICTIONAL_BANKS_FINANCIALS, FICTIONAL_COMPANIES_CONSULTAS } from "./data/mockDataBank";
import { 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  FileText,
  TrendingDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Robust dynamic row generator with 100+ unique, 100% fictional records
function generateRows<T extends { valor?: number; value?: number; [key: string]: any }>(baseRows: T[], count: number): T[] {
  if (count <= 0) return [];
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    const baseItem = baseRows[i % baseRows.length];
    const newItem: any = { ...baseItem };

    // 1. Assign fully fictional unique names based on index i to guarantee no duplication & no real brands
    if ('empresa' in newItem) {
      newItem.empresa = FICTIONAL_COMPANIES_CONSULTAS[i % FICTIONAL_COMPANIES_CONSULTAS.length];
      
      // Calculate a highly realistic and unique date for each consulta index i (staggered backward)
      const baseDate = new Date(2026, 6, 19); // Base: 19/07/2026
      const targetDate = new Date(baseDate.getTime() - i * 2.5 * 24 * 60 * 60 * 1000); // 2.5 days staggered per query
      const d = String(targetDate.getDate()).padStart(2, '0');
      const m = String(targetDate.getMonth() + 1).padStart(2, '0');
      const y = targetDate.getFullYear();
      newItem.data = `${d}/${m}/${y}`;
      
      const diffDays = Math.round((baseDate.getTime() - targetDate.getTime()) / (24 * 60 * 60 * 1000));
      if (diffDays === 0) {
        newItem.tempoAtras = "hoje";
      } else if (diffDays === 1) {
        newItem.tempoAtras = "ontem";
      } else if (diffDays < 30) {
        newItem.tempoAtras = `há ${diffDays} dias`;
      } else {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
          newItem.tempoAtras = "há 1 mês";
        } else {
          newItem.tempoAtras = `há ${diffMonths} meses`;
        }
      }
    }

    if ('informante' in newItem && typeof newItem.informante === 'string') {
      const hasZeroPrefix = newItem.informante.startsWith("0-");
      const fakeName = FICTIONAL_BANKS_FINANCIALS[i % FICTIONAL_BANKS_FINANCIALS.length];
      newItem.informante = hasZeroPrefix ? `0-${fakeName}` : fakeName;
    }

    // 2. Adjust dynamic values and IDs if we are beyond baseRows or multiplying records
    if (i >= baseRows.length) {
      if ('contrato' in newItem && typeof newItem.contrato === 'string') {
        newItem.contrato = newItem.contrato.replace(/\d+/g, (m) => String(Number(m) + i));
      }
      if ('numero' in newItem && typeof newItem.numero === 'string') {
        newItem.numero = newItem.numero.replace(/\d+/g, (m) => String(Number(m) + i));
      }
      if ('valor' in newItem && typeof newItem.valor === 'number') {
        newItem.valor = parseFloat((newItem.valor * (1 + (i % 5) * 0.15)).toFixed(2));
      }
    }

    if ('orgao' in newItem) {
      // Every 15th process is a Criminal lawsuit to make it fully dynamic
      const isCriminal = i % 15 === 14;
      if (isCriminal) {
        newItem.assunto = "CRIMINAL";
        newItem.classe = i % 2 === 0 
          ? "ACAO PENAL - PROCEDIMENTO ORDINARIO" 
          : "INQUERITO POLICIAL";
        newItem.valor = 0;
      }
    }

    // 3. Dynamic dates staggering to ensure 100% distinct rows
    if ('data' in newItem && typeof newItem.data === 'string' && newItem.data.includes("/") && !('empresa' in newItem)) {
      const [dayStr, monthStr, yearStr] = newItem.data.split("/");
      const baseDay = Number(dayStr);
      const baseMonth = Number(monthStr);
      const baseYear = Number(yearStr);
      if (!isNaN(baseDay) && !isNaN(baseMonth) && !isNaN(baseYear)) {
        const originalDate = new Date(baseYear, baseMonth - 1, baseDay);
        const targetDate = new Date(originalDate.getTime() - i * 1.5 * 24 * 60 * 60 * 1000); // 1.5 days staggered per index
        const d = String(targetDate.getDate()).padStart(2, '0');
        const m = String(targetDate.getMonth() + 1).padStart(2, '0');
        const y = targetDate.getFullYear();
        newItem.data = `${d}/${m}/${y}`;
        
        if ('disponib' in newItem && typeof newItem.disponib === 'string' && newItem.disponib.includes("/")) {
          const dispDate = new Date(targetDate.getTime() + 1.2 * 24 * 60 * 60 * 1000); // available slightly after
          const dd = String(dispDate.getDate()).padStart(2, '0');
          const dm = String(dispDate.getMonth() + 1).padStart(2, '0');
          const dy = dispDate.getFullYear();
          newItem.disponib = `${dd}/${dm}/${dy}`;
        }
      }
    }

    if ('distribuicao' in newItem && typeof newItem.distribuicao === 'string' && newItem.distribuicao.includes("/")) {
      const [dayStr, monthStr, yearStr] = newItem.distribuicao.split("/");
      const baseDay = Number(dayStr);
      const baseMonth = Number(monthStr);
      const baseYear = Number(yearStr);
      if (!isNaN(baseDay) && !isNaN(baseMonth) && !isNaN(baseYear)) {
        const originalDate = new Date(baseYear, baseMonth - 1, baseDay);
        const targetDate = new Date(originalDate.getTime() - i * 3 * 24 * 60 * 60 * 1000); // 3 days staggered per index
        const d = String(targetDate.getDate()).padStart(2, '0');
        const m = String(targetDate.getMonth() + 1).padStart(2, '0');
        const y = targetDate.getFullYear();
        newItem.distribuicao = `${d}/${m}/${y}`;
      }
    }

    result.push(newItem);
  }
  return result;
}

export default function App() {
  // Theme state fixed to light as requested
  const activeTheme = "nexa-light";
  const isLight = true;

  // Person from the bank of 10 people
  const [currentPerson, setCurrentPerson] = useState<Person>(PEOPLE_BANK[0]);

  // Global states for simulated fields
  const [searchQuery, setSearchQuery] = useState("");
  const [clientName, setClientName] = useState(currentPerson.dadosCadastrais.nome);
  const [score, setScore] = useState(289);
  const [probabilidade, setProbabilidade] = useState(18);
  const [cpf, setCpf] = useState(currentPerson.dadosCadastrais.cpf);
  const [notaFaturas, setNotaFaturas] = useState("D");
  const [notaContratos, setNotaContratos] = useState("A");
  const [activeTab, setActiveTab] = useState<"A4" | "DASH">("A4");
  const [tipoPessoa, setTipoPessoa] = useState<"PF" | "PJ">("PF");

  // Section entries count sliders (Updated for Isolated Controls)
  const [ratingGeral, setRatingGeral] = useState("AUTO");
  const [pendenciasFonteIICount, setPendenciasFonteIICount] = useState(12);
  const [restricoesFonteIIICount, setRestricoesFonteIIICount] = useState(8);
  const [protestosCount, setProtestosCount] = useState(13);
  const [bancariasCount, setBancariasCount] = useState(7);
  const [chequesCount, setChequesCount] = useState(1);
  const [processosCount, setProcessosCount] = useState(46);
  const [consultasCount, setConsultasCount] = useState(13);
  const [scoreBacenScr, setScoreBacenScr] = useState(289);
  const [bacenCount, setBacenCount] = useState(10);
  const [pendenciasCount, setPendenciasCount] = useState(12);

  // Sync state if selected person changes
  useEffect(() => {
    setClientName(currentPerson.dadosCadastrais.nome);
    setCpf(currentPerson.dadosCadastrais.cpf);
  }, [currentPerson]);

  // Generate rows dynamically
  const pendenciasRows = generateRows(PENDENCIAS_FINANCEIRAS_ROWS, pendenciasFonteIICount);
  const restricoesRows = generateRows(RESTRICOES_FINANCEIRAS_ROWS, restricoesFonteIIICount);
  const protestosRows = generateRows(TITULOS_PROTESTADOS_ROWS, protestosCount);
  const bancariasRows = generateRows(PENDENCIAS_BANCARIAS_ROWS, bancariasCount);
  const processosRows = generateRows(PROCESSOS_JUDICIAIS, processosCount);
  const consultasRows = generateRows(HISTORICO_CONSULTAS, consultasCount);

  // Generate dynamic BACEN operations based on the slider count
  const bacenOperacoesRows = Array.from({ length: bacenCount }).map((_, i) => {
    const baseMod = OPERACOES_DADOS[i % OPERACOES_DADOS.length];
    const newDetails = (baseMod.detalhes || []).map((det, dIdx) => {
      const scale = 1 + (i % 3) * 0.12 + (dIdx % 2) * 0.05;
      return {
        ...det,
        valor: parseFloat((det.valor * scale).toFixed(2))
      };
    });
    const newTotal = newDetails.reduce((sum, det) => sum + det.valor, 0);
    return {
      ...baseMod,
      descricao: `${baseMod.descricao} #${i + 1}`,
      detalhes: newDetails,
      total: parseFloat(newTotal.toFixed(2))
    };
  });

  const totalBacenCredito = bacenOperacoesRows.reduce((acc, mod) => acc + mod.total, 0);

  const baseVencerRows = generateRows(BACEN_CREDITO_A_VENCER, Math.min(BACEN_CREDITO_A_VENCER.length, Math.max(3, bacenCount)));
  const baseVencerSum = baseVencerRows.reduce((acc, r) => acc + (r.valor || 0), 0) || 1;
  const scaleFactor = totalBacenCredito / baseVencerSum;
  const bacenCreditoAVencerRows = baseVencerRows.map(r => {
    const valor = parseFloat(((r.valor || 0) * scaleFactor).toFixed(2));
    const percentual = totalBacenCredito > 0 ? parseFloat((valor / totalBacenCredito * 100).toFixed(1)) : 0;
    return {
      ...r,
      valor,
      percentual
    };
  });

  // Compute totals
  const totalPendencias = pendenciasRows.reduce((acc, r) => acc + (r.valor || 0), 0);
  const totalRestricoes = restricoesRows.reduce((acc, r) => acc + (r.valor || 0), 0);
  const totalProtestos = protestosRows.reduce((acc, r) => acc + (r.valor || 0), 0);
  const totalBancarias = bancariasRows.reduce((acc, r) => acc + (r.valor || 0), 0);
  const totalProcessos = processosRows.reduce((acc, r) => acc + (r.valor || 0), 0);

  const totalRestricoesConsolidado = totalPendencias + totalRestricoes + totalProtestos + totalBancarias;

  // Format helper for dynamic values
  const formatM = (val: number) => {
    if (val >= 1000000) {
      return `R$ ${(val / 1000000).toFixed(1)}M`;
    }
    if (val >= 1000) {
      return `R$ ${(val / 1000).toFixed(0)}k`;
    }
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  // Reset helper
  const handleReset = () => {
    setCurrentPerson(PEOPLE_BANK[0]);
    setClientName(PEOPLE_BANK[0].dadosCadastrais.nome);
    setScore(289);
    setProbabilidade(18);
    setCpf(PEOPLE_BANK[0].dadosCadastrais.cpf);
    setSearchQuery("");
    setNotaFaturas("D");
    setNotaContratos("A");
    setPendenciasCount(12);
    setProtestosCount(13);
    setBancariasCount(7);
    setProcessosCount(46);
    setConsultasCount(13);
    setBacenCount(10);
    
    setRatingGeral("AUTO");
    setPendenciasFonteIICount(12);
    setRestricoesFonteIIICount(12);
    setChequesCount(1);
    setScoreBacenScr(289);
    setTipoPessoa("PF");
  };

  // Determine container screen background based on selected theme
  const getThemeBg = () => {
    return "bg-[#F1F2F6] text-slate-900";
  };

  return (
    <div id="app-root" className={`flex flex-col lg:flex-row h-screen overflow-hidden ${getThemeBg()} transition-colors duration-300 font-sans`}>
      {/* SIDEBAR / CONTROLS PANEL */}
       <Sidebar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clientName={clientName}
        setClientName={setClientName}
        score={score}
        setScore={setScore}
        probabilidade={probabilidade}
        setProbabilidade={setProbabilidade}
        cpf={cpf}
        setCpf={setCpf}
        notaFaturas={notaFaturas}
        setNotaFaturas={setNotaFaturas}
        notaContratos={notaContratos}
        setNotaContratos={setNotaContratos}
        onReset={handleReset}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        protestosCount={protestosCount}
        setProtestosCount={setProtestosCount}
        processosCount={processosCount}
        setProcessosCount={setProcessosCount}
        consultasCount={consultasCount}
        setConsultasCount={setConsultasCount}
        bacenCount={bacenCount}
        setBacenCount={setBacenCount}
        totalRestricoesConsolidado={totalRestricoesConsolidado}
        totalProcessos={totalProcessos}
        totalBacenCredito={totalBacenCredito}
        tipoPessoa={tipoPessoa}
        setTipoPessoa={setTipoPessoa}
        
        ratingGeral={ratingGeral}
        setRatingGeral={setRatingGeral}
        pendenciasFonteIICount={pendenciasFonteIICount}
        setPendenciasFonteIICount={setPendenciasFonteIICount}
        restricoesFonteIIICount={restricoesFonteIIICount}
        setRestricoesFonteIIICount={setRestricoesFonteIIICount}
        bancariasCount={bancariasCount}
        setBancariasCount={setBancariasCount}
        chequesCount={chequesCount}
        setChequesCount={setChequesCount}
        scoreBacenScr={scoreBacenScr}
        setScoreBacenScr={setScoreBacenScr}
      />

      {/* MAIN DOCUMENT VIEWING INTERFACE */}
      <div className="flex-1 flex flex-col h-full overflow-hidden print:overflow-visible">
        {/* Top Control Bar (Screen-only) */}
        <header className={`h-14 border-b px-6 flex items-center justify-between shrink-0 no-print transition-colors duration-300 ${
          isLight 
            ? "bg-white border-gray-200 text-slate-800" 
            : "border-slate-900 bg-slate-950/60 backdrop-blur"
        }`}>
          <div className="flex items-center gap-3">
            <Layers className={`w-4 h-4 ${isLight ? "text-indigo-600" : "text-indigo-400"}`} />
            <h2 className={`text-sm font-display font-bold tracking-tight ${isLight ? "text-slate-800" : "text-slate-200"}`}>
              Visualização de Relatório de Perícia
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab selector */}
            <div className={`p-0.5 rounded-none-none border flex text-[11px] font-mono transition-colors ${
              isLight ? "bg-slate-100 border-gray-200" : "bg-slate-900 border-slate-800"
            }`}>
              <button
                onClick={() => setActiveTab("A4")}
                className={`py-1 px-3 rounded-none-none transition-all cursor-pointer ${
                  activeTab === "A4" 
                    ? "bg-indigo-600 text-white font-bold" 
                    : isLight 
                      ? "text-slate-500 hover:text-slate-800" 
                      : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Simulação Folha A4 (Impressão)
              </button>
              <button
                onClick={() => setActiveTab("DASH")}
                className={`py-1 px-3 rounded-none-none transition-all cursor-pointer ${
                  activeTab === "DASH" 
                    ? "bg-indigo-600 text-white font-bold" 
                    : isLight 
                      ? "text-slate-500 hover:text-slate-800" 
                      : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Dashboard Analytics (Métricas)
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic content rendering with motion animation */}
        <div className="flex-1 overflow-y-auto print:overflow-visible">
          <AnimatePresence mode="wait">
            {activeTab === "A4" ? (
              <motion.div
                key="a4-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full print:h-auto"
              >
                {/* A4 page viewport container */}
                <A4Pages 
                  searchQuery={searchQuery}
                  clientName={clientName}
                  score={score}
                  probabilidade={probabilidade}
                  cpf={cpf}
                  notaFaturas={notaFaturas}
                  notaContratos={notaContratos}
                  currentPerson={currentPerson}
                  pendenciasCount={pendenciasCount}
                  protestosCount={protestosCount}
                  bancariasCount={bancariasCount}
                  processosCount={processosCount}
                  consultasCount={consultasCount}
                  pendenciasRows={pendenciasRows}
                  restricoesRows={restricoesRows}
                  protestosRows={protestosRows}
                  bancariasRows={bancariasRows}
                  processosRows={processosRows}
                  consultasRows={consultasRows}
                  totalPendencias={totalPendencias}
                  totalRestricoes={totalRestricoes}
                  totalProtestos={totalProtestos}
                  totalBancarias={totalBancarias}
                  totalProcessos={totalProcessos}
                  bacenCount={bacenCount}
                  bacenCreditoAVencerRows={bacenCreditoAVencerRows}
                  bacenOperacoesRows={bacenOperacoesRows}
                  totalBacenCredito={totalBacenCredito}
                  tipoPessoa={tipoPessoa}
                  
                  ratingGeral={ratingGeral}
                  pendenciasFonteIICount={pendenciasFonteIICount}
                  restricoesFonteIIICount={restricoesFonteIIICount}
                  chequesCount={chequesCount}
                  scoreBacenScr={scoreBacenScr}
                />
              </motion.div>
            ) : (
              <motion.div
                key="dash-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8 max-w-6xl mx-auto space-y-6"
              >
                {/* MODERN DASHBOARD ANALYTICS PREVIEW */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block">Nexa Risk Intelligence</span>
                    <h1 className={`text-2xl md:text-3xl font-display font-black mt-1 ${isLight ? "text-slate-900" : "text-white"}`}>Dashboard de Risco Corporativo</h1>
                    <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>Visão consolidada e gráfica das métricas cadastrais, financeiras e judiciais de {clientName}.</p>
                  </div>
                  
                  <div className={`flex items-center gap-3 p-3 rounded-none-none border ${
                    isLight ? "bg-indigo-50 border-indigo-100" : "bg-indigo-950/40 border-indigo-900/30"
                  }`}>
                    <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse" />
                    <div>
                      <span className={`text-[10px] font-mono block ${isLight ? "text-indigo-700" : "text-indigo-300"}`}>Classificação Automatizada AI</span>
                      <span className={`text-xs font-bold ${isLight ? "text-indigo-900" : "text-slate-100"}`}>Risco Crítico Detectado</span>
                    </div>
                  </div>
                </div>

                {/* Score Big Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Score */}
                  <div className={`rounded-none-none p-5 border flex flex-col justify-between h-40 ${
                    isLight ? "bg-white border-gray-200 shadow-sm" : "bg-slate-900 border-slate-800"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-mono font-bold uppercase ${isLight ? "text-slate-500" : "text-slate-400"}`}>Score de Risco AI</span>
                      <span className="text-[10px] font-mono text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded-none font-bold">Risco Alto</span>
                    </div>
                    <div>
                      <span className="text-5xl font-display font-black text-rose-500 block">{score}</span>
                      <span className={`text-[10px] mt-1 block ${isLight ? "text-slate-400" : "text-slate-500"}`}>Escala de Risco Ponderada de 0 a 1000</span>
                    </div>
                  </div>

                  {/* Inadimplencia */}
                  <div className={`rounded-none-none p-5 border flex flex-col justify-between h-40 ${
                    isLight ? "bg-white border-gray-200 shadow-sm" : "bg-slate-900 border-slate-800"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-mono font-bold uppercase ${isLight ? "text-slate-500" : "text-slate-400"}`}>Probabilidade de Inadimplência</span>
                      <span className="text-[10px] font-mono text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded-none font-bold">Alerta</span>
                    </div>
                    <div>
                      <span className="text-5xl font-display font-black text-rose-500 block">{probabilidade}%</span>
                      <span className={`text-[10px] mt-1 block ${isLight ? "text-slate-400" : "text-slate-500"}`}>Quanto menor o percentual, melhor a saúde de crédito</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={`rounded-none-none p-5 border flex flex-col justify-between h-40 ${
                    isLight ? "bg-white border-gray-200 shadow-sm" : "bg-slate-900 border-slate-800"
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-mono font-bold uppercase ${isLight ? "text-slate-500" : "text-slate-400"}`}>Classificação Geral de Rating</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-none font-bold ${
                        isLight ? "text-emerald-700 bg-emerald-50" : "text-emerald-400 bg-emerald-500/10"
                      }`}>Processado por IA</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-6xl font-display font-black text-rose-500">E</span>
                      <div>
                        <span className={`text-xs font-bold block ${isLight ? "text-slate-800" : "text-slate-200"}`}>Situação de Inadimplência</span>
                        <span className={`text-[10px] block mt-0.5 ${isLight ? "text-slate-400" : "text-slate-500"}`}>Calculado considerando todas as restrições ativas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid analytics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Restrições Ativas */}
                  <div className={`rounded-none-none p-6 border space-y-4 ${
                    isLight ? "bg-white border-gray-200 shadow-sm" : "bg-slate-900 border-slate-800"
                  }`}>
                    <div className={`flex justify-between items-center border-b pb-2 ${isLight ? "border-gray-100" : "border-slate-800"}`}>
                      <h3 className={`text-sm font-display font-bold ${isLight ? "text-slate-800" : "text-slate-200"}`}>Consolidado de Pendências Ativas</h3>
                      <span className="text-[11px] font-mono text-rose-600 font-bold bg-rose-500/10 px-2 py-0.5 rounded-none">{formatM(totalRestricoesConsolidado)}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className={`flex justify-between text-xs mb-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          <span>Pendências Financeiras (Fonte II)</span>
                          <span className={`font-bold ${isLight ? "text-slate-700" : "text-slate-200"}`}>{pendenciasCount} ocorrências / {formatM(totalPendencias)}</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-none-none overflow-hidden ${isLight ? "bg-slate-100" : "bg-slate-800"}`}>
                          <div className="bg-indigo-600 h-full animate-pulse" style={{ width: `${Math.min(100, Math.max(10, (pendenciasCount / 20) * 100))}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className={`flex justify-between text-xs mb-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          <span>Restrições em aberto (Fonte III)</span>
                          <span className={`font-bold ${isLight ? "text-slate-700" : "text-slate-200"}`}>{pendenciasCount} ocorrências / {formatM(totalRestricoes)}</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-none-none overflow-hidden ${isLight ? "bg-slate-100" : "bg-slate-800"}`}>
                          <div className="bg-indigo-600 h-full animate-pulse" style={{ width: `${Math.min(100, Math.max(10, (pendenciasCount / 20) * 100))}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className={`flex justify-between text-xs mb-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          <span>Crédito Vencido - BACEN</span>
                          <span className={`font-bold ${isLight ? "text-slate-700" : "text-slate-200"}`}>R$ 1.2M</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-none-none overflow-hidden ${isLight ? "bg-slate-100" : "bg-slate-800"}`}>
                          <div className="bg-indigo-600 h-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className={`flex justify-between text-xs mb-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          <span>Protestos em Cartório</span>
                          <span className={`font-bold ${isLight ? "text-slate-700" : "text-slate-200"}`}>{protestosCount} ocorrências / {formatM(totalProtestos)}</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-none-none overflow-hidden ${isLight ? "bg-slate-100" : "bg-slate-800"}`}>
                          <div className="bg-indigo-600 h-full animate-pulse" style={{ width: `${Math.min(100, Math.max(10, (protestosCount / 20) * 100))}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Informações de conformidade */}
                  <div className={`rounded-none-none p-6 border flex flex-col justify-between ${
                    isLight ? "bg-white border-gray-200 shadow-sm" : "bg-slate-900 border-slate-800"
                  }`}>
                    <div>
                      <h3 className={`text-sm font-display font-bold border-b pb-2 mb-3 ${
                        isLight ? "text-slate-800 border-gray-100" : "text-slate-200 border-slate-800"
                      }`}>Diagnóstico Nexa AI</h3>
                      <p className={`text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                        Este relatório foi analisado e processado automaticamente de acordo com as normas vigentes do Banco Central do Brasil (BACEN) e a Lei Geral de Proteção de Dados (LGPD). 
                      </p>
                      <div className={`mt-4 p-3 rounded-none-none border flex items-start gap-2.5 ${
                        isLight ? "bg-slate-50 border-gray-100" : "bg-slate-950 border-slate-800"
                      }`}>
                        <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className={`text-[11px] leading-normal ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          Para obter o detalhamento de cada uma das {pendenciasCount} ocorrências de restrição de pagamentos comerciais e duplicatas, acesse a aba <span className="text-indigo-600 font-bold">Simulação Folha A4</span> para visualizar as páginas sequenciais de impressão.
                        </span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-[10px] font-mono pt-4 border-t ${
                      isLight ? "border-gray-100 text-slate-400" : "border-slate-800/50 text-slate-500"
                    }`}>
                      <span>Análise de crédito segura</span>
                      <span>•</span>
                      <span>Autenticação: d3e431fe9565409</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
