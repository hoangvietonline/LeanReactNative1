import { Moment } from "moment";

export class ChatModel {
  id: number;
  content: string;
  isMe: boolean;
  time: number;

  constructor(id : number,content:string,isMe:boolean,time:number) {
    this.id = id;
    this.content = content;
    this.isMe = isMe;
    this.time = time;
  }

}

