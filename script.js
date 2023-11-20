export function Form() {
    const [questions] = useState([
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
    const [answers, setAnswers] = useState([
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
}