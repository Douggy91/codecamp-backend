import { Repository } from 'typeorm';
import { Customer } from './entities/Customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create({ createCustomerInput }: {
        createCustomerInput: any;
    }): Promise<any>;
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
    }): Promise<{
        message: string;
    }>;
    isRegistEmail({ email }: {
        email: any;
    }): Promise<void>;
    isRegistid({ customerId }: {
        customerId: any;
    }): Promise<void>;
    isRegistName({ customerName }: {
        customerName: any;
    }): Promise<void>;
}
