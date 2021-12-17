import { IAddress } from './address.model';
import { ICompany } from './company.model';

export interface IUser {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly address: IAddress;
  readonly phone: string;
  readonly website: string;
  readonly company: ICompany;
  readonly postsCount?: number;
}
