//Escrever uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    switch (anos) {
        case 1:
          anos <= 1
          return "Iniciante"
        case 2:
          anos > 1 && anos <= 3
          return "Intermediário"
        case 3:
          anos >= 4 && anos <= 6
          return "Avançado"
        default:
          anos > 7
          return "Jedi Master"
      }
   }
   var anosEstudo = 2;
   console.log(experiencia(anosEstudo));

   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master