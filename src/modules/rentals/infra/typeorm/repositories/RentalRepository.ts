import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({
      where: { car_id, end_date: null },
    });
    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({
      where: { user_id, end_date: null },
    });
    return openByUser;
  }

  async create({
    id,
    car_id,
    user_id,
    expect_return_date,
    end_date,
    total,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      id,
      car_id,
      user_id,
      expect_return_date,
      end_date,
      total,
    });

    await this.repository.save(rental);
    return rental;
  }

  async findById(id: string): Promise<Rental> {
    return await this.repository.findOne({ id });
  }

  async findByUser(user_id: string): Promise<Rental[]> {
    return await this.repository.find({
      where: { user_id },
      relations: ["car"],
    });
  }
}

export { RentalsRepository };
