import { CreateFranchiseInput } from './dto/createFranchise.input';
import { UpdateFranchiseInput } from './dto/updateFranchise.input';
import { Franchise } from './entities/Store_Franchise.entity';
import { FranchiseService } from './Store_Franchise.service';
export declare class FranchiseResolver {
    private readonly franchiseService;
    constructor(franchiseService: FranchiseService);
    fetchCategory(franchiseId: string): Promise<Franchise>;
    fetchCategoryAll(): Promise<Franchise[]>;
    createFranchise(createfranchiseInput: CreateFranchiseInput): Promise<{
        store_category_name: any[];
        franchise_name: any;
    } & Franchise>;
    modifyCategory(franchiseId: string, updatefranchiseInput: UpdateFranchiseInput): Promise<any>;
    deleteCategory(franchiseId: string): Promise<false | {
        message: string;
    }>;
}
