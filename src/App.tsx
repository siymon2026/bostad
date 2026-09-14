import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Camera as Instagram, Check, ChevronDown, Clapperboard,
  Code2, Gauge, LineChart, Mail, MapPin, Menu, MessageCircle, Palette, Share2 as Facebook,
  Play, Send, Sparkles, Star, Target, TrendingUp, Users, X,
} from 'lucide-react';

type Lang = 'ar' | 'fr' | 'en';

const copy = {
  ar: {
    nav: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'من نحن', 'النتائج', 'آراء العملاء', 'اتصل بنا'],
    heroTag: 'وكالة تسويق رقمي مغربية', hero: 'نحوّل الأفكار إلى نمو حقيقي',
    heroSub: 'Boostad هي وكالة تسويق رقمي تساعد العلامات التجارية على الوصول إلى عملائها، بناء حضور قوي وتحقيق نتائج قابلة للقياس.',
    start: 'ابدأ مشروعك', discover: 'اكتشف خدماتنا', trust: 'استراتيجية  •  إبداع  •  إعلانات  •  نتائج',
    stats: [['+50', 'مشروع'], ['+1M', 'وصول'], ['+100K', 'عميل محتمل'], ['+20', 'علامة تجارية']],
    servicesKicker: 'من الاستراتيجية إلى التنفيذ', servicesTitle: 'كل ما تحتاجه علامتك التجارية للنمو',
    servicesSub: 'حلول مترابطة، مصممة لتجذب الانتباه وتحوله إلى نتائج تجارية حقيقية.',
    services: [
      ['Digital Marketing', 'نضع استراتيجية رقمية واضحة تساعد علامتك التجارية على الوصول إلى الجمهور المناسب.'],
      ['Meta Ads', 'حملات إعلانية محسّنة على Facebook وInstagram لتحقيق أفضل عائد.'],
      ['TikTok Ads', 'نصنع حملات TikTok جذابة تصل إلى جمهورك بطريقة طبيعية.'],
      ['Content Creation', 'محتوى بصري وفيديوهات قصيرة مصممة لجذب الانتباه.'],
      ['UGC Content', 'فيديوهات UGC طبيعية ومقنعة تساعد على رفع الثقة والتحويل.'],
      ['Branding', 'نبني هوية بصرية متكاملة تجعل علامتك التجارية قابلة للتذكر.'],
      ['Websites', 'مواقع وصفحات Landing Pages سريعة ومصممة لتحويل الزوار إلى عملاء.'],
      ['Marketing Strategy', 'استراتيجية تسويقية مبنية على البيانات والأهداف.'],
    ],
    whyTitle: 'لماذا Boostad؟', whySub: 'نجمع بين الرؤية الإبداعية ودقة البيانات لبناء نمو يستمر.',
    why: ['استراتيجية مبنية على البيانات', 'إبداع يصنع الفرق', 'تركيز على النتائج', 'شراكة طويلة المدى'],
    processKicker: 'طريقة عمل واضحة', processTitle: 'كيف نشتغل معك؟', processSub: 'من أول محادثة إلى تحسين النتائج، كل خطوة عندها هدف.',
    process: [['نكتشف', 'نفهم مشروعك، جمهورك وأهدافك.'], ['نخطط', 'نضع استراتيجية تسويقية واضحة.'], ['ننفذ', 'نصنع المحتوى ونطلق الحملات.'], ['نحلل ونطور', 'نراقب النتائج ونحسن الأداء باستمرار.']],
    workKicker: 'عمل مدروس، تأثير واضح', workTitle: 'بعض أعمالنا', workSub: 'نماذج بصرية توضح نوع التجارب التي نصممها للعلامات الطموحة.',
    all: 'الكل', view: 'اكتشف المشروع',
    resultsKicker: 'أمثلة توضيحية', resultsTitle: 'الأرقام تتحدث', resultsSub: 'مؤشرات افتراضية لتوضيح كيف نقيس أثر التسويق. لا تمثل نتائج عملاء حقيقيين.',
    resultLabels: ['زيادة في المبيعات', 'زيادة في Leads', 'انخفاض تكلفة الإعلان', 'زيادة في Reach'],
    testimonialsTitle: 'ماذا يقول عملاؤنا؟', demo: 'محتوى تجريبي',
    clients: 'علامات تثق بنا', clientsSub: 'مساحة مخصصة لشعارات شركائنا وعملائنا.',
    cta: 'جاهز تكبر مشروعك؟', ctaSub: 'خلينا نحولو فكرتك إلى استراتيجية، محتوى ونتائج.', talk: 'تحدث معنا الآن',
    contactKicker: 'أول خطوة للنمو', contactTitle: 'خلينا نبدأو', contactSub: 'شاركنا تفاصيل مشروعك، وفريقنا يرجع لك بخطوة واضحة ومناسبة.',
    fields: ['الاسم الكامل', 'اسم الشركة', 'رقم الهاتف', 'البريد الإلكتروني', 'الخدمة المطلوبة', 'الميزانية التقريبية', 'رسالتك'],
    send: 'إرسال الطلب', sent: 'تم استلام طلبك. سنتواصل معك قريباً.', choose: 'اختر الخدمة', budget: 'اختر الميزانية',
    footer: 'وكالة تسويق رقمي تساعد العلامات التجارية على النمو والوصول إلى عملائها.', rights: 'جميع الحقوق محفوظة.',
  },
  fr: {
    nav: ['Accueil', 'Services', 'Projets', 'À propos', 'Résultats', 'Témoignages', 'Contact'],
    heroTag: 'Agence digitale marocaine', hero: 'Nous transformons les idées en croissance réelle',
    heroSub: 'Boostad aide les marques à atteindre leurs clients, bâtir une présence forte et générer des résultats mesurables.',
    start: 'Démarrer un projet', discover: 'Découvrir nos services', trust: 'Stratégie  •  Création  •  Publicité  •  Résultats',
    stats: [['+50', 'Projets'], ['+1M', 'Portée'], ['+100K', 'Prospects'], ['+20', 'Marques']],
    servicesKicker: 'De la stratégie à l’exécution', servicesTitle: 'Tout ce dont votre marque a besoin pour grandir',
    servicesSub: 'Des solutions connectées conçues pour transformer l’attention en résultats.',
    services: [
      ['Digital Marketing', 'Une stratégie digitale claire pour toucher la bonne audience.'], ['Meta Ads', 'Des campagnes Facebook et Instagram optimisées pour le rendement.'],
      ['TikTok Ads', 'Des campagnes TikTok naturelles qui captent votre audience.'], ['Content Creation', 'Des visuels et vidéos courtes conçus pour attirer l’attention.'],
      ['UGC Content', 'Des vidéos UGC authentiques qui renforcent confiance et conversion.'], ['Branding', 'Une identité cohérente qui rend votre marque mémorable.'],
      ['Websites', 'Des sites et landing pages rapides, pensés pour convertir.'], ['Marketing Strategy', 'Une stratégie marketing construite sur vos données et objectifs.'],
    ],
    whyTitle: 'Pourquoi Boostad ?', whySub: 'Nous unissons vision créative et précision des données pour une croissance durable.',
    why: ['Stratégie guidée par les données', 'Créativité qui fait la différence', 'Focus sur les résultats', 'Partenariat long terme'],
    processKicker: 'Une méthode claire', processTitle: 'Comment travaillons-nous ?', processSub: 'Du premier échange à l’optimisation, chaque étape a un objectif.',
    process: [['Découvrir', 'Comprendre votre projet, audience et objectifs.'], ['Planifier', 'Créer une stratégie marketing claire.'], ['Produire', 'Créer le contenu et lancer les campagnes.'], ['Optimiser', 'Analyser et améliorer les performances.']],
    workKicker: 'Du sens et de l’impact', workTitle: 'Quelques projets', workSub: 'Des concepts visuels illustrant les expériences que nous créons pour les marques ambitieuses.',
    all: 'Tout', view: 'Voir le projet',
    resultsKicker: 'Exemples illustratifs', resultsTitle: 'Les chiffres parlent', resultsSub: 'Indicateurs fictifs illustrant notre méthode de mesure. Ils ne représentent pas des résultats clients réels.',
    resultLabels: ['Hausse des ventes', 'Hausse des leads', 'Baisse du coût publicitaire', 'Hausse de la portée'],
    testimonialsTitle: 'Ce que disent nos clients', demo: 'Contenu de démonstration',
    clients: 'Des marques nous font confiance', clientsSub: 'Espace réservé aux logos de nos partenaires et clients.',
    cta: 'Prêt à faire grandir votre projet ?', ctaSub: 'Transformons votre idée en stratégie, contenu et résultats.', talk: 'Parlons de votre projet',
    contactKicker: 'Premier pas vers la croissance', contactTitle: 'Commençons', contactSub: 'Parlez-nous de votre projet et notre équipe vous proposera une prochaine étape claire.',
    fields: ['Nom complet', 'Entreprise', 'Téléphone', 'E-mail', 'Service souhaité', 'Budget approximatif', 'Votre message'],
    send: 'Envoyer la demande', sent: 'Votre demande a bien été reçue. Nous vous contacterons bientôt.', choose: 'Choisir un service', budget: 'Choisir un budget',
    footer: 'Agence digitale qui aide les marques à grandir et atteindre leurs clients.', rights: 'Tous droits réservés.',
  },
  en: {
    nav: ['Home', 'Services', 'Work', 'About', 'Results', 'Testimonials', 'Contact'],
    heroTag: 'Moroccan digital marketing agency', hero: 'We turn attention into growth',
    heroSub: 'Boostad helps brands reach their customers, build a powerful presence, and drive measurable results.',
    start: 'Start your project', discover: 'Explore our services', trust: 'Strategy  •  Creative  •  Advertising  •  Results',
    stats: [['+50', 'Projects'], ['+1M', 'Reach'], ['+100K', 'Leads'], ['+20', 'Brands']],
    servicesKicker: 'From strategy to execution', servicesTitle: 'Everything your brand needs to grow',
    servicesSub: 'Connected solutions designed to turn attention into tangible business outcomes.',
    services: [
      ['Digital Marketing', 'A clear digital strategy that connects your brand to the right audience.'], ['Meta Ads', 'Optimized Facebook and Instagram campaigns built for return.'],
      ['TikTok Ads', 'Native TikTok campaigns that engage your audience naturally.'], ['Content Creation', 'Visual content and short-form video designed to stop the scroll.'],
      ['UGC Content', 'Authentic UGC videos that build trust and conversion.'], ['Branding', 'A complete identity that makes your brand memorable.'],
      ['Websites', 'Fast websites and landing pages engineered to convert.'], ['Marketing Strategy', 'A marketing strategy grounded in data and goals.'],
    ],
    whyTitle: 'Why Boostad?', whySub: 'We pair creative vision with data precision to build growth that lasts.',
    why: ['Data-driven strategy', 'Creative that stands out', 'Results over vanity', 'A long-term partnership'],
    processKicker: 'A clear way of working', processTitle: 'How we work with you', processSub: 'From first conversation to optimization, every step has a purpose.',
    process: [['Discover', 'We learn your business, audience, and goals.'], ['Plan', 'We build a clear marketing strategy.'], ['Create', 'We produce content and launch campaigns.'], ['Optimize', 'We monitor results and improve performance.']],
    workKicker: 'Considered work, clear impact', workTitle: 'Selected work', workSub: 'Visual concepts showing the experiences we create for ambitious brands.',
    all: 'All', view: 'View project',
    resultsKicker: 'Illustrative examples', resultsTitle: 'The numbers speak', resultsSub: 'Fictional metrics showing how we measure marketing impact. These are not real client results.',
    resultLabels: ['Growth in sales', 'Growth in leads', 'Lower ad cost', 'Growth in reach'],
    testimonialsTitle: 'What clients say', demo: 'Demo content',
    clients: 'Brands trust us', clientsSub: 'Reserved space for partner and client logos.',
    cta: 'Ready to grow your business?', ctaSub: 'Let’s turn your idea into strategy, content, and results.', talk: 'Talk to us now',
    contactKicker: 'Your first growth step', contactTitle: 'Let’s get started', contactSub: 'Tell us about your project and our team will come back with a clear next step.',
    fields: ['Full name', 'Company name', 'Phone number', 'Email address', 'Required service', 'Approximate budget', 'Your message'],
    send: 'Send request', sent: 'Your request was received. We will be in touch shortly.', choose: 'Choose a service', budget: 'Choose a budget',
    footer: 'A digital marketing agency helping brands grow and reach their customers.', rights: 'All Rights Reserved.',
  },
} as const;

