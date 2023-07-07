import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
export class CatService {
  private cats: Cat[] = [];
  getAllCats() {
    return this.cats;
  }
  getCatById(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }
  createCat(createCatDto: CreateCatDto) {
    const newCat: Cat = {
      id: Date.now().toString(),
      ...createCatDto,
    };
    this.cats.push(newCat);
    return newCat;
  }
  updateCat(id: string, updateCatDto: UpdateCatDto) {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      return null;
    }
    const updatedCat = {
      ...cat,
      ...updateCatDto,
    };
    this.cats = this.cats.map((cat) => (cat.id === id ? updateCatDto : cat));
    return updatedCat;
  }
  deleteCat(id: string) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);
    if (catIndex === -1) {
      return null;
    }
    const deletedCat = this.cats[catIndex];
    this.cats.splice(catIndex, 1);
    return deletedCat;
  }
}
