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
        text: 'Eu tive quatro ou cinco sessões de barras com Manon e a palavra chave do que acontece das barras de access, na minha vida, é trazer consciência. Então coisas que você fica se debatendo a vida inteira e não sabe porque, com chega assim como um presente divino, te abre a consciência, te trazendo realmente respostas e outras vezes coisas que você nem tinha conciência que era um problema, então te mostra o problema e depois te traz a consciência.',
      },
      {
        start: 37,
        end: 57,
        text: 'Eu comecei a perder vários clientes e isso me deixava muito preocupada porque eram todos com mesmo problema. Então, não era imcompetência minha, era porque alguém tinha pedido trabalho, era porque alguém, sei lá, estava devendo muito conta hospitalar, era tudo com mesmo problema.',
      },
      {
        start: 57,
        end: 79,
        text: 'Então, nesse processo de perda de cliente, a consciência primeira que chegou foi a culpa é sua, porque você está perdendo todos pelo mesmo problema, que é para o problema financeiros, ainda que eles não queiram, eles têm que abandonar os seus serviços e a culpa é sua está emitindo isso para o seu campo energético e está voltando como perdendo clientes, perdendo clientes, perdendo clientes.',
      },
      {
        start: 79,
        end: 83,
        text: 'Eu falei, meu Deus, como que a gente faz isso inconsciente? Então, eu foi a minha primeira consciência.',
      },
      {
        start: 83,
        end: 105,
        text: 'Depois eu estava numa loja e tive um atrito mais interno do que qualquer coisa naquela loja, um desconforto e, pô, a mente faz assim, sabe, dá um... e aí me veio a consciência de que o problema é que você tem algumas traumas com a sua criança interior, alguns abandonos, alguns traumas, que você precisa dar para essa menina, que ela não teve.',
      },
      {
        start: 105,
        end: 116,
        text: 'Então você tem que se encontrar com ela toda noite e dar o que ela não teve. E a partir daí vai resolver seu problema. E de verdade, cada vez mais chegando o cliente, e zero, perda de clientes.',
      },
    ],
    en: [
      {
        start: 0,
        end: 7,
        text: "Hello, my name is Tatiana Barros, and I'd like to share a little bit about what the access bars sessions have done for my life.",
      },
      {
        start: 7,
        end: 37,
        text: '“I had four or five sessions of Access Bars with Manon, and the key aspect of what happens with Access Bars in my life is that it brings awareness. So, things that you’ve been struggling with your whole life without knowing why come as a divine gift, opening your awareness, truly bringing answers. Sometimes it even shows you problems you didn’t know existed, and then it brings awareness to you about those problems.”',
      },
      {
        start: 37,
        end: 57,
        text: "I started losing several clients, and that made me very worried because they all had the same problem. It wasn't due to my competence, it was because someone had requested work, or maybe they owed a lot of hospital bills, all with the same issue.",
      },
      {
        start: 57,
        end: 79,
        text: "So, in this process of client loss, the first awareness that came was that you are losing them all due to the same financial problem. Even if they don't want to, they have to abandon their services, and this issue is being transmitted to your energy field, returning as losing clients, losing clients, losing clients.",
      },
      {
        start: 79,
        end: 83,
        text: 'I thought, my God, how do we do this unconsciously? Then I secured the first awareness.',
      },
      {
        start: 83,
        end: 105,
        text: 'Later, I was in a store and felt an inner turmoil unlike anything there, a discomfort and, well, the mind does this thing, you know, and then I became aware that the problem is that you have some traumas with your inner child, some abandonments, some issues that you need to give to that little girl who never received them.',
      },
      {
        start: 105,
        end: 116,
        text: 'So you need to connect with her every night and give her what she never had. And truly, as the client kept arriving, there were no more losses.',
      },
    ],
    es: [
      {
        start: 0,
        end: 7,
        text: "Hola, mi nombre es Tatiana Barros, y me gustaría compartir un poco de lo que las sesiones de 'barra de access' han hecho en mi vida.",
      },
      {
        start: 7,
        end: 37,
        text: 'Tuve cuatro o cinco sesiones de Access Bars con Manon y la palabra clave de lo que sucede en Access Bars, en mi vida, es traer conciencia. Así, cosas por las que te debates toda la vida y no sabes por qué, llegan como un regalo divino, abriéndote la conciencia y proporcionándote verdaderas respuestas; y otras veces, cosas de las que ni siquiera eras consciente de que eran un problema, te muestran el problema y luego te traen conciencia.',
      },
      {
        start: 37,
        end: 57,
        text: 'Empecé a perder varios clientes, y eso me preocupaba mucho porque todos tenían el mismo problema. No era por mi competencia, sino porque alguien había solicitado trabajo, o tal vez debían muchas cuentas hospitalarias, todos con el mismo problema.',
      },
      {
        start: 57,
        end: 79,
        text: 'Entonces, en este proceso de pérdida de clientes, la primera conciencia que llegó fue que estás perdiendo a todos por el mismo problema financiero. Aunque no quieran, deben abandonar sus servicios, y esto se transmite a tu campo energético, regresando como pérdida de clientes, pérdida de clientes, pérdida de clientes.',
      },
      {
        start: 79,
        end: 83,
        text: 'Pensé, Dios mío, ¿cómo hacemos esto inconscientemente? Entonces aseguré la primera conciencia.',
      },
      {
        start: 83,
        end: 105,
        text: 'Luego, estaba en una tienda y sentí una turbulencia interna más fuerte que cualquier otra cosa en esa tienda, un malestar y, bueno, la mente hace esto, ya sabes, y entonces me di cuenta de que el problema es que tienes algunos traumas con tu niño interior, algunos abandonos, algunos traumas que necesitas darle a esa niña que no los tuvo.',
      },
      {
        start: 105,
        end: 116,
        text: 'Entonces, debes conectarte con ella cada noche y darle lo que nunca tuvo. Y verdaderamente, a medida que llegaban los clientes, ya no había más pérdidas.',
      },
    ],
  };

