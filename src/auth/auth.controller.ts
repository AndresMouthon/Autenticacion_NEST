import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    const login = await this.authService.login(createAuthDto);
    if (login.status === false) {
      throw new HttpException({
        status: false,
        message: login.message,
      },
        HttpStatus.UNAUTHORIZED
      );
    }
    return login;
  };

}
