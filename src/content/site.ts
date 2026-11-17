const cdn = "https://res.cloudinary.com/dador6eng/image/upload";

// Originals are several MB each; serve a compressed copy at display width.
export const photo = (path: string, width = 1000) =>
  `${cdn}/f_auto,q_auto,w_${width}/${path}`;

// e_trim crops the large transparent margin around the wordmark.
export const logos = {
  white: `${cdn}/e_trim/v1794934612/yemisi/logo_png_white_ldxbyv.png`,
  black: `${cdn}/e_trim/v1794934612/yemisi/logo_png_black_ptnbfp.png`,
  blackJpg: `${cdn}/v1794934612/yemisi/Logo_jpeg_black_adtb06.jpg`,
};

export const images = {
  stage: photo("v1794934628/yemisi/Stage_Picture_pdheqc.jpg", 1920),
  strategist: photo("v1794934645/yemisi/Strategist_oeb8qs.png"),
  lecturer: photo("v1794934657/yemisi/LC_z4hky5.png"),
  bng04797: photo("v1794934629/yemisi/BNG04797_idifjd.jpg"),
  bng05141: photo("v1794934623/yemisi/BNG05141_zmgwcb.jpg"),
};

export const tagline = "Strategist | Academic | Entrepreneur & Investor | Coach";

export const calendlyUrl = "https://calendly.com/oluwayemisiadebayo/15min";

export const firstStatement = [
  "Oluwayemisi Adebayo is a multifaceted business expert, strategist, academic, entrepreneur, investor and coach whose work sits at the intersection of business growth, strategic leadership and human development. With over a decade of experience across business strategy, marketing, digital transformation, brand communications and organisational development, she has worked across international markets, helping businesses and leaders translate ideas into actionable strategies, navigate change, strengthen organisational capabilities and achieve sustainable growth.",
  "As a Strategist and Academic, she combines commercial insight with intellectual rigour, helping organisations connect vision with execution while bridging the gap between business theory and practice. As an Entrepreneur and Investor, she builds and develops ventures across marketing, management consultancy, technology-driven services and product development, with a strong focus on innovation, value creation and sustainable business models. She is also the Founder of TTS Initiative Foundation, a youth-focused organisation committed to empowering the next generation through education, mentorship and opportunity.",
  "As a Coach, Oluwayemisi is passionate about developing people, unlocking potential and helping individuals take ownership of their personal and professional growth. Her philosophy is rooted in the belief that strategy must translate into execution, knowledge must lead to application, and leadership must create opportunities for others. Beyond building successful businesses and careers, she is committed to transforming organisations, empowering people and creating enduring legacies.",
];

export const secondStatement = {
  title: "Here’s what makes the work interesting",
  paragraphs: [
    "Business strategy is often discussed in boardrooms, taught in lecture rooms and explored in business publications. Oluwayemisi Adebayo's work has taken her across all three spaces. Over a decade, she has worked across the United Kingdom, Iceland, Nigeria and the United States, engaging with businesses, entrepreneurs and organisations on strategy, marketing, digital transformation, brand development and organisational growth. Her work has involved more than developing ideas; it has centred on examining business challenges, identifying opportunities, building practical solutions and helping organisations translate strategic thinking into execution. Her professional interests also extend into academia, where she connects business theory with industry practice, and entrepreneurship, where she develops ventures across marketing, management consultancy, technology-driven services and product development.",
    "Beyond the commercial and academic landscape, her work has consistently focused on developing people, building enterprises and creating opportunities. As the founder of multiple businesses and TTS Initiative Foundation, a youth-focused NGO, she has championed education, mentorship and youth empowerment, reaching thousands of young people. Through her coaching practice, she supports individuals in personal development, professional advancement and leadership growth. Across these engagements, a common thread runs through her work: connecting strategy with execution, entrepreneurship with value creation, and leadership with human development. For Oluwayemisi, the measure of meaningful work extends beyond what is built; it lies in the people empowered, the organisations strengthened and the lasting impact created.",
  ],
};

export const shortStatement = [
  "The question isn't simply how far you want your business, organisation or people to go. It's who is equipped to help you get there.",
  "Strategy should challenge thinking. Leadership should inspire action. Knowledge should create possibilities. And entrepreneurship should leave a legacy.",
  "Whether in the boardroom, the classroom or the business world, meaningful transformation begins with the right conversations, the right thinking and the courage to act.",
  "Let’s move beyond ideas and turn possibilities into impact?",
];

export const roleCards = [
  {
    title: "Strategist",
    text: "Challenging conventional thinking and bridging the gap between vision and execution.",
    img: images.strategist,
  },
  {
    title: "Entrepreneur",
    text: "Building ventures across marketing, consultancy, technology-driven services and product development.",
    img: images.bng04797,
  },
  {
    title: "Lecturer",
    text: "Connecting business theory with industry practice, so knowledge leads to application.",
    img: images.lecturer,
  },
  {
    title: "Investor",
    text: "Backing opportunities that create commercial value and sustainable business models.",
    img: photo("v1727245918/yemisi/2_yf9z5n.jpg"),
  },
  {
    title: "Coach",
    text: "Helping people recognise their strengths, act with intention and own their growth.",
    img: images.bng05141,
  },
  {
    title: "Disciple of God",
    text: "Faith that grounds the work, and a purpose to serve people and leave a lasting legacy.",
    img: photo("v1727245897/yemisi/2-copy_wixqpm.jpg"),
  },
];

