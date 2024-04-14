export class CinemaListResponseModel {
  list: {
    cinema_id: number;
    seat_id: number;
    is_empty: boolean;
  }[] = [];
}
