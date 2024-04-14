import { Controller, Get } from '@nestjs/common';
import { CinemaListResponseModel } from '../../models/cinema/cinema-list-response.model';
import { Public } from '../../decorators/public.decorator';
import { ConfigCinemaSeatList } from '../../config/config-cinema-seat-list';
import { CinemaTicketService } from '../../services/cinema-ticket/cinema-ticket.service';

@Controller('cinema')
export class CinemaController {
  constructor(private cinemaTicketService: CinemaTicketService) {}

  @Public()
  @Get('list')
  async list(): Promise<CinemaListResponseModel> {
    const tickets = await this.cinemaTicketService.getAll();

    const response = new CinemaListResponseModel();
    response.list = ConfigCinemaSeatList.map((seat) => ({
      cinema_id: seat.cinema_id,
      seat_id: seat.seat_id,
      is_empty: !tickets.some(
        (x) => x.cinema_id === seat.cinema_id && x.seat_id && seat.seat_id,
      ),
    }));
    return response;
  }
}
