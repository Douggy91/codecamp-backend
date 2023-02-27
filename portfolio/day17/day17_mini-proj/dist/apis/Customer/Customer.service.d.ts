import { Repository } from 'typeorm';
import { Customer } from './entities/Customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create({ createCustomerInput }: {
        createCustomerInput: any;
    }): Promise<{
        message: any;
    }>;
    findOne({ customerName }: {
        customerName: any;
    }): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    update({ customerId, updateCustomerInput }: {
        customerId: any;
        updateCustomerInput: any;
    }): Promise<any>;
    delete({ customerId }: {
        customerId: any;
    }): Promise<false | {
        message: string;
    }>;
}
