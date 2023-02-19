import { Repository } from 'typeorm';
import { Customer } from './entities/Customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create({ createCustomerInput }: {
        createCustomerInput: any;
    }): Promise<any>;
    findOne({ customerId }: {
        customerId: any;
    }): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    update({ customerId, updateCustomerInput }: {
        customerId: any;
        updateCustomerInput: any;
    }): Promise<any>;
}
