/* =========================================================
   BWL Lernapp – Daten & Logik
   Einführung in die BWL · HHN · SoSe 2026
   ========================================================= */

/* ---------------- KARTEIKARTEN ---------------- */
const CARDS = [
  // 1. Grundlagen
  { c: "Grundlagen", q: "Was bedeutet „Wirtschaften\"?", a: "Entscheidung über knappe Ressourcen angesichts „unendlicher\" Bedürfnisse." },
  { c: "Grundlagen", q: "Definiere „Betrieb\".", a: "Planvoll organisierte Wirtschaftseinheit, in der Produktionsfaktoren kombiniert werden, um Güter und Dienstleistungen herzustellen und abzusetzen." },
  { c: "Grundlagen", q: "In welche zwei Ordnungen ist der Betrieb eingebettet?", a: "Wirtschaftsordnung (Marktsystem: Beschaffungs-, Absatz-, Kapitalmarkt) und Gesellschaftsordnung/Staat (Gesetze beachten, Steuern zahlen)." },
  { c: "Grundlagen", q: "Wann ist das finanzielle Gleichgewicht gewahrt bzw. verletzt?", a: "Gewahrt: langfristig Einzahlungen ≥ Auszahlungen. Verletzt: Einzahlungen < Auszahlungen → Zahlungsunfähigkeit → Tätigkeit einstellen." },
  { c: "Grundlagen", q: "Nenne die zwei Hauptgruppen der Betriebe mit je einem Beispiel.", a: "Sachleistungsbetriebe (z. B. Produktionsmittelbetrieb) und Dienstleistungsbetriebe (z. B. Bank)." },
  { c: "Grundlagen", q: "Was besagt das Rationalprinzip? (mit Beispiel)", a: "Ein Wirtschaftssubjekt wählt bei zwei Alternativen die bessere Lösung. Bsp.: Wahl der Maschine mit geringeren Stückkosten bei gleicher Qualität.", t: "🟡" },
  { c: "Grundlagen", q: "Wie berechnet man Ertrag, Aufwand und Erfolg?", a: "Ertrag = Outputmenge · Güterpreis; Aufwand = Inputmenge · Faktorpreis; Erfolg = Ertrag − Aufwand." },

  // 2. Typologie
  { c: "Typologie", q: "Erkläre Maximum-, Minimum- und Optimumprinzip.", a: "Maximum: gegebener Input → größtmöglicher Output. Minimum: gegebener Output → geringstmöglicher Input. Optimum: bestmögliches Verhältnis Output/Input.", t: "🔴" },
  { c: "Typologie", q: "Merksatz Max vs. Min?", a: "Beim Max-Prinzip ist der <b>Input</b> gegeben, beim Min-Prinzip ist der <b>Output</b> gegeben.", t: "🔴" },
  { c: "Typologie", q: "Was sind Stakeholder? Nenne 4 Beispiele.", a: "Anspruchsgruppen mit Ansprüchen ggü. dem Unternehmen. Bsp.: Mitarbeiter, Kunden, Lieferanten, Staat (auch Gewerkschaften, Geschäftsführung)." },
  { c: "Typologie", q: "Nenne die Phasen des Unternehmenslebenszyklus.", a: "Gründung → Wachstum → Reife → Schrumpfung → Krise → Turn-around / Liquidation." },
  { c: "Typologie", q: "Nenne die 4 Leitungsebenen und je einen Funktionsträger.", a: "Obere (Vorstand/GF), Mittlere (Bereichs-/Abteilungsleiter), Untere (Meister/Vorarbeiter), Durchführungsebene (Arbeiter/Sachbearbeiter).", t: "🔴" },
  { c: "Typologie", q: "Nach welchen 4 Kriterien lassen sich Betriebe einteilen?", a: "Art des Betriebsziels, Art der erstellten Leistung, Wirtschaftszweig/Branche, Betriebsgröße." },

  // 3. Ziele
  { c: "Ziele", q: "Nenne die 3 Formalziele (Erfolgsziele).", a: "Produktivität, Wirtschaftlichkeit, Rentabilität und Gewinn." },
  { c: "Ziele", q: "Nenne die 4 Arten von Sachzielen.", a: "Leistungsziele, Finanzziele, Führungs-/Organisationsziele, soziale/ökologische Ziele." },
  { c: "Ziele", q: "Formel Produktivität?", a: "Produktivität = Arbeitsergebnis / Einsatzmenge an Produktionsfaktoren.", t: "🟠" },
  { c: "Ziele", q: "Formel Wirtschaftlichkeit + Interpretation der Werte?", a: "W = Ertrag / Aufwand. =1 weder Gewinn noch Verlust; >1 Gewinn; <1 Verlust.", t: "🟠" },
  { c: "Ziele", q: "Formel Rentabilität?", a: "Rentabilität = (Gewinn / ø eingesetztes Kapital) · 100.", t: "🟠" },
  { c: "Ziele", q: "Erkläre komplementäre, konkurrierende und indifferente Ziele (je Beispiel).", a: "Komplementär: fördern sich (Qualität↑→Zufriedenheit↑). Konkurrierend: Konflikt (Kosten↓↔Qualität↑). Indifferent: kein Einfluss (Schulung↔Lagerstandort).", t: "🟡" },
  { c: "Ziele", q: "Nenne die 3 Rangebenen von Zielen.", a: "Oberziel, Zwischenziel, Unterziel." },

  // 4. F&E
  { c: "F&E", q: "Nenne die 4 Kategorien von Forschungsaktivitäten.", a: "Grundlagenforschung, angewandte Forschung, Entwicklung, Design.", t: "🟡" },
  { c: "F&E", q: "Unterschied Grundlagenforschung vs. Entwicklung (Ziel)?", a: "Grundlagenforschung: Mehrung naturwiss. Kenntnisstand. Entwicklung: Auffinden produktions-/marktfähiger Produkte und Verfahren." },
  { c: "F&E", q: "Defensive vs. offensive Forschung?", a: "Defensiv: Weiterentwicklung zur Verteidigung der Marktposition / Risikovermeidung. Offensiv: Neu-/Weiterentwicklung zur Besetzung neuer Marktsegmente." },
  { c: "F&E", q: "Wie lange schützt ein Patent? Wie lange ein Gebrauchsmuster?", a: "Patent 20 Jahre; Gebrauchsmuster (kleines Patent) 8 Jahre, geringere Kosten." },
  { c: "F&E", q: "Nenne 2 Effekte und 2 Folgen nicht koordinierter Informationen im F&E.", a: "Effekte: Anforderungen kommen zu spät; Lieferanten ohne Beschaffungsstrategie festgelegt. Folgen: viele Konstruktionsänderungen (Qualitäts-/Kosten-/Lieferzeitmängel); Verspätung Markteinführung.", t: "🟡" },
  { c: "F&E", q: "Nenne die 4 Gates des Gate-Modells.", a: "Gate I Rough Concept, Gate II Detail Concept, Gate III Development, Gate IV Market Introduction – nach jeder Phase eine Go/No-Go-Entscheidung." },

  // 5. Beschaffung
  { c: "Beschaffung", q: "Nenne die zwei Hauptaufgabenbereiche der Materialwirtschaft.", a: "Materialbeschaffung (Bedarfsplanung, Bestellmengen, Angebotsvergleich, Bestellung) und Materialverwaltung (Wareneingang, Lagerung, Logistik)." },
  { c: "Beschaffung", q: "Die „4 r\" der Materialbereitstellung?", a: "Richtige Materialart/-qualität, richtige Menge, richtige Zeit, richtiger Ort." },
  { c: "Beschaffung", q: "Was ist das Ziel der Materialwirtschaft?", a: "Minimierung aller Kosten der Beschaffung und Bereitstellung von Materialien → optimale Bestellmenge." },
  { c: "Beschaffung", q: "Vor-/Nachteil Just-in-Time?", a: "Vorteil: Lagerkosten sinken. Nachteil: unmittelbare Beschaffungskosten (Einkaufspreise) steigen." },
  { c: "Beschaffung", q: "Nenne einen typischen Zielkonflikt der Materialwirtschaft (Corona-Beispiel).", a: "Geringe Kapitalbindung/Lagerbestände (JIT) ↔ hohe Lieferbereitschaft/Versorgungssicherheit. Corona: Lieferkettenabriss bei zu geringen Beständen.", t: "🟡" },

  // 6. Produktion & Absatz
  { c: "Produktion", q: "Was koordiniert der Leistungsbereich, was der Finanzbereich?", a: "Leistungsbereich: Güterströme (Produktion + Absatz). Finanzbereich: Zahlungsströme (Ein-/Auszahlungen)." },
  { c: "Produktion", q: "Produktion vs. Absatz (Begriffe)?", a: "Produktion = Leistungserstellung; Absatz = Leistungsverwertung." },
  { c: "Produktion", q: "Woran orientiert sich die Produktionsplanung und warum?", a: "An der Absatzplanung – Absatz ist der Minimumsektor (Engpass)." },
  { c: "Produktion", q: "Strategische, taktische, operative PPP-Aufgabe?", a: "Strategisch: Festlegung der Produkte. Taktisch: Festlegung der Produktfelder. Operativ: Festlegung der Mengen." },
  { c: "Produktion", q: "Wie berechnet man den Stückdeckungsbeitrag?", a: "db = Absatzpreis p − variable Stückkosten k_v. Nur Produkte mit db > 0 produzieren.", t: "🟠" },
  { c: "Produktion", q: "Gewinnformel bei der Produktionsprogrammplanung?", a: "Gewinn = Σ(Stückdeckungsbeitrag · Menge) − Fixkosten.", t: "🟠" },
  { c: "Produktion", q: "Wie geht man bei einem Kapazitätsengpass vor?", a: "Relativen DB (db / Bearbeitungszeit) berechnen → Rangfolge → Kapazität auffüllen bis zum Limit.", t: "🟠" },
  { c: "Produktion", q: "Was ist der Break-Even-Punkt?", a: "Absatzmenge, bei der Erlöse = Gesamtkosten (Gewinn = 0)." },

  // 7. Organisation & Personal
  { c: "Organisation", q: "Wodurch entsteht ein Effizienzdefizit und wie begegnet man ihm?", a: "Nicht-Wissen (→ Koordination) und Nicht-Wollen (→ Motivation)." },
  { c: "Organisation", q: "Ablauf- vs. Aufbauorganisation?", a: "Ablauf-/Prozessorganisation: raumzeitliche Strukturierung der Arbeitsvorgänge. Aufbau-/Strukturorganisation: hierarchische Strukturierung von Aufgaben/Kompetenzen (Organigramm).", t: "🟡" },
  { c: "Organisation", q: "Funktionale vs. divisionale Organisation?", a: "Funktional (verrichtungsorientiert): nach Funktionen (Material/Produktion/Marketing). Divisional (objektorientiert): nach Produkten/Objekten (Produkt A/B/C).", t: "🟡" },
  { c: "Organisation", q: "Leitungsspanne vs. Leitungstiefe?", a: "Leitungsspanne = Anzahl direkt unterstellter Mitarbeiter (Breite). Leitungstiefe = Anzahl Hierarchieebenen. Steil = große Tiefe/kleine Spanne; flach = umgekehrt.", t: "🟡" },
  { c: "Organisation", q: "Einlinien- vs. Mehrliniensystem?", a: "Einlinien: jede Stelle nur ein Vorgesetzter. Mehrlinien: mehrere Weisungsbefugte." },
  { c: "Organisation", q: "Unterschied Linien-, Stabs-, Zentralstelle?", a: "Linienstelle: voll weisungsbefugt (im Instanzenweg). Stabsstelle: ohne Weisungsbefugnis (beratend). Zentralstelle: eingeschränkte Weisungsbefugnis." },
  { c: "Organisation", q: "Warum hat die Personalwirtschaft herausragende Bedeutung?", a: "Personal als Leistungsfaktor, Kostenfaktor und Produktionsfaktor eigener Art." },
  { c: "Organisation", q: "Nenne die 5 Teilpläne der Personalplanung.", a: "Bedarfs-, Beschaffungs-, Abbau-, Einsatz-, Entwicklungsplanung." },
  { c: "Organisation", q: "Formel zur Ermittlung des zeitpunktbezogenen Personalbedarfs?", a: "Soll-Bedarf (t1) − Bestand (t0) + Abgänge − Zugänge = Bedarf/Überhang (t1).", t: "🟠" },

  // 8. Strategie
  { c: "Strategie", q: "Hierarchie: Ziele – Strategien – Maßnahmen (mit Effektivität/Effizienz)?", a: "Ziele = Zielzustand. Strategien = Maßnahmenbündel zur Zielerreichung (Effektivität). Maßnahmen = Aktionen zur Umsetzung (Effizienz)." },
  { c: "Strategie", q: "Definiere Wettbewerbsvorteil.", a: "Ein aus Kundensicht wahrgenommenes Leistungsmerkmal, das die Konkurrenz nicht bietet und für das der Kunde zu zahlen bereit ist.", t: "🟡" },
  { c: "Strategie", q: "Nenne die 4 Phasen des strategischen Zielbildungsprozesses.", a: "Strategieanalyse → Strategieentwicklung → Strategieumsetzung → Strategiekontrolle." },
  { c: "Strategie", q: "Nenne 3 Quellen von Wettbewerbsvorteilen (mit Beispiel).", a: "Objektive Leistungsvorteile (Miele), subjektive Vorteile/Image (Porsche), Preis-Leistung (Aldi). Auch: globale Präsenz (GE), Kompetenzen/Ressourcen (Exxon).", t: "🟡" },
  { c: "Strategie", q: "Nenne die 3 Strategieebenen.", a: "Unternehmensstrategien (Corporate), Geschäftsbereichsstrategien (Business), Funktionalstrategien (Functional)." },
  { c: "Strategie", q: "Nenne Porters 3 generische Strategien mit Beispiel.", a: "Differentiation/Qualitätsführerschaft (Edeka), Cost Leadership/Kostenführerschaft (Aldi, Lidl), Focus/Nische (denn's, Reformhaus).", t: "🔴" },
  { c: "Strategie", q: "Wozu dient eine Perceptual Map und wie geht man vor?", a: "Positionierung des eigenen Unternehmens ggü. Wettbewerbern auf relevanten Merkmalen. Vorgehen: 1) Consideration Set ermitteln 2) wichtige Kaufmerkmale 3) Positionen berechnen 4) Position anpassen/bestätigen.", t: "🔴" },
  { c: "Strategie", q: "Nenne die 4 Felder der Ansoff-Matrix mit Beispiel.", a: "Marktdurchdringung (best. Produkt/best. Markt – E-Klasse), Marktentwicklung (best. Produkt/neuer Markt – China), Produktentwicklung (neues Produkt/best. Markt – B-Klasse), Diversifikation (neues Produkt/neuer Markt – Motorräder).", t: "🔴" },

  // 9. Projektmanagement
  { c: "Projekt", q: "Definiere Projektmanagement (DIN 69901).", a: "Gesamtheit von Führungsaufgaben, -organisation, -techniken und -mitteln für die Abwicklung eines Projekts." },
  { c: "Projekt", q: "Nenne 4 Merkmale eines Projekts.", a: "Zielorientiert, zeitlich/inhaltlich begrenzt, außerhalb der Routine, neuartig (hohe Unsicherheit/Risiko); interdisziplinär." },
  { c: "Projekt", q: "Erkläre das Eisbergmodell im Projektmanagement.", a: "Über Wasser (sichtbar): Sachebene = Qualität, Kosten, Zeit. Unter Wasser (verborgen): Akzeptanz/Beziehungsebene (Einstellung & Verhalten, Promotoren/Opponenten). Change Management setzt unter der Oberfläche an.", t: "🔴" },
  { c: "Projekt", q: "Was sind die 3 Ecken des magischen Dreiecks?", a: "Systemziele (Qualität/Leistung), Kostenziele (geringer Aufwand), Terminziele (geringe Dauer). Extreme: Overengineering vs. Schnellschuss.", t: "🟡" },
  { c: "Projekt", q: "Was ist eine Stakeholderanalyse und ihr Zweck?", a: "Analyse von Beteiligten/Betroffenen; macht deren Ziele/Wünsche/Strategien transparent; Grundlage für Steuerungsmaßnahmen. Darstellung: Stakeholder-Heatmap (Widerstand × Einflussnahme).", t: "🟡" },
  { c: "Projekt", q: "Nenne die 3 häufigsten Gründe, warum Projekte scheitern.", a: "Unklare Anforderungen/Ziele, fehlende Ressourcen bei Projektstart, Politik/Egoismen/Kompetenzstreit." },
  { c: "Projekt", q: "Nenne 4 der 6 Projekt-Erfolgsfaktoren.", a: "Klare Zielsetzung, sich ergänzende Fähigkeiten, Spielregeln für Teamarbeit, gegenseitige Verantwortung, klar definiertes Vorgehen, kleine Teams.", t: "🟡" },
  { c: "Projekt", q: "Vorwärts- vs. Rückwärtsrechnung in der Terminplanung?", a: "Vorwärts: vom Projektbeginn → Endtermin ermitteln. Rückwärts: vom gewünschten Endtermin → Starttermin errechnen.", t: "🟠" },
  { c: "Projekt", q: "Was sind Meilensteine?", a: "Wesentliche Projekt-Zwischenergebnisse; vorab festgelegt, eindeutig, überprüfbar; oft Freigabe der nächsten Phase erst nach Erreichen. Klären den kritischen Pfad." },
];

