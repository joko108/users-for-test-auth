import { UserAttributes } from './dtos/user.attributes';
import { User } from '../types/user';
import { bcryptService } from '../../auth/adapters/bcrypt.service';
import { usersRepository } from '../repositories/users.repository';
import { WithId } from 'mongodb';
import { notFoundError } from '../../core/errors/errors.middleware';

export const usersService = {
  async findById(id: string): Promise<WithId<User>> {
    const user = await usersRepository.findById(id);

    // If user not found, throw error.
    if (!user) {
      throw notFoundError('User not found', 'id');
    }
    return user;
  },

  async create(dto: UserAttributes): Promise<string> {
    // Generate password's hash.
    const passHash = await bcryptService.generateHash(dto.password);

    // Create new obj of user.
    const newUser: User = {
      login: dto.login,
      email: dto.email,
      passwordHash: passHash,
      createdAt: new Date(),
    };

    return await usersRepository.create(newUser);
  },
};
