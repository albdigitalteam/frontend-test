import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new Subject<boolean>();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadingAction$ = this.loadingSubject.asObservable();

  showLoader() {
    this.loadingSubject.next(true);
  }

  hideLoader() {
    this.loadingSubject.next(false);
  }
}
