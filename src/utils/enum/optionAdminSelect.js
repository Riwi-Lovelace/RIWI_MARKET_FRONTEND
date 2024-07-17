

export const optionSelect =(option)=>{
        
    let optionImport = option;

    if (optionImport <= 0) {
        optionImport = 3;
        return optionImport;
    } else if (optionImport <= 3) {
        return optionImport;
    } else {
        optionImport = 1; 
        return optionImport;
    }

    
}






