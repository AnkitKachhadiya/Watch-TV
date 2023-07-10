export type Show = {
  id: number;
  name: string;
  status: string;
  premiered: string;
  ended: string | null;
  image: { medium: string; original: string };
};

export type Shows = Show[];
