interface HeadingProps {
  heading: string;
  textSize: string;
  font?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, textSize, font }) => {
  return (
    <h1
      className={`inline-block h-fit bg-gradient-to-br from-purple-500 via-[#E6E3F1] to-white bg-clip-text text-${textSize} text-transparent ${font}`}
    >
      {heading}
    </h1>
  );
};

export default Heading;
