import Link from "next/link"
import styled from "styled-components"

const ListItem = styled.li`
    text-align: center;
    margin-right: 10px;

    &:last-of-type {
        margin-right: 0;
    }
`

const renderContinentMapImage = (name): string => {
    switch (name) {
        case "AF":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/220px-Africa_%28orthographic_projection%29.svg.png";
        case "AN":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/480px-Antarctica_%28orthographic_projection%29.svg.png";
        case "AS":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png";
        case "NA":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/220px-Location_North_America.svg.png";
        case "OC":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/200px-Oceania_%28orthographic_projection%29.svg.png"
        case "SA":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/220px-South_America_%28orthographic_projection%29.svg.png";
        default:
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png";
    }
}

const StyledLink = styled("a")<{isActive: boolean}>`
    font-size: 14px;
    color: ${props => props.isActive ? "blue" : "black"};
    display: inline-block;
    border: 4px solid ${props => props.isActive ? "blue" : "#f4f4f4"};
    border-radius: 5px;
    padding: 10px 5px;
    text-decoration: none;
    transition: all 325ms;

    &:hover {
        border-color: blue;
        color: blue;
    }

    img {
        display: block;
        margin-bottom: 15px;
    }
`;

export const ContinentFilterItem = ({ onContinentSelected, continentSelected, data }) => {
    if (!data) return null;

    return data.map(({ code, name }) => {
        return (
            <ListItem key={code}>
                <Link passHref href={code}>
                    <StyledLink isActive={code === continentSelected} onClick={() => onContinentSelected(code)}>
                        <img alt={`Map of ${name}`} src={renderContinentMapImage(code)} width="100px" />
                        {name}
                    </StyledLink>
                </Link>
            </ListItem>
        )
    })
}
