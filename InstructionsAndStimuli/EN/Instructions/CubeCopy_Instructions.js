var EN_Instructions = {}
EN_Instructions.Instructions = 'Draw a copy of a cube, take your time.'
EN_Instructions.WelcomeText = [{'page': 'This is the Cube Copying Task. Press <b>Next</b> to Continue'}]
EN_Instructions.ThankYouText = [{'page': 'Thank you'}]
EN_Instructions.NotesForResultsPage = "The copy should be transparent, have 12 lines and 8 corners. Score is 0-2; 0 no impairment; 1 mild impairment; 2 impaired."


var FR_Instructions = {}
FR_Instructions.Instructions = "Dessinez une copie d'un cube, prenez votre temps."
FR_Instructions.WelcomeText = [{'page': 'Ceci est la tâche de copie du cube. Appuyez sur <b>Suivant</b> pour Continuer'}]
FR_Instructions.ThankYouText = [{'page': 'Merci'}]
FR_Instructions.NotesForResultsPage = "La copie doit être transparente, avoir 12 lignes et 8 coins. Le score est de 0-2 ; 0 sans déficience ; 1 légère déficience ; 2 avec facultés affaiblies."

add('EN_CubeCopy_Instructions', function(){ Instructions = EN_Instructions});
add('FR_CubeCopy_Instructions', function(){ Instructions = FR_Instructions});


/* Deficient Index  - Missing Elements 
                                Mirror Image Missing
                                Sub-scales 

Deformation Index                                    
                               Deformation 
                               Rotation 
                               Sub-scales 
                               Closing Index 
*/




//Rouleau, I., D. P. Salmon, et al. (1992). "Quantitative and qualitative analyses of clock drawings in
//Alzheimer's and Huntington's disease." Brain Cogn 18(1543577): 70-87.