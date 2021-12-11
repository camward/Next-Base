const Heading = ({
  tag,
  text,
}: {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
