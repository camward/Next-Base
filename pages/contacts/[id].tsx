import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { ContactType } from "../../types";

type ContactTypeProps = {
  contact: ContactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${process.env.API_REMOTE_HOST}/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<ContactTypeProps> = ({ contact }) => (
  <>
    <Head>
      <title>{contact.name} | Contact page</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
