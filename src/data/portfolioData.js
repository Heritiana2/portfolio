export const PROFILE = {
  name: "Heritiana Rafanomezanjanahary",
  shortName: "Heritiana",
  brand: "heritiana",
  role: "Développeur Full-Stack",
  subtitle: "Étudiant en L3 Informatique",
  school: "ESMIA Innovation",
  location: "Antananarivo, Madagascar",
  email: "rafanoheritiana24@gmail.com",
  phone: "+261 38 44 380 13",
  github: "https://github.com/heritiana2",
  linkedin: "https://www.linkedin.com/in/heritiana-rafah-37423932a",
  available: "Recherche de stage de fin d'études (L3)",
};

export const TECH_MARQUEE = [
  { name: "React", key: "react" },
  { name: "JavaScript", key: "js" },
  { name: "TypeScript", key: "ts" },
  { name: "Node.js", key: "node" },
  { name: "Java", key: "java" },
  { name: "Spring Boot", key: "spring" },
  { name: "PHP", key: "php" },
  { name: "Python", key: "python" },
  { name: "MySQL", key: "mysql" },
  { name: "PostgreSQL", key: "postgres" },
  { name: "Android Studio", key: "android" },
  { name: "Flutter", key: "flutter" },
  { name: "Tailwind CSS", key: "tailwind" },
  { name: "Git", key: "git" },
  { name: "Docker", key: "docker" },
  { name: "Linux", key: "linux" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "ParkManager — Gestion de parking",
    cat: "fullstack",
    cats: ["fullstack", "backend"],
    img: "/images/pexels-introspectivedsgn-4713816.jpg",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    desc: "Application complète de gestion de parking, avec un espace administrateur et un espace client.",
    long: "ParkManager est une application web développée en Java avec Spring Boot et Spring Security. Elle gère les types de véhicules autorisés, l'état des places (disponibles ou occupées), les réservations ainsi que les statistiques de tous les véhicules passés dans le parking.",
    features: [
      "Authentification & rôles (admin/client)",
      "CRUD véhicule, place, client",
      "Calcul automatique des pénalités selon les retards de sortie",
      "Bilan du parking",
    ],
    role: "Développeur Full-Stack",
    duration: "4 semaines",
    year: "2026",
    stats: [
      ["UML", "modélisation"],
      ["50", "places gérées"],
      ["17/20", "note du projet"],
    ],
    demo: "#",
    github: "https://github.com/Heritiana2/taxi",
  },
  {
    id: 2,
    concept: true,
    title: "MedAssur MADA",
    cat: "fullstack",
    cats: ["fullstack"],
    img: "/images/pexels-mikhail-nilov-8297423.jpg",
    tech: ["React", "Node.js", "Tailwind", "PostgreSQL"],
    desc: "Application web de micro-assurance santé et vie avec cotisations mensuelles et gestion des remboursements.",
    long: "MedAssur est une plateforme web conçue pour faciliter l'accès à une assurance santé solidaire. Les citoyens cotisent chaque mois de manière flexible, et en cas de maladie, l'application gère et automatise leurs demandes de remboursement pour leur garantir un filet de sécurité financier.",
    features: [
      "Paiement mensuel sécurisé de la prime",
      "Gestion des dossiers médicaux & sinistres",
      "Calcul automatisé des remboursements",
      "Tableau de bord citoyen et assureur",
    ],
    role: "Développeur Full-Stack",
    duration: "4 semaines",
    year: "2025",
    stats: [
      ["100%", "sécurisé (JWT)"],
      ["24/7", "accès aux soins"],
      ["Mensuel", "cotisation souple"],
    ],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Foot-Master",
    cat: "fullstack",
    cats: ["fullstack"],
    img: "/images/maxim-hopman-xyDkHkvDYp4-unsplash.jpg",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    desc: "Application web de gestion de tournois : joueurs, clubs, championnats et règles personnalisables.",
    long: "Application de gestion des joueurs, des clubs et de tous les types de championnat, avec des règles entièrement personnalisables selon le sport.",
    features: [
      "Gestion des joueurs, clubs et championnats",
      "Espaces admin, manager, opérateur et visiteur",
      "Vérification via email",
      "API REST sécurisée",
    ],
    role: "Développeur Full-Stack",
    duration: "8 semaines",
    year: "2026",
    stats: [
      ["REST", "API"],
      ["4", "rôles utilisateurs"],
      ["JWT", "auth sécurisée"],
    ],
    demo: "#",
    github: "https://github.com/Heritiana2/Tournoi",
  },
  {
    id: 4,
    concept: true,
  title: "Application d'État civil.",
    cat: "ia",
    cats: ["ia", "backend"],
    img: "/images/pexels-deyby-andrey-345262546-14578266.jpg",
    tech: ["Java(Swing)", "React", "Node.js", "MySQL"],
    desc: "Une application pour les citoyens qui peuvet faire des demandes de copie ou bulletin de naissance. Puis traité et signé par un personnels à l'aide d'une application desktop.",
    long: "AssistBot est un chatbot d'assistance basé sur le RAG (Retrieval-Augmented Generation). Les documents de cours sont vectorisés et stockés dans une base vectorielle ; les questions des utilisateurs sont enrichies par les passages les plus pertinents avant d'interroger le modèle. API FastAPI, persistance des conversations en PostgreSQL.",
    features: [
      "Testé avec 1000 citoyens pour une données de test.",
      "Sécurisé par SHA-256",
      "Confidentiel",
      "Déployé via Docker",
    ],
    role: "Backend",
    duration: "6 semaines",
    year: "2026",
    stats: [
      ["REST", "API"],
      ["3", "3 catégories de principaux"],
      ["200+", "docs indexés"],
    ],
    demo: "#",
    github: "https://github.com/Heritiana2/etat_civil",
  },
  {
    id: 5,
    concept: true,
    title: "Application pour une gestion de dechets.",
    cat: "fullstack",
    cats: ["fullstacks", "frontend"],
    img: "/images/pexels-introspectivedsgn-12641841.jpg",
    tech: ["Laravel", "Flutter", "PostgreSQL", "Docker"],
    desc: "Une application web pour la gestion de dechets à Antananarivo",
    long: "C'est une application qui gère les déchets à Antanananrivo, qui utilise le GPS pour trouver les camions les plus proches pour recuperer les déchets et les mettre dans une place spécifique.",
    features: [
      "Triage des déchets",
      "Récyclage des déchets triés",
      "Travail d'équipe",
    ],
    role: "Ensemble de développeurs",
    duration: "8 semaines",
    year: "2026",
    stats: [
      ["Utilisation du GPS", "partout"],
      ["MySQL", "Pour la Base de données"],
      ["Examen", "Génie Logiciel"],
    ],
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    concept: true,
    title: "Tantsaha-Connect",
    cat: "mobile",
    cats: ["mobile"],
    img: "/images/pexels-florence-mathiot-417781-37078677.jpg",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    desc: "Application mobile pour les agriculteurs pour gérer leurs culture",
    long: "Tantsaha-Connect est une application qui gère l'agriculture d'un produit défini dès son achat du semence jusqu'au vente du produits",
    features: [
      "Auth JWT + rôles",
      "Validation des données",
      "Génération des conseils vocals",
      "Une partie IA pour analyse des maladies",
    ],
    role: "Développeur App Mobile",
    duration: "12 semaines",
    year: "2026",
    stats: [
      ["12", "semaines de suivi"],
      ["3NF", "base PostgreSQL"],
      ["100%", "traçabilité"],
    ],
    demo: "#",
    github: "#",
  },
];

