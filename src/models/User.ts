interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Geolocation {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface UserState {
    loading: boolean;
    users: User[];
    error: string;
}

export interface UserMapStateProps {
    usersData: UserState;
}

export interface UserMapDispatchProps {
    fetchUsers: () => void;
}