/* ---------------- ÜBUNGSAUFGABEN ---------------- */
const EXERCISES = [
  { n: 1, tag: "Rechnung", cat: "Rechnung", title: "Wirtschaftlichkeit",
    q: "Die CROP AG leistet 800 Beratungsstunden zu 60 €/Std. Variable Kosten betragen 25 €/Std, die Fixkosten 20.000 €.<br>a) Berechne die Wirtschaftlichkeit. b) Gewinn/Verlust? c) Antwortsatz.",
    s: `<ul>
      <li>Ertrag (Umsatz) = 800 · 60 = <b>48.000 €</b></li>
      <li>Aufwand (Kosten) = 20.000 + (800 · 25) = 20.000 + 20.000 = <b>40.000 €</b></li>
      <li><b>Wirtschaftlichkeit = 48.000 / 40.000 = 1,2</b></li>
      <li>1,2 &gt; 1 → <b>Gewinn</b> (= 48.000 − 40.000 = 8.000 €)</li>
    </ul>
    <p><em>Antwort:</em> Mit einer Wirtschaftlichkeit von 1,2 (&gt; 1) arbeitet die CROP AG wirtschaftlich und erzielt einen Gewinn von 8.000 €.</p>` },

  { n: 2, tag: "Rechnung", cat: "Rechnung", title: "Rentabilität",
    q: "Ein Unternehmen erzielt einen Umsatz von 500.000 €. Dem stehen Kapitalkosten 30.000 €, Personalkosten 250.000 € und sonstige Kosten 120.000 € gegenüber. Finanziert wird mit 100.000 € Eigenkapital und 300.000 € Fremdkapital.<br>Berechne die (Gesamtkapital-)Rentabilität.",
    s: `<ul>
      <li>Gewinn = 500.000 − (30.000 + 250.000 + 120.000) = 500.000 − 400.000 = <b>100.000 €</b></li>
      <li>ø eingesetztes Kapital = 100.000 + 300.000 = <b>400.000 €</b></li>
      <li><b>Rentabilität = (100.000 / 400.000) · 100 = 25 %</b></li>
    </ul>
    <p><em>Antwort:</em> Die Rentabilität beträgt 25 %.</p>` },

  { n: 3, tag: "Rechnung", cat: "Rechnung", title: "Produktivität / Teilproduktivität",
    q: "In einer Schicht produzieren 5 Mitarbeiter in 8 Stunden 2.000 Stück.<br>a) Arbeitsproduktivität (Stück je Arbeitsstunde)? b) Wie ändert sich die Kennzahl, wenn bei gleicher Stückzahl nur noch 4 Mitarbeiter eingesetzt werden?",
    s: `<ul>
      <li>Gesamte Arbeitsstunden = 5 · 8 = 40 Std</li>
      <li>a) Arbeitsproduktivität = 2.000 / 40 = <b>50 Stück/Std</b></li>
      <li>b) Arbeitsstunden = 4 · 8 = 32 Std → 2.000 / 32 = <b>62,5 Stück/Std</b> → Produktivität steigt (Minimumprinzip: gleicher Output, weniger Input).</li>
    </ul>` },

  { n: 4, tag: "Verständnis", cat: "Verständnis", title: "Min/Max-Prinzip zuordnen",
    q: "Ordne jeweils zu (Maximum- oder Minimumprinzip) und begründe:<br>a) „Mit dem vorhandenen Werbebudget von 50.000 € möglichst viele Neukunden gewinnen.\"<br>b) „Genau 10.000 Einheiten herstellen und dabei so wenig Material wie möglich verbrauchen.\"",
    s: `<ul>
      <li>a) <b>Maximumprinzip</b> – Input (50.000 €) ist gegeben, Output (Neukunden) wird maximiert.</li>
      <li>b) <b>Minimumprinzip</b> – Output (10.000 Einheiten) ist gegeben, Input (Material) wird minimiert.</li>
    </ul>
    <div class="note"><em>Merke:</em> Max = Input gegeben; Min = Output gegeben.</div>` },

  { n: 5, tag: "Rechnung", cat: "Rechnung", title: "Produktionsprogrammplanung (Engpass) 🟠🟠",
    q: `Ein Betrieb kann 5 Produkte auf einer Maschine fertigen. Fertigungskapazität = <b>40.000 Zeiteinheiten</b>, Fixkosten = <b>60.000 €</b>.
    <div class="tbl-wrap"><table class="data">
    <tr><th>Produkt</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
    <tr><th>Absatzpreis p (€)</th><td>50</td><td>40</td><td>30</td><td>60</td><td>25</td></tr>
    <tr><th>var. Stückkosten k_v (€)</th><td>30</td><td>45</td><td>18</td><td>35</td><td>28</td></tr>
    <tr><th>max. Absatzmenge</th><td>2.000</td><td>1.000</td><td>3.000</td><td>1.500</td><td>2.000</td></tr>
    <tr><th>Bearbeitungszeit/Stück (ZE)</th><td>8</td><td>5</td><td>4</td><td>10</td><td>6</td></tr>
    </table></div>
    a) Welche Produkte werden überhaupt produziert? b) Lege bei Engpass die Reihenfolge fest und fülle die Kapazität. c) Berechne den Gewinn.`,
    s: `<h4>a) Stückdeckungsbeitrag db = p − k_v</h4>
    <ul>
      <li>A: 50−30 = <b>20</b> ✓ &nbsp; B: 40−45 = <b>−5</b> ✗ &nbsp; C: 30−18 = <b>12</b> ✓</li>
      <li>D: 60−35 = <b>25</b> ✓ &nbsp; E: 25−28 = <b>−3</b> ✗</li>
      <li>→ Produziert werden grundsätzlich <b>A, C, D</b>.</li>
    </ul>
    <h4>b) Engpassrechnung – relativer DB = db / Bearbeitungszeit</h4>
    <ul>
      <li>A: 20/8 = <b>2,5</b> €/ZE &nbsp; C: 12/4 = <b>3,0</b> €/ZE ← höchster &nbsp; D: 25/10 = <b>2,5</b> €/ZE</li>
      <li>Rangfolge: <b>C &gt; A = D</b>. Kapazität (40.000 ZE) auffüllen:</li>
      <li>C: 3.000 · 4 = 12.000 ZE → Rest 28.000</li>
      <li>A: 2.000 · 8 = 16.000 ZE → Rest 12.000</li>
      <li>D: braucht 15.000 ZE, nur 12.000 frei → <b>D nur 1.200 Stück</b> (12.000/10)</li>
    </ul>
    <h4>c) Gewinn = Σ(db · Menge) − Fixkosten</h4>
    <ul>
      <li>C: 12·3.000 = 36.000 &nbsp; A: 20·2.000 = 40.000 &nbsp; D: 25·1.200 = 30.000</li>
      <li>Σ DB = 106.000 € → <b>Gewinn = 106.000 − 60.000 = 46.000 €</b></li>
    </ul>
    <p><em>Antwort:</em> Es werden 3.000 C, 2.000 A und 1.200 D gefertigt; der Gewinn beträgt 46.000 €.</p>
    <div class="note">Hinweis: In der Vorlesungs-Fallstudie reichte die Kapazität für alle db-positiven Produkte (85.000 &lt; 90.000). Hier ist der Engpass bindend – deshalb der relative DB. <b>Beide Fälle üben!</b></div>` },

  { n: 6, tag: "Rechnung", cat: "Rechnung", title: "Personalbedarfsplanung",
    q: "Ein Produktionsbereich plant ein Produktionsvolumen von <b>2,4 Mio Stück</b>. Ein Mitarbeiter schafft <b>4.000 Stück/Jahr</b>. Aktueller Bestand: <b>520</b> Mitarbeiter. Bis Periodenbeginn scheiden voraussichtlich <b>35</b> aus, <b>15</b> Azubis werden übernommen.<br>a) Soll-Personalbedarf? b) Zusätzlicher Bedarf/Überhang?",
    s: `<ul>
      <li>a) Soll-Bedarf = 2.400.000 / 4.000 = <b>600 Mitarbeiter</b></li>
      <li>b) 600 − 520 (Bestand) + 35 (Abgänge) − 15 (Zugänge) = <b>100 Mitarbeiter zusätzlich</b></li>
    </ul>
    <p><em>Antwort:</em> Es besteht ein zusätzlicher Personalbedarf von 100 Mitarbeitern.</p>
    <div class="note"><em>Deckungsmöglichkeiten:</em> innerbetriebliche Umsetzung, Überstunden, Auslagerung, Leiharbeit, Neueinstellungen.</div>` },

  { n: 7, tag: "Rechnung", cat: "Rechnung", title: "Projektterminplanung (vorwärts/rückwärts)",
    q: "Ein Projekt besteht aus 3 aufeinanderfolgenden Arbeitspaketen: AP1 = 2 Wochen, AP2 = 3 Wochen, AP3 = 2 Wochen.<br>a) Vorwärtsrechnung: Projektstart in KW 10 – wann ist das Projekt fertig?<br>b) Rückwärtsrechnung: Endtermin muss Ende KW 20 sein – wann muss spätestens gestartet werden?",
    s: `<ul>
      <li>a) Vorwärts: Start KW10 → AP1 bis KW11 → AP2 bis KW14 → AP3 bis KW16. <b>Fertig Ende KW 16.</b></li>
      <li>b) Rückwärts: Gesamtdauer = 7 Wochen. Ende KW20 → <b>Start spätestens Anfang KW14</b> (20 − 7 + 1).</li>
    </ul>
    <div class="note"><em>Merke:</em> Vorwärts = vom Start zum Ende; Rückwärts = vom Ende zum Start. In der Praxis Mischform + Meilensteinorientierung.</div>` },

  { n: 8, tag: "Verständnis", cat: "Verständnis", title: "Zielbeziehungen",
    q: "Gib für jede Zielbeziehung ein eigenes Praxisbeispiel: a) komplementär b) konkurrierend c) indifferent.",
    s: `<ul>
      <li>a) Komplementär: Höhere Produktqualität ↑ → höhere Kundenzufriedenheit ↑.</li>
      <li>b) Konkurrierend: Minimierung der Materialkosten ↔ Maximierung der Produktqualität.</li>
      <li>c) Indifferent: Verbesserung der IT-Sicherheit ↔ Gestaltung der Kantine.</li>
    </ul>` },

  { n: 9, tag: "Verständnis", cat: "Verständnis", title: "Zielkonflikt Materialwirtschaft (Corona)",
    q: "Erkläre an einem Beispiel, warum „geringe Lagerbestände\" und „hohe Lieferbereitschaft\" im Konflikt stehen. Bezug zu Corona.",
    s: `<p>Geringe Lagerbestände senken Kapitalbindung und Lagerkosten (JIT), machen aber abhängig von pünktlichen Lieferungen. Bei Lieferkettenstörungen (Corona: Werksschließungen, Hafenstaus) führt das zu Produktionsstillstand und fehlender Lieferbereitschaft. → Konflikt „niedrige Kapitalbindung ↔ Versorgungssicherheit\".</p>` },

  { n: 10, tag: "Strategie", cat: "Strategie", title: "Porter zuordnen 🔴",
    q: "Ordne folgende Unternehmen je einer generischen Strategie nach Porter zu und begründe: Lidl · ein Premium-Sportwagenhersteller · ein spezialisierter Bio-Supermarkt.",
    s: `<ul>
      <li>Lidl → <b>Cost Leadership (Kostenführerschaft)</b>: niedrigster Preis für den Kunden.</li>
      <li>Premium-Sportwagen → <b>Differentiation (Qualitätsführerschaft)</b>: Added Value, Image, Qualität.</li>
      <li>Bio-Supermarkt → <b>Focus/Nische</b>: zugeschnitten auf ein spezifisches Segment.</li>
    </ul>` },

  { n: 11, tag: "Strategie", cat: "Strategie", title: "Ansoff-Matrix 🔴",
    q: "Ordne folgende Maßnahmen eines Autoherstellers den Feldern der Ansoff-Matrix zu:<br>a) Mehr Werbung für ein bestehendes Modell im Heimatmarkt<br>b) Markteintritt in Indien mit bestehendem Modell<br>c) Neues E-Auto für bestehende Kunden<br>d) Einstieg in das Pedelec-/Fahrrad-Geschäft",
    s: `<ul>
      <li>a) <b>Marktdurchdringung</b> (best. Produkt / best. Markt)</li>
      <li>b) <b>Marktentwicklung</b> (best. Produkt / neuer Markt)</li>
      <li>c) <b>Produktentwicklung</b> (neues Produkt / best. Markt)</li>
      <li>d) <b>Diversifikation</b> (neues Produkt / neuer Markt)</li>
    </ul>` },

  { n: 12, tag: "Strategie", cat: "Strategie", title: "Eisbergmodell 🔴",
    q: "Erkläre, warum ein technisch perfektes Projekt trotzdem scheitern kann. Nutze das Eisbergmodell.",
    s: `<p>Über der Wasseroberfläche liegt die Sachebene (Qualität, Kosten, Zeit) – sie kann erfüllt sein. Unter Wasser liegt die Beziehungs-/Akzeptanzebene: Ängste, fehlendes Vertrauen, Widerstand der Betroffenen (Opponenten). Wird die Akzeptanz nicht gemanagt (Change Management), blockieren Stakeholder die Umsetzung → das Projekt scheitert trotz technischer Perfektion.</p>` },

  { n: 13, tag: "Verständnis", cat: "Verständnis", title: "Organisationsform wählen",
    q: "Ein Konzern mit 3 sehr unterschiedlichen Produktsparten überlegt zwischen funktionaler und divisionaler Organisation. Was empfiehlst du und warum?",
    s: `<p><b>Divisionale Organisation</b> (objektorientiert, nach Produkten A/B/C): Bei stark unterschiedlichen Produkten ermöglicht sie klare Verantwortung, schnelle markt-/produktspezifische Entscheidungen und Ergebnistransparenz je Sparte. Funktionale Organisation wäre sinnvoll bei einheitlichem, schmalem Leistungsprogramm wegen Spezialisierungs-/Skalenvorteilen.</p>` },

  { n: 14, tag: "Verständnis", cat: "Verständnis", title: "Leitungsspanne/-tiefe",
    q: "Ein Unternehmen mit 16 Ausführungsstellen wird einmal „steil\" und einmal „flach\" organisiert. Beschreibe den Unterschied und je einen Vor-/Nachteil.",
    s: `<ul>
      <li><b>Steil:</b> große Leitungstiefe, kleine Leitungsspanne (z. B. Tiefe 4, Breite 2). Vorteil: enge Führung/Kontrolle. Nachteil: lange Informationswege, viele Hierarchieebenen.</li>
      <li><b>Flach:</b> kleine Tiefe, große Spanne (z. B. Tiefe 2, Breite 4). Vorteil: kurze Wege, mehr Eigenverantwortung. Nachteil: hohe Belastung/Überforderung der Führungskräfte.</li>
    </ul>` },
];

