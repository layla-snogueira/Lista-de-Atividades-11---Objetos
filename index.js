// 1. Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.

function quest1() {
let produto = {
    preco: 90,
    descricao: 'mousse'
  }
  console.log(`R$ ${produto.preco} \n${produto.descricao} `);
}


  // 2. Crie um objeto em JavaScript para colocar 5 atributos de um
  // notebook. Atribua os seguintes atributos:
  // Processador = i7
  // Memória = 16GB
  // Preço = 5000
  // HD = 1TB
  // SSD = 256GB
  // Por fim, mostre o nome e valor de cada atributo no console,
  // exatamente como está na atividade.

function quest2() {
    let notebook = {
        processador: 'i7',
        memoria: '16GB',
        preco: 5000,
        hd: '1TB',
        ssd: '256GB',
    }
    for (const index in notebook) {
        console.log(` ${index} => ${notebook[index]}`)
    }
}

  // 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
  // duas notas para o primeiro objeto, que será nosso primeiro aluno.
  // Agora crie mais um objeto para colocar informações do nosso
  // segundo aluno. Mostre as informações de cada aluno no console.
  // Mostre também a média do primeiro aluno e a média do segundo
  // aluno. Por fim mostre a média desta turma de 2 alunos.

function quest3() {
    const turma = []
    
    const aluno1 = {
        nome: 'maria',
        notas: [8, 3],
    };
    turma.push(aluno1)
    
    const aluno2 = {
        nome: 'odette',
        notas: [6, 9],
    };
    turma.push(aluno2)
    console.log(turma);
    
    let somaNotasTurma = 0;
    
    turma.forEach((aluno) => {
        const media =
        aluno.notas.reduce((valorInicial, proximo) => valorInicial + proximo) / aluno.notas.length;
    
        console.log(`As notas de ${aluno.nome} são: ${aluno.notas} e sua média é ${media}`);
    
        somaNotasTurma += media;
    });
    
    console.log(`A média da Turma ${somaNotasTurma / turma.length}`);   
}
  
  
  // 4. Crie cinco objetos JavaScript dentro de um Array contendo
  // nome(texto), idade(número), skills (array), ou seja um total de cinco
  
  // alunos. Agora crie uma função que receba estes cinco objetos e
  // mais um parâmetro skill. Dependendo da skill enviada mostrar no
  // console.log(), quais alunos têm a skill enviada por parâmetro,
  // mostrar todo o objeto.
  // Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
  // chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
  // Pedro e qual mais se encaixa nessa skill.
  
function quest4() {
    const alunos = [
        {
        nome: 'Melitta',
        idade: 7,
        skills: ['fullstack', 'js', 'react']
        },
        {
        nome: 'Gato',
        idade: 2,
        skills: ['css', 'html', 'js']
        },
        {
        nome: 'Gordinha',
        idade: 3,
        skills: ['fullstack', 'react', 'typescript']
        },
        {
        nome: 'Bernardo',
        idade: 4,
        skills: ['js', 'node', 'fullstack']
        },
        {
        nome: 'Preta',
        idade: 4,
        skills: ['typescript', 'node', 'css']
        },
    
    ]
    
    function encontrarskills(array, skillProcurada) {
    
        for (let aluno of array) {
        if (aluno.skills.includes(skillProcurada)) {
            console.log(`${aluno.nome}, ${aluno.idade}, [${aluno.skills}]`);
        }
        }
    }
    
    encontrarskills(alunos, "css");   
}
  
  // 5. Crie um cadastro de pessoas onde o usuário informe o nome, idade
  // e se está trabalhando ou não, se a pessoa estiver trabalhando
  // pergunte para ele o salário que está ganhando. Para cada pessoa
  // cadastrada, pergunte ao usuário se ele deseja continuar
  // cadastrando ou não. No final, mostre as pessoas que estão
  // desempregadas, as pessoas que estão empregadas separadas
  // pelas que ganham mais que 2500 e menos que 2500.
  // Exemplo de resultado:
  // Pessoas desempregadas:
  // Nome: Alessandro, Idade: 28
  // Nome: Alessandro, Idade: 28
  

function quest5() {
    function cadastroDeUsuario() {
        const usuarioCadastrado = []
        let continuar = true
    
        do {
    
        let nome = prompt('qual seu nome?')
        let idade = prompt('qual seu idade?')
        let salario = 0
        let trabalha = confirm('Voce trabalha?')
        if (trabalha) {
            salario = Number(prompt('qual seu salario?'))
        } else {
            alert('obrigada')
        }
    
        const usuario = {
            nome: nome,
            idade: idade,
            trabalha: trabalha,
            salario: salario
        }
    
        usuarioCadastrado.push(usuario)
    
        continuar = confirm('quer continuar?')
    
        } while (continuar);
    
        console.log(usuarioCadastrado);
    
    
        let desempregada = usuarioCadastrado.filter(function (pessoa) {
    
        if (!pessoa.trabalha) {
            return true
        }
    
        })
        console.log(desempregada);
        console.log(' => Pessoas desempregadas');
        desempregada.forEach(pessoa => {
        
        console.log(`\nNome: ${pessoa.nome}, Idade: ${pessoa.idade}\n`);
    
        });
    
    
        const menorQue2500 = usuarioCadastrado.filter(function (pessoa) {
        return pessoa.salario < 2500 && pessoa.salario != 0;
        })  
        console.log(' => Pessoas empregadas com salário menor que 2500:');
        menorQue2500.forEach(pessoa => {
        console.log(`\nNome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}\n`);
        });
    
        const manioQue2500 = usuarioCadastrado.filter(function (pessoa) {
        return pessoa.salario > 2500 && pessoa.salario != 0;
        })  
        console.log('=> Pessoas empregadas com salário maior que 2500:');
        manioQue2500.forEach(pessoa => {
        console.log(`\nNome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}\n`);
        });
    }
 cadastroDeUsuario()
}
  
  
  
  
  
  
  
  