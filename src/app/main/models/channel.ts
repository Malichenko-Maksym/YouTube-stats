export class Channel {
  id: string;
  channelLink: string;
  channelUserAlias: string;
  collectVideoCount: boolean;
  collectViewCount: boolean;
  collectSubscriberCount: boolean;
  collectOnceInNDays: number;
  startCollectingFrom: string;
  onPause: boolean;
  userComment: string;

  constructor(
    id = '',
    channelLink = '',
    channelUserAlias = '',
    collectVideoCount = true,
    collectViewCount = true,
    collectSubscriberCount = true,
    collectOnceInNDays = 1,
    startCollectingFrom = '',
    onPause = false,
    userComment = '',
  ) {
    this.id = id;
    this.channelLink = channelLink;
    this.channelUserAlias = channelUserAlias;
    this.collectVideoCount = collectVideoCount;
    this.collectViewCount = collectViewCount;
    this.collectSubscriberCount = collectSubscriberCount;
    this.collectOnceInNDays = collectOnceInNDays;
    this.startCollectingFrom = startCollectingFrom;
    this.onPause = onPause;
    this.userComment = userComment;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setChannelLink(channelLink: string): void {
    this.channelLink = channelLink;
  }

  public getChannelLink(): string {
    return this.channelLink;
  }

  public getChannelUserAlias(): string {
    return this.channelUserAlias;
  }

  public setChannelUserAlias(channelUserAlias: string): void {
    this.channelUserAlias = channelUserAlias;
  }

  public getCollectVideoCount(): boolean {
    return this.collectVideoCount;
  }

  public setCollectVideoCount(collectVideoCount: boolean): void {
    this.collectVideoCount = collectVideoCount;
  }

  public getCollectViewCount(): boolean {
    return this.collectViewCount;
  }

  public setCollectViewCount(collectViewCount: boolean): void {
    this.collectViewCount = collectViewCount;
  }

  public getCollectSubscriberCount(): boolean {
    return this.collectSubscriberCount;
  }

  public setCollectSubscriberCount(collectSubscriberCount: boolean): void {
    this.collectSubscriberCount = collectSubscriberCount;
  }

  public getCollectOnceInNDays(): number {
    return this.collectOnceInNDays;
  }

  public setCollectOnceInNDays(collectOnceInNDays: number): void {
    this.collectOnceInNDays = collectOnceInNDays;
  }

  public getstartCollectingFrom(): string {
    return this.startCollectingFrom;
  }

  public setstartCollectingFrom(startCollectingFrom: string): void {
    this.startCollectingFrom = startCollectingFrom;
  }

  public getOnPause(): boolean {
    return this.onPause;
  }

  public setOnPause(onPause: boolean): void {
    this.onPause = onPause;
  }

  public toggleOnPause(): void {
    this.onPause = !this.onPause;
  }

  public getUserComment(): string {
    return this.userComment;
  }

  public setUserComment(userComment: string): void {
    this.userComment = userComment;
  }
}
