export interface RatingData {
  index: number;
  letter: string;
  name: string;
  status: string;
  desc: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  ratingScaleText: string;
}

export function getDynamicRating(scoreVal: number, probVal: number): RatingData {
  // A natural blend: let's use a score-based rating but adjust it if prob is high.
  // We assign a synthetic quality from 0 to 100 based on both sliders:
  // (scoreVal / 10) * 0.5 + (100 - probVal) * 0.5
  const quality = (scoreVal / 10) * 0.5 + (100 - probVal) * 0.5;

  if (quality < 25) {
    return {
      index: 0,
      letter: "E",
      name: "E (Crítico)",
      status: "Situação de Inadimplência",
      desc: "Já em situação de inadimplência ou risco crítico.",
      color: "rose",
      textColor: "text-rose-500",
      borderColor: "border-rose-500",
      bgColor: "bg-rose-500/10",
      ratingScaleText: "E (Crítico)"
    };
  } else if (quality < 45) {
    return {
      index: 1,
      letter: "D",
      name: "D - C (Baixo)",
      status: "Risco Alto de Inadimplência",
      desc: "Risco elevado de atraso de pagamentos comerciais ou restrições.",
      color: "amber",
      textColor: "text-amber-500",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-500/10",
      ratingScaleText: "D - C (Baixo)"
    };
  } else if (quality < 65) {
    return {
      index: 2,
      letter: "CC",
      name: "CC - CCC (Médio)",
      status: "Risco Médio de Inadimplência",
      desc: "Risco moderado com comportamento de crédito mediano.",
      color: "yellow",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/10",
      ratingScaleText: "CC - CCC (Médio)"
    };
  } else if (quality < 85) {
    return {
      index: 3,
      letter: "B",
      name: "B - BB (Bom)",
      status: "Risco Baixo de Inadimplência",
      desc: "Bom histórico de crédito com probabilidade de default reduzida.",
      color: "blue",
      textColor: "text-indigo-500",
      borderColor: "border-indigo-500",
      bgColor: "bg-indigo-500/10",
      ratingScaleText: "B - BB (Bom)"
    };
  } else {
    return {
      index: 4,
      letter: "AA",
      name: "AAA - AA (Excelente)",
      status: "Excelente Saúde de Crédito",
      desc: "Histórico impecável e risco de inadimplência virtualmente nulo.",
      color: "emerald",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/10",
      ratingScaleText: "AAA - AA (Excelente)"
    };
  }
}