/* ---------------- SPICKZETTEL (aus Klausurzusammenfassung) ---------------- */
const SUMMARY = [
  { title: "🟠 Die Formeln (auswendig!)", body: `
    <div class="formula">Wirtschaftlichkeit = Ertrag ÷ Aufwand &nbsp;|&nbsp; =1 weder/noch · &gt;1 Gewinn · &lt;1 Verlust</div>
    <div class="formula">Rentabilität = (Gewinn ÷ ø eingesetztes Kapital) · 100</div>
    <div class="formula">Produktivität = Arbeitsergebnis ÷ Einsatzmenge</div>
    <div class="formula">Stückdeckungsbeitrag db = Preis p − var. Stückkosten k_v</div>
    <div class="formula">Gewinn (PPP) = Σ(db · Menge) − Fixkosten</div>
    <div class="formula">Personalbedarf = Soll(t1) − Bestand(t0) + Abgänge − Zugänge</div>
    <p><b>Bei Engpass:</b> relativer DB = db ÷ Bearbeitungszeit → Rangfolge → Kapazität auffüllen.</p>
    <p><b>Grundgrößen:</b> Ertrag = Output · Güterpreis · Aufwand = Input · Faktorpreis · Erfolg = Ertrag − Aufwand.</p>` },

  { title: "1. Grundlagen der BWL", body: `
    <p><b>Wirtschaften</b> = Entscheiden über knappe Ressourcen bei „unendlichen\" Bedürfnissen. <b>BWL</b> = Lehre vom Wirtschaften der Betriebe. <b>Management</b> = zielgerichtete Gestaltung/Steuerung/Entwicklung von Unternehmen.</p>
    <p><b>Betrieb</b> = planvoll organisierte Wirtschaftseinheit, kombiniert Produktionsfaktoren. Eingebettet in <b>Wirtschaftsordnung</b> (Beschaffungs-, Absatz-, Kapitalmarkt) und <b>Gesellschaftsordnung/Staat</b>.</p>
    <p><b>Finanzielles Gleichgewicht</b> (Existenzbedingung): gewahrt bei Einzahlungen ≥ Auszahlungen. Sonst → Zahlungsunfähigkeit.</p>
    <h4>🟡 Rationalprinzip</h4>
    <p>Bei Wahl zwischen Alternativen die bessere Lösung wählen. Bsp.: Maschine mit geringeren Stückkosten bei gleicher Qualität.</p>` },

  { title: "2. Typologie des Unternehmens", body: `
    <h4>Ökonomisches Prinzip</h4>
    <ul>
      <li><b>Maximumprinzip:</b> Input gegeben → Output maximieren.</li>
      <li><b>Minimumprinzip:</b> Output gegeben → Input minimieren.</li>
      <li><b>Optimumprinzip:</b> bestes Verhältnis Output/Input.</li>
    </ul>
    <div class="note">Merke: Max → Input gegeben · Min → Output gegeben. (10 L Sprit → max Strecke = Max; 100 km → min Verbrauch = Min.)</div>
    <h4>🔴 Leitungsebenen-Pyramide</h4>
    <ul>
      <li>Obere: Inhaber/Vorstand/GF</li>
      <li>Mittlere: Bereichs-/Hauptabteilungs-/Abteilungsleiter</li>
      <li>Untere: Gruppenleiter/Meister/Vorarbeiter</li>
      <li>Durchführung: Arbeiter/Sachbearbeiter</li>
    </ul>
    <p><b>Lebenszyklus:</b> Gründung → Wachstum → Reife → Schrumpfung → Krise → Turn-around/Liquidation.</p>
    <p><b>4 Einteilungskriterien:</b> Betriebsziel · Art der Leistung · Branche · Betriebsgröße.</p>` },

  { title: "3. Ziele des Unternehmens", body: `
    <p><b>Formalziele (Erfolgsziele):</b> Produktivität · Wirtschaftlichkeit · Rentabilität/Gewinn.</p>
    <p><b>Sachziele:</b> Leistungs- · Finanz- · Führungs-/Organisations- · soziale/ökologische Ziele.</p>
    <h4>🟡 Zielbeziehungen</h4>
    <ul>
      <li><b>Komplementär:</b> ein Ziel fördert das andere (Qualität↑ → Zufriedenheit↑).</li>
      <li><b>Konkurrierend:</b> Zielkonflikt (Kosten↓ ↔ Qualität↑).</li>
      <li><b>Indifferent:</b> kein Einfluss (Schulung ↔ Lagerstandort).</li>
    </ul>
    <p><b>Rangordnung:</b> Ober- / Zwischen- / Unterziel.</p>` },

  { title: "4. Forschung & Entwicklung", body: `
    <p><b>4 Forschungsaktivitäten:</b> Grundlagenforschung (Erkenntnisse) · angewandte Forschung · Entwicklung (markt-/produktionsfähige Produkte) · Design.</p>
    <p><b>Defensiv</b> = Marktposition verteidigen · <b>Offensiv</b> = neue Segmente besetzen.</p>
    <h4>Schutzrechte</h4>
    <ul>
      <li>Patent: <b>20 Jahre</b></li>
      <li>Gebrauchsmuster (kleines Patent): <b>8 Jahre</b>, geringere Kosten</li>
      <li>Geschmacksmuster (Design): 20 Jahre · Marken-/Warenzeichen</li>
    </ul>
    <p><b>Gate-Modell:</b> I Rough Concept → II Detail Concept → III Development → IV Market Introduction. Nach jeder Phase Go/No-Go.</p>` },

  { title: "5. Beschaffung & Material", body: `
    <p><b>Aufgaben:</b> Materialbeschaffung (Bedarf, Bestellmenge, Angebotsvergleich) + Materialverwaltung (Wareneingang, Lagerung, Logistik).</p>
    <p><b>4 r:</b> richtige Materialart/-qualität, Menge, Zeit, Ort. <b>Ziel:</b> Kostenminimierung → optimale Bestellmenge.</p>
    <p><b>Just-in-Time:</b> + Lagerkosten sinken / − Einkaufspreise steigen.</p>
    <h4>🟡 Zielkonflikt (Corona)</h4>
    <p>Geringe Lagerbestände/Kapitalbindung (JIT) ↔ hohe Lieferbereitschaft/Versorgungssicherheit. Corona: Lieferkettenabriss → Produktionsstillstand.</p>` },

  { title: "6. Produktion & Absatz", body: `
    <p><b>Leistungsbereich</b> = Güterströme (Produktion = Leistungserstellung + Absatz = Leistungsverwertung). <b>Finanzbereich</b> = Zahlungsströme.</p>
    <p>Produktionsplanung orientiert sich an der Absatzplanung (<b>Absatz = Minimumsektor</b>).</p>
    <p><b>PPP-Aufgaben:</b> strategisch = Produkte · taktisch = Produktfelder · operativ = Mengen.</p>
    <h4>🟠 Produktionsprogrammplanung – Vorgehen</h4>
    <ul>
      <li>1. db = p − k_v berechnen</li>
      <li>2. nur db &gt; 0 produzieren</li>
      <li>3. bei Engpass: relativer DB = db/Zeit → Rangfolge → Kapazität füllen</li>
      <li>4. Gewinn = Σ(db · Menge) − Fixkosten</li>
    </ul>
    <p><b>Break-Even:</b> Menge, bei der Erlöse = Gesamtkosten (Gewinn = 0).</p>` },

  { title: "7. Organisation & Personal", body: `
    <p><b>Effizienzdefizit:</b> Nicht-Wissen (→ Koordination) + Nicht-Wollen (→ Motivation).</p>
    <h4>🟡 Organisationsformen</h4>
    <ul>
      <li><b>Ablauf-/Prozessorg.:</b> raumzeitliche Strukturierung der Vorgänge.</li>
      <li><b>Aufbau-/Strukturorg.:</b> Hierarchie von Aufgaben/Kompetenzen (Organigramm).</li>
      <li><b>Funktional</b> (verrichtungsorientiert): Material/Produktion/Marketing.</li>
      <li><b>Divisional</b> (objektorientiert): Produkt A/B/C.</li>
    </ul>
    <p><b>Leitungsspanne</b> = Breite (direkt unterstellte MA) · <b>Leitungstiefe</b> = Anzahl Ebenen. Steil = große Tiefe/kleine Spanne; flach = umgekehrt.</p>
    <p><b>Stellen:</b> Linie (voll weisungsbefugt) · Stab (beratend, ohne Weisung) · Zentralstelle (eingeschränkt).</p>
    <h4>🟠 Personalbedarf</h4>
    <p>Soll(t1) − Bestand(t0) + Abgänge − Zugänge = Bedarf/Überhang. Deckung: Umsetzung, Überstunden, Auslagerung, Leiharbeit, Neueinstellung.</p>` },

  { title: "8. Unternehmensstrategie 🔴", body: `
    <p><b>Hierarchie:</b> Ziele (Zielzustand) → Strategien (Maßnahmenbündel = Effektivität) → Maßnahmen (Umsetzung = Effizienz).</p>
    <p><b>Zielbildungsprozess:</b> Analyse → Entwicklung → Umsetzung → Kontrolle.</p>
    <p><b>Wettbewerbsvorteil:</b> vom Kunden wahrgenommenes Merkmal, das Konkurrenz nicht bietet & für das er zahlt.</p>
    <p><b>3 Ebenen:</b> Corporate · Business · Functional.</p>
    <h4>🔴 Porter – generische Strategien</h4>
    <ul>
      <li><b>Differentiation</b> (Qualitätsführerschaft): Edeka</li>
      <li><b>Cost Leadership</b> (Kostenführerschaft): Aldi, Lidl</li>
      <li><b>Focus/Nische</b>: denn's, Reformhaus</li>
    </ul>
    <h4>🔴 Ansoff-Matrix</h4>
    <div class="tbl-wrap"><table class="data">
      <tr><th></th><th>best. Markt</th><th>neuer Markt</th></tr>
      <tr><th>best. Produkt</th><td>Marktdurchdringung (E-Klasse)</td><td>Marktentwicklung (China)</td></tr>
      <tr><th>neues Produkt</th><td>Produktentwicklung (B-Klasse)</td><td>Diversifikation (Motorräder)</td></tr>
    </table></div>
    <h4>🔴 Perceptual Map</h4>
    <p>Positionierung ggü. Wettbewerb. Vorgehen: 1) Consideration Set 2) Kaufmerkmale 3) Positionen berechnen 4) Position anpassen/bestätigen.</p>` },

  { title: "9. Projektmanagement 🟠", body: `
    <p><b>Definition (DIN 69901):</b> Gesamtheit von Führungsaufgaben, -organisation, -techniken, -mitteln zur Projektabwicklung.</p>
    <p><b>Merkmale:</b> zielorientiert · begrenzt · außerhalb Routine · neuartig (Risiko) · interdisziplinär.</p>
    <h4>🔴 Eisbergmodell</h4>
    <p>Über Wasser: Sachebene (Qualität, Kosten, Zeit). Unter Wasser: Akzeptanz/Beziehungsebene (Promotoren/Opponenten). Change Management setzt unter der Oberfläche an.</p>
    <h4>🟡 Magisches Dreieck</h4>
    <p>Systemziele (Qualität) ↔ Kostenziele ↔ Terminziele. Extreme: Overengineering vs. Schnellschuss.</p>
    <p><b>Scheitern (Top 3):</b> unklare Ziele · fehlende Ressourcen · Politik/Egoismen.</p>
    <h4>🟠 Terminplanung</h4>
    <p>Vorwärts: vom Beginn → Endtermin. Rückwärts: vom Endtermin → Start. Meilensteine = überprüfbare Zwischenergebnisse, klären kritischen Pfad.</p>` },

  { title: "✅ Schnell-Wiederholung vor der Klausur", body: `
    <ul>
      <li><b>Rechnungen sicher beherrschen</b> (Rechenweg + Antwortsatz!): Wirtschaftlichkeit, Rentabilität, Produktivität, PPP (DB/Engpass), Personalbedarf, Projekttermin.</li>
      <li><b>Porter / Perceptual Map / Ansoff</b> – auswendig + Beispiele + Verbindungen ziehen.</li>
      <li><b>Erklären & Beispiele:</b> Rationalprinzip, Min/Max/Optimum, Zielbeziehungen, Organisationsformen, Leitungsspanne/-tiefe, Wettbewerbsvorteil, Corona-Zielkonflikt.</li>
      <li><b>Verstehen:</b> Eisbergmodell, magisches Dreieck, Gate-Modell, Stakeholderanalyse, Leitungsebenen-Pyramide.</li>
    </ul>` },
];

