export interface IModalProps {
  isOpen: boolean;
  style?: any;
  setIsOpen: () => void;
}

export interface ISaveNewPost {
  photoUrl?: string,
  title: string,
  description: string
}

export type IModalCreateNewPost = IModalProps & {
  handleSavePost(paramsNewPost: ISaveNewPost): void;
}
