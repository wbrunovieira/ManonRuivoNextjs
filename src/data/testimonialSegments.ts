// src/data/testimonialSegments.ts

export type Language = 'pt' | 'en' | 'es';

export interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

export type TestimonialSegments = Record<
  Language,
  TranscriptSegment[]
>;

export const testimonialSegmentsTatiana: TestimonialSegments =
  {
    pt: [
      {
        start: 0,
        end: 7,
        text: 'Olá, meu nome é Tatiana Barros, eu gostaria de compartilhar um pouquinho do que as sessões de barra de access tem feito em minha vida.',
      },
      {
        start: 7,
        end: 37,
        text: 'Eu tive quatro ou cinco sessões de barras com Manon e a palavra chave do que acontece das barras de access, na minha vida, é trazer consciência. Então coisas que você fica se debatendo a vida inteira e não sabe porque, com chega assim como um presente divino, te abre a consciência, te trazendo realmente respostas e outras vezes coisas que você mentia com ciência, que era um problema, então te mostra o problema e depois te traz a consciência.',
      },
      {
        start: 37,
        end: 55,
        text: 'Eu comecei a perder vários clientes e isso me deixava muito preocupada porque eram todos com mesmo problema. Então, não era com, em competência minha, era porque alguém tinha pedido trabalho, era porque alguém, sei lá, estava devendo muito conta hospitalar, era tudo com mesmo problema.',
      },
      {
        start: 55,
        end: 58,
        text: 'Então, nesse processo de pera de cliente, a consciência primeira que chegou foi a Copa Es sua, porque você está perdendo todos pelo mesmo problema, que é para o problema financeiros, ainda que eles não querem, eles têm que abandonar os seus serviços e a Copa Es sua está emitindo isso para o seu campo energético e está voltando como perdendo clientes, perdendo clientes, perdendo clientes.',
      },
      {
        start: 58,
        end: 70,
        text: 'Eu falei, meu Deus, como que a gente faz isso inconsciente? Então, eu fermei a primeira consciência.',
      },
      {
        start: 70,
        end: 85,
        text: 'Depois eu estava numa loja e tive uma trita mais interna do que qualquer coisa naquela loja, um desconforto e, pô, a mente faz assim, sabe, dá um... e aí me veio a consciência de que o problema é que você tem algumas traumas com a sua criança interior, alguns abandonos, alguns traumas, que você precisa dar para essa menina, que ela não teve.',
      },
      {
        start: 85,
        end: 100,
        text: 'Então você tem que se encontrar com ela toda noite e dar o que ela não teve. E a partir daí vai resolver seu problema. E de verdade, cada vez mais chegando o cliente, e zero, perno de clientes.',
      },
    ],
    en: [
      {
        start: 0,
        end: 10,
        text: "Hello, my name is Tatiana Barros, and I'd like to share a little bit about what the 'barra de access' sessions have done for my life.",
      },
      {
        start: 10,
        end: 25,
        text: "I had four or five sessions, and the key word in what happens in the 'barra de access' sessions in my life is bringing awareness. Things that you struggle with your entire life without knowing why suddenly come like a divine gift, opening your awareness and truly providing answers, and sometimes things you masked as issues become problems and then you are shown the problem before your awareness returns.",
      },
      {
        start: 25,
        end: 40,
        text: "I started losing several clients, and that made me very worried because they all had the same problem. It wasn't due to my competence, it was because someone had requested work, or maybe they owed a lot of hospital bills, all with the same issue.",
      },
      {
        start: 40,
        end: 55,
        text: "So, in this process of client loss, the first awareness that came was that you are losing them all due to the same financial problem. Even if they don't want to, they have to abandon their services, and this issue is being transmitted to your energy field, returning as losing clients, losing clients, losing clients.",
      },
      {
        start: 55,
        end: 70,
        text: 'I thought, my God, how do we do this unconsciously? Then I secured the first awareness.',
      },
      {
        start: 70,
        end: 85,
        text: 'Later, I was in a store and felt an inner turmoil unlike anything there, a discomfort and, well, the mind does this thing, you know, and then I became aware that the problem is that you have some traumas with your inner child, some abandonments, some issues that you need to give to that little girl who never received them.',
      },
      {
        start: 85,
        end: 100,
        text: 'So you need to connect with her every night and give her what she never had. And truly, as the client kept arriving, there were no more losses.',
      },
    ],
    es: [
      {
        start: 0,
        end: 10,
        text: "Hola, mi nombre es Tatiana Barros, y me gustaría compartir un poco de lo que las sesiones de 'barra de access' han hecho en mi vida.",
      },
      {
        start: 10,
        end: 25,
        text: "Tuve cuatro o cinco sesiones, y la palabra clave en lo que ocurre en las sesiones de 'barra de access' en mi vida es traer conciencia. Cosas con las que lidias toda tu vida sin saber por qué, de repente llegan como un regalo divino, abriendo tu conciencia y realmente proporcionando respuestas, y a veces las cosas que disimulabas como problemas se muestran y luego tu conciencia regresa.",
      },
      {
        start: 25,
        end: 40,
        text: 'Empecé a perder varios clientes, y eso me preocupaba mucho porque todos tenían el mismo problema. No era por mi competencia, sino porque alguien había solicitado trabajo, o tal vez debían muchas cuentas hospitalarias, todos con el mismo problema.',
      },
      {
        start: 40,
        end: 55,
        text: 'Entonces, en este proceso de pérdida de clientes, la primera conciencia que llegó fue que estás perdiendo a todos por el mismo problema financiero. Aunque no quieran, deben abandonar sus servicios, y esto se transmite a tu campo energético, regresando como pérdida de clientes, pérdida de clientes, pérdida de clientes.',
      },
      {
        start: 55,
        end: 70,
        text: 'Pensé, Dios mío, ¿cómo hacemos esto inconscientemente? Entonces aseguré la primera conciencia.',
      },
      {
        start: 70,
        end: 85,
        text: 'Luego, estaba en una tienda y sentí una turbulencia interna más fuerte que cualquier otra cosa en esa tienda, un malestar y, bueno, la mente hace esto, ya sabes, y entonces me di cuenta de que el problema es que tienes algunos traumas con tu niño interior, algunos abandonos, algunos traumas que necesitas darle a esa niña que no los tuvo.',
      },
      {
        start: 85,
        end: 100,
        text: 'Entonces, debes conectarte con ella cada noche y darle lo que nunca tuvo. Y verdaderamente, a medida que llegaban los clientes, ya no había más pérdidas.',
      },
    ],
  };

