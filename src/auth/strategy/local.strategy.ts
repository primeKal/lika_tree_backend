import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";


@Injectable() 
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'email' })
  }

  async validate(username: string, password: string): Promise<any> {
    let user = await this.userService.findUserByEmail(username)
    if(!user){
      console.log("user with this eamil not found")
      throw new UnauthorizedException(); 
    }
    if ( !await bcrypt.compare(password,user.password)){
      console.log("incorrect password for this user")
      throw new UnauthorizedException(); 
    }
    let token = await this.userService.generateToken({
      id : user.id,
    });
    let toReturnUser: any = {...user.dataValues};
    toReturnUser.token = token
    delete toReturnUser.password
    return toReturnUser
  }
}