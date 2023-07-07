import {
  Body,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Controller,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
// import { Role } from 'src/enums/role.enum';
// import { Roles } from 'src/roles.decorator';

@Controller('cats')
export class CatController {
  constructor(private readonly catServie: CatService) {}
  @Get()
  getAllCats() {
    return this.catServie.getAllCats();
  }
  @Get(':id')
  getCatById(@Param('id') id: string) {
    return this.catServie.getCatById(id);
  }
  @Post()
  // @Roles(Role.Admin)
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catServie.createCat(createCatDto);
  }
  @Put(':id')
  updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catServie.updateCat(id, updateCatDto);
  }
  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return this.catServie.deleteCat(id);
  }
}