export const SKILLS = [
  { name: "React / React Native", cat: "frontend", level: 65, icon: "⚛️", color: "#61dafb", xp: "1 ans • 2 projets" },
  { name: "JavaScript / TypeScript", cat: "frontend", level: 70, icon: "📘", color: "#3178c6", xp: "2 ans • ES6+" },
  { name: "HTML / CSS / Tailwind", cat: "frontend", level: 85, icon: "🎨", color: "#38bdf8", xp: "3 ans • responsive" },
  { name: "Node.js / Express", cat: "backend", level: 70, icon: "🟢", color: "#22c55e", xp: "1 ans • API REST" },
  { name: "Java / Spring Boot", cat: "backend", level: 80, icon: "☕", color: "#f89820", xp: "3 ans • projets ESMIA" },
  { name: "PHP / Laravel", cat: "backend", level: 70, icon: "🐘", color: "#8993be", xp: "1 an • sites dynamiques" },
  { name: "Python", cat: "backend", level: 75, icon: "🐍", color: "#facc15", xp: "2 ans • scripts & IA" },
  { name: "SQL / MySQL / PostgreSQL", cat: "devops", level: 84, icon: "🗄️", color: "#818cf8", xp: "3 ans • modélisation" },
  { name: "Flutter, Android Studio", cat: "mobile", level: 65, icon: "🎯", color: "#22d3ee", xp: "1 an • iOS + Android" },
  { name: "Git / GitHub", cat: "devops", level: 70, icon: "🌿", color: "#f05032", xp: "2 ans • workflow équipe" },
  { name: "Docker / Linux", cat: "devops", level: 70, icon: "🐳", color: "#2496ed", xp: "1 an • déploiement" },
  { name: "UI/UX & Figma", cat: "frontend", level: 50, icon: "✨", color: "#a259ff", xp: "Maquettes & protos" },
];

