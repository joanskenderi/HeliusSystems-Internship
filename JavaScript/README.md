# JavaScript

JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.

---

var -> ben te mundur riinicializimin e nje variabli. \
let -> nuk lejon riinicializim (ES6). \
const -> vlere e cila nuk do te ndryshohet (ES6).

// var global dhe lokal

Ne JavaScript objektet ekzistojne, por klasat jo. \
Ne rastin e switch, vlera qe vendoset te case eshte vlera qe do te kete variabli nqs i perket asaj case. \

== krahason vleren. \
=== krahason vleren dhe typen. \

Funksionet ne JavaScript jane methods ne gjuhet e tjera (Java, C#, etj)

// funx te string: concat / includes / indexof /split /slice

Funksionet qe perdoren mbi arrays:
.push() -> shton nje element ne fund te array.
.pop() -> heq elementin e fundit nga array.
.shift() -> largon elementin e pare te array.
.join() -> bashkon rendimentet e nje array ne nje string.
.reverse() -> ben reverse arrayn.
.forEach() -> property e arrays por nk eshte funx tipik por ka menyr tj te te shkr te tij. prek funx.
emriArrayt.forEach((el, idX) => {}) ku el stands per elementin dhe idX per index
.includes() -> merr nje parameter dhe shef a e perfshin ky array kte vlere dhe kthen rezultat nje boolean

nqs ndryhojme vleren e var brenda funx ajo do jete e ndryshme dhe jashtee funx
nqs nuk perdorim var let ose const brenda nje funx ath ai variabel do te deklarohet si global

// TODO: this. Keyword
// emriObj ["mbiemri"] eshte njesoj si emriObj.mbiemri
// menyra me kriju obj
