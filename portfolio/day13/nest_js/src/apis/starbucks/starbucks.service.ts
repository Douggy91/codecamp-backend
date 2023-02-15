import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    const result = [
      createMenu('아메리카노', 4500, 5, 0, 0, 0, 0, 75),
      createMenu('카페라떼', 5000, 110, 4, 6, 70, 8, 75),
      createMenu('카페모카', 5500, 100, 4, 7, 80, 10, 80),
      createMenu('카라멜마끼야또', 6000, 150, 10, 15, 5, 100, 100),
      createMenu('에스프레소', 3000, 5, 0, 0, 0, 0, 100),
    ];
    return result;
  }
  create() {
    return '등록에 성공하였습니다.';
  }
}

const createMenu = (
  menu,
  price,
  kcal,
  saturted_fat,
  protein,
  salt,
  sugar,
  caffeine,
) => {
  const result = {
    menu,
    price,
    kcal,
    saturted_fat,
    protein,
    salt,
    sugar,
    caffeine,
  };
  return result;
};
