type ImageSizes = { medium: string; original: string };

export type Show = {
  id: number;
  name: string;
  status: string;
  premiered: string;
  ended: string | null;
  image: ImageSizes;
};

export type Shows = Show[];
