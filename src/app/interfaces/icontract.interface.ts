export interface Icontract {
    id: string;
    firstName: string;
    lastName: string;
    position: string;
    department: string;
    salary: number;
    startDate: string;
    endDate: string;
    status: 'active' | 'expired' | 'terminated' ;
    createdAt: string;
    updatedAt: string;
}