export const testimonialSegmentsRenato: TestimonialSegments =
  {
    pt: [
      {
        start: 0,
        end: 10,
        text: 'boa tarde, meu nome é Renato Rivelles, eu vim aqui compartilhar com vocês e escrever minha primeira experiência com barra de access, que foi com a Manon Ruivo.',
      },
      {
        start: 10,
        end: 38,
        text: 'Eu agendei a sessão, fui até o local combinado, sem conhecimento prévio e também zero expectativas. Fiz o procedimento, durou mais ou menos uma hora e fui instruído pela Manon para observar se houvesse alguma mudança no meu pensamento, no meu comportamento e assim foi.',
      },
      {
        start: 38,
        end: 79,
        text: 'Já saí com o relaxamento, bem gostoso e bem-intenso da sessão na mesma noite; também aconteceu algo muito interessante. Eu comecei a lembrar de algumas pessoas e, cada vez que lembrava dessa pessoa, uma por uma, também vinham as palavras que eu deveria ter dito a elas. Exatamente o que eu deveria ter dito. Isso me causou uma enorme satisfação enorme. Fui Dormir',
      },
      {
        start: 79,
        end: 114,
        text: "Tive uma noite boa de sono, em outro dia, também aconteceu algo muito interessante. Eu fui para frente da televisão, estava assistindo a um show e, eu tenho um carpete, comecei a fazer alguns alongamentosna frente da TV e percebi que minha flexibilidade estava muito maior do que o normal. Eu estava muito flexivel, a ponto de ter algumas gargalhadas, chegando a dizer: 'não é possível, essa superou!'",
      },
      {
        start: 114,
        end: 150,
        text: 'Depois disso, também,  no dia seguinte, acordei com uma vontade intensa de conversar com pessoas com quem não falava de algum jeito, não falava há anos. De algum jeito me dava esses sentimento.e também parei de falar com as pessoas que eu falava diariamente. Não deixei de falar com meus contatos diários, mas entrei em contato com aqueles com quem não conversava há anos. Curiosamente, as respostas foram muito positivas, como se eu tivesse conversado com elas apenas um dia antes.',
      },
      {
        start: 150,
        end: 205,
        text: 'Foi muito bom. Liguei para cerca de quatro ou cinco pessoas também e foi maravilhoso esse sentimento. Depois disso, eu não aguentei eu  corri para a Manon para contar minhas experiências e agendei a segunda sessão de barra de access. Eu ainda não pesquisei sobre essa técnica, mas sou a prova viva de que ela realmente gera todas essas sensações positivas e a  super recomendo. Se você tiver interesse, va muito a pena. Tchau, boa sorte.',
      },
    ],
    en: [
      {
        start: 0,
        end: 10,
        text: 'Good afternoon, my name is Renato Rivelles. I came here to share with you and write about my first experience with Access Bars, which was with Manon Ruivo.',
      },
      {
        start: 10,
        end: 38,
        text: 'I scheduled the session, went to the agreed location with no prior knowledge and zero expectations. I underwent the procedure, which lasted for about an hour, and was instructed by Manon to observe any changes in my thoughts and behavior—and they did occur.',
      },
      {
        start: 38,
        end: 79,
        text: 'I left feeling relaxed, experiencing both a pleasant and intense post-session calm that same night; something very interesting also happened. I started remembering certain people and, with each person, the words I should have said to them came to mind. Exactly what I should have said. This brought me immense satisfaction. I went to sleep.',
      },
      {
        start: 79,
        end: 114,
        text: "I had a good night’s sleep, and on another day something else very interesting occurred. I was watching a show on TV and, while doing some stretches on my carpet in front of the television, I realized that my flexibility was much greater than usual. I was so flexible that I even burst into laughter, exclaiming, 'No way, this is amazing!'",
      },
      {
        start: 114,
        end: 150,
        text: 'After that, the next day, I woke up with an intense desire to reconnect with people I hadn’t spoken to in years. Somehow, I got these feelings and also stopped talking to some of the people I usually speak with daily. I didn’t cut off my regular contacts, but I reached out to those I hadn’t spoken with in ages. Interestingly, the responses were very positive, as if I had spoken to them just the day before.',
      },
      {
        start: 150,
        end: 205,
        text: "It was a wonderful experience. I called about four or five people, and that feeling was truly remarkable. Afterward, I couldn’t contain myself—I rushed to Manon to share my experiences and booked a second Access Bars session. I haven’t researched this technique further yet, but I am living proof that it really brings about all these positive sensations, and I highly recommend it. If you're interested, it’s definitely worth it. Goodbye, and good luck.",
      },
    ],
    es: [
      {
        start: 0,
        end: 10,
        text: 'Buenas tardes, mi nombre es Renato Rivelles. Vine aquí para compartir con ustedes y escribir sobre mi primera experiencia con Barras de Access, que fue con Manon Ruivo.',
      },
      {
        start: 10,
        end: 38,
        text: 'Agendé la sesión, fui al lugar acordado sin conocimiento previo y sin ninguna expectativa. Realicé el procedimiento, que duró aproximadamente una hora, y Manon me indicó que observara si notaba algún cambio en mis pensamientos y comportamiento, y así fue.',
      },
      {
        start: 38,
        end: 79,
        text: 'Salí sintiéndome relajado, con una sensación placentera e intensa después de la sesión. Esa misma noche ocurrió algo muy interesante. Empecé a recordar a ciertas personas y, con cada una, me venían a la mente las palabras que debería haberles dicho. Exactamente lo que debería haber dicho. Esto me causó una enorme satisfacción. Me fui a dormir.',
      },
      {
        start: 79,
        end: 114,
        text: "Tuve una buena noche de sueño y, al día siguiente, ocurrió algo más muy interesante. Estaba viendo un espectáculo en la televisión y, mientras hacía algunos estiramientos sobre mi alfombra frente al televisor, me di cuenta de que mi flexibilidad era mucho mayor de lo normal. Estaba tan flexible que incluso me reí, diciendo: '¡No puede ser, esto es increíble!'",
      },
      {
        start: 114,
        end: 150,
        text: 'Después de eso, al día siguiente, me desperté con un intenso deseo de volver a hablar con personas con las que no había hablado en años. De alguna manera, tuve estos sentimientos y también dejé de hablar con algunas de las personas con las que hablaba a diario. No dejé de comunicarme con mis contactos habituales, pero me puse en contacto con aquellos con quienes no hablaba desde hacía mucho tiempo. Curiosamente, las respuestas fueron muy positivas, como si hubiera hablado con ellas solo un día antes.',
      },
      {
        start: 150,
        end: 205,
        text: 'Fue una experiencia maravillosa. Llamé a unas cuatro o cinco personas, y esa sensación fue realmente increíble. Después de eso, no pude contenerme—corrí a contarle mis experiencias a Manon y programé una segunda sesión de Barras de Access. Aún no he investigado más sobre esta técnica, pero soy prueba viviente de que realmente genera todas estas sensaciones positivas, y la recomiendo muchísimo. Si te interesa, realmente vale la pena. Adiós y mucha suerte.',
      },
    ],
  };
