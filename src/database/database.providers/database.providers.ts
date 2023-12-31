import { Sequelize } from 'sequelize-typescript';
import { Socialmedia } from 'src/socialmedia/socialmedia.entity';
import { User } from 'src/user/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'ep-mute-violet-76705724.us-east-1.postgres.vercel-storage.com',
        port: 5432,
        username: 'default',
        password: 'pTv75EHAJIws',
        database: 'trendy_merches',
        ssl: true,
        dialectOptions: {
          ssl: true
        }
      });
      sequelize.addModels([User, Socialmedia]);
      await sequelize.sync();
      return sequelize;
    },
  },
];