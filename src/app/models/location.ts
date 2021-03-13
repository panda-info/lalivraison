export class Location {
  city: string;
  district: string;

  constructor(city?: string, location?: string) {
    this.city = city;
    this.district = location;
  }

  isEmpty(): boolean {
    return !this.city && !this.district;
  }
}
