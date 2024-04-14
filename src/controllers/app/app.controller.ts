import { Controller, Get, Render } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import { CinemaTicketService } from '../../services/cinema-ticket/cinema-ticket.service';
import { CinemaListResponseModel } from '../../models/cinema/cinema-list-response.model';
import { ConfigCinemaSeatList } from '../../config/config-cinema-seat-list';

@Controller()
export class AppController {
  constructor(private cinemaTicketService: CinemaTicketService) {}

  @Public()
  @Get()
  @Render('index')
  root() {
    return {};
  }

  @Public()
  @Get('sign-up')
  @Render('sign-up')
  signUp() {
    return {};
  }

  @Public()
  @Get('booking')
  @Render('booking')
  async booking() {
    const colLength = 12;
    const tickets = await this.cinemaTicketService.getAll();
    const list = ConfigCinemaSeatList.map((seat) => {
      const idFromZero = seat.seat_id - 1;
      const row = Math.trunc(idFromZero / colLength) + 1;
      const col = Math.trunc(idFromZero % colLength) + 1;

      const isEmpty = !tickets.some(
        (x) => x.cinema_id === seat.cinema_id && x.seat_id === seat.seat_id,
      );

      return {
        cinema_id: seat.cinema_id,
        seat_id: seat.seat_id,
        seat_name: `${this.toLetters(row)}${col}`,
        is_empty: isEmpty,
      };
    });

    return { list: list };
  }

  toLetters(num: number): string {
    const mod = num % 26;
    let pow = (num / 26) | 0;
    const out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    return pow ? this.toLetters(pow) + out : out;
  }
}
