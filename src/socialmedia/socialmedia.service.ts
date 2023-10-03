import { Inject, Injectable } from '@nestjs/common';
import { SOCIALMEDIA_REPOSITORY } from 'src/utils/constants';
import { Socialmedia } from './socialmedia.entity';
import { CreateSocialmediaDto } from './dto/createSocialmedia.dto';
import { EditSocialmediaDto } from './dto/editSocialmedia.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class SocialmediaService {
    constructor(
        @Inject(SOCIALMEDIA_REPOSITORY) private readonly socialmediaRepository: typeof Socialmedia,
      ) {} 
      async getAllSocialmedias(): Promise<Socialmedia[]> {
        return await this.socialmediaRepository.findAll<Socialmedia>({
          include: { model: User, as: 'user' }
        });
      }
      async createSocialmedia(createSocialmedia: CreateSocialmediaDto): Promise<Socialmedia> {
        return await this.socialmediaRepository.create<Socialmedia>(createSocialmedia);
      }
      async getOneSocialmediaById(id: number): Promise<Socialmedia>{
        return await this.socialmediaRepository.findOne( {
          where: {
            id: id
          }
        })
      }
      async editSocialmedia(editSocialmedia: EditSocialmediaDto): Promise<Socialmedia> {
        var toEditSocialmedia = await this.socialmediaRepository.findByPk(editSocialmedia.id);
        return await toEditSocialmedia.update({...editSocialmedia})
      }
      async deleteSocialmedia(id: string): Promise<void>{
        var toDeleteSocialmedia = await this.socialmediaRepository.findByPk(id);
        return await toDeleteSocialmedia.destroy();
      }
}
