    const labels = ([
      {
        id: 1,
        label: "Seu nível de Determinação",
      },
      {
        id: 2,
        label: "Seu nível Lealdade",
      },   
      {
        id: 3,
        label: "Seu nível de Intelecto?",
      },
      {
        id: 4,
        label: "Seu nível de Emocional",
      },
      {
        id: 5,
        label: "Seu nível de Coragem",
      },
      {
        id: 6,
        label: "Seu nível de Introspectividade",
      },
      {
        id: 7,
        label: "Seu nível de Paciência",
      },
      {
        id: 8,
        label: "Seu nível de Planejamento",
      },
      {
        id: 9,
        label: "Seu nível de Otimismo",
      },
      {
        id: 10,
        label: "Seu nível de Disciplina",
      },
      {
        id: 11,
        label: "Seu nível de Originalidade",
      },
      {
        id: 12,
        label: "Seu nível de Intuitividade",
      },
    ]);
    
    const [answers, setAnswers] = ([
      {
        id: 1,
        label: "Determinação",
        priority: 5,
      },
      {
        id: 2,
        label: "Lealdade",
        priority: 5,
      },
      {
        id: 3,
        label: "Intelecto",
        priority: 5,
      },
      {
        id: 4,
        label: "Emocional",
        priority: 5,
      },
      {
        id: 5,
        label: "Coragem",
        priority: 5,
      },
      {
        id: 6,
        label: "Introspectividade",
        priority: 5,
      },
      {
        id: 7,
        label: "Paciência",
        priority: 5,
      },
      {
        id: 8,
        label: "Planejamento",
        priority: 5,
      },
      {
        id: 9,
        label: "Otimismo",
        priority: 5,
      },
      {
        id: 10,
        label: "Disciplina",
        priority: 5,
      },
      {
        id: 11,
        label: "Originalidade",
        priority: 5,
      },
      {
        id: 12,
        label: "Intuitividade",
        priority: 5,
      },
    ]);


const [priorityList, setPriorityList] = ([1, 2, 3, 4]);
const [isModalOpen, setIsModalOpen] = [false];
const [armor, setArmor] = [null];


function countInversions(arr) {
  if (arr.length <= 1) {
      return {
          count: 0,
          sortedArray: arr
      };
  }

  // Divide a lista ao meio
  const meio = Math.floor(arr.length / 2);
  const esquerda = arr.slice(0, meio);
  const direita = arr.slice(meio);

  // Chama recursivamente para as duas metades
  const invEsquerda = countInversions(esquerda);
  const invDireita = countInversions(direita);

  // Combina as duas metades ordenadas e conta as inversões
  const mergeResult = mergeAndCountInversions(invEsquerda.sortedArray, invDireita.sortedArray);

  // Retorna o total de inversões
  const totalInversoes = invEsquerda.count + invDireita.count + mergeResult.count;
  return {
      count: totalInversoes,
      sortedArray: mergeResult.sortedArray
  };
}

function mergeAndCountInversions(esquerda, direita) {
  let inversions = 0;
  let i = 0;
  let j = 0;
  const resultado = [];

  while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] <= direita[j]) {
          resultado.push(esquerda[i]);
          i++;
      } else {
          resultado.push(direita[j]);
          // Se o elemento da metade direita é menor, então é uma inversão
          inversions += esquerda.length - i;
          j++;
      }
  }

  // Adiciona os elementos restantes das duas metades
  resultado.push(...esquerda.slice(i));
  resultado.push(...direita.slice(j));

  return {
      count: inversions,
      sortedArray: resultado
  };
}

// Exemplo de uso:
//const lista = [1, 3, 5, 2, 4, 6, 7, 8, 9, 10, 11, 12];
const lista = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//const lista = [1, 1, 1, 1, 1];
const resultado = countInversions(lista);
console.log(`Número de inversões: ${resultado.count}`);
console.log(`Lista ordenada: ${resultado.sortedArray}`);

const res = resultado.count;

//tradutor de iversões para armaduras
if (res >= 0 && res <=5) {
  console.log("Armadura de Áries");
} else if (res > 5 && res <= 10) {
  console.log("Armadura de Touro");
} else if (res > 10 && res <= 15) {
  console.log("Armadura de Gêmeos");
} else if (res > 15 && res <= 20) {
  console.log("Armadura de Câncer");
} else if (res > 20 && res <= 25) {
  console.log("Armadura de Leão");
} else if (res > 25 && res <= 30) {
  console.log("Armadura de Virgem");
} else if (res > 30 && res <= 35) {
  console.log("Armadura de Libra");
} else if (res > 35 && res <= 40) {
  console.log("Armadura de Escorpião");
} else if (res > 40 && res <= 45) {
  console.log("Armadura de Sagitário");
} else if (res > 45 && res <= 50) {
  console.log("Armadura de Capricórnio");
} else if (res > 50 && res <= 55) {
  console.log("Armadura de Aquário");
} else if (res > 60 && res <= 66) {
  console.log("Armadura de Peixes");
} 