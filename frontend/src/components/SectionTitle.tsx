type TitleProps = {
  text: string;
  className?: string;
}

const SectionTitle = ({className, text} : TitleProps) => {
  return (
    <h1 className={`${className} text-3xl text-center my-15 font-bold text-gray-title`}>{text}</h1>
  )
}

export default SectionTitle