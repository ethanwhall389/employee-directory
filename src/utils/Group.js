export default class Group {
  constructor(groupId, groupName) {
    (this.groupId = groupId),
      (this.groupName = groupName),
      (this.groupUserIds = []);
  }
}
