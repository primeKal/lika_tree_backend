import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }
    async createUser(createUserDto): Promise<User> {
        let user = await this.userService.createUser(createUserDto)
        let token = await this.userService.generateToken({
            id: user.id,
        });
        let toReturnUser: any = { ...user.dataValues };
        toReturnUser.token = token
        console.log("saved ", toReturnUser)
        delete toReturnUser.password
        return toReturnUser
    }
}
