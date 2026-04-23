export const site = {
  name: "ShreeFit",
  fullName: "ShreeFit - Fitness for Parents",
  url: "https://shreefit.in",
  tagline: "Routine badlega, toh zindagi badlegi.",
  phoneDisplay: "+91 70151 36264",
  whatsappNumber: "917015136264",
  sbasUrl: "https://sbas.co.in/",
};

export const motto = "Routine badlega, toh zindagi badlegi.";

export const topBanner = {
  badge: "Ongoing 50% OFF",
  message: "ShreeFit ab Rs. 1299/- per month",
};

export const whatsappMessages = {
  general: "Namaste, mujhe ShreeFit ke baare mein jankari chahiye.",
  parent:
    "Namaste, main apne parents ke liye Hindi fitness classes ke baare mein poochna chahta/chahti hoon.",
  guidance:
    "Namaste, mujhe apne parent ke liye ShreeFit classes ke baare mein guidance chahiye.",
  timing: "Namaste, mujhe ShreeFit ke live sessions ke baare mein jankari chahiye.",
  payment:
    "Namaste, maine ShreeFit ke liye Rs. 1299/- ka payment kar diya hai. Yeh mera payment screenshot hai.",
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
    text: "50+ adults ke liye stretching, stamina, mobility, balance aur gentle strength routine.",
    icon: "ShieldCheck",
  },
  {
    title: "Fitness + wellness guidance",
    text: "Practical movement ke saath yoga, breathwork aur healthy lifestyle guidance.",
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
    text: "Language, routine aur guided fitness Indian parents ke comfort ke hisaab se design ki gayi hai.",
    icon: "HeartHandshake",
  },
  {
    title: "No random workout pressure",
    text: "YouTube-style guessing nahi. Stretching, mobility, stamina aur strength ka structured routine.",
    icon: "Route",
  },
  {
    title: "20+ years lifestyle discipline",
    text: "Shri Bhagwan ji aur Sushma ji Ayurveda, yoga, fitness aur healthy lifestyle ko 2 decades se follow kar rahe hain.",
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

export const pricing = {
  monthlyPrice: "Rs. 1299/-",
  originalPrice: "Rs. 2600",
  amount: "1299",
  discountLabel: "50% OFF",
  discountText: "after 50% discount",
  offerLabel: "Special Launch Price",
  planLabel: "Monthly Plan",
  comparisonLine:
    "Aaj ke shehri lifestyle mein do logon ke ek achhe dinner outing jitni value - aur poore mahine ka parents fitness, routine aur wellness support.",
  upiId: "Jaivikkisan1@okicici",
  qrImage: "/images/shreefit-upi-qr.svg",
  upiUri:
    "upi://pay?pa=Jaivikkisan1%40okicici&pn=ShreeFit&am=1299&cu=INR&tn=ShreeFit%20Monthly%20Fee",
};

export const familyStory = {
  heading:
    "Jinhone poori zindagi aapke liye khud ko thakaya, ab unki sehat, khushi aur routine ki baari hai.",
  subheading:
    "Aaj ke busy shehri jeevan mein Mummy-Papa ko sirf walking nahi, balki stretching, movement, strength, stamina aur ek joyful routine bhi chahiye. ShreeFit usi care ko ghar tak laata hai.",
  image: "/images/family-storytelling-journey.png",
  imageAlt:
    "Storytelling illustration showing Indian joint family life, modern city flat life, and happy parent fitness connection with adult children",
  chapters: [
    {
      label: "Pehle ka jeevan",
      title: "Joint family, gaon ka khula jeevan, aur natural activity",
      text:
        "Pehle parivaar saath rehte the. Khet, aangan, chalna-phirna, ghar ke kaam aur community ke saath routine apne aap banta tha. Sharir ko roz ki natural movement milti thi aur parivaarik connection bhi zyada gehra hota tha.",
    },
    {
      label: "Aaj ki reality",
      title: "Shehron ke flats, kam movement, aur sharir mein jama dard",
      text:
        "Ab zindagi flats, lifts, screens aur limited movement mein simat gayi hai. Saari zindagi ki mehnat ke baad kai parents back pain, shoulder pain, knee pain, joint pain, stiffness aur low energy ke saath din nikaalte hain.",
    },
    {
      label: "Sirf walking kaafi nahi",
      title: "Overall wellbeing ke liye guided routine bhi zaroori hai",
      text:
        "Walking achhi hai, lekin uske saath stretching, guided fitness, mobility, strength, stamina aur regular practice bhi chahiye. Aaj ke bachche khud gym jaate hain aur active feel karte hain - Mummy-Papa ko bhi wohi ehsaas milna chahiye.",
    },
    {
      label: "Ab waqt hai",
      title: "Parents ko ek healthy aur happy routine gift kijiye",
      text:
        "ShreeFit ke through fitness sirf exercise nahi rehti. Yeh ek caring family step ban jata hai - jahan parents khud ko better feel karte hain, routine pakadte hain, aur bachchon ko sukoon milta hai ki woh unke liye kuch meaningful kar pa rahe hain.",
    },
  ],
  closingTitle: "ShreeFit se family aur bhi kareeb aa sakti hai",
  closingText:
    "Whole family ek saath workout kar sakti hai, fun challenges kar sakti hai, progress share kar sakti hai, aur family time ko ek naye healthy tareeke se jee sakti hai. Apne parents ko sirf healthy nahi, khush bhi rakho.",
  ctaLabel: "Aaj hi Mummy-Papa ke liye pehla kadam uthaiye",
};

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
    text: "20+ saal se Ayurvedic, yoga, fitness aur healthy lifestyle ko jeene wale experienced guide. Parents ke liye practical movement, routine aur wellness par caring focus.",
  },
  {
    name: "Sushma Vashistha",
    role: "Certified Ayurveda and Yoga Expert",
    initials: "SV",
    image: "/images/sushma.png",
    imageAlt: "Portrait of Sushma Vashistha, ShreeFit trainer",
    text: "20+ saal ki disciplined lifestyle practice ke saath warm, patient teaching. Hindi mein parents ko stretching, stamina, mobility aur confidence build karne mein support.",
  },
];

