import { Sequelize } from 'sequelize-typescript';
import { Socialmedia } from 'src/socialmedia/socialmedia.entity';
import { User } from 'src/user/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'linktreeadmin',
        password: '12345',
        database: 'linktree',
      });
      sequelize.addModels([User, Socialmedia]);
      await sequelize.sync();
      return sequelize;
    },
  },
];