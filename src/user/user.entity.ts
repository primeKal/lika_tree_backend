import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { Socialmedia } from 'src/socialmedia/socialmedia.entity';

const tableOptions = {
  tableName: 'users',
}

@Table(tableOptions)
export class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    allowNull: true,
  })
  firstName: string;

  @Column({
    allowNull: false,
  })
  lastName: string;

  @Column({
    allowNull: true,
  })
  age: number;

  @Column({
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
    unique: true
  })
  username: string;

  @Column({
    allowNull: true,
  })
  password: string;

  @Column({
    allowNull: false,
    defaultValue:true
  })
  hasPassword: boolean;

  @Column({
    allowNull: true,
  })
  authType: string;

  @Column({
    defaultValue: 0
  })
  linkCount: number;

  @Column({
    allowNull: false,
    defaultValue: false
  })
  isActive: boolean;


  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;

  // forign keys
  @HasMany(() => Socialmedia)
  socialmedias: Socialmedia[]
}