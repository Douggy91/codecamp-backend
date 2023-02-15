import { CreateStarbucksInput } from './dto/createStarbucks.Input';
import { StarbucksService } from './starbucks.service';
export declare class StarbucksResolver {
    private readonly starbucksService;
    constructor(starbucksService: StarbucksService);
    fetchStarbucks(): {
        menu: any;
        price: any;
        kcal: any;
        saturted_fat: any;
        protein: any;
        salt: any;
        sugar: any;
        caffeine: any;
    }[];
    createStarbucks(createStarbucksInput: CreateStarbucksInput): string;
}
