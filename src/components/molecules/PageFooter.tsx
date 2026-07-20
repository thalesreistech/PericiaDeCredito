import React from 'react';
import { ShieldCheck } from "lucide-react";

interface PageFooterProps {
  pageNumber: number;
  totalPages: number;
  documentId: string;
}

export default function PageFooter({ pageNumber, totalPages, documentId }: PageFooterProps) {
  return (
    <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 pt-4 font-mono mt-auto">
      <span className="font-semibold text-slate-500">Relatório Infinity 360</span>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          <span>Autenticado</span>
        </div>
        <span>|</span>
        <span>PROTOCOLO: d3e431fe9f65410</span>
        <span>|</span>
        <span>10/07/2026 às 15:22</span>
      </div>
      <span className="font-bold text-slate-500">
        Pág. {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
    </div>
  );
}
