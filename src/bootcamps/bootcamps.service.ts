import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
//import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Injectable()
export class BootcampsService {
  constructor(
    @InjectRepository(Bootcamp)
    private bootcampRepository: Repository<Bootcamp>,
  ) {}

  create(createBootcampDto: CreateBootcampDto) {
    // Crear la instancia de el objeto
    // a guardar
    const nuevoBootcamp = this.bootcampRepository.create(createBootcampDto);

    return this.bootcampRepository.save(nuevoBootcamp);
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBootcampDto: UpdateBootcampDto) {
    // Seleccionar el bootcamp
    // Cuyo id sea el del parametro id
    const updBootcamp = await this.bootcampRepository.findOneBy({ id });

    // Fusionar los cambios con el
    // bootcamp hallado
    await this.bootcampRepository.merge(updBootcamp, updateBootcampDto);
    // Grabar cambios en base de datos
    await this.bootcampRepository.save(updBootcamp);

    return updBootcamp;
  }

  async remove(id: number) {
    // Buscar el bootcamp por su id
    const removebootcamp = await this.bootcampRepository.findOneBy({ id });
    // Eliminar el bootcamp de la base de datos
    await this.bootcampRepository.remove(removebootcamp);
    // Retornar un mensaje de confirmación
    return removebootcamp;
  }
}
