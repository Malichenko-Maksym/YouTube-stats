export class Statistics {
  videoCountDictionary: object;
  viewCountDictionary: object;
  subscriberCountDictionary: object;

  constructor(
    videoCountDictionary = {},
    viewCountDictionary = {},
    subscriberCountDictionary = {},
  ) {
    this.videoCountDictionary = videoCountDictionary;
    this.viewCountDictionary = viewCountDictionary;
    this.subscriberCountDictionary = subscriberCountDictionary;
  }

  public getVideoCountDictionary(): object {
    return this.videoCountDictionary;
  }

  public setVideoCountDictionary(videoCountDictionary: object): void {
    this.videoCountDictionary = videoCountDictionary;
  }

  public getViewCountDictionary(): object {
    return this.viewCountDictionary;
  }

  public setViewCountDictionary(viewCountDictionary: object): void {
    this.viewCountDictionary = viewCountDictionary;
  }

  public getSubscriberCountDictionary(): object {
    return this.subscriberCountDictionary;
  }

  public setSubscriberCountDictionary(subscriberCountDictionary: object): void {
    this.subscriberCountDictionary = subscriberCountDictionary;
  }
}
