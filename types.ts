export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type ContactType = {
  id: string;
  name: string;
  email: string;
  address: AddressType;
};

export type PostType = {
  title: string;
  body: string;
};
