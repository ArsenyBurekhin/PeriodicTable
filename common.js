export function GetTheElementColor(element) {
    var color = '#eeeeee';
    switch (element.type) {
        case "AlkaliMetal":
            color = '#b39e46';

            break;

        case "AlkalineEarthMetal":
            color = '#cfcf56';
            break;

        case "Lanthanide":
            color = '#e8d19c';
            break;

        case "Actinide":
            color = '#f5cbd9';
            break;

        case "TransitionMetal":
            color = '#b99188';
            break;

        case "PostTransitionMetal":
            color = '#addfec';
            break;

        case "Metalloid":
            color = '#9fe5d3';
            break;

        case "ReactiveNonmetal":
            color = '#8ced8c';
            break;

        case "NobleGas":
            color = '#e6bce6';
            break;

        default:
            color = '#eeeeee';
            break;
    }
    return color;
}