import { InputType, OmitType } from '@nestjs/graphql';
import { Store } from 'src/apis/Store/entities/Store.entity';

@InputType()
export class StoreInput extends OmitType(Store, ['store_id'], InputType) {}
// export class StoreInput extends OmitType(Store, ['store_id'], InputType) {}