export const TOOLS = [
  ["🟢", "Node.js", "#22c55e"],
  ["☕", "VSCode", "#f89820"],
  ["🐳", "Docker", "#2496ed"],
  ["🐘", "MySQL", "#00758f"],
  ["🐘", "PostgreSQL", "#336791"],
  ["🍃", "Intro Data Engeneering", "#4db33d"],
  ["🎨", "Figma", "#a259ff"],
  ["⚡", "Vite", "#a78bfa"],
  ["🐧", "Linux", "#22c55e"],
  ["🌿", "Git", "#f05032"],
  ["📱", "Android Studio", "#99425b"],
  ["📬", "ThunderClient", "#ff6c37"],
];

export const RADAR = {
  labels: ["Frontend", "Backend", "Mobile", "SGBD", "DevOps", "UI/UX"],
  values: [75, 80, 70, 84, 50, 50],
};

export const TIMELINE = [
  {
    period: "2023 — Aujourd'hui",
    title: "Licence 3 Informatique • ESMIA Innovation",
    loc: "Antananarivo • Hybride",
    color: "#7c3aed",
    icon: "🎓",
    desc: "Formation en génie logiciel, bases de données, réseaux et développement web/mobile, Quelques notions sur Réseau et DevOps. Projets académiques en équipe et apprentissage continu.",
    tags: ["Java", "Web", "SGBD", "UML"],
  },
  {
    period: "2024",
    title: "Projets personnels & académiques",
    loc: "Remote • En autonomie",
    color: "#f472b6",
    icon: "🚀",
    desc: "Réalisation d'une dizaine de mini-projets : API REST, apps React et Android Studio, Des mini-projets full-stacks. Apprentissage par la pratique.",
    tags: ["React", "Python", "Les frameorks"],
  },
  {
    period: "2023",
    title: "Baccalauréat Scientifique",
    loc: "Madagascar • Mention Assez-Bien",
    color: "#22c55e",
    icon: "🏫",
    desc: "Baccalauréat série scientifique avec mention. Premiers pas en algorithme en resolvant des problemes mathématiques.",
    tags: ["Algorithmique", "Bureautique", "Maths"],
  },
];

export const SERVICES = [
  { icon: "🖥️", c: "#7c3aed", t: "Sites & applications web", d: "Landing, sites vitrines et applications web modernes avec React et Tailwind." },
  { icon: "⚙️", c: "#06b6d4", t: "API & back-end", d: "API REST sécurisées avec Node.js/Express ou Java/Spring, connectées à MySQL/PostgreSQL." },
  { icon: "📱", c: "#f472b6", t: "Applications mobiles", d: "Applications iOS & Android avec React Native ou Flutter, à partir d'une seule base de code." },
  { icon: "🗄️", c: "#22c55e", t: "Bases de données", d: "Conception et optimisation de bases relationnelles : modélisation, requêtes, normalisation." },
];

