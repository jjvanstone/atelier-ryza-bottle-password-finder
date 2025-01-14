import { FieldMixMapQB, hasEmptyData, initData } from '../data';
import { OrderByDirection } from '~/enums';

async function getByPassword(password: string, levelLimit = 100) {
  if (hasEmptyData()) {
    await initData();
  }

  return FieldMixMapQB.like('password', password)
    .lessThan('level', levelLimit + 1)
    .orderBy('level', OrderByDirection.DESC)
    .exec();
}

export const bottlePasswordsService = {
  getByPassword,
};
