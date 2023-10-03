import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly userService: UserService) {
        super({
            clientID: "10485540331-p2njgpl3qtvhso8t74usave2qsjogq8r.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/callback/google",
            scope: ['email', 'profile']
        });
    }
    async validate(accessToken: any, refreshToken: any, profile: any, done: VerifyCallback) {
        console.log(profile)
        const { name, emails, photos, displayName } = profile
        let user = await this.userService.findUserByEmail(emails[0]?.value)
        console.log("hiiiiiii", user)
        if (user === null){
            console.log("in create user")
            user = await this.userService.createUserWithOutPW({
                firstName: name.givenName,
                lastName: name.familyName,
                email: emails[0]?.value,
                username: displayName,
                authType : "GOOGLE",
                hasPassword : false
            })
        }
        console.log(user)
        let token = await this.userService.generateToken({
            id: user.id,
        });
        let toReturnUser: any = { ...user.dataValues };
        toReturnUser.token = token
        delete toReturnUser.password
        done(null, toReturnUser)
    }
}