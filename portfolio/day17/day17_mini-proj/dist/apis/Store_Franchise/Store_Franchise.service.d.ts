import { Repository } from 'typeorm';
import { Store_Category } from '../Store_Category/entities/Store_Category.entity';
import { Franchise } from './entities/Store_Franchise.entity';
export declare class FranchiseService {
    private readonly franchiseRepository;
    private readonly storecategoryRepository;
    constructor(franchiseRepository: Repository<Franchise>, storecategoryRepository: Repository<Store_Category>);
    create({ createfranchiseInput }: {
        createfranchiseInput: any;
    }): Promise<{
        store_category_name: any[];
        franchise_name: any;
    } & Franchise>;
    modify({ franchiseId, updatefranchiseInput }: {
        franchiseId: any;
        updatefranchiseInput: any;
    }): Promise<any>;
    delete({ franchiseId }: {
        franchiseId: any;
    }): Promise<false | {
        message: string;
    }>;
    findOne({ franchiseId }: {
        franchiseId: any;
    }): Promise<Franchise>;
    findAll(): Promise<Franchise[]>;
}