export const TESTIS = [
  {
    name: "Rakoto Andriamana",
    role: "Enseignant • ESMIA Innovation",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Heritiana fait partie des étudiants les plus assidus et curieux de sa promotion. Ses projets sont toujours soignés, bien structurés et rendus dans les délais. Un vrai plaisir à encadrer.",
    stars: 5,
  },
  {
    name: "Mickaël Randria",
    role: "Binôme de projet",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Travailler avec Heritiana a été un vrai plus : toujours prêt à aider, à expliquer et à revoir le code. Notre projet d'équipe a été major de promo en partie grâce à lui.",
    stars: 5,
  },
];

export const BLOGS = [
  {
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    tag: "React",
    date: "12 Sept 2026",
    read: "6 min",
    title: "Mes 5 réflexes pour bien débuter avec React",
    desc: "Composants, props, état : les bases et les pièges à éviter quand on apprend React.",
  },
  {
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
    tag: "SQL",
    date: "28 Août 2026",
    read: "7 min",
    title: "Modéliser une base de données proprement (3NF)",
    desc: "Normalisation, clés étrangères et bonnes pratiques pour des schémas qui tiennent la route.",
  },
  {
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop",
    tag: "IA",
    date: "10 Août 2026",
    read: "5 min",
    title: "Découvrir le RAG quand on est étudiant",
    desc: "Comment j'ai construit mon premier chatbot basé sur mes cours, étape par étape.",
  },
];

export const FAQS = [
  {
    q: "Cherches-tu un stage actuellement ?",
    a: "Oui ! Je recherche un stage de fin d'études (L3 Informatique), à partir de 2 à 4 mois, à Antananarivo ou en remote. Je peux démarrer rapidement et suis très motivé.",
  },
  {
    q: "Quelles sont tes technologies principales ?",
    a: "Frontend : React, JavaScript/TypeScript, Tailwind. Backend : Node.js/Express et Java/Spring Boot. Bases de données : MySQL et PostgreSQL. Mobile : React Native et Flutter. J'utilise Git, Docker et Linux au quotidien.",
  },
  {
    q: "Quel est ton parcours ?",
    a: "Je suis en L3 Informatique à ESMIA Innovation. J'ai réalisé plusieurs projets académiques et personnels en web, mobile et bases de données, ainsi qu'un stage académique en développement web.",
  },
  {
    q: "Travailles-tu à distance ?",
    a: "Oui, je suis à l'aise en full-remote comme sur site. Je sais m'organiser, communiquer régulièrement et utiliser des outils comme Git, Trello/Notion ou Discord en équipe.",
  },
  {
    q: "Peux-tu travailler en équipe ?",
    a: "Absolument, la majorité de mes projets sont faits en équipe. J'aime collaborer, expliquer, revoir le code et apprendre des autres. J'utilise Git au quotidien pour le travail collaboratif.",
  },
  {
    q: "Comment te contacter ?",
    a: "Le plus simple est le formulaire ci-dessous ou par email. Je réponds généralement en moins de 24h.",
  },
];

export const CALENDAR = {
  days: ["L", "M", "M", "J", "V", "S", "D"],
  // Jours disponibles : 0 = lundi, 1 = mardi, 2 = mercredi, 3 = jeudi,
  // 4 = vendredi, 5 = samedi, 6 = dimanche.
  // Exemple : [0, 1, 3, 4] = lundi, mardi, jeudi et vendredi.
  availableDays: [0, 1, 3, 4],
  // Dates précises à bloquer (jours fériés, congés...) au format AAAA-MM-JJ.
  // Exemple : ["2026-12-25", "2027-01-01"]
  unavailableDates: [],
};

export const TERMINAL_COMMANDS = ["help", "about", "skills", "projects", "contact", "cv", "clear"];
