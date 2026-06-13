
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "Qual o valor da perfuração?",
            answer: <>O valor é de <strong>R$ 59,90</strong> e já inclui o par de joias. Não cobramos taxa extra pela perfuração, este é o valor final do procedimento no lóbulo da orelha.</>,
        },
        {
            question: "Posso escolher o modelo do brinco?",
            answer: "Sim! Temos diversos modelos lindos disponíveis para você escolher na hora da perfuração, todos inclusos no valor de R$ 59,90.",
        },
        {
            question: "Fazem perfuração em crianças?",
            answer: <>Sim! O valor para o público infantil é de <strong>R$ 89,90</strong> (par de joias incluso). <strong>Atenção: NÃO realizamos furo humanizado (cateter/agulha).</strong> O procedimento em crianças é feito de forma tradicional e exclusiva com pistola, sendo muito rápido, prático e higiênico.</>,
        },
        {
            question: "Qual o método de perfuração?",
            answer: <>Realizamos a nova perfuração <strong>exclusivamente com pistola e somente no lóbulo da orelha</strong>. É um método rápido (menos de 1 minuto), higiênico e prático. Não perfuramos outras regiões do corpo.</>,
        },
        {
            question: "Fazem perfuração no nariz ou outras partes do corpo?",
            answer: <><strong>Não realizamos novas perfurações (furos novos) no nariz ou outras partes do corpo.</strong> Fazemos apenas a colocação ou troca de joias de piercing no nariz e outras regiões, <strong>desde que você já possua o furo cicatrizado/existente</strong>.</>,
        },
        {
            question: "Preciso agendar horário?",
            answer: <><strong>NÃO precisa agendar horário!</strong> Atendemos por ordem de chegada no Shopping Lindóia (Térreo, Sala 160). Para evitar perda de tempo, vá diretamente à nossa loja física. Não perca tempo chamando no WhatsApp para marcar!</>,
        },
        {
            question: "Quais os cuidados após furar?",
            answer: "Após a perfuração na loja, você receberá todas as orientações detalhadas de higiene e cuidados para garantir uma cicatrização perfeita.",
        },
        {
            question: "As joias têm garantia?",
            answer: "Sim! Oferecemos garantia de 30 dias para qualquer defeito de fabricação que a joia venha a apresentar.",
        },
    ];

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-10 bg-primary" />
                        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Dúvidas Frequentes</p>
                        <div className="h-px w-10 bg-primary" />
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
                        Perguntas <span className="text-gradient-gold italic">Comuns</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-none px-6 bg-card shadow-soft overflow-hidden">
                                <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-light text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
