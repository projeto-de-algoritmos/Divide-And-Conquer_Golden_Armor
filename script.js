const armors = ([
  {
    "id": 1,
    "name": "Armadura de Áries",
    "img": "./img/armadura_aries",
    "priorityList": [5, 4, 3, 2, 5, 2, 1, 3, 4, 4, 3, 2]
  },
  {
    "id": 2,
    "name": "Armadura de Touro",
    "img": "./img/armadura_touro",
    "priorityList": [4, 5, 3, 3, 4, 3, 5, 4, 3, 4, 2, 2]
  },
  {
    "id": 3,
    "name": "Armadura de Gêmeos",
    "img": "./img/armadura gemeos",
    "priorityList": [3, 3, 5, 4, 3, 4, 2, 5, 4, 3, 5, 4]
  },
  {
    "id": 4,
    "name": "Armadura de Câncer",
    "img": "./img/armadura_cancer",
    "priorityList": [4, 4, 4, 5, 3, 5, 4, 3, 3, 4, 3, 5]
  },
  {
    "id": 5,
    "name": "Armadura de Leão",
    "img": "./img/armadura_leao",
    "priorityList": [5, 4, 3, 4, 5, 3, 2, 3, 4, 4, 4, 3]
  },
  {
    "id": 6,
    "name": "Armadura de Virgem",
    "img": "./img/armadura_virgem",
    "priorityList": [4, 5, 5, 3, 3, 5, 5, 5, 3, 5, 3, 4]
  },
  {
    "id": 7,
    "name": "Armadura de Libra",
    "img": "./img/armadura_libra",
    "priorityList": [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
  },
  {
    "id": 8,
    "name": "Armadura de Escorpião",
    "img": "./img/armadura_escorpiao",
    "priorityList": [5, 3, 4, 5, 5, 5, 3, 3, 3, 4, 2, 5]
  },
  {
    "id": 9,
    "name": "Armadura de Sagitário",
    "img": "./img/armadura_sagitario",
    "priorityList": [5, 4, 3, 4, 5, 3, 2, 3, 5, 3, 4, 4]
  },
  {
    "id": 10,
    "name": "Armadura de Capricórnio",
    "img": "./img/armadura_capricornio",
    "priorityList": [5, 4, 4, 3, 4, 4, 5, 5, 3, 5, 2, 3]
  },
  {
    "id": 11,
    "name": "Armadura de Aquário",
    "img": "./img/armadura_aquario",
    "priorityList": [4, 3, 5, 4, 4, 5, 4, 5, 4, 3, 5, 4]
  },
  {
    "id": 12,
    "name": "Armadura de Peixes",
    "img": "./img/armadura_peixes",
    "priorityList": [3, 5, 4, 5, 3, 5, 4, 3, 3, 3, 4, 5]
  }
]);


const labels = ([
  {
    id: 1,
    label: "Determinação",
  },
  {
    id: 2,
    label: "Lealdade",
  },
  {
    id: 3,
    label: "Intelecto",
  },
  {
    id: 4,
    label: "Emocional",
  },
  {
    id: 5,
    label: "Coragem",
  },
  {
    id: 6,
    label: "Introspecção",
  },
  {
    id: 7,
    label: "Paciência",
  },
  {
    id: 8,
    label: "Planejamento",
  },
  {
    id: 9,
    label: "Otimismo",
  },
  {
    id: 10,
    label: "Disciplina",
  },
  {
    id: 11,
    label: "Originalidade",
  },
  {
    id: 12,
    label: "Intuição",
  },
]);

// Função para adicionar a lista de objetos ao elemento HTML
function displayFormList() {
  const formListElement = document.getElementById('formList');

  labels.forEach(label => {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    const labelElement = document.createElement('label');
    labelElement.textContent = label.label;

    const inputElement = document.createElement('input');
    inputElement.type = 'range';
    inputElement.classList.add('form-control-range');
    inputElement.id = `formControlRange${label.id}`;
    inputElement.min = 1;
    inputElement.max = 5;

    formGroup.appendChild(labelElement);
    formGroup.appendChild(inputElement);
    formListElement.appendChild(formGroup);
  });
}

var lista = [];
function calcularValores() {
  lista = [];

  labels.forEach(label => {
    const inputElement = document.getElementById(`formControlRange${label.id}`);
    const numberInput = parseFloat(inputElement.value);
    lista.push(numberInput);
  });

  var armadura = determinarCategoria(lista);
  console.log(armadura.name);

  const formulariosElement = document.querySelector('.formularios');
  const yourDivElement = document.querySelector('.your-div');
  formulariosElement.classList.add('hidden');
  yourDivElement.classList.add('hidden');

  displayArmorImage(armadura);
}

document.addEventListener('DOMContentLoaded', () => {
  displayFormList();
});

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

function countInversions(arr, listaUsuario) {
  if (arr.length <= 1) {
    return {
      count: 0,
      sortedArray: arr
    };
  }

  // Divide a lista ao meio
  const esquerda = arr;
  const direita = listaUsuario;

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
//const lista = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//const lista = [1, 1, 1, 1, 1];

function calculaResultado(lista) {
  const resultado = countInversions(lista);
  console.log(`Número de inversões: ${resultado.count}`);
  console.log(`Lista ordenada: ${resultado.sortedArray}`);

  const res = resultado.count;

  //tradutor de iversões para armaduras
  if (res >= 0 && res <= 5) {
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
}

// Função para determinar a categoria com base nas inversões
function determinarCategoria(listaAtributos) {
  let menorInversao = Infinity;
  let categoriaSelecionada = null;

  armors.forEach((armor) => {
    const priorityList = armor.priorityList;

    // Contar inversões
    let inversoes = 0;
    for (let i = 0; i < priorityList.length; i++) {
        if (listaAtributos[i] > priorityList[i]) {
          inversoes += (listaAtributos[i] - priorityList[i]);
        } else if (listaAtributos[i] < priorityList[i]) {
          inversoes += ( priorityList[i] - listaAtributos[i]);
        }
    }

    // Atualizar a categoria se encontrarmos uma inversão menor
    if (inversoes < menorInversao) {
      menorInversao = inversoes;
      categoriaSelecionada = armor;
    }
  });

  return categoriaSelecionada;
}

function displayArmorImage(armor) {
  const armorImageContainer = document.getElementById('armorImageContainer');
  const armorTitle = document.getElementById('armorTitle');
  armorImageContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

  if (armor) {
    const armorImage = document.createElement('img');
    armorImage.src = `${armor.img}.jpg`; // Adapte a extensão da imagem conforme necessário
    armorImage.alt = armor.name;

    const armorTitleText = document.createTextNode(armor.name);
    armorTitle.innerHTML = ''; // Limpa qualquer conteúdo anterior
    armorTitle.appendChild(armorTitleText);

    armorImageContainer.appendChild(armorImage);
  }
}
