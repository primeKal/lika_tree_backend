import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SocialmediaService } from './socialmedia.service';
import { Socialmedia } from './socialmedia.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Socialmedia')
@Controller('socialmedia')
export class SocialmediaController {

    constructor(private readonly socialmediaService: SocialmediaService) {}

    @Get()
    public async getSocialmedias(): Promise<Socialmedia[]> {
      return this.socialmediaService.getAllSocialmedias();
    }

    @Get()
    public async getASocialmedia(@Param('id') id: number): Promise<Socialmedia>{
      return this.socialmediaService.getOneSocialmediaById(id);
    }

    @Post()
    public async createSocialmedia(@Body() body): Promise<Socialmedia> {
      return this.socialmediaService.createSocialmedia(body);
    }

    @Put()
    public async editSocialmedia(@Body() body): Promise<Socialmedia> {
      return this.socialmediaService.editSocialmedia(body);
    }

    @Delete()
    public async deleteSocialmedia(@Body() id): Promise<void>{
      return this.socialmediaService.deleteSocialmedia(id);
    }
}
