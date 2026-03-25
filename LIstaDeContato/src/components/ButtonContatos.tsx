
interface IButtonContatoProps extends React.ComponentProps<"button"> {
    imgIcon: string,
    descricao?: string

}

export default function ButtonContato({ imgIcon, descricao, className, children, ...props }: IButtonContatoProps) {
    return (
        <button className={className} {...props}>
            <img src={imgIcon} alt={descricao} />
        </button>
    )
}