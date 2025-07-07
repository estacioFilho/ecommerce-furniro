type TitleProps = {
  text: string;
  className?: string;
}

const SectionTitle = ({className, text} : TitleProps) => {
  return (
    <h1 className={className}>{text}</h1>
  )
}

export default SectionTitle