export interface ChemicalProduct {
  id: string;
  name: string;
  synonyms?: string[];
  chemicalFormula?: string;
  hsnCode: string;
  gstRate: string;
  type: "inorganic" | "organic";
  chapter: "Chapter 28 (Inorganic Chemicals)" | "Chapter 29 (Organic Chemicals)";
  category: string;
  grade: string;
  purity: string;
  packaging: string[];
  description: string;
  applications: string[];
  form: "Liquid" | "Flakes" | "Powder" | "Crystalline" | "Granules" | "Pellets";
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  keyChemicals: string[];
}

export const SITE_CONFIG = {
  name: "Maa Durga Chemicals",
  legalName: "Maa Durga Chemicals Pvt. Ltd.",
  tagline: "Premier Wholesaler & Distributor of Industrial Chemicals in Kolkata",
  shortDescription:
    "Leading wholesale dealer and bulk distributor of pure Organic (Chapter 29) and Inorganic (Chapter 28) industrial chemicals in Kolkata, West Bengal. Supplying retailers, factories, and bulk buyers across India with GST compliance, COA, and MSDS documentation.",
  url: "https://www.maadurgachemicals.com",
  phone: "+91 98300 12345",
  whatsapp: "+91 98300 12345",
  email: "sales@maadurgachemicals.com",
  inquiryEmail: "quotes@maadurgachemicals.com",
  address: {
    street: "Bagmari Road, Kankurgachi / Maniktala Area",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700054",
    country: "India",
    countryCode: "IN",
  },
  coordinates: {
    latitude: 22.5884619,
    longitude: 88.3883126,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Maa+Durga+Chemicals/@22.5884619,88.3883126,17z/data=!4m17!1m10!3m9!1s0x3a027613377f980d:0x38fd4e3a9b6129b2!2sMaa+Durga+Chemicals!8m2!3d22.5884619!4d88.3883126!10e5!14m1!1BCgIgARICEAE!16s%2Fg%2F11dzt5_k5d!3m5!1s0x3a027613377f980d:0x38fd4e3a9b6129b2!8m2!3d22.5884619!4d88.3883126!16s%2Fg%2F11dzt5_k5d",
  openingHours: "Mon-Sat: 09:30 AM - 07:00 PM (Sunday Closed)",
  establishedYear: "2008",
  businessType: "Wholesaler, Stockist, Distributor, B2B Supplier",
} as const;

export const TRANSPORT_CONFIG = {
  name: "Akash Road Carrier",
  role: "Dedicated Chemical Fleet & Transportation Partner",
  tagline: "Safe, Hazmat-Compliant Chemical Logistics & Pan-India Freight Transport",
  phone: "+91 98300 54321",
  whatsapp: "+91 98300 54321",
  email: "transport@akashroadcarrier.com",
  office: "Kolkata Chemical Transit Hub & Transport Yard",
  address: "Bagmari Road, Near Kankurgachi / Maniktala, Kolkata, West Bengal - 700054",
  fleet: [
    "Stainless Steel Acid Tankers (Rubber & PTFE Lined)",
    "Heavy Multi-Axle Covered Trucks (For 25kg/50kg Bags & Drums)",
    "Hazmat & Poison-Certified Dedicated Tanker Fleets",
    "Containerized Freight for Safe Hazardous Transit",
  ],
  routes: [
    "Kolkata & Howrah Industrial Clusters",
    "Bengal Belt (Durgapur, Asansol, Siliguri, Haldia)",
    "Interstate Transit (Bihar, Jharkhand, Odisha, UP)",
    "Pan-India Bulk Doorstep Dispatch",
  ],
  workingHours: "24/7 Logistics & Dispatch Desk",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Chemicals Catalog", href: "#products" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * ONLY Organic (Chapter 29) & Inorganic (Chapter 28) Chemicals
 * Strictly adhering to India GST HSN Classification for Chemical Products (www.erpgroup.in/blog/hsn-code-for-chemical-products-india)
 */
export const CHEMICAL_PRODUCTS: ChemicalProduct[] = [
  // ==========================================
  // INORGANIC CHEMICALS (CHAPTER 28)
  // ==========================================
  {
    id: "caustic-soda-flakes",
    name: "Caustic Soda (Sodium Hydroxide)",
    synonyms: ["Sodium Hydroxide", "Lye", "Caustic Flakes", "Caustic Pearls"],
    chemicalFormula: "NaOH",
    hsnCode: "2815",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Alkalis & Bases",
    grade: "Commercial / Rayon Grade",
    purity: "99.5% Min",
    packaging: ["50 kg HDPE Bags with Liner", "Bulk Tanker (Lye 48%)"],
    description:
      "High-grade Sodium Hydroxide available in flakes, pearls, and liquid lye. Essential strong base for saponification, pH regulation, and chemical syntheses.",
    applications: [
      "Soap & Detergents",
      "Textile Processing",
      "Paper & Pulp",
      "Alumina Refining",
      "Water Neutralization",
    ],
    form: "Flakes",
  },
  {
    id: "hydrochloric-acid",
    name: "Hydrochloric Acid (HCl)",
    synonyms: ["Muriatic Acid", "Hydrogen Chloride Aqueous", "Spirits of Salt"],
    chemicalFormula: "HCl",
    hsnCode: "2806",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Mineral Acids",
    grade: "Technical / Industrial Grade",
    purity: "30% - 33% Solution",
    packaging: ["35 kg Carboys", "250 kg HM-HDPE Drums", "Road Tanker Loads"],
    description:
      "Concentrated industrial aqueous solution of hydrogen chloride. Highly effective for steel pickling, industrial acid washing, and chemical synthesis.",
    applications: [
      "Steel Pickling & Galvanizing",
      "Water Treatment Plants",
      "Leather Tanning",
      "Dyes Intermediates",
      "ETP Neutralization",
    ],
    form: "Liquid",
  },
  {
    id: "sulphuric-acid",
    name: "Sulphuric Acid",
    synonyms: ["Oil of Vitriol", "Hydrogen Sulfate", "Battery Acid"],
    chemicalFormula: "H₂SO₄",
    hsnCode: "2807",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Mineral Acids",
    grade: "Commercial / Fertilizer Grade",
    purity: "98.0% Min",
    packaging: ["40 kg Carboys", "250 kg HDPE Drums", "Dedicated Tankers"],
    description:
      "Vital industrial chemical and strong mineral acid. Critical for fertilizer production, battery manufacturing, chemical synthesis, and petroleum refining.",
    applications: [
      "Fertilizer Manufacturing",
      "Lead Acid Batteries",
      "Effluent Treatment (ETP)",
      "Chemical Synthesis",
      "Metal Leaching",
    ],
    form: "Liquid",
  },
  {
    id: "nitric-acid",
    name: "Nitric Acid",
    synonyms: ["Aqua Fortis", "Azotic Acid", "Hydrogen Nitrate"],
    chemicalFormula: "HNO₃",
    hsnCode: "2808",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Mineral Acids",
    grade: "Technical Grade",
    purity: "68% - 70%",
    packaging: ["35 kg Carboys", "250 kg HDPE Drums"],
    description:
      "Potent oxidizing inorganic mineral acid. Extensively used in metal etching, explosives, dye intermediates, and industrial surface passivations.",
    applications: [
      "Dyes & Pigments",
      "Metal Etching & Jewelry Refining",
      "Fertilizer Formulations",
      "Pharmaceutical Syntheses",
    ],
    form: "Liquid",
  },
  {
    id: "phosphoric-acid",
    name: "Phosphoric Acid",
    synonyms: ["Orthophosphoric Acid", "Acidum Phosphoricum"],
    chemicalFormula: "H₃PO₄",
    hsnCode: "2809",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Mineral Acids",
    grade: "Technical / Food Grade 85%",
    purity: "85.0% Min",
    packaging: ["35 kg Jerrycans", "280 kg HDPE Barrels", "IBC Totes"],
    description:
      "Non-volatile inorganic mineral acid used widely in rust removal, metal phosphate coatings, water softening, and industrial detergent additives.",
    applications: [
      "Metal Rust Inactivation & Phosphating",
      "Sugar Refining",
      "Water Softening",
      "Beverage Acidulant",
      "Fertilizers",
    ],
    form: "Liquid",
  },
  {
    id: "soda-ash-light-dense",
    name: "Soda Ash (Sodium Carbonate)",
    synonyms: ["Disodium Carbonate", "Washing Soda", "Calcined Soda"],
    chemicalFormula: "Na₂CO₃",
    hsnCode: "2836",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Carbonates",
    grade: "Light & Dense Grades",
    purity: "99.2% Min",
    packaging: ["50 kg Laminated Woven PP Bags", "1000 kg Jumbo Bags"],
    description:
      "High purity sodium carbonate available in light and dense grades. Core alkali utilized in glass manufacturing, detergent cakes & powders, and textile scouring.",
    applications: [
      "Glass Manufacturing",
      "Detergent Formulation",
      "Textile Scouring",
      "Water Conditioning",
      "Silicate Manufacturing",
    ],
    form: "Powder",
  },
  {
    id: "sodium-bicarbonate",
    name: "Sodium Bicarbonate",
    synonyms: ["Baking Soda", "Sodium Hydrogen Carbonate"],
    chemicalFormula: "NaHCO₃",
    hsnCode: "2836",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Carbonates",
    grade: "Technical / Industrial Grade",
    purity: "99.0% Min",
    packaging: ["50 kg PP Bags"],
    description:
      "Inorganic alkaline compound used for buffering, animal feed, effluent pH balancing, and leather tanning applications.",
    applications: [
      "Effluent Buffer",
      "Leather Neutralization",
      "Fire Extinguishing Formulations",
      "Feed Additives",
    ],
    form: "Powder",
  },
  {
    id: "hydrogen-peroxide",
    name: "Hydrogen Peroxide",
    synonyms: ["Perhydrol", "Dioxidane", "H2O2"],
    chemicalFormula: "H₂O₂",
    hsnCode: "2847",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Peroxides",
    grade: "Industrial 50% & 35% Aqueous",
    purity: "50% w/w & 35% w/w",
    packaging: ["30 kg / 50 kg HM-HDPE Carboys", "IBC Containers"],
    description:
      "Powerful eco-friendly oxidizing and bleaching agent. Highly demanded by textile dye houses, paper mills, and industrial wastewater treatment plants.",
    applications: [
      "Textile Fabric Bleaching",
      "Paper & Pulp Bleaching",
      "Effluent COD/BOD Reduction",
      "Chemical Synthesis Oxidation",
    ],
    form: "Liquid",
  },
  {
    id: "sodium-hypochlorite",
    name: "Sodium Hypochlorite (Liquid Bleach)",
    synonyms: ["Liquid Bleach", "Hypo Solution", "Javel Water"],
    chemicalFormula: "NaOCl",
    hsnCode: "2828",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Hypochlorites",
    grade: "Industrial Grade",
    purity: "10% - 12% Available Chlorine",
    packaging: ["35 kg / 50 kg HDPE Cans", "Bulk Tanker Loads"],
    description:
      "Strong chlorinating and sanitizing agent with fast oxidative biocidal properties. Widely supplied for municipal water disinfection, industrial bleaching, and cooling tower biocide control.",
    applications: [
      "Water Disinfection & Chlorination",
      "Industrial Surface Sanitization",
      "Textile Pre-bleaching",
      "Odor & Cyanide Treatment in ETP",
    ],
    form: "Liquid",
  },
  {
    id: "bleaching-powder",
    name: "Stable Bleaching Powder",
    synonyms: ["Calcium Hypochlorite", "Chlorinated Lime"],
    chemicalFormula: "Ca(ClO)₂",
    hsnCode: "2828",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Hypochlorites",
    grade: "ISI Grade Stable Formulation",
    purity: "33% - 35% Available Chlorine",
    packaging: ["25 kg / 50 kg Poly-lined HDPE Bags", "Drums"],
    description:
      "Dry stable bleaching powder with guaranteed available chlorine. Vital for water reservoirs, epidemic disinfection drives, paper pulp whitening, and sugar mills.",
    applications: [
      "Public Health Sanitation",
      "Drinking Water Disinfection",
      "Pulp & Textile Bleach",
      "Sugar Mill Purification",
    ],
    form: "Powder",
  },
  {
    id: "potassium-hydroxide",
    name: "Potassium Hydroxide (Caustic Potash)",
    synonyms: ["Caustic Potash", "Potassa", "KOH"],
    chemicalFormula: "KOH",
    hsnCode: "2815",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Alkalis & Bases",
    grade: "Technical Flakes",
    purity: "90% Min",
    packaging: ["25 kg / 50 kg Sealed PP Bags"],
    description:
      "Heavy duty inorganic base with high solubility. Precursor to liquid soaps, potassium salts, agricultural crop fertilizers, and battery electrolytes.",
    applications: [
      "Liquid & Soft Soaps",
      "Agrochemical Formulations",
      "Alkaline Batteries",
      "Potassium Salt Derivatives",
    ],
    form: "Flakes",
  },
  {
    id: "sodium-sulphate",
    name: "Sodium Sulphate (Anhydrous)",
    synonyms: ["Glauber's Salt (Hydrated)", "Salt Cake", "Disodium Sulfate"],
    chemicalFormula: "Na₂SO₄",
    hsnCode: "2833",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Sulphates",
    grade: "Anhydrous Industrial Grade",
    purity: "99.0% Min",
    packaging: ["50 kg Laminated Bags"],
    description:
      "Neutral inorganic salt functioning as a key filler in powdered laundry detergents and a leveling agent in textile reactive dyeing baths.",
    applications: [
      "Powder Detergent Manufacturing",
      "Textile Dyeing Leveling Agent",
      "Kraft Pulp Process",
      "Glass Making",
    ],
    form: "Powder",
  },
  {
    id: "calcium-chloride",
    name: "Calcium Chloride",
    synonyms: ["CaCl2", "Calcium Dichloride"],
    chemicalFormula: "CaCl₂",
    hsnCode: "2827",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Chlorides",
    grade: "Fused / Anhydrous / Dihydrate",
    purity: "74% - 95% depending on grade",
    packaging: ["50 kg Moisture-proof HDPE Bags"],
    description:
      "Highly hygroscopic inorganic chloride. Essential brine refrigeration additive, concrete acceleration admixture, and industrial moisture desiccant.",
    applications: [
      "Refrigeration Brine Systems",
      "Industrial Gas Dehydration",
      "Dust Suppression & Soil Stabilization",
      "Concrete Accelerators",
    ],
    form: "Flakes",
  },
  {
    id: "potash-alum",
    name: "Alum (Potash Alum / Non-Ferric Alum)",
    synonyms: ["Fitkari", "Potassium Aluminium Sulphate", "Aluminium Sulphate"],
    chemicalFormula: "KAl(SO₄)₂·12H₂O",
    hsnCode: "2833",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Sulphates & Alums",
    grade: "Non-Ferric / Potash Crystal",
    purity: "99.0% Min",
    packaging: ["50 kg HDPE Woven Sacks"],
    description:
      "Standard inorganic coagulant and mordant. Premier chemical for water turbidity clarification, paper sizing, and textile mordanting.",
    applications: [
      "Municipal & Industrial Water Clarification",
      "Paper Sizing Additive",
      "Textile Mordant",
      "ETP Flocculation",
    ],
    form: "Crystalline",
  },
  {
    id: "ferrous-sulphate",
    name: "Ferrous Sulphate (Heptahydrate / Dried)",
    synonyms: ["Green Vitriol", "Copperas", "Iron Sulfate"],
    chemicalFormula: "FeSO₄·7H₂O",
    hsnCode: "2833",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Sulphates",
    grade: "Industrial / Technical Grade",
    purity: "19% Fe Content",
    packaging: ["50 kg PP Bags with Polythene Liner"],
    description:
      "Inorganic iron salt used extensively as a reducing agent in chromate reduction, wastewater phosphorus removal, and agricultural micronutrient blends.",
    applications: [
      "Wastewater Decolorization & Chromate Reduction",
      "Fertilizer Micronutrient Additive",
      "Cement Hexavalent Chromium Reducer",
      "Iron Oxide Pigment Syntheses",
    ],
    form: "Crystalline",
  },
  {
    id: "copper-sulphate",
    name: "Copper Sulphate (Pentahydrate)",
    synonyms: ["Blue Vitriol", "Bluestone", "Cupric Sulfate"],
    chemicalFormula: "CuSO₄·5H₂O",
    hsnCode: "2833",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Sulphates",
    grade: "Commercial / Technical Grade",
    purity: "24.5% Cu Min (98.5% Crystal)",
    packaging: ["25 kg / 50 kg HDPE Bags"],
    description:
      "Vibrant blue inorganic crystal salt. Primary component in agricultural fungicides, electroplating baths, and mining flotation reagents.",
    applications: [
      "Agricultural Fungicides (Bordeaux Mixture)",
      "Electroplating Baths",
      "Animal Feed Supplements",
      "Mineral Flotation Reagents",
    ],
    form: "Crystalline",
  },
  {
    id: "zinc-sulphate",
    name: "Zinc Sulphate",
    synonyms: ["White Vitriol", "Zinc Sulfate Heptahydrate / Monohydrate"],
    chemicalFormula: "ZnSO₄·7H₂O",
    hsnCode: "2833",
    gstRate: "18%",
    type: "inorganic",
    chapter: "Chapter 28 (Inorganic Chemicals)",
    category: "Inorganic Sulphates",
    grade: "21% (Hepta) & 33% (Mono) Zn",
    purity: "Technical / Agricultural Grade",
    packaging: ["25 kg / 50 kg Poly-lined Bags"],
    description:
      "Inorganic zinc carrier widely supplied to crop nutrition blenders, rayon yarn coagulation baths, and animal feed pre-mixers.",
    applications: [
      "Agricultural Micronutrients & Soil Enrichment",
      "Rayon Fiber Coagulation",
      "Animal Feeds",
      "Lithopone Pigments",
    ],
    form: "Crystalline",
  },

  // ==========================================
  // ORGANIC CHEMICALS (CHAPTER 29)
  // ==========================================
  {
    id: "acetic-acid-glacial",
    name: "Glacial Acetic Acid",
    synonyms: ["Ethanoic Acid", "GAA", "Methane Carboxylic Acid"],
    chemicalFormula: "CH₃COOH",
    hsnCode: "2915",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids & Derivatives",
    grade: "Industrial / Technical 99.85%",
    purity: "99.85% Min",
    packaging: ["35 kg Carboys", "200 kg HM-HDPE Drums", "ISO Tankers"],
    description:
      "Water-clear organic carboxylic acid with pungent odor. Foundational intermediate in manufacturing vinyl acetate monomer (VAM), acetate esters, and textile dyeing pH adjustment.",
    applications: [
      "Textile Dyeing & Printing pH Buffering",
      "Acetate Esters & Solvents Synthesis",
      "Purified Terephthalic Acid (PTA) Production",
      "Latex & Rubber Coagulation",
      "Pharmaceutical Syntheses",
    ],
    form: "Liquid",
  },
  {
    id: "citric-acid-monohydrate-anhydrous",
    name: "Citric Acid (Monohydrate & Anhydrous)",
    synonyms: ["2-Hydroxypropane-1,2,3-tricarboxylic Acid"],
    chemicalFormula: "C₆H₈O₇",
    hsnCode: "2918",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids with Oxygen Function",
    grade: "Technical / Food / BP / USP Grade",
    purity: "99.5% - 100.5%",
    packaging: ["25 kg Multi-wall Paper Bags with PE Liner"],
    description:
      "Naturally derived tricarboxylic organic acid. Exceptional chelating agent for industrial boilers, cleaning chemicals, metal surface passivations, and food preservation.",
    applications: [
      "Industrial Descaling & Boiler Passivation",
      "Detergent Chelation & Builders",
      "Food, Beverage & Confectionery Acidulant",
      "Pharmaceutical Buffering & Effervescent Salts",
      "Cosmetics pH Balancing",
    ],
    form: "Crystalline",
  },
  {
    id: "formic-acid",
    name: "Formic Acid 85%",
    synonyms: ["Methanoic Acid", "Aminic Acid"],
    chemicalFormula: "HCOOH",
    hsnCode: "2915",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids & Derivatives",
    grade: "Technical Grade 85%",
    purity: "85.0% Min",
    packaging: ["35 kg Carboys", "250 kg HDPE Barrels"],
    description:
      "Simple organic carboxylic acid with strong acidic and reducing nature. Crucial for natural rubber latex coagulation, leather de-liming, and textile finishing.",
    applications: [
      "Leather Tanning & Pickling / De-liming",
      "Natural Rubber Coagulation",
      "Textile Dyeing Acidifier",
      "Silage Preservation & Animal Feed",
    ],
    form: "Liquid",
  },
  {
    id: "oxalic-acid",
    name: "Oxalic Acid",
    synonyms: ["Ethanedioic Acid", "Dicarboxylic Acid"],
    chemicalFormula: "C₂H₂O₄·2H₂O",
    hsnCode: "2917",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Polycarboxylic Acids",
    grade: "Technical White Crystals 99.6%",
    purity: "99.6% Min",
    packaging: ["50 kg PP Bags with Inner Liner"],
    description:
      "Dicarboxylic organic crystalline acid known for its superior rust stain removal, wood bleaching, marble polishing, and rare earth metal separation.",
    applications: [
      "Marble & Granite Floor Polishing",
      "Rust & Iron Stain Removal in Laundries",
      "Textile Bleaching & Dye Intermediates",
      "Rare Earth Processing & Metal Cleaning",
    ],
    form: "Crystalline",
  },
  {
    id: "methanol",
    name: "Methanol (Methyl Alcohol)",
    synonyms: ["Wood Alcohol", "Carbinol", "Methyl Hydrate"],
    chemicalFormula: "CH₃OH",
    hsnCode: "2905",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Acyclic Alcohols",
    grade: "Industrial / Pure Grade",
    purity: "99.85% Min",
    packaging: ["160 kg Mild Steel Drums", "Road Tanker Bulk"],
    description:
      "Basic organic chemical building block and versatile solvent. Used in formaldehyde manufacturing, biodiesel transesterification, and pharmaceutical extractions.",
    applications: [
      "Formaldehyde & Resin Synthesis",
      "Biodiesel Production Catalyst Solvent",
      "Pharmaceutical Reactions & Extractions",
      "General Industrial Solvent",
    ],
    form: "Liquid",
  },
  {
    id: "isopropyl-alcohol",
    name: "Isopropyl Alcohol (IPA)",
    synonyms: ["Isopropanol", "2-Propanol", "Rubbing Alcohol"],
    chemicalFormula: "C₃H₈O",
    hsnCode: "2905",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Acyclic Alcohols",
    grade: "Pure Industrial / Pharma Grade",
    purity: "99.8% Min",
    packaging: ["160 kg MS / HDPE Drums", "Tanker Bulk"],
    description:
      "Rapid-evaporating organic solvent with high purity. Preferred solvent for electronics defluxing, printing flexographic inks, coatings, and hand sanitizer formulations.",
    applications: [
      "Sanitizers & Disinfectant Formulations",
      "Electronics & Circuit Board Degreasing",
      "Printing Inks & Resins Solvent",
      "Pharmaceutical Intermediates Processing",
    ],
    form: "Liquid",
  },
  {
    id: "acetone",
    name: "Acetone",
    synonyms: ["Dimethyl Ketone", "2-Propanone", "Beta-Ketopropane"],
    chemicalFormula: "CH₃COCH₃",
    hsnCode: "2914",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Ketones",
    grade: "Pure Technical Grade",
    purity: "99.5% Min",
    packaging: ["160 kg Sealed MS Barrels", "Tankers"],
    description:
      "Highly volatile, fast-drying organic ketone solvent. Ideal for dissolving epoxy resins, nail lacquer removal, degreasing precision metal parts, and chemical syntheses.",
    applications: [
      "Paint, Varnish & Lacquer Thinner",
      "Fiberglass & Resin Cleanup",
      "Pharmaceutical Extraction Solvent",
      "Adhesives & Sealants Manufacturing",
    ],
    form: "Liquid",
  },
  {
    id: "ethyl-acetate",
    name: "Ethyl Acetate",
    synonyms: ["Acetic Acid Ethyl Ester", "Ethyl Ethanoate"],
    chemicalFormula: "CH₃COOCH₂CH₃",
    hsnCode: "2915",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids & Derivatives (Esters)",
    grade: "Pure Grade",
    purity: "99.5% Min",
    packaging: ["180 kg Steel Drums", "Bulk Tanker"],
    description:
      "Pleasant-smelling organic ester solvent with high solvency power. Predominant solvent for gravure printing inks, flexible packaging laminations, and industrial coatings.",
    applications: [
      "Flexible Packaging & Rotogravure Inks",
      "Industrial Paints & Lacquers",
      "Adhesives Formulations",
      "Pharma Process Solvent",
    ],
    form: "Liquid",
  },
  {
    id: "butyl-acetate",
    name: "Butyl Acetate",
    synonyms: ["n-Butyl Acetate", "Butyl Ethanoate"],
    chemicalFormula: "CH₃COO(CH₂)₃CH₃",
    hsnCode: "2915",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids & Derivatives (Esters)",
    grade: "Technical Grade",
    purity: "99.0% Min",
    packaging: ["180 kg Barrels"],
    description:
      "Medium evaporating organic ester solvent. Provides excellent flow, leveling, and blush resistance in automotive refinish paints and wood lacquers.",
    applications: [
      "Automotive Refinish & OEM Coatings",
      "Wood Finishing Lacquers",
      "Synthetic Resins & Plasticizers",
      "Leather Top-coats",
    ],
    form: "Liquid",
  },
  {
    id: "glycerine-refined",
    name: "Refined Glycerine (Glycerol)",
    synonyms: ["Glycerol", "Propane-1,2,3-triol"],
    chemicalFormula: "C₃H₈O₃",
    hsnCode: "2905",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Acyclic Alcohols (Polyhydric)",
    grade: "CP / Industrial Grade 99.5%",
    purity: "99.5% Min",
    packaging: ["250 kg HDPE Drums", "IBC Tanks"],
    description:
      "Clear, viscous, non-toxic polyhydric organic alcohol with natural humectant and plasticizing attributes. Crucial for cosmetics, resins, polyurethane foams, and printing rollers.",
    applications: [
      "Personal Care & Cosmetics Humectant",
      "Alkyd Resins & Polyurethane Foams",
      "Textile Lubricants & Softeners",
      "Printing Inks & Tobacco Conditioning",
    ],
    form: "Liquid",
  },
  {
    id: "formaldehyde-solution",
    name: "Formaldehyde Solution (Formalin 37%)",
    synonyms: ["Formalin", "Methanal", "Methylene Oxide"],
    chemicalFormula: "CH₂O",
    hsnCode: "2912",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Aldehydes",
    grade: "Commercial Grade 37% Stabilized",
    purity: "37.0% w/w Solution",
    packaging: ["35 kg Carboys", "220 kg HDPE Drums", "Bulk Road Tanker"],
    description:
      "Aqueous solution of organic aldehyde stabilized with methanol. The foundational chemical for urea formaldehyde (UF) resins, plywood glues, phenolic adhesives, and textile crease resistance.",
    applications: [
      "Plywood & Particle Board Resins (UF / PF)",
      "Textile Crease-Resistant Finishing",
      "Disinfectants & Industrial Preservatives",
      "Leather Tanning Auxiliary",
    ],
    form: "Liquid",
  },
  {
    id: "tartaric-acid",
    name: "Tartaric Acid",
    synonyms: ["2,3-Dihydroxybutanedioic Acid", "L-Tartaric Acid"],
    chemicalFormula: "C₄H₆O₆",
    hsnCode: "2918",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Carboxylic Acids with Oxygen Function",
    grade: "Technical / Food Grade",
    purity: "99.5% Min",
    packaging: ["25 kg Kraft Bags"],
    description:
      "Dicarboxylic organic hydroxy acid widely used as a retarder in gypsum and cement plaster setting, wine acidulation, and optical isomer resolution.",
    applications: [
      "Gypsum Plaster & Cement Set Retardation",
      "Effervescent Formulations",
      "Textile Dyeing Acidulant",
      "Chemical Chiral Resolution",
    ],
    form: "Crystalline",
  },
  {
    id: "methyl-ethyl-ketone",
    name: "Methyl Ethyl Ketone (MEK / Butanone)",
    synonyms: ["Butanone", "2-Butanone", "Ethyl Methyl Ketone"],
    chemicalFormula: "CH₃COCH₂CH₃",
    hsnCode: "2914",
    gstRate: "18%",
    type: "organic",
    chapter: "Chapter 29 (Organic Chemicals)",
    category: "Organic Ketones",
    grade: "Pure Industrial Grade",
    purity: "99.5% Min",
    packaging: ["165 kg Steel Barrels"],
    description:
      "Powerful organic ketone solvent with rapid drying rate and high solids capacity. Premium choice for vinyl adhesives, industrial printing inks, and lube oil dewaxing.",
    applications: [
      "Specialty Adhesives & PVC Cements",
      "Industrial Vinyl & Polyurethane Coatings",
      "Lube Oil Refinery Dewaxing",
      "Printing Inks",
    ],
    form: "Liquid",
  },
];

export const INDUSTRIES_SERVED: Industry[] = [
  {
    id: "textiles-dyeing",
    name: "Textile & Garment Processing",
    description:
      "Comprehensive chemical supplies for sizing, scouring, bleaching, dyeing, and finishing across cotton, jute, and synthetic fabric mills.",
    icon: "fabric",
    keyChemicals: [
      "Glacial Acetic Acid",
      "Caustic Soda",
      "Hydrogen Peroxide",
      "Soda Ash",
      "Sodium Sulphate",
      "Hydrochloric Acid",
    ],
  },
  {
    id: "water-treatment",
    name: "Water Treatment & ETP / STP",
    description:
      "High-efficiency coagulants, flocculants, neutralizing acids, alkalis, and biocides for municipal drinking water and industrial effluent plants.",
    icon: "droplet",
    keyChemicals: [
      "Alum (Non-Ferric)",
      "Sodium Hypochlorite",
      "Hydrochloric Acid",
      "Caustic Soda Lye",
      "Stable Bleaching Powder",
      "Ferrous Sulphate",
    ],
  },
  {
    id: "soaps-detergents",
    name: "Soaps & Detergents Manufacturing",
    description:
      "Bulk alkalis, fillers, builders, and pH stabilizers for laundry powders, washing bars, liquid detergents, and cleaning liquids.",
    icon: "sparkles",
    keyChemicals: [
      "Soda Ash Light/Dense",
      "Caustic Soda Flakes",
      "Sodium Sulphate Anhydrous",
      "Phosphoric Acid",
      "Glycerine",
    ],
  },
  {
    id: "pulp-paper",
    name: "Paper & Pulp Mills",
    description:
      "Chemicals for woodchip pulping, kraft process recovery, fiber bleaching, and paper sizing.",
    icon: "document",
    keyChemicals: [
      "Caustic Soda",
      "Hydrogen Peroxide",
      "Alum",
      "Sodium Sulphate",
      "Hydrochloric Acid",
    ],
  },
  {
    id: "paints-coatings-inks",
    name: "Paints, Inks & Resins",
    description:
      "Industrial solvents, esters, ketones, and neutralizing reagents for resin reactors, automotive finishes, and rotogravure inks.",
    icon: "swatch",
    keyChemicals: [
      "Ethyl Acetate",
      "Butyl Acetate",
      "Acetone",
      "Methanol",
      "Isopropyl Alcohol",
      "Formaldehyde",
    ],
  },
  {
    id: "leather-tanning",
    name: "Leather & Tanning Industry",
    description:
      "Pickling acids, de-liming agents, tanning auxiliaries, and finishing solvents for wet-blue and finished leather tanneries in Kolkata and West Bengal.",
    icon: "shield",
    keyChemicals: [
      "Formic Acid 85%",
      "Sulphuric Acid",
      "Sodium Bicarbonate",
      "Oxalic Acid",
      "Glacial Acetic Acid",
    ],
  },
  {
    id: "pharma-intermediates",
    name: "Pharmaceuticals & Intermediates",
    description:
      "High-purity organic acids, alcohols, and mineral acids for synthesis, extraction, and active pharmaceutical ingredient (API) processing.",
    icon: "beaker",
    keyChemicals: [
      "Citric Acid (IP/BP)",
      "Isopropyl Alcohol (IPA)",
      "Methanol Pure",
      "Glacial Acetic Acid",
      "Hydrochloric Acid AR",
    ],
  },
  {
    id: "metal-galvanizing",
    name: "Metal Processing & Galvanizing",
    description:
      "Acid pickling baths, degreasing alkalis, flux chemicals, and passivation compounds for iron, steel, and electroplating industries.",
    icon: "cog",
    keyChemicals: [
      "Hydrochloric Acid 33%",
      "Caustic Soda",
      "Nitric Acid",
      "Phosphoric Acid",
      "Copper Sulphate",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Verified HSN & GST Compliance",
    description:
      "Every invoice generated by Maa Durga Chemicals carries compliant 4-digit / 8-digit HSN codes, clear GST rates (18%), and valid e-way bills to ensure seamless Input Tax Credit (ITC) for your enterprise.",
    icon: "receipt",
  },
  {
    title: "Batch Testing with COA & MSDS",
    description:
      "We supply certified Certificate of Analysis (COA) and Material Safety Data Sheets (MSDS) with each consignment, verifying precise assay, density, and impurity limits.",
    icon: "check-badge",
  },
  {
    title: "Competitive Tiered Wholesale Pricing",
    description:
      "Direct bulk procurement from primary chemical manufacturers empowers us to pass maximum price advantages to wholesalers, stockists, and retail dealers.",
    icon: "currency-rupee",
  },
  {
    title: "Strategic Kolkata Warehousing & Logistics",
    description:
      "Centrally situated at Bagmari/Maniktala with ready warehouse inventory. Immediate dispatch across West Bengal, Bihar, Odisha, Jharkhand, and Northeast India.",
    icon: "truck",
  },
  {
    title: "Flexible Packaging & MOQs for Retailers",
    description:
      "From single carboys and 25kg/50kg bags for growing retailers to 200L drums, IBC totes, and full 20MT road tankers for heavy factories.",
    icon: "cube",
  },
  {
    title: "Dedicated B2B Trade & Technical Desk",
    description:
      "Experienced chemical specialists ready to assist with solvent selection, neutralization dosing calculations, handling precautions, and statutory paperwork.",
    icon: "phone",
  },
] as const;

export const HSN_COMPLIANCE_TIPS = [
  {
    topic: "Chapter 28 vs Chapter 29 Distinctions",
    content:
      "Chapter 28 strictly categorizes Inorganic Chemicals, mineral acids (HCl, H2SO4, HNO3), alkalis (NaOH, KOH), and metal salts. Chapter 29 covers Carbon-based Organic Chemicals (Methanol, GAA, Citric Acid, Acetone). Mixing these up on invoices leads to GST scrutiny.",
  },
  {
    topic: "Input Tax Credit (ITC) Eligibility",
    content:
      "Most industrial chemical transactions under Chapter 28 and Chapter 29 attract a standardized 18% GST rate in India. B2B purchasers with a valid GSTIN are entitled to full Input Tax Credit against their outward taxable supplies.",
  },
  {
    topic: "Mandatory 8-Digit HSN for Notified Chemicals",
    content:
      "Under CBIC regulations, chemical businesses with annual aggregate turnover exceeding ₹5 Crores must declare 6-digit HSN codes, while specific notified hazardous or dual-use chemical compounds necessitate mandatory 8-digit reporting.",
  },
  {
    topic: "Safety, Transport & TREM Cards",
    content:
      "Corrosive mineral acids (HSN 2806, 2807) and flammable organic solvents (HSN 2905, 2914) require Transport Emergency (TREM) cards, hazardous chemical signage, and driver compliance under the Central Motor Vehicles Act.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What types of chemicals does Maa Durga Chemicals supply?",
    answer:
      "Maa Durga Chemicals exclusively supplies pure Inorganic Chemicals classified under Chapter 28 (such as Caustic Soda, Hydrochloric Acid, Sulphuric Acid, Nitric Acid, Bleaching Powder, Hydrogen Peroxide, Alum, Soda Ash) and Organic Chemicals classified under Chapter 29 (including Glacial Acetic Acid, Citric Acid, Formic Acid, Methanol, Acetone, Isopropyl Alcohol, Formaldehyde, Ethyl Acetate).",
  },
  {
    question: "Do you supply both wholesale bulk buyers and retail shopkeepers?",
    answer:
      "Yes! We cater to both sides of the trade. For wholesale stockists and manufacturing plants, we provide tanker loads, full truckloads (FTL), and palletized 200L drums / 50kg bags with tiered volume discounts. For retailers and smaller workshops, we supply smaller packaging (carboys and single 25kg/50kg bags) at highly competitive distributor rates.",
  },
  {
    question: "Are GST tax invoices, COA, and MSDS provided with every shipment?",
    answer:
      "Absolutely. We generate 100% tax-compliant GST invoices featuring authentic 4-digit / 8-digit HSN codes and e-way bills so your firm can claim uninterrupted Input Tax Credit (ITC). Comprehensive Certificate of Analysis (COA) specifying chemical assay/purity and Material Safety Data Sheets (MSDS) are issued with every batch.",
  },
  {
    question: "Where is Maa Durga Chemicals located in Kolkata, and can we visit?",
    answer:
      "We are based in the prominent commercial chemical hub of Bagmari / Maniktala / Kankurgachi in Kolkata, West Bengal (coordinates: 22.5884619, 88.3883126). You are welcome to visit our sales desk during business hours (Monday to Saturday, 9:30 AM to 7:00 PM) to inspect samples, review documentation, and discuss trade terms.",
  },
  {
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer:
      "For local retailers in Kolkata and Greater Kolkata, MOQs start from as low as a single 35 kg carboy or 50 kg bag for standard products. For outstation dispatches across West Bengal, Bihar, Odisha, and Eastern India, typical MOQs are 500 kg to 1 Metric Ton to optimize freight efficiency.",
  },
  {
    question: "How do I request an instant wholesale price quotation?",
    answer:
      "You can submit the quote form on this website with your desired chemical and volume, send an email to sales@maadurgachemicals.com, or directly call/WhatsApp our trade desk at +91 98300 12345. Our sales representatives reply with current spot rates and freight estimates within 30 minutes.",
  },
  {
    question: "What delivery and logistics modes are available?",
    answer:
      "We operate our own local fleet for rapid door-step delivery across Kolkata, Howrah, Hooghly, and North/South 24 Parganas. For pan-India dispatches, we partner with verified hazardous chemical transport carriers providing insured, tracked cargo delivery with TREM cards.",
  },
  {
    question: "What payment terms do you offer to registered B2B clients?",
    answer:
      "We accept RTGS, NEFT, IMPS, and UPI transfers. For repeat wholesale clients and established institutional partners with verified trade references, we also extend structured credit terms after mutual agreement.",
  },
] as const;
