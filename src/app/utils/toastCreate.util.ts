import { ToastController } from '@ionic/angular';

export interface IToastData {
  message: string;
  color?: string;
  position?: 'bottom' | 'top' | 'middle';
}

export class ToastCreate {
  private toastController = new ToastController();

  public async create(toastData: IToastData): Promise<void> {
    const { message, color, position } = toastData;

    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: position || 'bottom',
      animated: true,
      color: color || 'secondary',
    });

    toast.present();
  }
}
