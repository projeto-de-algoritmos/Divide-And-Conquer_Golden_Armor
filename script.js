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
const [isModalOpen, setIsModalOpen] = false;
const [armor, setarmor] = useState(null);

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
const lista = [1, 3, 5, 2, 4, 6];
const resultado = countInversions(lista);
console.log(`Número de inversões: ${resultado.count}`);
console.log(`Lista ordenada: ${resultado.sortedArray}`);