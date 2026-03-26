
interface IButtonContatoProps extends React.ComponentProps<"button"> {
    imgIcon: string,
    descricao?: string

}

export default function ButtonContato({ imgIcon, descricao, className, children, ...props }: IButtonContatoProps) {
    return (
        <button className={`hover:scale-110 transition-transform duration-200 w-3.5 ${className}`} {...props}>
            <img src={imgIcon} alt={descricao} />
        </button>
    )
}