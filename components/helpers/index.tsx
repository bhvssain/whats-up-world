export const renderContinentMapImage = (name: string): string => {
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

