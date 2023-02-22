import { Repository } from 'typeorm';
import { Franchise } from './entities/Store_Franchise.entity';
export declare class FranchiseService {
    private readonly franchiseRepository;
    constructor(franchiseRepository: Repository<Franchise>);
    create({ createfranchiseInput }: {
        createfranchiseInput: any;
    }): Promise<any>;
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
