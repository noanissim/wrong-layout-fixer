import { enToHe, heToEn } from './mappings'

const HEBREW_REGEX = /[֐-׿]/
const ENGLISH_REGEX = /[A-Za-z]/

export const countHebrew = (s: string) => (s.match(/[֐-׿]/g) || []).length
export const countEnglish = (s: string) => (s.match(/[A-Za-z]/g) || []).length

export function convertEnToHe(text: string): string {
   let out = ''
   for (const ch of text) {
      const low = ch.toLowerCase()
      out += enToHe[low] ?? ch
   }
   return out
}

export function convertHeToEn(text: string): string {
   let out = ''
   for (const ch of text) out += heToEn[ch] ?? ch
   return out
}

// Mixed-mode: convert by runs (tokens)
// - English letter runs → Hebrew (keyboard mapping)
// - Hebrew letter runs → English ONLY if every mapped char is a–z (avoid mapping to punctuation like ',' for 'ת')
export function convertMixed(text: string): string {
   // Split by whitespace but keep separators
   const parts = text.split(/(\s+)/)
   const convertTokenByMajority = (token: string): string => {
      let he = 0,
         en = 0
      for (const ch of token) {
         if (HEBREW_REGEX.test(ch)) he++
         else if (ENGLISH_REGEX.test(ch)) en++
      }
      if (he === 0 && en === 0) return token // no letters → keep

      // Choose mapping by majority script in the token
      if (en >= he) {
         // Treat the whole token as English-typed → map to Hebrew
         let out = ''
         for (const ch of token) {
            const low = ch.toLowerCase()
            out += enToHe[low] ?? ch // includes punctuation like , . ; / '
         }
         return out
      } else {
         // Treat the whole token as Hebrew-typed → map to English
         let out = ''
         for (const ch of token) {
            // heToEn already contains reverse entries for ASCII outputs like '\''
            out += heToEn[ch] ?? ch
         }
         return out
      }
   }

   return parts.map(convertTokenByMajority).join('')
}

export type Direction = 'auto' | 'en→he' | 'he→en'

export function autoConvert(text: string): { value: string; direction: Direction | 'mixed' | 'und' } {
   const he = countHebrew(text)
   const en = countEnglish(text)
   if (en > 0 && he > 0) return { value: convertMixed(text), direction: 'mixed' }
   if (en > he) return { value: convertEnToHe(text), direction: 'en→he' }
   if (he > en) return { value: convertHeToEn(text), direction: 'he→en' }
   return { value: convertEnToHe(text), direction: 'en→he' }
}
