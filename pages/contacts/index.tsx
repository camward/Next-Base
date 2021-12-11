import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { ContactType } from "../../types";

type ContactsTypeProps = {
  contacts: [ContactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_REMOTE_HOST}/users`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<ContactsTypeProps> = ({ contacts }) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <Heading text="Contacts list:" />
    <ul>
      {contacts &&
        contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  </>
);

export default Contacts;
