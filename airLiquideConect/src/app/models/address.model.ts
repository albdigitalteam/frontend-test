export interface IAddress {
  readonly street: string;
  readonly suite: string;
  readonly city: string;
  readonly zipcode: string;
  readonly geo: IGeolocation;
}

export interface IGeolocation {
  readonly lat: string;
  readonly lng: string;
}
