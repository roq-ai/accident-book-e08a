import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccidentInterface {
  id?: string;
  description: string;
  date: any;
  company_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AccidentGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  company_id?: string;
  user_id?: string;
}
