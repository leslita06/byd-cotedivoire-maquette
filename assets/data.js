// Données de démonstration. Prix fictifs. Caractéristiques : valeurs constructeur indicatives (cycle WLTP), selon version.
window.BYD = {
  models: {
    dolphin: {
      name: "Dolphin", type: "Citadine compacte", tag: "La plus accessible",
      price: 21900000, range: 427, battery: "60,4 kWh", dc: "88 kW", ac: "7 kW", seats: 5, power: "150 kW (204 ch)", acc: "7,0 s",
      dc_time: "environ 40 min", ac_time: "environ 9 h",
      pitch: "Agile en ville, spacieuse à l'intérieur : la porte d'entrée dans l'électrique BYD, idéale pour Cocody, Marcory ou le Plateau.",
      imgs: ["dolphin-1", "dolphin-2", "dolphin-3"],
      versions: [{ id: "active", name: "Active", price: 21900000, range: 340, note: "Batterie 44,9 kWh" }, { id: "comfort", name: "Comfort", price: 24500000, range: 427, note: "Batterie 60,4 kWh" }],
      colors: [{ n: "Blanc Ski", c: "#f2f2f0" }, { n: "Gris Atlantis", c: "#6d737a" }, { n: "Bleu Surf", c: "#3d93b5" }, { n: "Noir Cosmos", c: "#1b1c1f" }]
    },
    atto3: {
      name: "Atto 3", type: "SUV compact", tag: "Le best seller",
      price: 26500000, range: 420, battery: "60,5 kWh", dc: "88 kW", ac: "7 kW", seats: 5, power: "150 kW (204 ch)", acc: "7,3 s",
      dc_time: "environ 45 min", ac_time: "environ 9 h 30",
      pitch: "Le SUV familial qui a lancé BYD en Côte d'Ivoire : position de conduite haute, grand coffre et garde au sol pensée pour nos routes.",
      imgs: ["atto3-1", "atto3-2", "atto3-3"],
      versions: [{ id: "comfort", name: "Comfort", price: 26500000, range: 420, note: "Batterie 60,5 kWh" }, { id: "design", name: "Design", price: 28900000, range: 420, note: "Toit panoramique, pack confort" }],
      colors: [{ n: "Blanc Ski", c: "#f2f2f0" }, { n: "Gris Boulder", c: "#8b8f93" }, { n: "Bleu Surf", c: "#3d7ea6" }, { n: "Noir Cosmos", c: "#1b1c1f" }]
    },
    seal: {
      name: "Seal", type: "Berline sportive", tag: "La plus efficiente",
      price: 34900000, range: 570, battery: "82,5 kWh", dc: "150 kW", ac: "11 kW", seats: 5, power: "230 kW (313 ch)", acc: "5,9 s",
      dc_time: "environ 37 min", ac_time: "environ 8 h 30",
      pitch: "Une berline basse et silencieuse qui relie Abidjan à Yamoussoukro et revient sans recharger. Pour les cadres qui roulent beaucoup.",
      imgs: ["seal-1", "seal-2", "seal-3"],
      versions: [{ id: "design", name: "Design", price: 34900000, range: 570, note: "Propulsion, 82,5 kWh" }, { id: "excellence", name: "Excellence AWD", price: 41500000, range: 520, note: "Transmission intégrale, 390 kW" }],
      colors: [{ n: "Gris Aurora", c: "#c6ccd2" }, { n: "Bleu Horizon", c: "#5f7c99" }, { n: "Blanc Arctique", c: "#f2f2f0" }, { n: "Noir Cosmos", c: "#1b1c1f" }]
    },
    sealion7: {
      name: "Sealion 7", type: "SUV coupé", tag: "Le nouveau haut de gamme",
      price: 39900000, range: 502, battery: "82,5 kWh", dc: "150 kW", ac: "11 kW", seats: 5, power: "230 kW (313 ch)", acc: "6,7 s",
      dc_time: "environ 32 min", ac_time: "environ 8 h 30",
      pitch: "Le grand SUV coupé de la gamme : espace pour cinq, finition premium et l'assurance d'un réseau CFAO Mobility partout dans le pays.",
      imgs: ["sealion7-1", "sealion7-2", "sealion7-3", "sealion7-4"],
      versions: [{ id: "comfort", name: "Comfort", price: 39900000, range: 502, note: "Propulsion, 82,5 kWh" }, { id: "excellence", name: "Excellence AWD", price: 46900000, range: 456, note: "Intégrale, 91,3 kWh" }],
      colors: [{ n: "Gris Shark", c: "#5d6166" }, { n: "Blanc Arctique", c: "#f2f2f0" }, { n: "Bleu Atlantis", c: "#3f5d78" }, { n: "Noir Cosmos", c: "#1b1c1f" }]
    }
  },
  order: ["dolphin", "atto3", "seal", "sealion7"],
  showrooms: [
    { id: "aeroport", name: "LOXEA Aéroport", city: "Abidjan, Port-Bouët", addr: "Aéroport Félix Houphouët-Boigny", hours: "Lun à sam, 8 h à 18 h", tag: "Showroom BYD historique" },
    { id: "marseille", name: "Boulevard de Marseille", city: "Abidjan, Marcory", addr: "117 boulevard de Marseille", hours: "Lun à sam, 8 h à 18 h", tag: "Siège CFAO Mobility" },
    { id: "yamoussoukro", name: "Yamoussoukro", city: "Yamoussoukro", addr: "Point de vente CFAO Mobility", hours: "Lun à sam, 8 h à 17 h", tag: "Centre du pays" },
    { id: "bouake", name: "Bouaké", city: "Bouaké", addr: "Point de vente CFAO Mobility", hours: "Lun à sam, 8 h à 17 h", tag: "Nord et centre" }
  ],
  photoCredits: "Photos : Alexander Migl (Alexander-93), Ethan Llamas, Husskeyy, Wikimedia Commons, licence CC BY-SA 4.0."
};
window.fcfa = n => Math.round(n).toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") + " FCFA";

// Financement fictif : taux 9 % par an, sur la durée choisie
window.mensu=(capital,mois,taux)=>{taux=taux==null?0.09:taux;const r=taux/12;return capital*r/(1-Math.pow(1+r,-mois));};
// Location LOXEA fictive : loyer mensuel = 1,9 % du prix pour 36 mois, 1,7 % pour 48 mois, entretien et assurance inclus
window.loyer=(prix,mois)=>prix*(mois>=48?0.017:0.019);
