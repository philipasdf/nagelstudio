export const PREISE: PreisAbschnitt[] = [
  {
    name: 'NAIL ART',
    items: [
      {
        beschreibung: 'Airbrush Design pro Nagel',
        preis: '3',
      },
      {
        beschreibung: 'Hand Design pro Nagel',
        preis: '3',
      },
      {
        beschreibung: 'Airbrush-Hand-Design komplett',
        preis: '15',
      },
      {
        beschreibung: 'Strasssteine',
        preis: '0.5',
      },
      {
        beschreibung: 'Glitzer / Streifen',
        preis: '3',
      },
    ],
  },
  {
    name: 'BASIC',
    items: [
      {
        beschreibung: 'Maniküre',
        preis: '14',
      },
      {
        beschreibung: 'inkl. Massage',
        preis: '19',
      },
      {
        beschreibung: 'Auffüllen Natur',
        preis: '28',
      },
      {
        beschreibung: 'Ablösen',
        preis: '14',
      },
      {
        beschreibung: 'Lackieren',
        preis: '5',
      },
      {
        beschreibung: 'Extra Lackieren',
        preis: '8',
      },
      {
        beschreibung: 'Extra lang',
        preis: '5',
      },
    ],
  },
];

export interface PreisAbschnitt {
  name?: string;
  items?: { beschreibung: string; preis: string }[];
}
