export interface INewPostFormData {
  photoUrl?: {
    value: string,
  },
  title: {
    value: string;
    error?: string;
  },
  description: {
    value: string;
    error?: string
  }
}
