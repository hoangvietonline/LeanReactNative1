import { Moment } from "moment";

export class ChatModel {
  id: number;
  content: string;
  isMe: boolean;
  time: Moment;

  constructor(id : number,content:string,isMe:boolean,time:Moment) {
    this.id = id;
    this.content = content;
    this.isMe = isMe;
    this.time = time;
  }

}