/* ---------------- QUIZ (Multiple Choice) ---------------- */
// o = Optionen, k = Index der richtigen Antwort
const QUIZ = [
  { cat: "Ziele", q: "Eine Wirtschaftlichkeit von 1,2 bedeutet …", o: ["Verlust", "Gewinn", "weder Gewinn noch Verlust", "Zahlungsunfähigkeit"], k: 1 },
  { cat: "Typologie", q: "Beim Maximumprinzip ist gegeben …", o: ["der Output", "der Input", "der Gewinn", "die Rentabilität"], k: 1 },
  { cat: "Typologie", q: "„100 km fahren und dabei möglichst wenig Sprit verbrauchen\" ist …", o: ["Maximumprinzip", "Minimumprinzip", "Optimumprinzip", "Rationalprinzip"], k: 1 },
  { cat: "Ziele", q: "Wie berechnet man die Rentabilität?", o: ["Ertrag / Aufwand", "(Gewinn / ø Kapital) · 100", "Ergebnis / Einsatzmenge", "Umsatz − Kosten"], k: 1 },
  { cat: "Ziele", q: "Welche Größe ergibt sich aus Ertrag − Aufwand?", o: ["Rentabilität", "Produktivität", "Erfolg", "Deckungsbeitrag"], k: 2 },
  { cat: "F&E", q: "Wie lange schützt ein Patent eine Erfindung?", o: ["8 Jahre", "10 Jahre", "20 Jahre", "unbegrenzt"], k: 2 },
  { cat: "F&E", q: "Wie lange schützt ein Gebrauchsmuster („kleines Patent\")?", o: ["8 Jahre", "20 Jahre", "5 Jahre", "12 Jahre"], k: 0 },
  { cat: "F&E", q: "Was passiert im Gate-Modell nach jeder Phase?", o: ["eine Preiserhöhung", "eine Go/No-Go-Entscheidung", "ein Patentantrag", "ein Marktstart"], k: 1 },
  { cat: "Produktion", q: "Wie berechnet man den Stückdeckungsbeitrag db?", o: ["Preis + var. Stückkosten", "Preis − var. Stückkosten", "Umsatz − Fixkosten", "Preis − Fixkosten"], k: 1 },
  { cat: "Produktion", q: "Gewinn bei der Produktionsprogrammplanung =", o: ["Σ(db · Menge) − Fixkosten", "Σ Umsatz − var. Kosten", "db · Kapazität", "Erlös − Rentabilität"], k: 0 },
  { cat: "Produktion", q: "Welche Kennzahl entscheidet bei einem Kapazitätsengpass über die Reihenfolge?", o: ["absoluter Stückpreis", "relativer DB (db / Bearbeitungszeit)", "max. Absatzmenge", "Fixkostenanteil"], k: 1 },
  { cat: "Produktion", q: "Die Produktionsplanung orientiert sich an der Absatzplanung, weil Absatz …", o: ["am teuersten ist", "der Minimumsektor (Engpass) ist", "am Markt unwichtig ist", "die Fixkosten senkt"], k: 1 },
  { cat: "Produktion", q: "Der Break-Even-Punkt ist die Menge, bei der …", o: ["der Gewinn maximal ist", "Erlöse = Gesamtkosten (Gewinn = 0)", "die Fixkosten = 0 sind", "der db negativ wird"], k: 1 },
  { cat: "Strategie", q: "Welcher Porter-Strategie entspricht Lidl?", o: ["Differentiation", "Cost Leadership", "Focus/Nische", "Diversifikation"], k: 1 },
  { cat: "Strategie", q: "Ein Premium-Sportwagenhersteller verfolgt nach Porter …", o: ["Cost Leadership", "Differentiation (Qualitätsführerschaft)", "Focus", "Marktdurchdringung"], k: 1 },
  { cat: "Strategie", q: "Markteintritt in China mit einem bestehenden Modell ist in der Ansoff-Matrix …", o: ["Marktdurchdringung", "Marktentwicklung", "Produktentwicklung", "Diversifikation"], k: 1 },
  { cat: "Strategie", q: "Neues Produkt für einen neuen Markt entspricht …", o: ["Diversifikation", "Marktdurchdringung", "Produktentwicklung", "Marktentwicklung"], k: 0 },
  { cat: "Strategie", q: "Wozu dient eine Perceptual Map?", o: ["Personalbedarf ermitteln", "Positionierung ggü. Wettbewerbern", "Fixkosten verteilen", "Termine planen"], k: 1 },
  { cat: "Projekt", q: "Was liegt beim Eisbergmodell ÜBER der Wasseroberfläche?", o: ["Ängste & Vertrauen", "Qualität, Kosten, Zeit", "Promotoren/Opponenten", "Werte & Status"], k: 1 },
  { cat: "Projekt", q: "Die Vorwärtsrechnung in der Terminplanung …", o: ["ermittelt den Start aus dem Endtermin", "ermittelt den Endtermin vom Start aus", "berechnet die Kosten", "bewertet Stakeholder"], k: 1 },
  { cat: "Projekt", q: "Welches sind die 3 Ecken des magischen Dreiecks?", o: ["Preis, Menge, Zeit", "Qualität, Kosten, Termine", "Personal, Material, Kapital", "Markt, Produkt, Kunde"], k: 1 },
  { cat: "Beschaffung", q: "Was ist ein typischer Nachteil von Just-in-Time?", o: ["hohe Lagerkosten", "steigende Einkaufspreise", "geringe Flexibilität", "hohe Kapitalbindung"], k: 1 },
  { cat: "Beschaffung", q: "Welcher Zielkonflikt zeigte sich besonders während Corona?", o: ["Qualität ↔ Image", "niedrige Kapitalbindung ↔ Lieferbereitschaft", "Personal ↔ Kapital", "Patent ↔ Marke"], k: 1 },
  { cat: "Organisation", q: "Die funktionale Organisation gliedert nach …", o: ["Produkten/Objekten", "Funktionen/Verrichtungen", "Regionen", "Kundengruppen"], k: 1 },
  { cat: "Organisation", q: "Was beschreibt die Leitungsspanne?", o: ["Anzahl der Hierarchieebenen", "Anzahl direkt unterstellter Mitarbeiter", "Anzahl der Stabsstellen", "Länge des Instanzenwegs"], k: 1 },
  { cat: "Organisation", q: "Eine Stabsstelle hat …", o: ["volle Weisungsbefugnis", "keine Weisungsbefugnis (beratend)", "eingeschränkte Weisungsbefugnis", "mehrere Vorgesetzte"], k: 1 },
  { cat: "Organisation", q: "Personalbedarf = Soll − Bestand + … − …", o: ["Zugänge … Abgänge", "Abgänge … Zugänge", "Überstunden … Leiharbeit", "Fixkosten … Umsatz"], k: 1 },
  { cat: "Organisation", q: "Ein Effizienzdefizit durch „Nicht-Wissen\" begegnet man mit …", o: ["Motivation", "Koordination", "Sanktionen", "Diversifikation"], k: 1 },
  { cat: "Grundlagen", q: "Wann ist das finanzielle Gleichgewicht gewahrt?", o: ["Einzahlungen ≥ Auszahlungen", "Gewinn > 0", "Umsatz > Kosten", "Eigenkapital > Fremdkapital"], k: 0 },
  { cat: "Ziele", q: "Welche drei Größen zählen zu den Formalzielen?", o: ["Markt-, Produkt-, Finanzziele", "Produktivität, Wirtschaftlichkeit, Rentabilität", "Qualität, Kosten, Zeit", "Liquidität, Umsatz, Image"], k: 1 },
];

