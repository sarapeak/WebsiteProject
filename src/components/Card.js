import { StyledCard } from "./styles/Card.styled"

export default function Card({item: {id, name, body, image, licnum, phone, email}}) {
    return (
        <StyledCard layout={'row-reverse'}>
            <div>
                <h2>{name}</h2>
                <p>{licnum}</p>
                <p>{body}</p>
                <p>{phone} {email}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt='' />
            </div>
        </StyledCard>
    )
}