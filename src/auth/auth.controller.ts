import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
import { JwtAuthGurad } from './guards/jwtAuthGuard';
import { LocalAuthGuard } from './guards/localAuthGuards';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/googleAuthGuard';
import { ApiTags } from '@nestjs/swagger';
import { InstagramAuthGurad } from './guards/instagramAuthGuard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    public async loginUser(@Body() loginUser: LoginUserDto, 
                            @Req() req){
      return req.user
    }

    @Post("signup")
    public async createUser(@Body() body: CreateUserDto): Promise<any> {
      return this.authService.createUser(body)
    }

    @UseGuards(GoogleAuthGuard)
    @Get("login/google")
    public async loginWithGoogle(): Promise<any> {
      return "hiiiiiiiiiiiiiiiiiiiiiii"
    }


    @UseGuards(GoogleAuthGuard)
    @Get("callback/google")
    public async callBackGoogle(@Req() req): Promise<any> {
      return req.user
    }


    @UseGuards(InstagramAuthGurad)
    @Get("login/instagram")
    public async loginWithInstagram(): Promise<any> {
      return "hiiiiiiiiiiiiiiiiiiiiiii"
    }


    @UseGuards(InstagramAuthGurad)
    @Get("callback/instagram")
    public async callBackInstagram(@Req() req): Promise<any> {
      return req.user
    }
}