/* ---------------- MINI-SELBSTTEST ---------------- */
const SELFTEST = [
  { n: 1, q: "Wirtschaftlichkeit = ? und Bedeutung von &gt;1 / =1 / &lt;1?", a: "W = Ertrag / Aufwand. &gt;1 → Gewinn · =1 → weder Gewinn noch Verlust · &lt;1 → Verlust." },
  { n: 2, q: "Max- vs. Min-Prinzip – was ist jeweils gegeben?", a: "Max: Input gegeben → Output maximieren. Min: Output gegeben → Input minimieren." },
  { n: 3, q: "Gewinnformel Produktionsprogrammplanung?", a: "Gewinn = Σ(Stückdeckungsbeitrag · Menge) − Fixkosten." },
  { n: 4, q: "Personalbedarf-Formel (4 Zeilen)?", a: "Soll-Bedarf (t1) − Bestand (t0) + Abgänge − Zugänge = Bedarf/Überhang (t1)." },
  { n: 5, q: "Porters 3 Strategien + je 1 Beispiel?", a: "Differentiation/Qualitätsführerschaft (Edeka), Cost Leadership/Kostenführerschaft (Aldi, Lidl), Focus/Nische (denn's)." },
  { n: 6, q: "Ansoff: 4 Felder?", a: "Marktdurchdringung, Marktentwicklung, Produktentwicklung, Diversifikation." },
  { n: 7, q: "Eisbergmodell: was liegt über/unter Wasser?", a: "Über Wasser: Sachebene (Qualität, Kosten, Zeit). Unter Wasser: Akzeptanz/Beziehungsebene (Promotoren/Opponenten)." },
  { n: 8, q: "Vorwärts- vs. Rückwärtsrechnung?", a: "Vorwärts: vom Start → Endtermin. Rückwärts: vom Endtermin → Starttermin." },
];

