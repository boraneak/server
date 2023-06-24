import { Injectable } from '@nestjs/common';

// this should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'svmt',
      password: 'username',
    },
    {
      userId: 2,
      username: 'testuser',
      password: '123',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
