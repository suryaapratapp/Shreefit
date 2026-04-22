export const site = {
  name: "ShreeFit",
  fullName: "ShreeFit - Fitness for Parents",
  url: "https://shreefit.in",
  tagline: "Hindi mein guided online fitness and wellness classes for parents.",
  phoneDisplay: "+91 70151 36264",
  whatsappNumber: "917015136264",
  sbasUrl: "https://sbas.co.in/",
};

export const whatsappMessages = {
  general: "Namaste, mujhe ShreeFit ke baare mein jankari chahiye.",
  parent:
    "Namaste, main apne parents ke liye Hindi fitness classes ke baare mein poochna chahta/chahti hoon.",
  guidance:
    "Namaste, mujhe apne parent ke liye ShreeFit classes ke baare mein guidance chahiye.",
  timing: "Namaste, mujhe ShreeFit ke live sessions ke baare mein jankari chahiye.",
};

export function whatsappLink(message = whatsappMessages.general) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Timings", href: "/timings" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  {
    title: "Hindi live sessions",
    text: "Har instruction simple Hindi mein, taaki parents comfort se follow kar sakein.",
    icon: "Languages",
  },
  {
    title: "Age-appropriate movement",
    text: "50+ adults ke liye gentle mobility, flexibility, balance aur strength routine.",
    icon: "ShieldCheck",
  },
  {
    title: "Ayurveda + Yoga expertise",
    text: "Shri Bhagwan Vashistha aur Sushma Vashistha certified Ayurveda aur Yoga experts hain.",
    icon: "BadgeCheck",
  },
  {
    title: "Online from home",
    text: "Travel nahi, rush nahi. Apne ghar se guided class join karein.",
    icon: "Home",
  },
  {
    title: "Limited batches",
    text: "Small batches preferred, taaki attention aur safety ka dhyaan rahe.",
    icon: "UsersRound",
  },
];

export const audienceCards = [
  {
    title: "For Parents",
    eyebrow: "Main active rehna chahta/chahti hoon",
    text: "Aapke pace par safe movement, breathwork aur wellness routine. Hindi guidance ke saath confidence build karein.",
  },
  {
    title: "For Their Children",
    eyebrow: "Mummy/Papa ke liye safe option chahiye",
    text: "Adult children ke liye peace of mind: supervised online classes, caring experts, aur easy WhatsApp support.",
  },
];

export const whyFamiliesChoose = [
  {
    title: "Made for Indian families",
    text: "Language, routine aur guidance Indian parents ke comfort ke hisaab se design ki gayi hai.",
    icon: "HeartHandshake",
  },
  {
    title: "No random workout pressure",
    text: "YouTube-style guessing nahi. Structured class flow, gentle progress, aur regular routine.",
    icon: "Route",
  },
  {
    title: "Warm expert supervision",
    text: "Shri Bhagwan Vashistha aur Sushma Vashistha ka caring approach parents ko seen, safe aur encouraged feel karata hai.",
    icon: "Sparkles",
  },
  {
    title: "Family peace of mind",
    text: "Door rehne wale children bhi parents ke liye trustworthy wellness routine choose kar sakte hain.",
    icon: "SmilePlus",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "WhatsApp par enquire karein",
    text: "Bas ek message bhejein. Hum aapke parent ki age, comfort aur routine samajhne mein help karenge.",
  },
  {
    step: "02",
    title: "Parent ki needs samjhein",
    text: "Mobility, stiffness, balance, energy, routine aur preferred batch ke baare mein simple baat-cheet.",
  },
  {
    step: "03",
    title: "Morning ya evening batch preference batayein",
    text: "Current availability mein two morning aur two evening Hindi live sessions hain. Exact times Current Live Sessions cards par diye gaye hain.",
  },
  {
    step: "04",
    title: "Ghar se online class join karein",
    text: "Phone, tablet ya laptop se class join karein. Hindi instruction aur gentle pace ke saath.",
  },
  {
    step: "05",
    title: "Routine, mobility aur confidence build karein",
    text: "Regular guided practice se daily movement, flexibility aur active lifestyle ko support milega.",
  },
];