/* =========================================================
   LOGIK
   ========================================================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const STORE = "bwl-lernapp-v1";

const state = {
  filter: "Alle",
  order: CARDS.map((_, i) => i),
  idx: 0,
  known: {},   // index -> true/false
};

const quizState = {
  len: 10,
  questions: [],
  current: 0,
  score: 0,
  answered: false,
  bestByLen: {},
};

// load persisted progress + theme
(function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || "{}");
    if (saved.known) state.known = saved.known;
    if (saved.theme) document.documentElement.setAttribute("data-theme", saved.theme);
    if (saved.quizBestByLen) quizState.bestByLen = saved.quizBestByLen;
    else if (typeof saved.quizBest === "number") quizState.bestByLen[quizState.len] = saved.quizBest;
    updateThemeIcon();
    updateQuizBestText();
  } catch (e) { /* ignore */ }
})();

function persist() {
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  localStorage.setItem(STORE, JSON.stringify({ known: state.known, theme, quizBestByLen: quizState.bestByLen }));
}

/* ---------- Tabs ---------- */
$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((t) => t.classList.remove("active"));
    $$(".view").forEach((v) => v.classList.remove("active"));
    tab.classList.add("active");
    $("#view-" + tab.dataset.view).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ---------- Theme ---------- */
function updateThemeIcon() {
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  $("#themeToggle").textContent = dark ? "☀️" : "🌙";
}
$("#themeToggle").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
  updateThemeIcon();
  persist();
});

