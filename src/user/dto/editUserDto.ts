export class EditUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
    readonly email: string;
    readonly id: number;
    readonly socialMedias: string[]
    readonly isActive: boolean;
  }