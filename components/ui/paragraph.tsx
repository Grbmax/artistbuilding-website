interface HeadingProps {
  paragraph: string;
  textSize: string;
  font?: string;
}

const Paragraph: React.FC<HeadingProps> = ({ paragraph, textSize, font }) => {
  return (
    <p className={`white text-${textSize} text-white ${font}`}>{paragraph}</p>
  );
};

export default Paragraph;
