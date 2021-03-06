export interface IPostImage {
  id: string;
  url: string;
}

export interface ITag {
  id: string;
  name: string;
}

interface IUser {
  userId: string;
  userName: string;
  profileImage: string;
}

export interface IComment extends IUser {
  content: string;
}

export interface IPost extends IUser {
  id: string;
  createdAt: string;
  images: IPostImage[];
  tags: ITag[];
  like: number;
  content: string;
  comments: IComment[];
}

export const DUMMY_POST: IPost[] = [
  {
    userId: "Seunghoon",
    profileImage: "../../../assets/profile.png",
    userName: "Seunghoon",
    id: "1",
    createdAt: "2021-02-04",
    content: "dafadsfsdafnasjnfsajkdnfkjasndfkjdsa",
    images: [
      {
        id: "1",
        url: "https://media.istockphoto.com/photos/businesss-desk-office-with-notebook-and-cactustop-view-table-from-picture-id829374196?k=20&m=829374196&s=170667a&w=0&h=eG3x-IbGc6WaLShW52hUTyIFa36mqBOnEVaEotrZNR4=",
      },
    ],
    tags: [{ id: "1", name: "font-end" }],
    like: 9,
    comments: [],
  },
];