export const timingCards = [
  {
    title: "Morning Session",
    time: "6:00 AM",
    period: "Morning Batch",
    note: "Guided online class",
  },
  {
    title: "Morning Session",
    time: "7:00 AM",
    period: "Morning Batch",
    note: "Guided online class",
  },
  {
    title: "Evening Session",
    time: "6:00 PM",
    period: "Evening Batch",
    note: "Guided online class",
  },
  {
    title: "Evening Session",
    time: "7:00 PM",
    period: "Evening Batch",
    note: "Guided online class",
  },
];

export const benefits = [
  {
    title: "Better mobility",
    text: "Roz ke movement ko easy banane ke liye gentle joint-friendly practice.",
    icon: "Footprints",
  },
  {
    title: "Improved flexibility",
    text: "Stiffness reduce karne aur body ko dheere-dheere open karne par focus.",
    icon: "Activity",
  },
  {
    title: "Daily routine and discipline",
    text: "Fixed live class se ek healthy rhythm aur accountability banti hai.",
    icon: "CalendarCheck",
  },
  {
    title: "Gentle strength",
    text: "Age-appropriate exercises se daily confidence aur stability support hoti hai.",
    icon: "Dumbbell",
  },
  {
    title: "Better balance and confidence",
    text: "Simple balance work parents ko movement mein zyada secure feel karata hai.",
    icon: "Scale",
  },
  {
    title: "Breathwork and relaxation",
    text: "Breathing practices aur calm cool-down se body aur mind dono ko support.",
    icon: "Wind",
  },
  {
    title: "Yoga and Ayurveda-rooted wellness",
    text: "Wellness guidance Indian yoga aur Ayurveda knowledge se inspired hai.",
    icon: "Leaf",
  },
  {
    title: "Social connection and motivation",
    text: "Supportive group environment mein routine continue karna easier hota hai.",
    icon: "UsersRound",
  },
  {
    title: "Online convenience",
    text: "Ghar se class join karein, travel aur commute ki tension ke bina.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Easy Hindi instruction",
    text: "Simple Hindi cues se parents ko exercise samajhna aur follow karna easy hota hai.",
    icon: "MessageCircle",
  },
];

export const whoItsFor = [
  "Parents aged 50+ jo active, flexible aur confident feel karna chahte hain.",
  "People who prefer Hindi guidance over complicated English fitness terms.",
  "Parents who want a safe exercise routine at home.",
  "Families who live away from parents and want them to stay active.",
  "People who want yoga and wellness-based guidance rather than random YouTube workouts.",
  "Older adults who want to improve mobility, flexibility, balance and daily energy.",
];

export const experts = [
  {
    name: "Shri Bhagwan Vashistha",
    role: "Certified Ayurveda and Yoga Expert",
    initials: "SB",
    image: "/images/shribhagwan.png",
    imageAlt: "Portrait of Shri Bhagwan Vashistha, ShreeFit trainer",
    text: "Experienced, caring guidance rooted in Ayurveda, yoga, age-appropriate movement and everyday wellness for parents.",
  },
  {
    name: "Sushma Vashistha",
    role: "Certified Ayurveda and Yoga Expert",
    initials: "SV",
    image: "/images/sushma.png",
    imageAlt: "Portrait of Sushma Vashistha, ShreeFit trainer",
    text: "A warm teaching style that helps parents feel comfortable, motivated and confident while learning in Hindi.",
  },
];

export const expertJointPhoto = {
  src: "/images/sbas.png",
  alt: "Shri Bhagwan Vashistha and Sushma Vashistha, ShreeFit founders and trainers",
  caption:
    "Shri Bhagwan Vashistha and Sushma Vashistha bring certified Ayurveda and Yoga guidance to ShreeFit.",
};

