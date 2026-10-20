export type Project = {
  slug: string

  number: string

  title: string

  client: string

  year: string

  subtitle: string

  description: string

  tags: string[]

  color: string

  hero: string

  gallery: string[]

  mobileImage?: string

  challenge: string

  process: string

  outcome: string
}

export const projects: Project[] = [
  {
    slug: "simoneva-berani",

    number: "01",

    title: "SIMONEVA BERANI",

    client: "Pemerintah Provinsi Sulawesi Tengah",

    year: "2026",

    subtitle: "Government Work Program Monitoring System",

    description:
      "A provincial government work program monitoring system designed end-to-end using a user-centered approach.",

    tags: [
      "Information Architecture",
      "Wireframing",
      "Design System",
      "Dashboard UI",
    ],

    color: "#1848a0",

    hero: "/assets/simoneva-hero.jpg",

    mobileImage: "/assets/simoneva-03.jpg",

    gallery: [
      "/assets/simoneva-hero.jpg",

      "/assets/simoneva-01.jpg",

      "/assets/simoneva-02.jpg",

      "/assets/simoneva-03.jpg",
    ],

    challenge:
      "The provincial government lacked a centralized, accessible system to track and evaluate hundreds of work programs across departments.",

    process:
      "I mapped user flows and information architecture, iterated from low-fi to hi-fi wireframes, and built a scalable design system.",

    outcome:
      "A responsive monitoring dashboard with reusable components that enables staff to track programs across desktop and mobile.",
  },

  {
    slug: "e-monitor",

    number: "02",

    title: "E-MONITOR",

    client: "Pemerintah Provinsi Sulawesi Selatan",

    year: "2026",

    subtitle: "Cross-OPD Work Program Monitoring System",

    description:
      "An interface focused on efficient cross-unit workflows and clear data visualization for organizational teams.",

    tags: ["User Flow", "Dashboard UI", "Data Visualization", "Prototyping"],

    color: "#b92d20",

    hero: "/assets/emonitor-hero.jpg",

    gallery: [
      "/assets/emonitor-hero.jpg",

      "/assets/emonitor-01.jpg",

      "/assets/emonitor-02.jpg",

      "/assets/emonitor-03.jpg",
    ],

    challenge:
      "Multiple government units operated in silos without a unified interface to visualize data flows and monitor shared work.",

    process:
      "I mapped cross-unit workflows, designed dashboard layouts that prioritize clarity, and validated the flows through interactive prototypes.",

    outcome:
      "A cohesive monitoring interface with improved navigation and faster access to real-time program data.",
  },

  {
    slug: "monitoring-media",

    number: "03",

    title: "MONITORING MEDIA",

    client: "Diskominfo Provinsi Sulawesi Selatan",

    year: "2026",

    subtitle: "News & Social Media Monitoring Dashboard",

    description:
      "A media monitoring dashboard that turns scattered news and social data into clear, actionable information.",

    tags: [
      "Dashboard UI",
      "Data Visualization",
      "Media Monitoring",
      "UX Research",
    ],

    color: "#286544",

    hero: "/assets/media-hero.jpg",

    gallery: [
      "/assets/media-hero.jpg",

      "/assets/media-01.jpg",

      "/assets/media-02.jpg",

      "/assets/media-03.jpg",
    ],

    challenge:
      "The communication team tracked news manually from scattered sources, making trends and sentiment difficult to identify quickly.",

    process:
      "I analyzed PR team needs, designed aggregated news feeds, and developed visualization components for trend and sentiment monitoring.",

    outcome:
      "A centralized daily-use dashboard that reduces manual effort and improves the team's response time.",
  },

  {
    slug: "berani-bersinar",

    number: "04",

    title: "BERANI BERSINAR",

    client: "Dinas Sosial Provinsi Sulawesi Tengah",

    year: "2026",

    subtitle: "Social Assistance & Field Survey Platform",

    description:
      "A responsive dashboard and mobile experience for validating social-needs data and targeting aid accurately.",

    tags: ["UI Redesign", "Responsive Design", "Prototyping", "User Research"],

    color: "#17226f",

    hero: "/assets/loginbersinar.png",

    mobileImage: "/assets/haldetailwarga.png",

    gallery: [
      "/assets/bersinar-hero.jpg",

      "/assets/bersinar-01.jpg",

      "/assets/bersinar-02.jpg",

      "/assets/bersinar-03.jpg",
    ],

    challenge:
      "Field data was consolidated manually, making real-time validation and accurate regional aid targeting difficult.",

    process:
      "I mapped admin and surveyor flows, designed data tables, regional maps, and mobile survey forms, then prepared developer handoff.",

    outcome:
      "One consistent web and mobile system for citizen data, regional distribution maps, and field surveys.",
  },

  {
    slug: "bajika-wedding",

    number: "05",

    title: "BAJIKA WEDDING",

    client: "Bajika Wedding Organizer · Final Research",

    year: "2026",

    subtitle: "Integrated Wedding Organizer Website & Staff Dashboard",

    description:
      "A research-led UI/UX design that connects clear client information with a centralized operational workspace for staff.",

    tags: [
      "Design Thinking",
      "UX Research",
      "Usability Testing",
      "Design System",
    ],

    color: "#8b6a50",

    hero: "/assets/herosection.png",

    gallery: [
      "/assets/main.jpg",

      "/assets/designsistem.jpg",

      "/assets/staffsection.jpg",

      "/assets/bajika-about.jpg",

      "/assets/bajika-services.jpg",

      "/assets/bajika-portfolio.jpg",
    ],

    challenge:
      "Clients struggled to find package, pricing, workflow, and date availability information, while staff managed scattered chats and booking records with a high risk of double booking.",

    process:
      "Using five Design Thinking stages, I observed workflows, collected open-ended responses from six staff members, mapped user needs, built a design system, and developed public and internal high-fidelity prototypes in Figma.",

    outcome:
      "The design achieved SUS scores of 84 for staff and 80.75 for clients. All six UEQ dimensions were positive, while client task usability reached a high MAUS range of 90–99.",
  },
]
