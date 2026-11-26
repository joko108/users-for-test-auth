import { WithId } from 'mongodb';
import { UserViewModel } from '../../types/user.view-model';
import { User } from '../../types/user';

export const mapToUserViewModel = (dto: WithId<User>): UserViewModel => {
  return {
    id: dto._id.toString(),
    login: dto.login,
    email: dto.email,
    cratedAt: dto.createdAt,
  };
};
