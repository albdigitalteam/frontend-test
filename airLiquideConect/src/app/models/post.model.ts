export interface IPost {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
  readonly image?: string;
  readonly author?: string;
}
