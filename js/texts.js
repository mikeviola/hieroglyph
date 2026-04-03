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

    ],
  },
};