export const testimonials = [
  {
    quote:
      "Meri mummy pehle exercise start karne mein hesitant thi. Hindi mein live guidance milne ke baad woh regular ho gayi hain aur zyada active feel karti hain.",
    name: "Manju ji",
    relation: "Daughter of participant",
    image: "/images/nisha.png",
    imageAlt: "Manju ji, daughter of a ShreeFit participant",
    initials: "MJ",
  },
  {
    quote:
      "Papa ko random videos follow karna mushkil lagta tha. ShreeFit mein routine clear hai, guidance patient hai, aur unka confidence better hua hai.",
    name: "Madhur and Tamanna ji",
    relation: "Children of participant",
    image: "/images/tamanna.png",
    imageAlt: "Madhur and Tamanna, children of a ShreeFit participant",
    initials: "MT",
  },
  {
    quote:
      "Class Hindi mein hoti hai, isliye samajhna easy hai. Body thodi flexible feel hoti hai aur din ki shuruaat achhi lagti hai.",
    name: "Meena ji",
    relation: "Participant, 56",
    image: "/images/meena.png",
    imageAlt: "Meena ji, ShreeFit participant",
    initials: "MJ",
  },
  {
    quote:
      "Hum apne parents se door rehte hai, isliye mujhe safe guided class chahiye thi. Hindi instruction aur fixed timing se unka routine kaafi better hua hai.",
    name: "Jagdeep and Pooja ji",
    relation: "Children living abroad",
    image: "/images/jagdeep.png",
    imageAlt: "Jagdeep, son enquiring for parents",
    initials: "RV",
  },
  {
    quote:
      "Sushma ji aur Shri Bhagwan ji patiently samjhate hain. Exercise pressure jaisi nahi lagti, bas ek achha daily wellness routine lagta hai.",
    name: "Krishna ji",
    relation: "Participant, 51",
    image: "/images/rk.png",
    imageAlt: "Krishna ji, ShreeFit participant",
    initials: "KJ",
  },
  {
    quote:
      "Mummy ko English fitness terms mein problem hoti thi. Yahan Hindi mein simple cues milte hain, isliye woh class confidently follow karti hain.",
    name: "Neha R. ji",
    relation: "Daughter of participant",
    image: "",
    imageAlt: "Neha R., daughter of a ShreeFit participant",
    initials: "NR",
  },
];

export const faqs = [
  {
    question: "Kya classes Hindi mein hoti hain?",
    answer:
      "Haan, ShreeFit ki live classes Hindi only hain. Instructions simple aur easy-to-follow Hindi mein diye jaate hain.",
  },
  {
    question: "Kya classes online hoti hain?",
    answer:
      "Haan, classes online hoti hain. Parents phone, tablet ya laptop se ghar baithe join kar sakte hain.",
  },
  {
    question: "Kya ye 50+ parents ke liye suitable hai?",
    answer:
      "Program 50+ parents ko dhyaan mein rakhkar banaya gaya hai, with gentle movement, mobility, flexibility, balance and breathwork.",
  },
  {
    question: "Agar pehle se body stiff ho to join kar sakte hain?",
    answer:
      "Generally beginners aur stiff body wale parents ke liye gentle guidance helpful hoti hai. Specific medical concerns ho to doctor se consult karna best hai.",
  },
  {
    question: "Kya yoga aur wellness guidance bhi milti hai?",
    answer:
      "Haan, sessions yoga-inspired movement, breathwork, relaxation aur wellness routine par focused hain. Founders certified Ayurveda and Yoga experts hain.",
  },
  {
    question: "Kaun se batches available hain?",
    answer:
      "Currently two morning sessions aur two evening sessions available hain. Exact timings Current Live Sessions cards par clearly shown hain.",
  },
  {
    question: "Kaise join karein?",
    answer:
      "WhatsApp par message karein. Hum parent ki needs samjhenge, suitable batch suggest karenge, aur joining details share karenge.",
  },
  {
    question: "Kya WhatsApp par baat ho sakti hai?",
    answer:
      "Bilkul. WhatsApp Business number +91 70151 36264 par directly baat kar sakte hain.",
  },
  {
    question: "Kya ye beginners ke liye suitable hai?",
    answer:
      "Haan, classes beginner-friendly hain. Movement gentle hota hai aur instructions step-by-step Hindi mein hote hain.",
  },
  {
    question: "Kya family member parent ke liye enquiry kar sakta hai?",
    answer:
      "Haan. Sons/daughters apne mother/father ke liye WhatsApp par enquiry kar sakte hain.",
  },
];

export const seoKeywords = [
  "fitness for parents",
  "senior fitness classes online India",
  "Hindi yoga classes for parents",
  "online fitness for 50+ in Hindi",
  "yoga and wellness for parents",
  "ayurveda wellness classes for parents",
  "parent fitness program India",
];
