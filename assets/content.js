/* Contenu unique du module, partagé par les trois versions.
   Sources : PowerPoint « IFParis - essai Bernard IA » (slides 2 à 4, notes et vidéos)
   et pages publiques de ifparis.org pour les citations. */
window.IFP = {
  module: { numero: 2, titre: "Introduction à la Gestion Mentale" },

  formatrice: {
    nom: "Isabelle Grouffal",
    role: "Formatrice en Gestion Mentale, fondatrice d’IFParis",
    reperes: [
      { an: "1995", texte: "Je découvre la Gestion Mentale pour accompagner mon fils dans sa scolarité." },
      { an: "2006", texte: "Je fonde l’association IFParis, qui forme aujourd’hui des praticiens en Gestion Mentale." },
      { an: "2010", texte: "J’accompagne en entreprise des collaborateurs, des équipes et des personnes en reprise d’études." }
    ]
  },

  /* Texte d'accueil : notes de la slide de titre. */
  bienvenue: [
    "Bonjour, et bienvenue dans votre premier module en autonomie pour découvrir la Gestion Mentale.",
    "Je suis Isabelle Grouffal, formatrice en Gestion Mentale depuis plus de 20 ans et présidente de l’association de Gestion Mentale de Paris Île-de-France. J’ai découvert la Gestion Mentale en 1995 pour accompagner mon fils dans sa scolarité. Cette expérience m’a fait entrer dans le monde de l’accompagnement cognitif.",
    "La rencontre de la diversité m’a interpellée. J’ai accompagné aussi bien des personnes présentant des troubles Dys que des personnes à haut potentiel ou des troubles du spectre autistique, mais aussi tous les jeunes souhaitant comprendre et améliorer leurs stratégies d’apprentissage.",
    "Depuis 2010, j’ai eu l’opportunité de travailler en entreprise et d’accompagner des collaborateurs sur leur poste de travail, des équipes dans leur dynamique et des personnes en reprise d’études. Je me suis aussi beaucoup investie dans des ateliers mémoire pour les séniors.",
    "J’ai fondé l’association IFParis en 2006. Elle forme aujourd’hui des praticiens en Gestion Mentale qui œuvrent dans le monde de l’enseignement, de l’entreprise, du soin et dans tous les domaines où la pensée est en action !",
    "Vous allez, comme moi, découvrir la Gestion Mentale, démarche créée par le pédagogue et philosophe Antoine de La Garanderie, et en acquérir les fondements. Avec une alternance de séquences théoriques, de mises en pratique et votre travail personnel, vous aurez les bases pour définir et commencer à pratiquer la Gestion Mentale.",
    "Je vous souhaite un très bon parcours. Bien sûr, n’hésitez pas à nous contacter pour toute demande."
  ],

  objectifs: [
    "Définir la Gestion Mentale dans le monde de l’accompagnement",
    "Présenter ses fondements"
  ],

  /* Les six étapes du module. t = [début, fin] en secondes dans la vidéo « plan ». */
  plan: [
    { titre: "Qu’est-ce que la Gestion Mentale ?", court: "Définir",
      apercu: "« La pédagogie des gestes mentaux, et non une manière de “gérer” son mental. »",
      detail: "Tout geste est descriptible et peut donc être enseigné. Il s’agit d’aller voir ce qu’il se passe dans cette « boîte noire » qu’est le cerveau.",
      t: [3.8, 10.4] },
    { titre: "Les outils de la Gestion Mentale", court: "Outiller",
      apercu: "Les outils principaux, notamment ceux du dialogue pédagogique.",
      detail: "Le dialogue pédagogique est une « introspection guidée », qui s’appuie sur l’écoute active.",
      t: [10.4, 20.0] },
    { titre: "Antoine de La Garanderie, fondateur de la Gestion Mentale", court: "Rencontrer",
      apercu: "Philosophe et pédagogue, 1920 – 2010.",
      detail: "La Gestion Mentale naît véritablement en 1980, avec la parution de son livre « Les profils pédagogiques ».",
      t: [20.4, 31.6] },
    { titre: "Bibliographie", court: "Lire",
      apercu: "Les ouvrages d’Antoine de La Garanderie.",
      detail: "À commencer par « Les profils pédagogiques » (1980), l’acte de naissance de la démarche.",
      t: [32.4, 35.2] },
    { titre: "Les 4 concepts fondamentaux de la Gestion Mentale", court: "Comprendre",
      apercu: "L’évocation, les gestes mentaux, les structures de sens, le projet.",
      detail: "Cinq gestes mentaux : l’attention, la mémorisation, la compréhension, la réflexion et l’imagination créatrice.",
      t: [35.2, 41.5] },
    { titre: "Réactivation et mise en projet d’expérimentation", court: "Expérimenter",
      apercu: "On réactive les apports, puis on se met en projet d’expérimenter.",
      detail: "« Toute activité mentale n’a de sens que si elle est investie par la personne. »",
      t: [41.8, 52.8] }
  ],

  concepts: [
    { nom: "L’évocation", texte: "« Elle est le fondement même de la vie mentale. »" },
    { nom: "Les gestes mentaux", texte: "Attention, mémorisation, compréhension, réflexion, imagination créatrice." },
    { nom: "Les structures de sens", texte: "La Gestion Mentale est « aussi une pédagogie du sens »." },
    { nom: "Le projet", texte: "« Toute activité mentale n’a de sens que si elle est investie par la personne. »" }
  ],

  gestes: ["L’attention", "La mémorisation", "La compréhension", "La réflexion", "L’imagination créatrice"],

  /* Sous-titres : transcription des deux vidéos d'Isabelle Grouffal. */
  cues: {
    objectifs: [
      [0.0, 5.5, "Voici le module 2 d’introduction à la Gestion Mentale."],
      [5.5, 9.7, "Les objectifs de ce module sont de définir"],
      [9.7, 12.2, "la Gestion Mentale dans le monde de l’accompagnement"],
      [12.2, 15.0, "et de présenter ses fondements."]
    ],
    plan: [
      [0.0, 3.8, "Dans ce module 2 d’introduction à la Gestion Mentale,"],
      [3.8, 10.4, "nous commencerons par découvrir et définir la Gestion Mentale,"],
      [10.4, 16.5, "puis nous aborderons les outils principaux qui la constituent,"],
      [16.5, 20.0, "notamment les outils utilisés pour le dialogue pédagogique."],
      [20.4, 24.3, "Puis, nous découvrirons le fondateur,"],
      [24.3, 28.0, "philosophe et pédagogue, Antoine de La Garanderie,"],
      [28.0, 31.2, "qui a vécu de 1920 à 2010."],
      [32.4, 35.2, "Ensuite, nous présenterons sa bibliographie"],
      [35.2, 41.4, "et nous aborderons les quatre grands concepts fondamentaux de la Gestion Mentale."],
      [41.8, 45.2, "Et bien sûr, à l’issue de tous ces apports,"],
      [45.2, 49.0, "nous réaliserons une réactivation"],
      [49.0, 52.6, "et, pour vous mettre en projet, d’expérimenter."],
      [53.0, 56.0, "Je vous souhaite une très bonne écoute."]
    ]
  },

  /* Branche des sous-titres maison sur une vidéo (les <track> ne se chargent pas en file://).
     onTime(t) est appelé à chaque avancée, utile pour synchroniser le plan. */
  captions: function (video, box, cues, onTime) {
    var last = null;
    function tick() {
      var t = video.currentTime, txt = "";
      for (var i = 0; i < cues.length; i++) if (t >= cues[i][0] && t < cues[i][1]) { txt = cues[i][2]; break; }
      if (video.paused && t === 0) txt = "";
      if (txt !== last) { last = txt; if (box) { box.textContent = txt; box.classList.toggle("on", !!txt); } }
      if (onTime) onTime(t, !video.paused && !video.ended);
    }
    ["timeupdate", "play", "pause", "seeked", "ended"].forEach(function (e) { video.addEventListener(e, tick); });
    (function loop() { if (!video.paused) tick(); requestAnimationFrame(loop); })();
  },

  /* Index de l'étape du plan en cours pour un temps donné (-1 si aucune). */
  stepAt: function (t) {
    for (var i = 0; i < this.plan.length; i++) if (t >= this.plan[i].t[0] && t < this.plan[i].t[1]) return i;
    return -1;
  }
};