export const testimonialSegmentsRenato: TestimonialSegments =
  {
    pt: [
      {
        start: 0,
        end: 20,
        text: 'Um boa tarde, meu nome é Renato Rivelles, eu vim aqui compartilhar com vocês e escrever minha primeira experiência com barra de axas, que foi com a manon ruivo.',
      },
      {
        start: 20,
        end: 40,
        text: 'Eu agentei a sessão, fui até o local combinado, sem conhecimento prévio e também zero expectativas. Fiz o procedimento, durou mais ou menos uma hora e fui instrído pela manon para observar se houvesse alguma mudança no meu pensamento, no meu comportamento e assim foi.',
      },
      {
        start: 40,
        end: 60,
        text: 'Já saí com o relaxamento, bem gostoso e bem-intenso da sessão na mesma noite; também aconteceu algo muito interessante. Eu comecei a lembrar de algumas pessoas e, cada vez que lembrava de alguém, vinham as palavras que eu deveria ter dito a elas. Exatamente o que eu deveria ter dito. Isso me causou uma enorme satisfação.',
      },
      {
        start: 60,
        end: 80,
        text: "Houve um momento quase de sonho, em que, em outro dia, também aconteceu algo muito interessante. Eu fui para frente da televisão, estava assistindo a um show e, enquanto tomava um caipirinha, comecei a fazer alguns alongamentos acompanhando as frases na TV e percebi que minha expressividade estava muito maior do que o normal. Eu estava muito animado, a ponto de ter algumas gagueiras, chegando a dizer: 'não é possível, essa pessoa!'",
      },
      {
        start: 80,
        end: 100,
        text: 'Depois disso, no dia seguinte, acordei com uma vontade intensa de conversar com pessoas com quem não falava há muito tempo. Não deixei de falar com meus contatos diários, mas entrei em contato com aqueles com quem não conversava há anos. Curiosamente, as respostas foram muito positivas, como se eu tivesse conversado com elas apenas um dia antes.',
      },
      {
        start: 100,
        end: 120,
        text: 'Foi maravilhoso. Liguei para cerca de quatro pessoas e senti um sentimento incrível. Depois disso, corri para a Manon para contar minhas experiências e agendei a segunda sessão de barra de axas. Eu ainda não pesquisei sobre essa técnica, mas sou a prova viva de que ela realmente gera todas essas sensações positivas e a recomendo super. Se você tiver interesse, vai muito a pena. Tchau, boa sorte.',
      },
    ],
    en: [
      {
        start: 0,
        end: 20,
        text: "Good afternoon, my name is Renato Rivelles, and I'm here to share with you and write about my first experience with Access Bars, which was with Manon Ruivo.",
      },
      {
        start: 20,
        end: 40,
        text: 'I arranged the session, went to the agreed location without any prior knowledge and with zero expectations. I underwent the procedure, which lasted about an hour, and Manon instructed me to observe any changes in my thoughts or behavior, and so it happened.',
      },
      {
        start: 40,
        end: 60,
        text: 'I left feeling relaxed, with a very pleasant and intense post-session relaxation that same night. Something very interesting also happened. I began recalling certain people, and each time I remembered someone, words came to mind that I should have said to them—exactly what I should have said. This gave me enormous satisfaction.',
      },
      {
        start: 60,
        end: 80,
        text: "There was a surreal moment, almost like a dream, on another day when something very interesting occurred. I was in front of the television, watching a show, and while having a caipirinha, I started stretching along with the phrases on TV and realized that my expressiveness was much greater than usual. I was very animated—even stuttering at one point, saying, 'this can't be possible, this person!'",
      },
      {
        start: 80,
        end: 100,
        text: "After that, the next day, I woke up with a strong desire to speak with people I hadn't talked to in a long time. I didn't stop speaking with my daily contacts, but I reached out to those I hadn't spoken to in years. Interestingly, the responses were very positive, as if I had spoken with them just a day before.",
      },
      {
        start: 100,
        end: 120,
        text: "It was wonderful. I called about four people and felt an amazing sensation. After that, I rushed to Manon to share my experiences and scheduled a second Access Bars session. I haven't researched this technique yet, but I am living proof that it truly generates all these positive sensations, and I highly recommend it. If you're interested, it's well worth it. Goodbye, and good luck.",
      },
    ],
    es: [
      {
        start: 0,
        end: 20,
        text: 'Buenas tardes, mi nombre es Renato Rivelles, y vengo a compartir con ustedes y a escribir sobre mi primera experiencia con Access Bars, que fue con Manon Ruivo.',
      },
      {
        start: 20,
        end: 40,
        text: 'Organicé la sesión, fui al lugar acordado sin ningún conocimiento previo y con cero expectativas. Me sometí al procedimiento, que duró aproximadamente una hora, y Manon me instruyó para observar si había algún cambio en mis pensamientos o comportamientos, y así fue.',
      },
      {
        start: 40,
        end: 60,
        text: 'Salí sintiéndome relajado, con una sensación muy agradable e intensa esa misma noche; además, me sucedió algo muy interesante. Comencé a recordar a ciertas personas, y cada vez que recordaba a alguien, venían a mi mente palabras que debería haberles dicho, exactamente lo que debía haber dicho. Esto me produjo una enorme satisfacción.',
      },
      {
        start: 60,
        end: 80,
        text: "Hubo un momento casi surrealista, como un sueño, en otro día en que sucedió algo muy interesante. Estaba frente al televisor, viendo un show, y mientras tomaba una caipirinha, empecé a estirarme siguiendo las frases de la televisión y me di cuenta de que mi expresividad era mucho mayor de lo habitual. Estaba muy animado, incluso tropezando al punto de decir: '¡no es posible, esta persona!'",
      },
      {
        start: 80,
        end: 100,
        text: 'Después de eso, al día siguiente, desperté con un fuerte deseo de hablar con personas con las que no había conversado en mucho tiempo. No dejé de hablar con mis contactos diarios, pero me puse en contacto con aquellos con quienes no había hablado en años. Curiosamente, las respuestas fueron muy positivas, como si hubiera hablado con ellos apenas el día anterior.',
      },
      {
        start: 100,
        end: 120,
        text: 'Fue maravilloso. Llamé a unas cuatro personas y sentí una sensación increíble. Después de eso, no pude esperar para correr hacia Manon y contar mis experiencias, y agendé mi segunda sesión de Access Bars. Aún no he investigado sobre esta técnica, pero soy prueba viviente de que realmente genera todas estas sensaciones positivas y la recomiendo enormemente. Si estás interesado, realmente vale la pena. Adiós, y buena suerte.',
      },
    ],
  };