export const beyondTheWork = {
  title: "Beyond The Work",
  paragraphs: [
    "Oluwayemisi is the founder of TTS Initiative Foundation, a youth-focused organisation committed to empowering the next generation through education, mentorship and opportunity, reaching thousands of young people.",
  ],
};

export const testimonials = [
  {
    name: "Oluyemi Odofa, Food NC",
    quote:
      "“We had ambitious plans to expand our market but we weren't clear where to begin. Oluwayemisi provided clear, actionable steps to help us break into new markets. Her approach to building partnerships was strategic and thoughtful and her guidance in navigating cultural and business differences enabled us to succeed faster than we expected.”",
  },
  {
    name: "Farijun Faith",
    quote:
      "“Indeed, life is simple. We just need to live it freely.” This was one of the statements made to me, and it brought clarity to some difficult issues I was facing at the time. Thank you, Oluwayemisi Adebayo.",
  },
  {
    name: "Dr. Nuro M, Tech",
    quote:
      "“Working with Oluwayemisi Adebayo has been a game changer for our brand. Her understanding of both local and international markets is unmatched. She helped us craft a tailored strategy that significantly grew our customer base within the first six months. Her keen insights and practical recommendations make her an invaluable partner for brands.”",
  },
];

export const bio = {
  intro:
    "Oluwayemisi Adebayo is a multifaceted business expert whose work sits at the intersection of strategy, academia, entrepreneurship and human development.",
  paragraphs: [
    "A strategist by mindset, an academic by practice, an entrepreneur and investor by pursuit, and a coach by passion, she brings together the ability to think critically, develop strategic solutions, build businesses, lead transformation and empower people.",
    "With over a decade of experience spanning business strategy, marketing, digital transformation, brand communications and organisational development, Oluwayemisi has worked across international markets, supporting businesses and leaders to translate ideas into actionable strategies, navigate change, strengthen organisational capabilities and achieve sustainable growth.",
    "As a Strategist, she challenges conventional thinking, identifies opportunities and helps organisations bridge the gap between vision and execution. Through her consulting engagements, she champions strategic clarity, innovation, effective management and sustainable business growth, helping organisations make informed decisions and build the capabilities required to remain competitive.",
    "As an Academic, she is passionate about bridging the gap between theory and practice. Through teaching, research and professional development, she equips individuals with the knowledge, critical thinking and practical competencies needed to navigate an increasingly dynamic business environment. Her approach to education extends beyond knowledge transfer, emphasising the application of learning, professional relevance and continuous development.",
    "As an Entrepreneur and Investor, she does not simply study business; she builds, develops and invests in opportunities. Across her ventures in marketing, management consultancy, technology-driven services and product development, she continues to explore new markets, develop business models, strengthen operational systems and create commercial value. She is also the Founder of TTS Initiative Foundation, a youth-focused organisation committed to empowering the next generation through education, mentorship and access to opportunities.",
    "As a Coach, she is passionate about human potential and personal transformation. She works to help individuals recognise their strengths, develop confidence, make intentional decisions and take ownership of their personal and professional growth. Her coaching philosophy is rooted in the belief that meaningful progress begins with self-awareness, purposeful action and a commitment to continuous improvement.",
    "Her philosophy is straightforward: strategy without execution remains an idea; knowledge without application has limited impact; entrepreneurship without value creation lacks sustainability; and leadership without developing others is incomplete.",
    "Oluwayemisi's ambition extends beyond building successful businesses or impressive professional careers. She is committed to developing people, transforming organisations, creating opportunities and building enduring legacies. For her, success is not measured solely by what is achieved, but also by the value created, the people empowered and the impact that continues long after the work is done.",
  ],
};

export const galleryImages = [
  { src: images.stage, alt: "Oluwayemisi Adebayo speaking on stage" },
  { src: images.strategist, alt: "Oluwayemisi Adebayo, strategist" },
  { src: images.lecturer, alt: "Oluwayemisi Adebayo lecturing" },
  { src: images.bng04797, alt: "Oluwayemisi Adebayo at an event" },
  { src: images.bng05141, alt: "Portrait of Oluwayemisi Adebayo" },
  { src: photo("v1727655657/C_C_6501_1_t28gpn.jpg"), alt: "Oluwayemisi Adebayo portrait" },
  { src: photo("v1727655883/C_C_6520_oibnwq.jpg"), alt: "Oluwayemisi Adebayo portrait" },
  { src: photo("v1728521522/yemisi/NGO_project_ybs2ll.jpg"), alt: "TTS Initiative Foundation project" },
  { src: photo("v1728521520/yemisi/NGo__qcmeeb.jpg"), alt: "TTS Initiative Foundation outreach" },
  { src: photo("v1727245831/yemisi/9_vqnexh.jpg"), alt: "Oluwayemisi Adebayo at an event" },
];
