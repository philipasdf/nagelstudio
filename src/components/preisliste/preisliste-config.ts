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
				preis: '30',
			},
			{
				beschreibung: 'Ablösen',
				preis: '15',
			},
			{
				beschreibung: 'Lackieren',
				preis: '7',
			},
			{
				beschreibung: 'Extra Lackieren',
				preis: '8',
			},
			{
				beschreibung: 'Extra lang',
				preis: '4',
			},
		],
	},
	{
		name: 'FRENCH',
		items: [
			{
				beschreibung: 'Basic',
				preis: '5',
			},
			{
				beschreibung: 'mit Lack',
				preis: '10',
			},
			{
				beschreibung: 'Glitzer',
				preis: '10',
			},
			{
				beschreibung: 'French oder Farbe',
				preis: '40',
			},
		],
	},
	{
		name: 'FÜSSE',
		items: [
			{
				beschreibung: 'Pediküre',
				preis: '25',
			},
			{
				beschreibung: 'mit Lack',
				preis: '30',
			},
			{
				beschreibung: 'French oder Farbe',
				preis: '40',
			},
		],
	},
	{
		name: 'NEUMODELLAGE',
		items: [
			{
				beschreibung: 'mit Acryl',
				preis: '40',
			},
			{
				beschreibung: 'mit French Pulver',
				preis: '40',
			},
			{
				beschreibung: 'Shellac',
				preis: '38',
			},
		],
	},
	{
		name: 'PFLEGE',
		items: [
			{
				beschreibung: 'Kürzen und Feilen',
				preis: '7',
			},
			{
				beschreibung: 'Reparatur',
				preis: '7',
			},
			{
				beschreibung: 'Versiegeln mit extra Glanz',
				preis: '6',
			},
		],
	},
];

export interface PreisAbschnitt {
	name: string;
	items: { beschreibung: string; preis: string }[];
}
