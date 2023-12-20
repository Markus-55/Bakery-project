# Datum: 2023-12-20

## Namn: Markus Bielaszka
**Idag har jag** gjort så att åren, månaden och datumet vissas dynamiskt i kalendern.

**Ett problem jag har** är att passa ihop datumet under correct dag.

**Jag behöver hjälp med** behöver ingen hjälp än.

**Idag har jag lärt mig** hur man avänder `date` för att få senaste datumet på månaden. 
`const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();`. Man tar den nuvarande månad + 1 månad, för att få 1 Januari,
lägger 0 som sista argument, för att ta ett steg bakåt och få datumet 31 för December.