/* ---------- Karteikarten ---------- */
const categories = ["Alle", ...Array.from(new Set(CARDS.map((c) => c.c)))];

function buildCardFilters() {
  const wrap = $("#cardFilters");
  wrap.innerHTML = "";
  categories.forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip" + (cat === state.filter ? " active" : "");
    b.textContent = cat;
    b.addEventListener("click", () => {
      state.filter = cat;
      rebuildOrder();
      buildCardFilters();
    });
    wrap.appendChild(b);
  });
}

function rebuildOrder() {
  state.order = CARDS
    .map((_, i) => i)
    .filter((i) => state.filter === "Alle" || CARDS[i].c === state.filter);
  state.idx = 0;
  renderCard();
}

function renderCard() {
  const total = state.order.length;
  const card = $("#flashcard");
  card.classList.remove("flipped");

  if (total === 0) {
    $("#cardQuestion").textContent = "Keine Karten in dieser Kategorie.";
    $("#cardAnswer").textContent = "";
    $("#cardBadge").textContent = "";
    $("#cardCounter").textContent = "0 / 0";
    $("#cardProgressFill").style.width = "0%";
    return;
  }
  const ci = state.order[state.idx];
  const c = CARDS[ci];
  $("#cardQuestion").innerHTML = c.q;
  $("#cardAnswer").innerHTML = c.a;
  $("#cardBadge").textContent = (c.t ? c.t + " " : "") + c.c;
  $("#cardCounter").textContent = `${state.idx + 1} / ${total}`;
  $("#cardProgressFill").style.width = ((state.idx + 1) / total * 100) + "%";
  renderStats();
}

