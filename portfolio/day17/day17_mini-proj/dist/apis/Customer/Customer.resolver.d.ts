import { CustomerService } from './Customer.service';
import { CreateCustomerInput } from './dto/CreateCustomer.input';
import { UpdateCustomerInput } from './dto/UpdateCustomer.input';
import { Customer } from './entities/Customer.entity';
export declare class CustomerResolver {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustomerInput: CreateCustomerInput): Promise<{
        message: any;
    }>;
    updateCustomer(customerId: string, updateCustomerInput: UpdateCustomerInput): Promise<any>;
    deleteCustomer(customerId: string): Promise<false | {
        message: string;
    }>;
    fetchCustomer(customerName: string): Promise<Customer>;
    fetchCustomerAll(): Promise<Customer[]>;
}
