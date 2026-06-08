#!/usr/bin/env python3
"""
Generate js/gardiner-unicode.js — the Gardiner → Unicode sign map.

Every codepoint in the Unicode Egyptian Hieroglyphs block (U+13000–U+1342F)
is named after its Gardiner code, e.g. U+13000 = "EGYPTIAN HIEROGLYPH A001".
We read those names from Python's Unicode database, so the resulting map is
accurate by construction — no hand-mapping, no transcription errors.

Usage:  python3 tools/gen-signmap.py
"""
import unicodedata, re, os

def build():
    base = {}
    for cp in range(0x13000, 0x13460):
        try:
            ch = chr(cp); name = unicodedata.name(ch)
        except ValueError:
            continue
        if not name.startswith("EGYPTIAN HIEROGLYPH "):
            continue
        rem = name.replace("EGYPTIAN HIEROGLYPH ", "")
        m = re.match(r'^([A-Z]+)(\d+)([A-Z]*)$', rem)
        if not m:
            continue
        cat, num, var = m.group(1), m.group(2), m.group(3)
        if cat == "AA":
            cat = "Aa"
        base[f"{cat}{int(num)}{var}"] = ch
    return base

# Common Manuel de Codage phonetic mnemonics → Gardiner code.
ALIASES = {
    "nfr":"F35","Htp":"R4","htp":"R4","ra":"N5","Ra":"N5","anx":"S34",
    "wAs":"S40","nTr":"R8","mAa":"Aa11","mdw":"S43","jb":"F34","ib":"F34",
    "kA":"D28","ka":"D28","Dd":"R11","dd":"R11","wr":"G36","aA":"O29",
    "tA":"N16","pt":"N1","mr":"N36","z":"O34","s":"S29","f":"I9","m":"G17",
    "n":"N35","r":"D21","h":"O4","H":"V28","x":"Aa1","X":"F32","S":"N37",
    "q":"N29","k":"V31","g":"W11","t":"X1","T":"V13","d":"D46","D":"I10",
    "A":"G1","a":"D36","w":"G43","b":"D58","p":"Q3","i":"M17","y":"Z4",
    "j":"M17","swt":"M23","bit":"L2","Sps":"A50","nbw":"S12","wsr":"F12",
}

def sortkey(k):
    m = re.match(r'^([A-Za-z]+)(\d+)([A-Z]*)$', k)
    return (m.group(1), int(m.group(2)), m.group(3))

def main():
    base = build()
    here = os.path.dirname(os.path.abspath(__file__))
    out = os.path.join(here, "..", "js", "gardiner-unicode.js")
    L = []
    L.append("// ====================================================================")
    L.append("// GARDINER → UNICODE SIGN MAP")
    L.append("// Auto-generated from the Unicode Character Database (unicodedata).")
    L.append("// Each Egyptian Hieroglyph codepoint is named after its Gardiner code")
    L.append("// (U+13000 = \"EGYPTIAN HIEROGLYPH A001\"), so this map is accurate by")
    L.append(f"// construction. {len(base)} signs covering Gardiner's Sign List.")
    L.append("// Do not edit by hand — regenerate with tools/gen-signmap.py")
    L.append("// ====================================================================")
    L.append("")
    L.append("const GARDINER = {")
    for k in sorted(base.keys(), key=sortkey):
        L.append(f'  "{k}": "{base[k]}",')
    L.append("};")
    L.append("")
    L.append("// Manuel de Codage phonetic mnemonics → Gardiner code")
    L.append("const MDC_ALIASES = {")
    for k in sorted(ALIASES.keys()):
        L.append(f'  "{k}": "{ALIASES[k]}",')
    L.append("};")
    L.append("")
    L.append("// Resolve a token (Gardiner code or MdC mnemonic) to its glyph.")
    L.append("function signToGlyph(token) {")
    L.append("  if (GARDINER[token]) return GARDINER[token];")
    L.append("  if (MDC_ALIASES[token] && GARDINER[MDC_ALIASES[token]]) return GARDINER[MDC_ALIASES[token]];")
    L.append("  return null;")
    L.append("}")
    L.append("")
    L.append("if (typeof module !== 'undefined') module.exports = { GARDINER, MDC_ALIASES, signToGlyph };")
    L.append("")
    open(out, "w").write("\n".join(L))
    print(f"Wrote {os.path.normpath(out)} — {len(base)} signs, {len(ALIASES)} aliases")

if __name__ == "__main__":
    main()
