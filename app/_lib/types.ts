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
