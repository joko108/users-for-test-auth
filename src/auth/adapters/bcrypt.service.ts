import bcrypt from 'bcrypt';

export const bcryptService = {
  async generateHash(password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  },
};
