---
title: Kübelaufzug
stack: Grundlagen
slug: Problemstellung 20
---

Ein Kübel soll Material aus dem Vorratsbunker auf ein Förderband transportieren. Die Anlage soll im Hand- und Automatikbetrieb fahrbar sein. Für beide Betriebsarten gelten folgende Schaltbedingungen:

1. Die Abschaltung erfolgt mittels Austaster (S2), NOT-AUS (S0) und dem Bimetall (F5).

2. Die Anlage wird mit S1 eingeschaltet. Signalisiert wird der Einzustand mit H1.

Automatikbetrieb:

Der Wahlschalter (S10) steht auf AUTO, H7 zeigt den Automatikbetrieb an.

Der Kübel befindet sich in der oberen Endlage (S12) und der Schieber (S14) ist geschlossen. Nach Betätigung der Starttaste (S3) fährt der Kübel zur unteren Endlage (S11). Ist die untere
Endlage erreicht, öffnet der hydraulische Schieber (Y1) bis der Sensor S13 betätigt wird.

Nach einer Ladezeit von 10 Sekunden schließt der Schieber (Y2). Ist der Schieber geschlossen (S14), fährt der Kübel nach oben. Wenn der Kübel seine obere Endlage (S12) erreicht hat, verweilt er für 5 Sekunden in seiner Lage.

Nach Ablauf dieser Zeit startet der Ladevorgang automatisch neu und wiederholt sich bis der Stopp-Taster

(S4) betätigt wird. Nach Betätigung der Stopp-Taste läuft das Programm noch so lange weiter, bis der Kübel die obere Endlage (S12) erreicht hat.
