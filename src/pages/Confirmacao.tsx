import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, MapPin, ShieldAlert } from "lucide-react";
import { trackOfflineConversion } from "@/lib/utils";

const TOKEN_SECRETO = "vip-glamour";
const CACHE_KEY = "glamour_last_visit";
const TEMPO_BLOQUEIO_HORAS = 12;

const Confirmacao = () => {
  const [searchParams] = useSearchParams();
  const [isInvalid, setIsInvalid] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  // useRef previne duplo disparo acidental no React StrictMode (ambiente de desenvolvimento)
  const hasTriggered = useRef(false);

  useEffect(() => {
    const token = searchParams.get("token");
    if (token !== TOKEN_SECRETO) {
      setIsInvalid(true);
      return;
    }

    if (hasTriggered.current) return;
    hasTriggered.current = true;

    const lastVisitStr = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();
    
    let isFlood = false;
    if (lastVisitStr) {
      const lastVisitTime = parseInt(lastVisitStr, 10);
      const diffHoras = (now - lastVisitTime) / (1000 * 60 * 60);
      if (diffHoras < TEMPO_BLOQUEIO_HORAS) {
        isFlood = true;
      }
    }

    if (!isFlood) {
      // Dispara o Google Ads automaticamente no carregamento da página
      trackOfflineConversion();
      // Salva no dispositivo para evitar flood
      localStorage.setItem(CACHE_KEY, now.toString());
    }

    setIsReady(true);
  }, [searchParams]);

  if (isInvalid) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <ShieldAlert className="text-destructive w-16 h-16 mb-4" />
        <h1 className="font-display text-2xl font-medium text-foreground mb-2">Link Inválido ou Expirado</h1>
        <p className="text-muted-foreground text-center max-w-sm">
          Este link de confirmação não é válido. Por favor, escaneie o QR Code oficial diretamente na nossa loja.
        </p>
      </div>
    );
  }

  if (!isReady) {
    return <div className="min-h-screen bg-background" />; // Tela vazia enquanto processa (milissegundos)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-rose-soft/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

      <div className="bg-card border border-border shadow-2xl rounded-3xl p-8 max-w-md w-full text-center relative z-10 animate-fade-in-up">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="text-primary w-10 h-10" />
        </div>

        <h1 className="font-display text-3xl font-medium text-foreground mb-2">
          Bem-vindo(a) à Glamour!
        </h1>
        <p className="text-muted-foreground font-light mb-8">
          Ficamos muito felizes em receber você aqui no nosso estúdio no Shopping Lindóia.
        </p>

        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-6">
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
            <h2 className="font-display text-xl font-medium text-green-600 mb-1">
              Visita Confirmada!
            </h2>
            <p className="text-sm font-light text-green-600/80">
              Check-in automático realizado com sucesso. Já pode avisar nossa equipe!
            </p>
          </div>
          <a
            href="/"
            className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>

      <p className="absolute bottom-6 text-xs text-muted-foreground/50 font-body tracking-widest uppercase">
        Glamour Perfuração • Shopping Lindóia
      </p>
    </div>
  );
};

export default Confirmacao;
