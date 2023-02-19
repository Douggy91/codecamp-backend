import { CustomerService } from './Customer.service';
import { CreateCustomerInput } from './dto/CreateCustomer.input';
import { Customer } from './entities/Customer.entity';
export declare class CustomerResolver {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustomerInput: CreateCustomerInput): Promise<any>;
    fetchCustomer(customerId: string): Promise<Customer>;
}
