// ============================================================
// ANCIENT EGYPTIAN TEXTS
// Story of Sinuhe — Papyrus Berlin 3022 (B-text), c. 1875 BCE
// Transliteration follows standard Egyptological conventions.
// Hieroglyphs use standard Middle Egyptian orthography where known.
// Signs confirmed against Sinuhe manuscript: iry-pʿt, ḥȝty-ʿ.
// ============================================================

const TEXTS = {

  sinuhe: {
    id: 'sinuhe',
    title: 'The Story of Sinuhe',
    titleHiero: '𓋴𓈖𓅱𓉔𓏏',
    subtitle: 'Opening Passage',
    source: 'Papyrus Berlin 3022 (B-text)',
    period: 'Middle Kingdom, 12th Dynasty, c. 1875 BCE',
    genre: 'Literary narrative (sḏm=f frame)',
    language: 'Middle Egyptian',
    intro: `The Story of Sinuhe is one of ancient Egypt's most celebrated literary works. It recounts the adventures of Sinuhe — a royal attendant who flees Egypt following the death of King Amenemhat I, lives among Asiatic peoples, and eventually returns home to die in honour. The text survives in multiple papyri and over 25 ostraca, indicating its status as a scribal classic studied in Egyptian schools for centuries.`,
    sections: [

      // ── SECTION 1: Titles & Dedication ─────────────────────────────────────
      {
        id: 'epithets',
        label: 'Titles & Dedication',
        referenceLines: 'B1–B6',
        note: 'Egyptian literary texts open by naming the speaker through a list of honorific titles before giving his name. This signals rank and trustworthiness.',
        english: 'The hereditary prince, count, sole companion, warden of Nekhen, the royal attendant — Sinuhe says:',
        words: [
          {
            id: 'B1-w1',
            hieroglyphs: '𓂋𓊪𓂝𓏏',
            transliteration: 'iry-pʿt',
            translation: 'hereditary prince',
            pos: 'Honorific title',
            grammar: {
              form: 'Compound noun phrase',
              breakdown: 'iry (he who belongs to) + pʿt (the elite noble class)',
              inflection: 'Uninflected title — no gender/number marking',
              notes: 'The highest hereditary title in the Egyptian nobility, inherited rather than granted by the king. Indicates the bearer belongs to the ancient pʿt class of aristocrats. It consistently opens lists of elite titles.',
            },
          },
          {
            id: 'B1-w2',
            hieroglyphs: '𓄂𓂝',
            transliteration: 'ḥȝty-ʿ',
            translation: 'count',
            pos: 'Honorific title',
            grammar: {
              form: 'Compound noun phrase',
              breakdown: 'ḥȝty (the foremost one, the one in front) + ʿ (arm)',
              inflection: 'Uninflected — the -y ending is part of the word, not a plural marker here',
              notes: 'Literally "foremost of arm" — a title for high provincial governors and senior officials. By the Middle Kingdom it was often paired with iry-pʿt as a formulaic double-title for the upper nobility.',
            },
          },
          {
            id: 'B1-w3',
            hieroglyphs: '𓋴𓅓𓂋𓅱𓂝𓏏𓇌',
            transliteration: 'smr-wʿty',
            translation: 'sole companion',
            pos: 'Court title',
            grammar: {
              form: 'Compound noun',
              breakdown: 'smr (companion, courtier) + wʿty (the sole one, the unique one)',
              inflection: 'wʿty carries the nisba suffix -y (one who is wʿ = alone)',
              notes: 'One of the most prestigious court ranks, denoting extreme closeness to the king\'s person. "Sole" (wʿ) signals that this companion has no equal — only a select few held it simultaneously. Later demoted to a routine courtesy title.',
            },
          },
          {
            id: 'B1-w4',
            hieroglyphs: '𓇋𓂋𓇌𓈖𓐍𓈖',
            transliteration: 'iry-nḫn',
            translation: 'warden of Nekhen',
            pos: 'Administrative title',
            grammar: {
              form: 'Compound noun phrase',
              breakdown: 'iry (guardian, warden) + nḫn (Nekhen, the ancient capital)',
              inflection: 'Construct state: iry directly modifies nḫn without a genitive particle',
              notes: 'Nekhen (Greek: Hierakonpolis) was the ancient religious capital of Upper Egypt and seat of early kingship. By the Middle Kingdom the wardenship was largely honorific, evoking continuity with Egypt\'s origins.',
            },
          },
          {
            id: 'B2-w1',
            hieroglyphs: '𓈙𓅓𓋴𓅱',
            transliteration: 'šmsw',
            translation: 'royal attendant / follower',
            pos: 'Noun (title)',
            grammar: {
              form: 'Masculine noun, singular',
              breakdown: 'Root: šms (to follow, to attend, to accompany)',
              inflection: 'Masculine singular — no ending; -w is part of the root, not a plural marker',
              notes: 'A šmsw is a personal royal attendant who physically accompanies the king — in procession, on campaign, in the palace. The title implies proximity to power and personal royal trust. It is Sinuhe\'s primary identity throughout the story.',
            },
          },
          {
            id: 'B2-w2',
            hieroglyphs: '𓋴𓈖𓅱𓉔𓏏',
            transliteration: 'Snwḥt',
            translation: 'Sinuhe (proper name)',
            pos: 'Masculine proper name',
            grammar: {
              form: 'Proper name, masculine',
              breakdown: 'Possibly sn (son?) + wḥt (sycamore?) — etymology debated',
              inflection: 'Proper names are uninflected for gender/number',
              notes: 'The protagonist\'s name. Its exact meaning is uncertain — one reading is "Son of the Sycamore." In the manuscript, this name is immediately followed by ḏd=f ("he says"), which completes the introductory formula and hands the narrative to Sinuhe himself.',
            },
          },
          {
            id: 'B2-w3',
            hieroglyphs: '𓆓𓂧𓆑',
            transliteration: 'ḏd=f',
            translation: 'he says / he said',
            pos: 'Verb + pronoun suffix',
            grammar: {
              form: 'sḏm=f verb form, 3rd person masculine singular',
              breakdown: 'ḏd (to say, to speak) + =f (he, him — 3rd m. sg. suffix pronoun)',
              inflection: 'sḏm=f — the classic Egyptian past/narrative verb form. The =f suffix attaches directly to the verb stem.',
              notes: 'The sḏm=f form (named after the paradigm verb sḏm, "to hear") is the workhorse of Middle Egyptian narrative. Here it functions as a past tense: "Sinuhe said." =f (the horned viper 𓆑) is one of the most frequently encountered suffix pronouns — "he/him/his."',
            },
          },
        ],
      },

      // ── SECTION 2: The Narrative Begins ────────────────────────────────────
      {
        id: 'narrative',
        label: 'The Narrative Begins',
        referenceLines: 'B50–B62',
        note: 'Sinuhe begins his first-person account. The shift to ink ("I") is dramatic — the reader moves from formal epithet into intimate personal voice.',
        english: 'I was a follower of my lord, a nobleman in the palace of His Majesty — true and beloved.',
        words: [
          {
            id: 'B50-w1',
            hieroglyphs: '𓇋𓈖𓎡',
            transliteration: 'ink',
            translation: 'I',
            pos: 'Pronoun',
            grammar: {
              form: '1st person singular independent pronoun',
              breakdown: 'ink (I, it is I)',
              inflection: 'No inflection — independent pronouns are invariable in Egyptian',
              notes: 'Egyptian has two pronoun sets: suffix pronouns (=i, =k, =f…) which attach to words, and independent pronouns (ink, ntk, ntf…) used for emphasis or as subjects in nominal sentences. ink at the head of a clause creates a cleft-like emphasis: "It was I who was a follower." This opening word immediately establishes Sinuhe as a credible, first-person witness.',
            },
          },
          {
            id: 'B50-w2',
            hieroglyphs: '𓈙𓅓𓋴𓅱',
            transliteration: 'šmsw',
            translation: 'follower / attendant',
            pos: 'Noun (predicate)',
            grammar: {
              form: 'Masculine noun, singular; predicate of a nominal sentence',
              breakdown: 'Root: šms (to follow, to attend)',
              inflection: 'Masculine singular. In a nominal sentence, no verb "to be" is required — ink + šmsw = "I [am/was] a follower."',
              notes: 'This is the same word used in Sinuhe\'s titles above, but here it is a narrative predicate, not a formal title. The repetition is deliberate — it defines Sinuhe\'s essential identity. Egyptian nominal sentences are verbless: the subject (ink) is simply placed next to the predicate (šmsw).',
            },
          },
          {
            id: 'B50-w3',
            hieroglyphs: '𓈖',
            transliteration: 'n',
            translation: 'of',
            pos: 'Particle',
            grammar: {
              form: 'Indirect genitive particle',
              breakdown: 'n (of, belonging to, for)',
              inflection: 'Uninflected particle',
              notes: 'Egyptian has two types of genitive (possessive) construction. The direct genitive simply juxtaposes two nouns: pr nswt = "house [of] king." The indirect genitive inserts n between them: šmsw n nb=f = "follower of his lord." The indirect genitive is used when the possessed noun is not in construct state — here šmsw is a common noun, so n is required.',
            },
          },
          {
            id: 'B50-w4',
            hieroglyphs: '𓎟𓆑',
            transliteration: 'nb=f',
            translation: 'his lord',
            pos: 'Noun + suffix pronoun',
            grammar: {
              form: 'Masculine noun + 3rd m. singular suffix pronoun',
              breakdown: 'nb (lord, master, owner) + =f (his, him)',
              inflection: 'nb is masculine singular. =f (the horned viper 𓆑) is the 3rd m. sg. suffix pronoun, indicating the possessor.',
              notes: 'nb is one of the most versatile words in Egyptian — it means "lord," "master," "owner," and, separately spelled, "every/all." As a title, Nb is an epithet of gods and kings. Here it refers to the reigning king. Note the suffix pronoun =f: it attaches directly to nb without a space, making nb=f a single phonological unit: "his-lord."',
            },
          },
          {
            id: 'B51-w1',
            hieroglyphs: '𓈙𓊪𓋴𓇌𓅱',
            transliteration: 'špsyw',
            translation: 'nobleman / aristocrat',
            pos: 'Noun (predicate)',
            grammar: {
              form: 'Masculine noun, singular',
              breakdown: 'Root: šps (noble, venerable, exalted, precious)',
              inflection: 'The -yw ending can mark either a masculine plural or a nisba adjective used as a noun. Here it is likely singular, a second predicate in the nominal sentence.',
              notes: 'šps/špsyw describes someone of high social standing and divine favor. The root is related to concepts of preciousness and venerability. In Sinuhe\'s self-description, calling himself a špsyw in the same breath as a royal follower reinforces that he was not just a servant — he was a man of standing.',
            },
          },
          {
            id: 'B51-w2',
            hieroglyphs: '𓅓',
            transliteration: 'm',
            translation: 'in / within',
            pos: 'Preposition',
            grammar: {
              form: 'Preposition',
              breakdown: 'm (in, within, as, from, out of)',
              inflection: 'Uninflected. The owl hieroglyph (𓅓) also doubles as the uniliteral sign for m.',
              notes: 'm is one of the most common and semantically broad Egyptian prepositions. Its range includes "in" (location), "as" (predication), "from" (origin), and "among." The fact that the owl (phonetic m) is used to write this common particle illustrates how Egyptian uses the uniliteral signs as the core phonetic building blocks of the script.',
            },
          },
          {
            id: 'B51-w3',
            hieroglyphs: '𓉐𓏤',
            transliteration: 'pr',
            translation: 'house / palace',
            pos: 'Noun',
            grammar: {
              form: 'Masculine noun, singular; logogram + determinative stroke',
              breakdown: 'pr (house, estate, household, palace). The single stroke 𓏤 marks the preceding sign as a logogram — read it as a whole word, not just its sounds.',
              inflection: 'Masculine singular. The logographic stroke (Z1) indicates the house-plan sign (O1) is to be read as the complete word pr.',
              notes: 'pr is the fundamental Egyptian word for "house" in all its senses — from a peasant\'s hut to the royal palace. The compound per-aꜣ (pr-ʿȝ, "Great House") gives us the word Pharaoh. In this context, m pr ḥm=f = "in the palace of His Majesty." The house sign 𓉐 as a logogram is one of the oldest in the script.',
            },
          },
          {
            id: 'B51-w4',
            hieroglyphs: '𓎛𓅓𓆑',
            transliteration: 'ḥm=f',
            translation: 'His Majesty',
            pos: 'Noun + suffix pronoun',
            grammar: {
              form: 'Masculine noun + 3rd m. singular suffix pronoun',
              breakdown: 'ḥm (body, person, majesty — lit. "servant [of the divine]") + =f (his)',
              inflection: 'ḥm is masculine singular. =f is the 3rd m. sg. suffix pronoun.',
              notes: 'ḥm literally means "servant" or "body," but ḥm=f is the standard polite/official Egyptian expression for "His Majesty." The paradox is intentional: the most powerful man on earth is linguistically framed as a "servant" — of the gods. This reflects the Egyptian theological view that the king was the gods\' representative on earth, not a deity himself (though he could be deified). A profound and deliberate grammatical humility.',
            },
          },
          {
            id: 'B52-w1',
            hieroglyphs: '𓆄𓂝𓂋',
            transliteration: 'mȝʿ',
            translation: 'true / genuine / just',
            pos: 'Adjective',
            grammar: {
              form: 'Adjective, masculine singular; qualifying noun in apposition',
              breakdown: 'Root: mȝʿ (truth, justice, rightness) — related to Maat (𓆄𓏏 mȝʿt)',
              inflection: 'Masculine singular adjective — agrees with špsyw (nobleman). Feminine would be mȝʿt.',
              notes: 'mȝʿ is derived from the same root as Maat (𓆄𓏏 mȝʿt) — the fundamental Egyptian concept of cosmic truth, justice, and right order. Calling someone mȝʿ is the highest ethical commendation: he is a person of integrity. The word "justified" (mȝʿ-ḫrw, "true of voice") was applied to the dead who passed the weighing-of-the-heart judgment.',
            },
          },
          {
            id: 'B52-w2',
            hieroglyphs: '𓅓𓂋𓇌𓆑',
            transliteration: 'mrr=f',
            translation: 'whom he loves / his beloved',
            pos: 'Verb (relative form)',
            grammar: {
              form: 'Relative form (mrr=f), 3rd m. singular — "whom he loves"',
              breakdown: 'mrr = reduplicated/emphatic stem of mr (to love) in the relative form + =f (he)',
              inflection: 'The relative form is made by adding a special ending and, in strong verbs, geminating (doubling) the last consonant: mr → mrr. The subject of the verb is =f (him = the king).',
              notes: 'This is a classic example of the Egyptian relative form (or "relative participle"). mrr=f does not mean "he loves" but "whom he loves" — the verb\'s action describes the noun it modifies (here, the nobleman Sinuhe). Reduplications like mrr (instead of simple mr) often mark imperfective aspect or emphasis. The phrase "mrr ḥm=f" — "whom His Majesty loves" — is a formulaic royal epithet used throughout Egyptian literature and inscriptions.',
            },
          },
        ],
      },

      // ── SECTION 3: The King's Death ────────────────────────────────────────
      {
        id: 'death',
        label: "The King's Death",
        referenceLines: 'B7–B12',
        note: 'Sinuhe\'s account turns abruptly to the event that defines everything: the death of Amenemhat I. The language is formal, euphemistic, and distinctly royal — an Egyptian king does not die, he ascends.',
        english: 'The King of Upper and Lower Egypt, Sehetep-ib-Ra, went to heaven and joined his sun disk. The majesty of the king flew to heaven. Then my heart grew confused, my arms spread apart.',
        words: [
          {
            id: 'B7-w1',
            hieroglyphs: '𓆥𓏏𓆤𓏏',
            transliteration: 'nswt-bity',
            translation: 'King of Upper and Lower Egypt',
            pos: 'Royal title (dual kingship)',
            grammar: {
              form: 'Compound title formed from two epithets of sovereignty',
              breakdown: 'nswt (he of the sedge — king of Upper Egypt) + bity (he of the bee — king of Lower Egypt)',
              inflection: 'Uninflected compound title. The sedge (M23) and bee (L2) are written before the king\'s name by honorific transposition.',
              notes: 'The foundational title of Egyptian kingship, asserting simultaneous rule over both the southern (Upper) and northern (Lower) halves of Egypt — the Two Lands ideology. nswt derives from a root meaning "he who belongs to the sedge," the heraldic plant of Upper Egypt; bity from the bee of Lower Egypt. This dual sovereignty claim was politically essential — an Egyptian pharaoh was always "of both lands," never merely regional. The title consistently preceded the throne name in formal inscriptions.',
            },
          },
          {
            id: 'B7-w2',
            hieroglyphs: '𓋴𓎛𓏏𓊪𓄤𓇳',
            transliteration: 'Sḥtp-ib-Rʿ',
            translation: 'Sehetep-ib-Ra (throne name of Amenemhat I)',
            pos: 'Royal prenomen (cartouche name)',
            grammar: {
              form: 'Throne name enclosed within a cartouche (šnw ring)',
              breakdown: 'sḥtp (to satisfy, to please, to pacify) + ib (heart, F34) + Rʿ (Ra, the sun god, N5)',
              inflection: 'Proper name — uninflected. Royal names were enclosed in an oval šnw loop symbolising the sun\'s circuit around all creation.',
              notes: '"He who satisfies the heart of Ra." Egyptian kings bore five names in total; the prenomen (throne name) and nomen (birth name) were the two enclosed in cartouches. The cartouche itself (šnw, from šni, "to encircle") represents the path of the sun encircling the world, and by extension the king\'s sovereignty over everything the sun encircles. Sehetep-ib-Ra was Amenemhat I — founder of the 12th Dynasty. Seeing this name in the past tense context of the narrative confirms: the king who bore it is now dead.',
            },
          },
          {
            id: 'B8-w1',
            hieroglyphs: '𓂻𓆑𓂋𓇯',
            transliteration: 'šm=f r pt',
            translation: 'he went to heaven / he ascended',
            pos: 'Verb phrase',
            grammar: {
              form: 'sḏm=f (perfective past), 3rd masculine singular + prepositional phrase',
              breakdown: 'šm (to go, to walk, to depart) + =f (he) + r (to, toward) + pt (sky, heaven)',
              inflection: 'šm=f: completed action in the past. r: directional preposition. pt: feminine noun — the sky vault.',
              notes: 'šm r pt, "went to heaven," is the standard Egyptian literary and inscriptional euphemism for royal death. Egyptians carefully avoided saying a king simply "died" (mwt); instead he "departed," "flew up," "ascended," or "joined the sun." This reflects the theological reality: the king\'s death was a cosmic transition, not a biological ending. The same formula appears on royal stelae, Pyramid Texts, and funerary inscriptions across three millennia. pt (the sky) was conceived as a physical vault of water — the primordial ocean above — held up by four pillars at the corners of the world.',
            },
          },
          {
            id: 'B8-w2',
            hieroglyphs: '𓎛𓈖𓅓𓆑𓅓𓇳𓆑',
            transliteration: 'ḥnm=f m itn=f',
            translation: 'he joined his sun disk',
            pos: 'Verb phrase',
            grammar: {
              form: 'sḏm=f (perfective) + prepositional phrase with possessive suffix',
              breakdown: 'ḥnm (to unite with, to join, to blend into) + =f (he) + m (with, in) + itn (sun disk) + =f (his)',
              inflection: 'ḥnm=f: sḏm=f form, perfective, 3rd m. sg. itn=f: masculine noun + 3rd m. sg. possessive suffix.',
              notes: 'itn (the Aten) is the physical disk of the sun — the visible, radiant body in the sky — as distinct from Rʿ (Ra), the solar deity. To "join one\'s sun disk" meant the deceased king became part of the solar cycle itself, rising and setting for eternity with Ra\'s barque. This pre-Amarna theology of solar union is the deep background against which Akhenaten\'s later "Aten revolution" would be understood — he elevated what was already a royal death formula into an exclusive state theology. Here, three centuries earlier, it is simply the expected dignified death of a king.',
            },
          },
          {
            id: 'B9-w1',
            hieroglyphs: '𓎛𓄤𓆑𓅓𓐍𓆑𓇋𓏏',
            transliteration: 'ḫpr.n ib=i m ḫfyt',
            translation: 'my heart came to be in terror',
            pos: 'Verb phrase + prepositional phrase',
            grammar: {
              form: 'sḏm.n=f (narrative past) + noun phrase + prepositional phrase',
              breakdown: 'ḫpr (to come to be, to become, to happen) + .n (past marker) + ib=i (my heart) + m (in, into) + ḫfyt (terror, trembling, dread)',
              inflection: 'ḫpr.n: the sḏm.n=f form — the .n suffix is the primary marker of simple past in Middle Egyptian narrative. ib=i: masculine noun + 1st sg. suffix. ḫfyt: feminine noun (abstract noun of state).',
              notes: 'This is the emotional pivot of the entire story. ḫpr (to become, to happen) is one of the most philosophically loaded words in Egyptian — written with the scarab beetle (Khepri), the god of becoming and transformation. The verb form sḏm.n=f (here ḫpr.n) is the backbone of Middle Egyptian narrative: it marks a simple, sequential past action. ib (heart) is the centre of Egyptian psychology — the seat of thought, will, memory, and emotion. The heart "becoming in terror" is not metaphorical: to Egyptians, the heart literally experienced all mental states. This line is Sinuhe\'s first confession of personal weakness — the beginning of his flight.',
            },
          },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════════════
  // THE INSTRUCTIONS OF AMENEMHAT
  // Papyrus Millingen; Papyrus Petersburg 1116A, c. 1938–1908 BCE
  // ════════════════════════════════════════════════════════════════════
  amenemhat: {
    id: 'amenemhat',
    title: 'The Instructions of Amenemhat',
    titleHiero: '𓇋𓅓𓈖𓅓𓎛𓄿𓏏',
    subtitle: 'A King Speaks from Beyond',
    source: 'Papyrus Millingen; Papyrus Petersburg 1116A',
    period: 'Middle Kingdom, 12th Dynasty, c. 1938–1908 BCE',
    genre: 'Wisdom literature (sbȝyt)',
    language: 'Middle Egyptian',
    intro: `The Instructions of Amenemhat I is one of ancient Egypt's most extraordinary and politically charged texts — a wisdom teaching (sbȝyt) in which the assassinated pharaoh Amenemhat I speaks posthumously to his son Senwosret I, counselling him to trust no one. The text is remarkable for its bitter realism, its frank account of a palace assassination attempt, and its inversion of conventional Egyptian values: where most wisdom texts counsel friendship and loyalty, Amenemhat says "do not trust a brother." It was among the most frequently copied school texts of the Middle and New Kingdoms, surviving on dozens of papyri and ostraca — studied as both literary canon and practical political advice.`,
    sections: [

      // ── SECTION 1: Prologue ────────────────────────────────────────────────
      {
        id: 'prologue',
        label: 'Prologue',
        referenceLines: 'I.1–I.4',
        note: 'Like all Egyptian wisdom texts, the Instructions open with a formal attribution — naming the author, his titles, and his audience. The framing device is quietly extraordinary: a dead king writing a letter to his living son.',
        english: 'Beginning of the instruction made by the Majesty of the King of Upper and Lower Egypt, Sehetep-ib-Ra, son of Ra, Amenemhat, justified — when he spoke as a true message to his son, the Lord of All.',
        words: [
          {
            id: 'A1-w1',
            hieroglyphs: '𓎛𓄿𓏏𓂝𓈖𓇮𓇋𓏏',
            transliteration: 'ḥȝt-ʿ n sbȝyt',
            translation: 'beginning of the instruction',
            pos: 'Formulaic title phrase',
            grammar: {
              form: 'Compound noun phrase: ḥȝt-ʿ (beginning) + n (of) + sbȝyt (instruction/teaching)',
              breakdown: 'ḥȝt (front, beginning, forepart) + ʿ (arm — forming a compound meaning "beginning") + n (of, belonging to) + sbȝyt (teaching, instruction — from sbȝ, "to teach")',
              inflection: 'Uninflected fixed formula. ḥȝt-ʿ literally means "front of arm" but functions idiomatically as "beginning, opening." sbȝyt is a feminine abstract noun.',
              notes: 'ḥȝt-ʿ n sbȝyt is the genre-defining opening formula for Egyptian wisdom literature (sbȝyt), used in the Instructions of Ptahhotep, the Instructions of Khety, and dozens of other teaching texts over two millennia. A reader recognising this phrase instantly knew: what follows is authoritative moral and practical teaching. sbȝyt derives from the root sbȝ — which means both "star" (N14) and "to teach." The connection is semantic: a star guides you across darkness; a teacher guides you through life. By opening with this formula, the text claims the full authority of the Egyptian pedagogical tradition.',
            },
          },
          {
            id: 'A1-w2',
            hieroglyphs: '𓇋𓂋𓏏𓈖𓎛𓅓𓄡𓏏',
            transliteration: 'irt.n ḥm n nswt',
            translation: 'made by the Majesty of the King',
            pos: 'Relative perfective + noun phrase',
            grammar: {
              form: 'Relative perfective of iri (to do, to make) + indirect genitive phrase',
              breakdown: 'irt (doing, making — infinitive/relative form of iri) + .n (by — marks the agent of a passive or relative form) + ḥm (majesty, person) + n (of) + nswt (king)',
              inflection: 'irt.n: the suffix .n here marks the agent of the verbal action — "made by." ḥm n nswt: indirect genitive — "majesty of/belonging to the king."',
              notes: 'The relative perfective (sometimes called "old perfective" or "stative") with agentive .n is the standard formal Egyptian attribution formula. The structure irt.n X (made by X) appears on royal monuments, stelae, and literary texts to credit an author or commissioner. ḥm, literally "servant" or "body," is the standard polite term for the royal person — an elegant paradox: the most powerful individual on earth is linguistically framed as a "servant" of the gods. The full phrase irt.n ḥm n nswt thus creates a tone of divine authority rooted in formal humility.',
            },
          },
          {
            id: 'A1-w3',
            hieroglyphs: '𓇋𓅓𓈖𓅓𓎛𓄿𓏏',
            transliteration: 'Imn-m-ḥȝt',
            translation: 'Amenemhat',
            pos: 'Theophoric royal proper name',
            grammar: {
              form: 'Compound proper name built on the divine name Amun',
              breakdown: 'Imn (Amun, "the hidden one" — the chief deity of Thebes) + m (in, at, as) + ḥȝt (the front, the foremost position, the beginning)',
              inflection: 'Proper name — uninflected. In inscriptions, royal names appeared within a cartouche (oval šnw ring).',
              notes: '"Amenemhat" means "Amun is at the fore" or "Amun is foremost" — a theophoric name asserting divine precedence. Amenemhat I was the founder of the 12th Dynasty and one of Egypt\'s most consequential rulers, who consolidated power after a turbulent First Intermediate Period. The text was likely composed soon after his death — possibly during the reign of Senwosret I — as a political document to legitimate the succession and explain the assassination. The actual author is unknown; Egyptologists have proposed the scribe Khety (author of other wisdom texts). The fictional voice of the dead king lends the teaching absolute authority: who can dispute the word of the man who lived through it?',
            },
          },
          {
            id: 'A1-w4',
            hieroglyphs: '𓆄𓂝𓂋𓏏𓎛𓂋𓅱',
            transliteration: 'mȝʿ-ḫrw',
            translation: 'true of voice / justified',
            pos: 'Standard funerary epithet',
            grammar: {
              form: 'Compound adjective used as a posthumous epithet',
              breakdown: 'mȝʿ (true, just, right — related to Maat) + ḫrw (voice, sound, word)',
              inflection: 'Uninflected epithet, placed immediately after the deceased\'s name. Feminine would be mȝʿt-ḫrw, but the masculine/neuter form is used for male names.',
              notes: '"True of voice" is the universal Egyptian epithet for the dead — added after any deceased person\'s name, from commoner to pharaoh. It refers to the outcome of the divine judgment: at the weighing of the heart before Osiris, the deceased whose heart balanced against Maat\'s feather could declare their innocence truthfully — they had a "true voice." Their declaration was accepted; they were "justified." The presence of mȝʿ-ḫrw after Amenemhat\'s name is the text\'s first explicit signal: he is dead. The entire posthumous-instruction frame rests on this single formulaic word.',
            },
          },
          {
            id: 'A1-w5',
            hieroglyphs: '𓆓𓂧𓆑𓈖𓋀𓆑',
            transliteration: 'ḏd=f n sȝ=f',
            translation: 'he speaks to his son',
            pos: 'Verb phrase + indirect object',
            grammar: {
              form: 'Present/habitual sḏm=f + preposition n + noun with suffix pronoun',
              breakdown: 'ḏd (to say, to speak) + =f (he, 3rd m. sg.) + n (to, for — indirect object marker) + sȝ (son) + =f (his)',
              inflection: 'ḏd=f: present or habitual sḏm=f — "he speaks / he is saying." n: preposition introducing the indirect object. sȝ=f: masculine noun + 3rd m. sg. possessive suffix.',
              notes: 'This short phrase completes the prologue\'s framing device: a dead man speaking to a living son. sȝ is among the first words any student of Egyptian learns — "son," with its simple consonant cluster. The recipient is Senwosret I, who was already serving as co-regent when his father was apparently attacked. The phrase n sȝ=f (to his son) establishes an intimate, dynastic urgency: this is not a general wisdom text for scribal students — it is a specific private instruction from father to heir. The tension between that intimacy and the bitter content that follows is what makes the text so powerful.',
            },
          },
        ],
      },

      // ── SECTION 2: The Warning ─────────────────────────────────────────────
      {
        id: 'warning',
        label: 'Trust No One',
        referenceLines: 'I.5–I.14',
        note: 'The heart of the text — and its most famous passage. Amenemhat delivers a blunt, bitter warning against trust in any form. The tone is unlike almost any other Egyptian literary text: direct, disillusioned, and politically unsparing.',
        english: 'Beware of subjects who amount to nothing, of whose plots you have no awareness. Do not fill your heart with a brother, know no friend, make no intimates — there is no profit in it.',
        words: [
          {
            id: 'A5-w1',
            hieroglyphs: '𓅓𓂋𓎡𓂋𓏏𓈖',
            transliteration: 'mr=k r',
            translation: 'beware of / guard yourself against',
            pos: 'Imperative + preposition',
            grammar: {
              form: 'Imperative (or prospective sḏm=f) of mr (to guard, to protect) + 2nd m. sg. suffix + preposition r',
              breakdown: 'mr (to protect, to be on guard) + =k (yourself — 2nd m. sg. suffix) + r (against, toward)',
              inflection: 'mr=k: addressed in the 2nd person to the son — "guard yourself." =k: the 2nd masculine singular suffix pronoun.',
              notes: 'The shift to =k (you) is dramatically intimate: the text moves from formal third-person prologue to direct address, king to son. mr (to protect, to guard) is the same root underlying the Egyptian word for "pyramid" (mr) — the vast stone structure as the ultimate act of royal self-protection. Here it functions as an urgent warning. In most Egyptian wisdom texts, the teacher says "do X" or "honour Y." Amenemhat\'s first instruction is defensive: not "do good things" but "guard against people." The entire ethical tenor of the text is announced in this single word.',
            },
          },
          {
            id: 'A5-w2',
            hieroglyphs: '𓈖𓂋𓐍𓈖𓏏𓋴𓈖',
            transliteration: 'n rḫ.tw sḫr.w=sn',
            translation: 'whose plots are unknown / whose scheming you cannot know',
            pos: 'Negative relative clause',
            grammar: {
              form: 'Negative particle n + passive impersonal rḫ.tw + noun phrase with plural suffix',
              breakdown: 'n (not — negation) + rḫ.tw (one does not know — impersonal passive of rḫ, "to know") + sḫr.w=sn (their plans/schemes — noun + 3rd common plural suffix)',
              inflection: 'rḫ.tw: the -tw suffix creates an impersonal passive — "it is not known," "one cannot know." sḫr.w: plural with -w ending. =sn: 3rd common plural — "their."',
              notes: 'rḫ (to know) is the root of some of Egyptian\'s richest words: rḫyt (the people, the known ones), rḫ-nswt (king\'s acquaintance — a prestigious title). Its passive impersonal rḫ.tw is one of the most elegant constructions in Middle Egyptian: "one does not know," with no specified subject — universal ignorance. sḫr (counsel, plan, scheme) can be neutral or sinister; context here makes it clearly hostile. The logic of the warning is elegant and paranoid: these people are dangerous precisely because they are unknowable. Knowledge is safety; ignorance is vulnerability.',
            },
          },
          {
            id: 'A6-w1',
            hieroglyphs: '𓅓𓎛𓇋𓂋𓏏𓈖𓄤𓆑𓅓𓋴𓈖',
            transliteration: 'im=k mḥ ib=k m sn',
            translation: 'do not fill your heart with a brother',
            pos: 'Negative imperative + verb phrase',
            grammar: {
              form: 'Negative imperative im=k + verb mḥ + object ib=k + prepositional phrase m sn',
              breakdown: 'im=k (do not — negative imperative with 2nd sg. suffix) + mḥ (to fill) + ib=k (your heart — ib + 2nd m. sg. suffix) + m (with) + sn (brother)',
              inflection: 'im=k: the standard Middle Egyptian negative imperative. mḥ: infinitive used after the negative imperative. ib=k: masculine noun + 2nd m. sg. possessive suffix.',
              notes: 'im=k is the Middle Egyptian negative imperative — stronger and more direct than the standard negative n. mḥ (to fill) is a physically immediate verb: you fill a vessel, a space, a heart. ib (heart) is the centre of Egyptian psychology — the seat of thought, will, memory, and emotion. sn (brother) is Egypt\'s word for close male relationship — it means both literal brother and trusted colleague or companion. "Do not fill your heart with a brother" directly inverts the core Egyptian social value of sn-nw (brotherhood, fraternal loyalty). In most Egyptian wisdom texts, cultivating trusted friends is a virtue. Amenemhat, speaking from beyond death, reverses everything.',
            },
          },
          {
            id: 'A6-w2',
            hieroglyphs: '𓅓𓂋𓎡𓂋𓐍𓋴𓈖𓆓𓅓',
            transliteration: 'im=k rḫ sḫm',
            translation: 'do not know an intimate / make no close friend',
            pos: 'Negative imperative + verbal phrase',
            grammar: {
              form: 'Negative imperative im=k + verb rḫ (to know) + noun sḫm (confidant, intimate)',
              breakdown: 'im=k (do not) + rḫ (to know, to be acquainted with) + sḫm (one who is powerful/intimate — from sḫm, "to be powerful")',
              inflection: 'im=k: negative imperative. rḫ: infinitive. sḫm as a substantive here = a person of closeness or power.',
              notes: 'rḫ (to know) here is relational — "to know" as in "to be in an intimate relationship with." This is not intellectual knowing but social knowing: having a confidant, an inner circle. The instruction to avoid all such relationships is extraordinary. It represents the ultimate conclusion of Amenemhat\'s political philosophy: every close relationship is a potential attack vector. The text was copied in Egyptian schools for centuries not as mere literary exercise — it was treated as practical political wisdom. What does it say about Egyptian political culture that this was the lesson deemed worth preserving?',
            },
          },
          {
            id: 'A7-w1',
            hieroglyphs: '𓅓𓂋𓎡𓂝𓏤𓋴𓇋𓅱',
            transliteration: 'n iw=f r nfr',
            translation: 'there is no profit in it / it leads to no good',
            pos: 'Negative existential sentence',
            grammar: {
              form: 'Negative particle n + existential iw + prepositional complement',
              breakdown: 'n (not — negation) + iw=f (it is — existential iw with 3rd m. sg. suffix) + r (to, toward) + nfr (good, beautiful, complete)',
              inflection: 'n iw=f: "it is not" — the negative form of the existential construction iw=f ("it is, there is"). r nfr: directional phrase "toward good/profit."',
              notes: 'nfr is perhaps the most positive word in the Egyptian language — meaning "good," "beautiful," "perfect," "complete." It appears in names (Nefertiti = "the beautiful one has come"), in greetings, in aesthetic judgments, in ethical evaluations. The formula n iw=f r nfr — "there is no going toward good in it," "it does not lead to good" — is the classic Egyptian dismissal of a bad course of action. The irony is perfect: a text recommending radical isolation and distrust closes each warning with the word nfr. To Amenemhat, the beautiful, the good, the complete — lies in solitude and vigilance.',
            },
          },
        ],
      },

    ],
  },

  // ════════════════════════════════════════════════════════════════════
  // THE TALE OF THE SHIPWRECKED SAILOR
  // Papyrus Petersburg 1115 (Hermitage Museum), c. 1900 BCE
  // ════════════════════════════════════════════════════════════════════
  shipwrecked: {
    id: 'shipwrecked',
    title: 'The Tale of the Shipwrecked Sailor',
    titleHiero: '𓇋𓈎𓂋𓇋𓅱𓇾',
    subtitle: 'The Island at the Edge of the World',
    source: 'Papyrus Petersburg 1115 (Hermitage Museum, St. Petersburg)',
    period: 'Middle Kingdom, 12th Dynasty, c. 1900 BCE',
    genre: 'Literary narrative (adventure tale)',
    language: 'Middle Egyptian',
    intro: `The Tale of the Shipwrecked Sailor is Egypt's earliest surviving adventure story — a tale-within-a-tale preserved on a single papyrus (P. Petersburg 1115) now in the Hermitage Museum. An official returning from a failed expedition is comforted by a subordinate sailor who tells his own astonishing story: shipwrecked alone on a magical island beyond the sea's edge, he was confronted by a vast golden serpent who turned out to be a god. The serpent prophesied his return home, loaded him with gifts, and vanished with the island beneath the waves. The text is remarkable for its narrative sophistication — a frame tale, an embedded adventure, a speaking divine serpent, and an island outside the boundaries of known geography. It engages deep Egyptian themes: fate, divine encounter, the nature of consolation, and the difference between a story that helps and one that merely passes time.`,
    sections: [

      // ── SECTION 1: The Courtier Speaks ────────────────────────────────────
      {
        id: 'prologue',
        label: 'The Courtier Speaks',
        referenceLines: 'Lines 1–12',
        note: 'The tale opens mid-scene. A senior official, returning from a failed mining expedition to the south, is visibly distressed. His subordinate sailor speaks first — not with an account of the voyage but with a story. The frame narrative is established: storytelling as consolation.',
        english: 'The worthy follower speaks: Let your heart be well, my lord — we have reached home. The mallet has been taken up, the mooring post driven in.',
        words: [
          {
            id: 'S1-w1',
            hieroglyphs: '𓇋𓈎𓂋',
            transliteration: 'ỉqr',
            translation: 'excellent / worthy / skilled',
            pos: 'Adjective (used as substantive title)',
            grammar: {
              form: 'Adjective functioning as a nominal title',
              breakdown: 'Root: ỉqr (to be excellent, to be skillful, to be distinguished)',
              inflection: 'Masculine singular. Used here as a substantive: "the excellent one," "the worthy one." No gender/number suffix visible.',
              notes: 'ỉqr is one of Egyptian\'s most loaded positive adjectives — it describes skilled craftsmen, competent officials, noble hearts, and effective speech. Its range encompasses intellectual, moral, and practical excellence simultaneously. Here it is used as a quasi-title: the subordinate speaker identifies himself as "the worthy one" — a capable, trustworthy servant whose advice can be taken seriously. This self-identification is the sailor\'s credential before he begins his story. Notably, the text credits the tale\'s telling to an anonymous "ỉqr sr" (worthy official/scribe) in the opening attribution — the author modestly effaces himself behind the role.',
            },
          },
          {
            id: 'S1-w2',
            hieroglyphs: '𓎟𓇋',
            transliteration: 'nb=ỉ',
            translation: 'my lord',
            pos: 'Noun + 1st person singular suffix pronoun',
            grammar: {
              form: 'Masculine noun nb + 1st singular suffix pronoun =ỉ',
              breakdown: 'nb (lord, master, owner — V30 basket sign) + =ỉ (my — 1st m. sg. suffix pronoun)',
              inflection: 'nb is an uninflected masculine noun. =ỉ (the reed, M17) is the 1st common singular suffix pronoun, indicating possession.',
              notes: 'nb is among the most semantically rich words in Egyptian. As a common noun: "owner, master, lord." As a title: applied to kings, gods, and nobles. As a prefix: nb-r-ḏr = "Lord of All" (the king); nbt-ḥwt = "Lady of the Mansion" (Nephthys). The pair nb / nbt (masculine/feminine) mirror the fundamental Egyptian gendered ordering of the world. Here nb=ỉ, "my lord," establishes the social hierarchy of the frame narrative: the sailor is subordinate, his address respectful. The suffix =ỉ (first person singular) is one of the first a student of Egyptian masters — attached to nouns for possession, to verbs for subject, it is the primary marker of the self in the language.',
            },
          },
          {
            id: 'S1-w3',
            hieroglyphs: '𓄤𓎡𓄤𓆑𓂋',
            transliteration: 'ỉb=k nfr',
            translation: 'your heart is well / let your heart be content',
            pos: 'Nominal sentence (verbless clause)',
            grammar: {
              form: 'Verbless nominal/adjectival sentence: subject (ỉb=k) + predicate adjective (nfr)',
              breakdown: 'ỉb (heart, F34) + =k (your, 2nd m. sg.) + nfr (well, good, fine, complete)',
              inflection: 'ỉb=k: masculine noun + 2nd m. sg. possessive suffix. nfr: predicate adjective, masculine singular, agreeing with ỉb.',
              notes: 'Middle Egyptian does not require a verb "to be" in adjectival sentences — the subject and predicate adjective are simply juxtaposed: ỉb=k nfr = "your heart good" = "your heart is well." This elegant economy is one of Egyptian grammar\'s most striking features. ỉb (heart) is the centre of Egyptian psychology: the seat of thought, intention, memory, and emotion — roughly what we divide between "mind" and "heart." nfr (good, well, complete) is perhaps the most positive word in the Egyptian language. Telling someone their heart is "nfr" is both a psychological reassurance and a moral compliment. The phrase recurs across Egyptian literature and letters as a conventional opening of comfort.',
            },
          },
          {
            id: 'S1-w4',
            hieroglyphs: '𓇋𓇋𓈖𓏁',
            transliteration: 'ỉỉ.n=n',
            translation: 'we have come / we have arrived',
            pos: 'Verb (sḏm.n=f, 1st common plural)',
            grammar: {
              form: 'sḏm.n=f (narrative past/perfective), 1st common plural',
              breakdown: 'ỉỉ (to come, to arrive — a reduplicated/geminating root) + .n (past marker) + =n (we — 1st common plural suffix)',
              inflection: 'ỉỉ is an irregular verb of motion; its present/habitual stem ỉỉ doubles the root. .n marks the past/perfective. =n is 1st common plural (masculine and feminine).',
              notes: 'ỉỉ (to come) is one of Egyptian\'s most common and most irregular verbs. Its forms differ significantly across tenses — the perfective sḏm.n=f (ỉỉ.n=n, "we came/have arrived") uses the .n suffix as the canonical past marker of Middle Egyptian narrative. This .n suffix is one of the defining features of Middle Egyptian prose: almost every sequential narrative event is marked by it. The 1st plural suffix =n ("we") shifts the emotional register here from individual to collective — the whole expedition has returned safely, not just the sailor.',
            },
          },
          {
            id: 'S1-w5',
            hieroglyphs: '𓂋𓇾𓏤',
            transliteration: 'r tȝ',
            translation: 'to land / to shore / home',
            pos: 'Prepositional phrase',
            grammar: {
              form: 'Preposition r + noun tȝ + logographic stroke',
              breakdown: 'r (to, toward, at) + tȝ (earth, land, ground — N16, the flat land sign + stroke Z1)',
              inflection: 'r: directional preposition indicating arrival/goal. tȝ: masculine noun, written with its logogram (the flat land sign with the stroke marking it as a complete word).',
              notes: 'tȝ (land, earth, ground) is the Egyptian word for the physical earth — as opposed to pt (sky) and nwt (the underground waters). In the phrase ỉỉ.n=n r tȝ, "we have come to land," it evokes the sailor\'s relief at touching ground after the sea voyage. tȝ also appears in the word for Egypt itself: Kmt (the Black Land), and in the dual form tȝwy (the Two Lands — Upper and Lower Egypt). The flat land hieroglyph (N16) visually captures the Egyptian landscape: the flat river valley floor stretching to the desert edge. The logographic stroke (Z1) is the universal Egyptian sign "read me as a complete word, not as my phonetic value."',
            },
          },
        ],
      },

      // ── SECTION 2: The Storm at Sea ────────────────────────────────────────
      {
        id: 'storm',
        label: 'The Storm at Sea',
        referenceLines: 'Lines 20–45',
        note: 'The sailor begins his embedded tale — and plunges immediately into catastrophe. The storm description is one of the most vivid pieces of nature writing in Egyptian literature, using precise measurements and active verbs to convey the terror of open-sea navigation.',
        english: 'A storm broke out while we were on the great sea. A wave of eight cubits came toward us — it struck the mast before me.',
        words: [
          {
            id: 'S2-w1',
            hieroglyphs: '𓈖𓈙𓈖𓇋𓇶',
            transliteration: 'nšny',
            translation: 'storm / gale / whirlwind',
            pos: 'Noun (masculine)',
            grammar: {
              form: 'Masculine noun, singular',
              breakdown: 'Root: nšn (to rage, to storm — a verb describing violent weather or violent emotion)',
              inflection: 'Masculine singular. The determinative 𓇶 (the storm/rain sign, N4) classifies it as a meteorological phenomenon.',
              notes: 'nšny is Egyptian\'s primary word for a violent storm at sea or in the desert — a raging, disorienting meteorological event. Its root nšn (to be furious, to rage) is shared with words for rage, frenzy, and divine wrath — a storm is, etymologically, nature in a state of fury. The determinative (N4, the sky with rain falling) is one of the most vivid hieroglyphs: a sky sign from which lines descend, representing falling rain or hail. Determinatives like this are not read aloud — they simply categorise the word for the reader, a silent semantic tag. The appearance of nšny immediately signals danger; in Egyptian literature, storms are rarely background detail.',
            },
          },
          {
            id: 'S2-w2',
            hieroglyphs: '𓅱𓄿𓆓𓅱𓂋',
            transliteration: 'wȝḏ-wr',
            translation: 'the great green / the sea',
            pos: 'Compound noun (geographical term)',
            grammar: {
              form: 'Compound noun: wȝḏ (green, fresh, vigorous) + wr (great, large)',
              breakdown: 'wȝḏ (the green, the verdant — applied to water, fresh plants, flourishing things) + wr (great, large — from a root meaning greatness)',
              inflection: 'wȝḏ-wr functions as a fixed compound noun — the two elements are not separately inflected in this usage.',
              notes: 'wȝḏ-wr, literally "the great green," is Egyptian\'s poetic name for the sea — specifically the Mediterranean or, in other contexts, the Red Sea. The choice of "green" rather than "blue" reflects Egyptian colour perception: wȝḏ covers both green and blue (and the fresh, vital, growing qualities associated with both). The Nile\'s colour and the sea\'s colour were linguistically grouped. The word wr (great) also appears in pr-ʿȝ (pharaoh — "great house") and in divine epithets. To the Egyptians, the sea was not a familiar highway but a dangerous, semi-mythological space — the wȝḏ-wr was the world\'s edge, beyond which normal geography did not apply. The Shipwrecked Sailor\'s island is precisely "beyond" this boundary.',
            },
          },
          {
            id: 'S2-w3',
            hieroglyphs: '𓈖𓅱𓏏𓇼',
            transliteration: 'nwt',
            translation: 'wave / billow',
            pos: 'Noun (feminine)',
            grammar: {
              form: 'Feminine noun, singular; logogram with water determinative',
              breakdown: 'nwt (wave, billow — the moving water of sea or flood)',
              inflection: 'Feminine, marked by the t ending (X1). The determinative 𓇼 (N21, a stretch of water with waves) classifies it as a body of moving water.',
              notes: 'nwt is Egyptian\'s word for a wave on the open sea — distinguished from flood water (ḥʿpy) and river current (ỉtrw). The determinative (a flat wavy line representing water) is one of the most frequently seen in Egyptian texts — it appears under all water-related words. Egyptian has a rich vocabulary for different bodies and states of water, reflecting the Nile\'s central importance: the river (ỉtrw), the inundation (ḥʿpy), the sea (wȝḏ-wr), a pool (š), a canal (mr), rain (ỉwn or ỉnb). Each word carries different cultural associations. nwt in this context is immediately threatening — a single wave large enough to endanger a ship.',
            },
          },
          {
            id: 'S2-w4',
            hieroglyphs: '𓐀𓏤𓅓𓎛',
            transliteration: '8 mḥ',
            translation: 'eight cubits',
            pos: 'Cardinal number + unit of measurement',
            grammar: {
              form: 'Cardinal numeral (8) + noun mḥ (cubit — the standard Egyptian unit of length)',
              breakdown: '8 (the numeral eight, written with eight strokes) + mḥ (cubit — approximately 52.5 cm, the length from elbow to fingertip)',
              inflection: 'In Egyptian, cardinal numbers typically precede the noun they quantify. mḥ is masculine. No agreement marking is required between number and noun in most instances.',
              notes: 'The cubit (mḥ) was the Egyptian standard unit of length — defined as the distance from the royal elbow to the tip of the middle finger, standardised at approximately 52.5 cm (the "royal cubit" of 7 palms). Eight cubits equals approximately 4.2 metres — a terrifying wave height for an open-water vessel. This precise measurement is characteristic of Egyptian literary realism: rather than vague superlatives ("a very large wave"), the text gives a specific, verifiable dimension, lending the account documentary credibility. Egyptian mathematical texts (like the Rhind Papyrus) show that cubits, palms, and fingers were used with great precision in engineering and surveying. Importing that precision into a literary text is a deliberate rhetorical choice.',
            },
          },
          {
            id: 'S2-w5',
            hieroglyphs: '𓐍𓂋𓈖𓏁𓅱',
            transliteration: 'ḫr.n=n',
            translation: 'we capsized / we fell / we went down',
            pos: 'Verb (sḏm.n=f, 1st common plural)',
            grammar: {
              form: 'sḏm.n=f (narrative past), 1st common plural',
              breakdown: 'ḫr (to fall, to collapse, to capsize, to descend) + .n (past marker) + =n (we — 1st common plural)',
              inflection: 'ḫr.n=n: the standard Middle Egyptian past narrative form. ḫr is a strong verb (its stem does not change).',
              notes: 'ḫr (to fall, to collapse) covers a range of sudden downward motion — a person falling, a building collapsing, a ship capsizing, a tree felling. In the storm context, ḫr.n=n is viscerally effective: the whole crew and ship simply "fell." Egyptian narrative verbs in the sḏm.n=f form have a percussive quality — each .n=n clause is a discrete, completed action in sequence. The .n=n chain (we set out... a storm broke... a wave came... we capsized...) creates narrative momentum that mirrors the speed of the disaster. The lone survivor\'s account then switches from "we" to "I" — ḫr.n=n gives way to ỉwn.kw (I alone remained). That shift from plural to singular is one of the most devastating in Egyptian literature.',
            },
          },
        ],
      },

      // ── SECTION 3: The Lord of the Island ─────────────────────────────────
      {
        id: 'serpent',
        label: 'The Lord of the Island',
        referenceLines: 'Lines 60–90',
        note: 'The sailor, the sole survivor, finds himself on a magical island. Then a vast golden serpent appears — and speaks. The serpent is not a monster but a god, the island\'s divine ruler, whose own grief mirrors the sailor\'s isolation.',
        english: 'Then he came upon me. Behold — a great serpent, thirty cubits long, his beard more than two cubits. His body was overlaid with gold, his eyebrows of true lapis lazuli.',
        words: [
          {
            id: 'S3-w1',
            hieroglyphs: '𓇋𓋴𓏏',
            transliteration: 'ỉsṯ',
            translation: 'then / now / behold',
            pos: 'Discourse particle (temporal / presentative)',
            grammar: {
              form: 'Temporal and presentative particle, invariable',
              breakdown: 'ỉsṯ (untranslatable particle signalling a new scene, a dramatic shift, or a temporal transition)',
              inflection: 'Uninflected particle — takes no suffix pronouns, no gender/number marking.',
              notes: 'ỉsṯ is one of Middle Egyptian\'s most characteristic discourse particles — it signals a shift in scene, a new development, or an important revelation. It can be translated as "then," "now," "meanwhile," or "behold," but none of these captures it exactly. Functionally, ỉsṯ is a narrative spotlight: it draws attention to what immediately follows. Its appearance here is dramatically perfect — after the survivor has described finding himself alone on the island, ỉsṯ pivots the reader\'s attention to the approaching serpent. In Egyptian literary texts, ỉsṯ at a scene break almost always signals something extraordinary is about to happen.',
            },
          },
          {
            id: 'S3-w2',
            hieroglyphs: '𓆙𓅱𓂋𓏤',
            transliteration: 'srf',
            translation: 'serpent / snake',
            pos: 'Noun (masculine)',
            grammar: {
              form: 'Masculine noun, singular, with serpent determinative',
              breakdown: 'srf (serpent — a specific word for a large or divine snake)',
              inflection: 'Masculine singular. The determinative is typically a serpent sign (the cobra or generic snake) classifying the word as a reptile.',
              notes: 'Egyptian has multiple words for snake, reflecting the culture\'s complex relationship with serpents: ḏft (generic snake), ỉmy-wt (the serpent in the funerary context), ȝpf (the chaos serpent Apophis), and srf (here, a large divine serpent). The serpent of the island is described in terms of pure royal magnificence: gold body, lapis eyebrows, 30-cubit length. This is not the threatening chaos-serpent Apophis who must be defeated nightly — it is something closer to a solar deity in animal form. Egyptian theology held multiple, simultaneous serpent archetypes: destroyer, protector, underworld guardian, solar companion. The serpent of the Shipwrecked Sailor belongs to the divine-protective tradition.',
            },
          },
          {
            id: 'S3-w3',
            hieroglyphs: '𓇋𓅱𓇾𓏤𓏥',
            transliteration: 'ỉw pn',
            translation: 'this island',
            pos: 'Noun + demonstrative adjective',
            grammar: {
              form: 'Masculine noun ỉw (island) + masculine near demonstrative pn (this)',
              breakdown: 'ỉw (island — a landmass surrounded by water, with the land determinative) + pn (this, masculine singular — the near demonstrative)',
              inflection: 'ỉw is masculine. pn agrees in gender and number: pn (m. sg.), tn (f. sg.), ipn (m. pl.), iptn (f. pl.).',
              notes: 'Egyptian has a full system of demonstrative adjectives and pronouns: pn/tn (this, near), pf/tf (that, far), pw/tw (the aforementioned). pn (masculine singular near demonstrative) is one of the most frequently encountered words in literary texts. The phrase ỉw pn — "this island" — appears repeatedly throughout the Shipwrecked Sailor as a refrain: it defines the space of the story, the magical place outside normal geography. ỉw (island) is a relatively rare word in Egyptian, reflecting the Nile Valley\'s geography — Egypt itself has no natural islands. The concept of an island is therefore already slightly foreign, slightly otherworldly, in the Egyptian imagination.',
            },
          },
          {
            id: 'S3-w4',
            hieroglyphs: '𓈖𓃀𓅱𓂋',
            transliteration: 'nbw',
            translation: 'gold',
            pos: 'Noun (masculine)',
            grammar: {
              form: 'Masculine noun, often used as a substantive or qualifying description',
              breakdown: 'nbw (gold — the metal, but also radiance, solar perfection, divine materiality)',
              inflection: 'Masculine singular. The -w ending is part of the root, not a plural marker here.',
              notes: 'nbw (gold) is one of the most symbolically loaded materials in Egyptian culture. The gods\' flesh was believed to be gold — the sun\'s radiance made solid. The phrase "his body of gold" (ỉrt=f m nbw) describing the serpent immediately elevates him from creature to deity: only the divine are made of solar material. Gold also carried associations of incorruptibility and eternity — it does not tarnish, corrode, or decay. The choice of gold for the serpent\'s body is therefore a theological statement, not merely an aesthetic one. The complementary image — lapis lazuli (ḫsbḏ) for the eyebrows — is equally charged: lapis, with its deep blue flecked with gold, was the stone of the night sky and of the hair of the gods.',
            },
          },
          {
            id: 'S3-w5',
            hieroglyphs: '𓅓𓎡𓄤𓎡',
            transliteration: 'mk wi',
            translation: 'behold me / here I am / see — it is I',
            pos: 'Presentative particle + dependent pronoun',
            grammar: {
              form: 'Presentative particle mk + dependent (stressed) pronoun wi',
              breakdown: 'mk (behold, see — the presentative particle, 2nd m. sg. form) + wi (me, I — 1st sg. dependent pronoun)',
              inflection: 'mk: the 2nd m. sg. form of the presentative mk/mt/mtn. wi: the 1st singular dependent pronoun, used as the object of a presentative or as the subject in cleft-like emphasis.',
              notes: 'mk is the Egyptian "presentative particle" — it functions like pointing at something and saying "look!" or "here is." It is unique to Egyptian grammar with no exact parallel in other languages. mk is sensitive to the person being addressed: mk (to a single male), mt (to a single female), mtn (to a group). wi is the 1st singular dependent pronoun — "me, I" — used when the pronoun is not attached as a suffix but stands as an independent object or focus. mk wi ("behold me") or the serpent\'s declaration of presence is a divine self-presentation formula. It appears in religious texts when gods announce themselves: the serpent, in uttering mk wi, is performing the speech act of divine epiphany — the same words a god uses when appearing to a worshipper.',
            },
          },
        ],
      },

    ],
  },

};
