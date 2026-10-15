export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
}

// Reservation list data, including the selected cabin fields.
export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: number;
  cabinId: Cabin["id"];
  cabins: Pick<Cabin, "name" | "image">;
}

export interface Country {
  name: string;
  flag: string;
}

export interface NewGuest {
  fullName: string;
  email: string;
  nationality?: string;
  countryFlag?: string;
  nationalID?: string;
}

// Insert data excludes database-generated fields and the joined cabin data.
export type NewBooking = Omit<Booking, "id" | "created_at" | "cabins"> & {
  observations?: string;
};
