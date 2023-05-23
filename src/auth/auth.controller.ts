import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/logInDto.dto';
import { SignUpDto } from './dto/signUpDto.dto';
import { JwtAuthGuard } from './guards/jwt/jwt.guard';
import { Public } from './guards/pages/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signUp')
    @Public()
    @UseGuards(JwtAuthGuard)
    async signUp(@Body() signUpDto: SignUpDto) {
        //console.log('sign in')
        return await this.authService.signUp(signUpDto);
    }
    
    @Post('logIn')
    @Public()
    @UseGuards(JwtAuthGuard)
    async create(@Body() logInDto: LogInDto) {
        //console.log('log in')
        return await this.authService.logIn(logInDto);
    }
    
}
