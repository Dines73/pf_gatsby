---
title: Rolltreppe
stack: Problemstellung 13
slug: Grundlagen
---

Eine Rolltreppe wird über einen Taster „Betriebsbereit“ in den Bereitschaftszustand versetzt.
Der Anlauf erfolgt, wenn die Lichtschranke von Personen unterbrochen wird
(Unterbrechung = 1-Signal). Der Antrieb soll dann jeweils 20 Sekunden eingeschaltet bleiben. Dabei muss berücksichtigt werden: wenn mehrere Personen hintereinander die Rolltreppe benutzen, muss auch die letzte Person die vollen 20 Sekunden Laufzeit erhalten.

Bei Betätigung eines Austasters wird der Bereitschaftszustand verlassen; dabei muss gegebenenfalls der aktuelle Betrieb beendet werden. Bei Betätigung des Sofortaustasters oder bei Ansprechen des Thermofühlers des Antriebsmotors muss die Anlage sofort angehalten werden und über Blinktakt (4Hz) eine Störmeldung ausgegeben werden.

Gemeldet werden:
„Betriebsbereit“
„Aus“
„Störung“