const ids = ['home', 'services', 'work', 'about', 'results', 'testimonials', 'contact'];
const serviceIcons = [TrendingUp, Target, Play, Clapperboard, Users, Palette, Code2, LineChart];
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const projectData = [
  { image: asset('/assets/portfolio/project-1.jpg'), client: 'Dar Atlas', category: 'Branding', tags: ['Branding'], desc: 'Restaurant identity & launch campaign' },
  { image: asset('/assets/portfolio/project-2.jpg'), client: 'Naya Skin', category: 'Social Media / Ads', tags: ['Social Media', 'Ads'], desc: 'Content direction & paid social' },
  { image: asset('/assets/portfolio/project-3.jpg'), client: 'Rif Roasters', category: 'Content', tags: ['Content', 'Branding'], desc: 'Brand system & product storytelling' },
  { image: asset('/assets/portfolio/project-4.jpg'), client: 'NOOR Studio', category: 'Websites', tags: ['Websites'], desc: 'E-commerce experience & campaign' },
];

function Logo({ light = false }: { light?: boolean }) {
  const [missing, setMissing] = useState(false);
  return <a href="#home" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Boostad - Home">
    {!missing && <img src={asset('/assets/logo.png')} alt="Boostad Marketing Agency" onError={() => setMissing(true)} />}
    {missing && <span className="brand-fallback"><b>BOOST</b><i>AD</i><small>MARKETING AGENCY</small></span>}
  </a>;
}

