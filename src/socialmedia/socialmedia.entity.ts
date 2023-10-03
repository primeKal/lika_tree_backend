import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
    ForeignKey,
  } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';

  const tableOptions = {
    tableName: 'socialmedias',
  } 
  
  @Table(tableOptions)
  export class Socialmedia extends Model<Socialmedia> {
    @Column({
      type: DataType.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    })
    public id: number;
  
    @Column({
      allowNull: false,
    })
    link: string;

    @Column({
        allowNull: true,
      })
      name: string;
    
      @Column({
        allowNull: true,
      })
      icon: string;
  
    @Column({
      defaultValue: 0
    })
    count: number;

    @Column({
    defaultValue: false
    })
    isActive: boolean;


    @CreatedAt public createdAt: Date;
  
    @UpdatedAt public updatedAt: Date;
  
    @DeletedAt public deletedAt: Date;


    // forign keys

    @ForeignKey(() => User)
    userId: number
    
    @BelongsTo(() => User)
    user: User
  }