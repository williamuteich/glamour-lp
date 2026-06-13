import { useState, useEffect } from "react";
import { Tag } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-21T23:59:59-03:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-destructive text-destructive-foreground text-center py-1.5 px-4 text-xs font-semibold tracking-wider uppercase animate-pulse flex items-center justify-center gap-1.5">
        <Tag className="h-4 w-4" /> ATENÇÃO: ÚLTIMAS HORAS DA PROMOÇÃO DE R$ 59,90! VÁ DIRETO À LOJA!
      </div>
    );
  }

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-[#1c1315] text-[#faeef1] text-center py-1.5 px-4 shadow-sm flex items-center justify-center gap-x-2.5 z-50 relative border-b border-primary/20 text-[10px] sm:text-xs">
      <div className="flex items-center gap-1.5 font-medium">
        <Tag className="h-3.5 w-3.5 text-primary animate-pulse shrink-0" />
        <span>
          <strong className="text-primary">PROMO R$ 59,90:</strong>{" "}
          <span className="hidden sm:inline">Termina no domingo (21/06) em </span>
          <span className="sm:hidden">Termina em: </span>
        </span>
      </div>
      <div className="flex items-center gap-1 font-mono font-bold bg-primary/10 px-2 py-0.5 rounded-full border border-primary/25">
        <div className="flex items-center gap-0.5">
          <span>{formatNumber(timeLeft.days)}</span>
          <span className="text-[8px] text-[#faeef1]/70 font-sans font-light">d</span>
        </div>
        <span className="opacity-40">:</span>
        <div className="flex items-center gap-0.5">
          <span>{formatNumber(timeLeft.hours)}</span>
          <span className="text-[8px] text-[#faeef1]/70 font-sans font-light">h</span>
        </div>
        <span className="opacity-40">:</span>
        <div className="flex items-center gap-0.5">
          <span>{formatNumber(timeLeft.minutes)}</span>
          <span className="text-[8px] text-[#faeef1]/70 font-sans font-light">m</span>
        </div>
        <span className="opacity-40 hidden sm:inline">:</span>
        <div className="flex items-center gap-0.5 sm:inline-flex">
          <span>{formatNumber(timeLeft.seconds)}</span>
          <span className="text-[8px] text-[#faeef1]/70 font-sans font-light">s</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