function ArrowIcon({ rtl }: { rtl: boolean }) { return rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />; }

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(value.replace(/\d+/, '0'));
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const target = Number(value.match(/\d+/)?.[0] || 0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 1100, 1);
        const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        setDisplay(value.replace(/\d+/, String(current)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: .5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <strong ref={ref}>{display}</strong>;
}

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const t = copy[lang];
  const rtl = lang === 'ar';
  const categories = ['All', 'Social Media', 'Ads', 'Branding', 'Websites', 'Content'];
  const visibleProjects = filter === 'All' ? projectData : projectData.filter(p => p.tags.includes(filter));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang, rtl]);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); if (e.currentTarget.checkValidity()) { setSubmitted(true); e.currentTarget.reset(); } };
  const testimonials = useMemo(() => [
    ['Salma A.', 'Maison d’hôtes, Marrakech', rtl ? 'Boostad ساعدتنا نرتبو حضورنا الرقمي ونوصلو لعملاء أكثر.' : lang === 'fr' ? 'Boostad nous a aidés à structurer notre présence et toucher plus de clients.' : 'Boostad helped us structure our presence and reach more customers.'],
    ['Youssef B.', 'E-commerce, Casablanca', rtl ? 'طريقة العمل واضحة، والمحتوى منسجم مع شخصية البراند ديالنا.' : lang === 'fr' ? 'Une méthode claire et du contenu parfaitement aligné à notre marque.' : 'A clear process and content that truly feels like our brand.'],
    ['Imane R.', 'Personal Brand, Rabat', rtl ? 'فريق مبدع، سريع وكيهتم بالأرقام، ماشي غير بالشكل.' : lang === 'fr' ? 'Une équipe créative, rapide et attentive aux chiffres, pas seulement au style.' : 'Creative, responsive, and focused on metrics, not just aesthetics.'],
  ], [lang, rtl]);

  return <div className="site-shell" dir={rtl ? 'rtl' : 'ltr'}>
    <header className={`navbar ${scrolled || menu ? 'nav-solid' : ''}`}><div className="nav-inner"><Logo light />
      <nav className={`nav-links ${menu ? 'open' : ''}`} aria-label="Main navigation">{t.nav.map((item, i) => <a key={ids[i]} href={`#${ids[i]}`} onClick={() => setMenu(false)}>{item}</a>)}<a href="#contact" className="mobile-cta" onClick={() => setMenu(false)}>{t.start}</a></nav>
      <div className="nav-actions"><div className="language-switcher" aria-label="Language selector">{(['ar', 'fr', 'en'] as Lang[]).map(code => <button key={code} className={lang === code ? 'active' : ''} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div><a href="#contact" className="nav-cta">{t.start}<ArrowIcon rtl={rtl} /></a><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button></div>
    </div></header>

    <main>
      <section id="home" className="hero"><div className="hero-image"/><div className="hero-wash"/><div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="container hero-inner"><div className="hero-copy"><span className="eyebrow light"><Sparkles size={15}/>{t.heroTag}</span><div className="hero-brand">BOOSTAD <span>MARKETING AGENCY</span></div><h1>{t.hero}</h1><p>{t.heroSub}</p><div className="hero-actions"><a href="#contact" className="button button-primary">{t.start}<ArrowIcon rtl={rtl}/></a><a href="#services" className="button button-ghost">{t.discover}<ChevronDown size={18}/></a></div><div className="hero-trust"><span/><p>{t.trust}</p></div></div></div><a href="#services" className="scroll-cue" aria-label="Scroll to services"><span/></a>
      </section>

      <section className="stats-band" aria-label="Key figures"><div className="container stats-grid">{t.stats.map(([number,label],i)=><div className="stat reveal" key={label} style={{transitionDelay:`${i*80}ms`}}><CountUp value={number}/><span>{label}</span></div>)}</div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading reveal"><div><span className="eyebrow"><span className="eyebrow-line"/>{t.servicesKicker}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesSub}</p></div><div className="services-grid">{t.services.map(([title,desc],i)=>{const Icon=serviceIcons[i];return <article className="service-item reveal" key={title} style={{transitionDelay:`${(i%4)*70}ms`}}><div className="service-top"><span className="service-number">{String(i+1).padStart(2,'0')}</span><Icon className="service-icon"/></div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`${t.start}: ${title}`}><ArrowIcon rtl={rtl}/></a></article>})}</div></div></section>

      <section id="about" className="section why-section"><div className="container why-grid"><div className="why-visual reveal" aria-hidden="true"><div className="visual-orbit orbit-a"><span><Target/></span></div><div className="visual-orbit orbit-b"><span><Gauge/></span></div><div className="visual-core"><b>B</b><small>BOOST YOUR<br/>IMPACT</small></div><div className="signal signal-a"/><div className="signal signal-b"/></div><div className="why-copy reveal"><span className="eyebrow light"><span className="eyebrow-line"/>BOOSTAD METHOD</span><h2>{t.whyTitle}</h2><p className="lead">{t.whySub}</p><div className="why-list">{t.why.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><h3>{item}</h3><Check/></div>)}</div></div></div></section>

      <section className="section process-section"><div className="container"><div className="center-heading reveal"><span className="eyebrow"><span className="eyebrow-line"/>{t.processKicker}</span><h2>{t.processTitle}</h2><p>{t.processSub}</p></div><div className="timeline">{t.process.map(([title,desc],i)=><div className="timeline-step reveal" key={title} style={{transitionDelay:`${i*100}ms`}}><span className="step-dot">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div></section>

      <section id="work" className="section work-section"><div className="container"><div className="section-heading reveal"><div><span className="eyebrow light"><span className="eyebrow-line"/>{t.workKicker}</span><h2>{t.workTitle}</h2></div><p>{t.workSub}</p></div><div className="filters reveal">{categories.map(cat=><button className={filter===cat?'active':''} key={cat} onClick={()=>setFilter(cat)}>{cat==='All'?t.all:cat}</button>)}</div><div className="work-grid">{visibleProjects.map(project=><article className="project reveal revealed" key={project.client}><img src={project.image} alt={`${project.client} marketing project`}/><div className="project-overlay"><span>{project.category}</span><h3>{project.client}</h3><p>{project.desc}</p><button>{t.view}<ArrowIcon rtl={rtl}/></button></div></article>)}</div></div></section>

      <section id="results" className="section results-section"><div className="container results-layout"><div className="results-intro reveal"><span className="demo-label">{t.resultsKicker}</span><h2>{t.resultsTitle}</h2><p>{t.resultsSub}</p></div><div className="results-grid">{['+245%','+180%','-32%','+420%'].map((num,i)=><div className="result-item reveal" key={num} style={{transitionDelay:`${i*80}ms`}}><div className="result-icon">{i===2?<Gauge/>:<TrendingUp/>}</div><CountUp value={num}/><span>{t.resultLabels[i]}</span><div className="mini-chart">{[40,60,50,76,68,94].map((h,j)=><i key={j} style={{height:`${i===2?105-h:h}%`}}/>)}</div></div>)}</div></div></section>

      <section id="testimonials" className="section testimonials-section"><div className="container"><div className="center-heading reveal"><span className="eyebrow"><span className="eyebrow-line"/>TESTIMONIALS</span><h2>{t.testimonialsTitle}</h2><span className="demo-label dark">{t.demo}</span></div><div className="testimonials-grid">{testimonials.map(([name,business,review])=><figure className="testimonial reveal" key={name}><div className="quote-mark">“</div><div className="stars">{Array.from({length:5}).map((_,j)=><Star key={j} size={15} fill="currentColor"/>)}</div><blockquote>{review}</blockquote><figcaption><div className="avatar">{name[0]}</div><div><strong>{name}</strong><span>{business}</span></div></figcaption><small>{t.demo}</small></figure>)}</div></div></section>

      <section className="clients-section"><div className="container clients-heading"><h2>{t.clients}</h2><p>{t.clientsSub}</p></div><div className="marquee"><div className="marquee-track">{['ATLAS','NŌR','MAISON Z','KIF','RIF ROASTERS','NAYA','ATLAS','NŌR','MAISON Z','KIF','RIF ROASTERS','NAYA'].map((name,i)=><span key={`${name}-${i}`}>{name}</span>)}</div></div></section>

      <section className="cta-section"><div className="cta-orb"/><div className="container cta-inner reveal"><div><span>BOOST YOUR NEXT MOVE</span><h2>{t.cta}</h2><p>{t.ctaSub}</p></div><div className="cta-actions"><a href="#contact" className="button button-primary">{t.talk}<ArrowIcon rtl={rtl}/></a><a href="https://wa.me/" className="button button-ghost" target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp</a></div></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-copy reveal"><span className="eyebrow"><span className="eyebrow-line"/>{t.contactKicker}</span><h2>{t.contactTitle}</h2><p>{t.contactSub}</p><div className="contact-details"><a href="mailto:hello@boostad.ma"><Mail/>hello@boostad.ma</a><span><MapPin/>Morocco</span><a href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp: [ضع الرقم هنا]</a></div><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="TikTok"><Play/></a></div></div>
        <form className="contact-form reveal" onSubmit={onSubmit}><div className="form-row"><label>{t.fields[0]}<input name="name" required minLength={2} autoComplete="name"/></label><label>{t.fields[1]}<input name="company" required minLength={2} autoComplete="organization"/></label></div><div className="form-row"><label>{t.fields[2]}<input name="phone" type="tel" required pattern="[+0-9 ()-]{8,}" autoComplete="tel"/></label><label>{t.fields[3]}<input name="email" type="email" required autoComplete="email"/></label></div><div className="form-row"><label>{t.fields[4]}<select name="service" required defaultValue=""><option value="" disabled>{t.choose}</option>{t.services.map(s=><option key={s[0]}>{s[0]}</option>)}</select></label><label>{t.fields[5]}<select name="budget" required defaultValue=""><option value="" disabled>{t.budget}</option><option>3,000 - 7,000 MAD</option><option>7,000 - 15,000 MAD</option><option>15,000 - 30,000 MAD</option><option>30,000+ MAD</option></select></label></div><label>{t.fields[6]}<textarea name="message" rows={4} required minLength={10}/></label><button className="button button-dark" type="submit">{t.send}<Send size={17}/></button>{submitted&&<p className="form-success" role="status"><Check size={18}/>{t.sent}</p>}</form>
      </div></section>
    </main>

    <footer><div className="container footer-main"><div className="footer-brand"><Logo light/><p>{t.footer}</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="TikTok"><Play/></a></div></div><div><h3>BOOSTAD</h3>{t.nav.slice(0,5).map((n,i)=><a key={n} href={`#${ids[i]}`}>{n}</a>)}</div><div><h3>SERVICES</h3>{['Meta Ads','TikTok Ads','UGC','Branding','Web Design','Digital Marketing'].map(s=><a href="#services" key={s}>{s}</a>)}</div><div className="footer-contact"><h3>CONTACT</h3><a href="mailto:hello@boostad.ma">hello@boostad.ma</a><span>Morocco</span><a href="https://wa.me/">WhatsApp</a></div></div><div className="container footer-bottom"><span>© 2026 Boostad Marketing Agency. {t.rights}</span><span>Strategy. Creative. Growth.</span></div></footer>
    <a className="whatsapp-float" href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Contact Boostad on WhatsApp"><MessageCircle/></a>
  </div>;
}
