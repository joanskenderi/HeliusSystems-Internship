razor eshte html, css / bootstrap ku mund te shkruajme dhe kod c# aty.
blazor eshte tool i ri (razor i evoluar, jo bootstrap 3 por 4) ka feature te reja ku i ben gjerat me lehte se ne razor

mvc - mdodel view controller

view eshte front end

modeli eshte sinonim per klasen
modeli permban dhe sql

controller lidh view me model

ka shume ORM(Object-relational mapping) njera eshte Entity Framework. Java ka hibernate
Ne perdorim CSLA e cila eshte e ngjashme per Entity Frameworkun.

filet e projektit:
properties -> asmb info tregon konfigurime te asemblit dhe ne fund eshte versioni i programit.
references -> jane referencat qe shtohen oby defaulkt kur zgjodhem template mvc ku bie ne sy .json qe ofron mundesine e perdorimit te json
system.web mundson perdorimin e web app dhe nqs shtojme paketa te reja do shtohet tek referencat, e njejta gje kur referojme dhe file te jashtem.
app data -> eshte bosh por perdoret per ruajten e dokumentave qe lex ose shkruhen si psh excel.
app start -> ka 3 file konfigurime: bundel config qe eshte file i par. aty regjistrohen skripte css qe do ekzekutohen dhe duam ti kemi ne gjithe appin.
filters jane copa kodi te cilat ekzekutohen ne mom qe duam te bejme nje request. pra ne cdo request qe bejme te kontrollojme dicka.
route eshte menyra si organizohen filet.
content -> mban css bootstrap ose librari te ndryshme te cilat i inkludon
controller -> jane klas ne c# dhe kane default home. kontroller kane emrin dhe fjalen controller nga mbrapa. heritojne nga nje klase kontroller pra merr vecorite e klases kontroller
fonts -> fonts te includuar from default
models -> krijohen klasat tek ky file
scripts -> vendos scriptet qe do perdoren tek filet qe kemi
views ->
web config -> mban konfigurime si psh lidhja me databazen (connection string), versioni i paketave etj
vlera qe sdo ti mbash ne db per accesim eme te shpejt i mban ne web csg

global asax -> middle ware qe behen run kur ben start appin. pra ekzekutohen disa metoda para se te behet run appi
packages.config -> mban versione dhe cdo tool qe includojm do shtohet si package

controller -> standardi eshte nje emer dhe fjala standard. Controller inheriton nga nje base class pra nga controller

CDO FUSHE QE KEMI DUHET TE JETE PJESE E HTML, cdo fushe cdo input etj etj.

Detyre shpie->
vendos debugger ne post shif ca kthen klasa si te dhena dhe provoni te hiqni dicka (do vije null). KJO BEHET PER TE PARE PROCESIN E BINDING

DETYRA -> KUR TE KALOSH NE INDEX SHFAQ MSG SUCCESSI SI PSH "E MODIFIKUAT ME SUKSES STUDENTIN". ATA QE DO KENE KOHE TE BEJNE DHE SHTIMIN E STUDENTIT TE RI(KY ISHTE EDITIMI).
