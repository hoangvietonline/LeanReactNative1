export class ChatModel {
  id: number;
  content: string;
  isMe: boolean;
  time: number;
  status: MessageStatus;

  constructor(id: number, content: string, isMe: boolean, time: number, status: MessageStatus) {
    this.id = id;
    this.content = content;
    this.isMe = isMe;
    this.time = time;
    this.status = status;
  }

}

export enum MessageStatus {
  PENDING = "Pending",
  SENT = "Sent",
  RECEIVED = "received",
  READ = "read",
  FAILED = "failed"
}
