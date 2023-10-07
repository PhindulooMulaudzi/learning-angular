export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomType {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
