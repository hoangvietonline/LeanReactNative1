export class ChatModel {
  id: number;
  content: string;
  isMe: boolean;
  time: string;

  constructor(id : number,content:string,isMe:boolean,time:string) {
    this.id = id;
    this.content = content;
    this.isMe = isMe;
    this.time = time;
  }

}

