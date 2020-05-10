export class Comment {
  id?: number;
  text: string;
  comments?: Comment[]
  flag?: boolean;
}


export const comments: Comment[] = [
  {
    id: 1,
    text: "Институт",
    flag: true,
    comments: [
      {
        id: 2,
        text: "Руководство института",
        flag: true,
        comments: [
          {
            id: 3,
            flag: true,
            text: "1.1.1 "
          }
        ]
      }, {
        id: 2,
        text: "Образование",
        flag: true,
        comments: [
          {
            id: 3,
            flag: true,
            text: "1.1.1 "
          }
        ]
      }, {
        id: 2,
        text: "Наука",
        flag: true,
        comments: [
          {
            id: 3,
            flag: true,
            text: "1.1.1 "
          }
        ]
      }
    ]
  },
  {
    text: "Кафедра «Естественнонаучные и творческие дисциплины»",
    id: 6,
    flag: true,
    comments: [
      {
        id: 7,
        text: "2.1",
        flag: true,
        comments: [
          {
            id: 8,
            flag: true,
            text: "2.1.1"
          }
        ]
      }
    ]
  }
  ,
  {
    text: "Подраздиления",
    id: 6,
    flag: true,
    comments: [
      {
        id: 7,
        text: "2.1",
        flag: true,
        comments: [
          {
            id: 8,
            flag: true,
            text: "2.1.1"
          }
        ]
      }
    ]
  }
];