export const expertJointPhoto = {
  src: "/images/sbas.png",
  alt: "Shri Bhagwan Vashistha and Sushma Vashistha, ShreeFit founders and trainers",
  caption:
    "Shri Bhagwan Vashistha and Sushma Vashistha bring certified Ayurveda and Yoga guidance to ShreeFit.",
};

export const expertHighlights = [
  "20+ saal se Ayurveda, yoga, fitness aur healthy lifestyle ko apni daily life mein follow kar rahe hain.",
  "Dono Shree Bhagwati Aarogya Sansthan ke founders hain.",
  "Pichhle 5 saalon mein hundreds of students ko diploma education/training de chuke hain.",
];

export const sundaySession = {
  title: "Har Sunday ek khaas wellness session",
  eyebrow: "Special Sunday Session",
  text:
    "ShreeFit ka Sunday session regular fitness routine ka ek unique value-add hai. Shri Bhagwan ji participants ko kheton mein le jaakar alag-alag paudhon se parichit karate hain, unke Ayurvedic gun samjhate hain, aur batate hain ki rozmarra jeevan mein unka upyog kaise kiya ja sakta hai.",
  note:
    "Isme kirtan, plantation, gharelu upchar, organic farming, healthy lifestyle guidance aur prakriti se judkar seekhne ka anubhav shamil hota hai - fitness, routine aur wellness journey ko aur meaningful banane ke liye.",
  items: [
    "Paudhon ke Ayurvedic gun aur daily use",
    "Plantation aur organic farming guidance",
    "Kirtan, ghar ke upchar aur healthy lifestyle",
  ],
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
