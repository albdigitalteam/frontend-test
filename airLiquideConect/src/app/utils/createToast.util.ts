import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IToastData } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class CreateToast {
  private toastController = new ToastController();
  public async create(toastData: IToastData): Promise<void> {
    const { message, color, position, duration } = toastData;
    const toast = await this.toastController.create({
      message,
      duration: duration > 0 ? duration : 3000,
      position: position || 'bottom',
      animated: true,
      color: color || 'primary',
    });
    toast.present();
  }
}
