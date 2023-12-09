export type IError = {
  error: string;
};

export type IUser = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  token?: string;
};

export type IMovie = {
  id: string;
  name: string;
  description: string;
  categorie: string;
  ref: string;
  sinopse: string;
  imgUri?: string;
  videoPlayerId?: string;
  videoPlayerUri?: string;
};

export type IHistory = {
  id: string;
  name: string;
  description: string;
  hour: string;
};
