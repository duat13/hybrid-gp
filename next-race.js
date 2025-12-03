// Liste aller Rennen (Datum + Gastgeber)
const races = [
  { date: "2025-12-09", host: "Andreas" },
  { date: "2026-01-13", host: "Nabil" },
  { date: "2026-02-10", host: "Gregor" }, // Preseason 3
  { date: "2026-03-10", host: "Ben" },
  { date: "2026-04-14", host: "Andreas" },
  { date: "2026-05-12", host: "Nabil" },
  { date: "2026-06-09", host: "Gregor" },
  { date: "2026-07-14", host: "Ben" },
  { date: "2026-08-11", host: "Andreas" },
  { date: "2026-09-08", host: "Nabil" },
  { date: "2026-10-13", host: "Gregor" },
  { date: "2026-11-10", host: "Ben" },
  { date: "2026-12-08", host: "Andreas" },
  { date: "2027-01-12", host: "Nabil" }
];

function getNextRace() {
  const today = new Date();
  return races.find(r => new Date(r.date) > today);
}

function renderNextRace() {
  const race = getNextRace();
  const box = document.getElementById("nextRaceBox");

  if (!race) {
    box.innerHTML = "<strong>Season Finished!</strong>";
    return;
  }

  const date = new Date(race.date).toLocaleDateString("de-DE", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  box.innerHTML = `<strong>${date}</strong> bei <strong>${race.host}</strong>`;
}

renderNextRace();
