export class FriendModel {
  friendUserName: string;
  friendPreview: string | null;
  onlineStatus: boolean;
  worldName: string;

  constructor(name: string, preview: string, isOnline: boolean, worldName: string) {
    this.friendUserName = name || "";
    this.friendPreview = preview || null;
    this.onlineStatus = isOnline || false;
    this.worldName = worldName || "";
  }

}