function renderStats() {
  const vals = Object.values(state.known);
  const yes = vals.filter((v) => v === true).length;
  const no = vals.filter((v) => v === false).length;
  $("#cardStats").innerHTML = `Bewertet: <b>${yes} gewusst</b> · <i>${no} nochmal</i> · von ${CARDS.length} Karten`;
}

function nextCard() {
  if (state.order.length === 0) return;
  state.idx = (state.idx + 1) % state.order.length;
  renderCard();
}
function prevCard() {
  if (state.order.length === 0) return;
  state.idx = (state.idx - 1 + state.order.length) % state.order.length;
  renderCard();
}

$("#flashcard").addEventListener("click", () => $("#flashcard").classList.toggle("flipped"));
$("#flashcard").addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") { e.preventDefault(); $("#flashcard").classList.toggle("flipped"); }
});
$("#nextCard").addEventListener("click", nextCard);
$("#prevCard").addEventListener("click", prevCard);
$("#knowYes").addEventListener("click", () => mark(true));
$("#knowNo").addEventListener("click", () => mark(false));

function mark(val) {
  if (state.order.length === 0) return;
  const ci = state.order[state.idx];
  state.known[ci] = val;
  persist();
  renderStats();
  setTimeout(nextCard, 180);
}

$("#shuffleBtn").addEventListener("click", () => {
  for (let i = state.order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
  state.idx = 0;
  renderCard();
});

$("#resetProgress").addEventListener("click", () => {
  state.known = {};
  persist();
  renderStats();
});

// keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!$("#view-cards").classList.contains("active")) return;
  if (e.target.tagName === "INPUT") return;
  if (e.key === "ArrowRight") nextCard();
  if (e.key === "ArrowLeft") prevCard();
});

/* ---------- Übungsaufgaben ---------- */
const exCats = ["Alle", "Rechnung", "Verständnis", "Strategie"];
let exFilter = "Alle";

function buildExFilters() {
  const wrap = $("#exFilters");
  wrap.innerHTML = "";
  exCats.forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip" + (cat === exFilter ? " active" : "");
    b.textContent = cat === "Alle" ? "Alle Aufgaben" : cat;
    b.addEventListener("click", () => { exFilter = cat; buildExFilters(); renderExercises(); });
    wrap.appendChild(b);
  });
}

function renderExercises() {
  const list = $("#exerciseList");
  list.innerHTML = "";
  const tagClass = { Rechnung: "tag-rechnung", Verständnis: "tag-verstaendnis", Strategie: "tag-strategie" };
  EXERCISES.filter((ex) => exFilter === "Alle" || ex.cat === exFilter).forEach((ex) => {
    const card = document.createElement("div");
    card.className = "ex-card";
    card.innerHTML = `
      <div class="ex-head">
        <div class="ex-meta">
          <span class="ex-num">Aufgabe ${ex.n}</span>
          <span class="ex-tag ${tagClass[ex.cat]}">${ex.tag}</span>
        </div>
        <div class="ex-title">${ex.title}</div>
      </div>
      <div class="ex-question">${ex.q}</div>
      <button class="ex-toggle">💡 Lösung anzeigen</button>
      <div class="ex-solution">${ex.s}</div>`;
    const btn = card.querySelector(".ex-toggle");
    const sol = card.querySelector(".ex-solution");
    btn.addEventListener("click", () => {
      const open = sol.classList.toggle("open");
      btn.textContent = open ? "🙈 Lösung verbergen" : "💡 Lösung anzeigen";
    });
    list.appendChild(card);
  });
}

/* ---------- Spickzettel ---------- */
function renderSummary() {
  const list = $("#summaryList");
  list.innerHTML = "";
  SUMMARY.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "sum-item" + (i === 0 ? " open" : "");
    el.innerHTML = `
      <button class="sum-head">${item.title}<span class="arrow">▶</span></button>
      <div class="sum-body">${item.body}</div>`;
    el.querySelector(".sum-head").addEventListener("click", () => el.classList.toggle("open"));
    list.appendChild(el);
  });
}

/* ---------- Quiz ---------- */
function buildQuizLengthPicker() {
  const wrap = $("#quizLenPicker");
  wrap.innerHTML = "";
  [5, 10, 15, 20].forEach((len) => {
    const b = document.createElement("button");
    b.className = "chip" + (len === quizState.len ? " active" : "");
    b.textContent = `${len} Fragen`;
    b.addEventListener("click", () => {
      quizState.len = len;
      buildQuizLengthPicker();
      updateQuizBestText();
    });
    wrap.appendChild(b);
  });
}

function updateQuizBestText() {
  const el = $("#quizBest");
  if (!el) return;
  const best = quizState.bestByLen[quizState.len] || 0;
  el.innerHTML = best > 0
    ? `Bester Stand: <b>${best}/${quizState.len}</b>`
    : `Bester Stand: <b>noch nicht gespielt</b>`;
}

function showQuizView(view) {
  $("#quizStart").hidden = view !== "start";
  $("#quizPlay").hidden = view !== "play";
  $("#quizResult").hidden = view !== "result";
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  if (!q) return;

  $("#quizQuestion").textContent = q.q;
  $("#quizCat").textContent = q.cat;
  $("#quizCounter").textContent = `${quizState.current + 1} / ${quizState.questions.length}`;
  $("#quizProgressFill").style.width = `${((quizState.current + 1) / quizState.questions.length) * 100}%`;
  $("#quizScore").textContent = `Punkte: ${quizState.score}`;
  $("#quizFeedback").textContent = "";
  $("#quizFeedback").className = "quiz-feedback";
  $("#quizNextBtn").hidden = true;

  const options = $("#quizOptions");
  options.innerHTML = "";
  q.o.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.innerHTML = `<span class="opt-key">${String.fromCharCode(65 + idx)}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => answerQuizQuestion(idx));
    options.appendChild(btn);
  });
  quizState.answered = false;
}

function answerQuizQuestion(selectedIndex) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const buttons = $$("#quizOptions .quiz-opt");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.k) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== q.k) btn.classList.add("wrong");
  });

  if (selectedIndex === q.k) {
    quizState.score += 1;
    $("#quizScore").textContent = `Punkte: ${quizState.score}`;
    $("#quizFeedback").textContent = "Richtig!";
    $("#quizFeedback").classList.add("ok");
  } else {
    $("#quizFeedback").textContent = `Nicht ganz – richtig wäre: ${q.o[q.k]}`;
    $("#quizFeedback").classList.add("no");
  }

  $("#quizNextBtn").hidden = false;
}

function startQuiz() {
  const pool = shuffle(QUIZ);
  quizState.questions = pool.slice(0, quizState.len);
  quizState.current = 0;
  quizState.score = 0;
  quizState.answered = false;
  showQuizView("play");
  renderQuizQuestion();
}

function finishQuiz() {
  const total = quizState.questions.length;
  const percent = total ? Math.round((quizState.score / total) * 100) : 0;
  const best = quizState.bestByLen[quizState.len] || 0;
  quizState.bestByLen[quizState.len] = Math.max(best, quizState.score);
  persist();
  updateQuizBestText();

  $("#quizResultEmoji").textContent = percent === 100 ? "🏆" : percent >= 70 ? "🎉" : "💪";
  $("#quizResultTitle").textContent = percent === 100 ? "Perfekt!" : percent >= 70 ? "Gut gemacht!" : "Übung macht den Meister!";
  $("#quizResultScore").textContent = `Du hast ${quizState.score} von ${total} Fragen richtig beantwortet.`;
  $("#quizPercent").textContent = `${percent}%`;
  $("#quizRing").style.strokeDashoffset = `${327 - (327 * percent / 100)}`;
  showQuizView("result");
}

$("#quizStartBtn").addEventListener("click", startQuiz);
$("#quizNextBtn").addEventListener("click", () => {
  if (quizState.current < quizState.questions.length - 1) {
    quizState.current += 1;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
});
$("#quizRestartBtn").addEventListener("click", startQuiz);

/* ---------- Init ---------- */
buildCardFilters();
rebuildOrder();
buildExFilters();
renderExercises();
renderSummary();
buildQuizLengthPicker();
updateQuizBestText();
showQuizView("start");
