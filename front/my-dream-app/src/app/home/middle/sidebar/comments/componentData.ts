
export class Comment {
  id?:number;
  text: string;
  comments?: Comment[]
  flag?:boolean;
}


export const comments:Comment[] = [
  {
    id:1,
    text: "1",
    flag:true,
    comments: [
      {
        id:2,
        text: "1.1",
        flag:true,
        comments: [
          {
            id:3,
            flag:true,
            text: "1.1.1 "
          }
        ]
      },
      {
        id:4,
        text: "1.2",
        flag:true,
        comments: [
          {
            id:5,
            flag:true,
            text: "1.2.1"
          }
        ]
      }
    ]
  },
  {
    text: "2",
    id:6,
    flag:true,
    comments: [
      {
        id:7,
        text: "2.1",
        flag:true,
        comments: [
          {
            id:8,
            flag:true,
            text: "2.1.1"
          }
        ]
      }
    ]
  }
];
