let dados = [
        {
          titulo: "Assassin's Creed",
          descricao: "Assassin's Creed nos transporta para a Terra Santa durante as Cruzadas, onde encarnamos o papel de Altaïr Ibn-La'Ahad, um mestre assassino que busca recuperar sua honra após um fracasso. A jornada de Altaïr o leva a descobrir uma antiga guerra entre duas sociedades secretas: os Assassinos, que defendem o livre-arbítrio, e os Templários, que buscam o controle total sobre a humanidade.",
          link: "https://www.ubisoft.com/en-us/game/assassins-creed",
          tags:"altair"
        },
        {
          titulo: "Assassin's Creed II",
          descricao: "Assassin's Creed II apresenta você a Ezio, um novo assassino que carrega a linhagem mortal de seus ancestrais. Confronte uma trama épica de poder e corrupção enquanto aprimora sua arte de Assassino, manuseando armas e instrumentos projetados pelo lendário Leonardo Da Vinci em pessoa, nessa cativante e mortal continuação.",
          link: "https://www.ubisoft.com/pt-br/game/assassins-creed/assassins-creed-ii2",
          tags:"ezio italia itália II"
        },
        // ... e assim por diante para todos os jogos
        {
          titulo: "Assassin's Creed Brotherhood",
          descricao: "Derrotar os tiranos corruptos entrincheirados lá exigirá não apenas força, mas liderança, enquanto Ezio comanda uma irmandade inteira de Assassinos que ficarão ao seu lado. Apenas trabalhando em equipe poderão os Assassinos derrotar seus inimigos mortais e evitar a extinção de sua ordem.",
          link: "https://www.ubisoft.com/pt-br/game/assassins-creed/brotherhood",
          tags:"ezio brotherhood"
        },
        {
          titulo: "Assassin's Creed Revelations",
          descricao: "Ezio Auditore deve deixar sua vida para trás em busca de respostas, em busca da verdade. Em Assassin's Creed Revelations, o mestre assassino Ezio Auditore refaz os passos do lendário mentor Altaïr, em uma jornada de descoberta e revelação. É um caminho perigoso, que levará Ezio a Constantinopla, o coração do Império Otomano, onde um exército crescente de Templários ameaça desestabilizar a região.",
          link: "https://www.ubisoft.com/pt-br/game/assassins-creed/revelations",
          tags:"revelation ezio auditore"
        },
        {
            titulo: "Assassin's Creed III",
            descricao: "1775, as colônias americanas estão prestes a se revoltar. Agindo como Connor, um Assassino Americano Nativo, garanta a liberdade do seu povo e da sua nação. Das cidades caóticas até os campos de batalha, assassine seus inimigos de diferentes maneiras, usando uma enorme variedade de armas.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/assassins-creed-3-remastered",
            tags:"connor III"
          },
          {
            titulo: "Assassin's Black Flack",
            descricao: "Assassin's Creed IV Black Flag começa em 1715, quando piratas estabelecem uma república sem lei no Caribe e dominam a terra e os mares. Esses foras da lei paralisaram marinhas, interromperam comércio internacional e saquearam vastas fortunas. Eles ameaçaram as estruturas de poder que regiam a Europa, inspiraram a imaginação de milhões, e deixaram um legado que sobrevive até hoje.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/iv-black-flag",
            tags:"edward piratas black flack"

          },
          {
            titulo: "Assassin's Rogue",
            descricao: "Testemunhe a transformação de Shay, de um Assassino aventureiro a um Templário cruel e decidido, disposto a caçar seus antigos irmãos. Viva em primeira mão os eventos que levaram Shay a percorrer um caminho negro e o colocaram em um curso que mudou para sempre o destino da Irmandade dos Assassinos.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/rogue-remastered",
            tags:"shay templario templário rogue"

          },
          {
            titulo: "Assassin's Unity",
            descricao: "Paris, 1789 – A Revolução Francesa transforma a cidade magnífica de outrora em um lugar de terror e caos. Suas ruas de pedras são inundadas pelo sangue dos plebeus que ousaram se revoltar contra a aristocracia opressora.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/unity",
            tags:"unity frança revolução francessa paris"

          },
          {
            titulo: "Assassin's Chronicles",
            descricao: "Assassin's Creed Chronicles traz a emoção de ser um mestre Assassino em 2.5D. Explore as situações, esgueire-se e esconda-se para evitar ser detectado. Engane inimigos usando apitos e disfarces. Encontre seu alvo, mate e fuja.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/chronicles",
            tags:"chronicles"

          },
          {
            titulo: "Assassin's Syndicate",
            descricao: "Londres. 1868. A Revolução Industrial. Uma era de invenções e prosperidade, erguida sobre o trabalho escravo da classe trabalhadora. Seja o gângster assassino Jacob Frye e recrute sua gangue para lutar por justiça em nome da classe trabalhadora oprimida. Lidere o submundo para retomar Londres, em uma aventura visceral repleta de ação, intriga e combates brutais.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/syndicate",
            tags:"syndicate revolução industrial jacob"

          },
          {
            titulo: "Assassin's Origins",
            descricao: "Ambientado no misterioso Egito Antigo, Assassin' s Creed® Origins é um novo começo. Vivencie um novo jeito de lutar enquanto explora grandes pirâmides e tumbas escondidas por todo Egito Antigo. Encontre várias histórias memoráveis ao longo de sua jornada e descubra a origem da Irmandade dos Assassinos.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/origins",
            tags:"origins egito antigo "

          },
          {
            titulo: "Assassin's Odyssey",
            descricao: "Escreva sua própria odisséia épica e torne-se um lendário herói espartano em Assassin's Creed® Odyssey, uma aventura inspiradora na qual você deve forjar seu destino e definir seu próprio caminho em um mundo à beira de se dividir. Influencie como a história se desenvolve à medida que você experimenta um mundo rico e em constante mudança moldado por suas decisões.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/odyssey",
            tags:"odyssey kassandra alexios esparta grecia "

          },
          {
            titulo: "Assassin's Valhalla",
            descricao: "Torne-se Eivor, um invasor Viking poderoso, e leve seu clã das adversas costas da Noruega para um novo lar em meio às exuberantes terras agrícolas da Inglaterra do século IX. Explore um belo e misterioso mundo aberto onde você enfrentará inimigos brutais, atacará fortalezas, estabelecerá um novo assentamento para seu clã e formará alianças para alcançar a glória e garantir um lugar em Valhalla.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/valhalla",
            tags:"valhalla viking eivor noruega"

          },
          {
            titulo: "Assassin's Mirage",
            descricao: "Assassin's Creed Mirage, você é Basim, um astucioso ladino de rua com visões aterrorizantes e que está em busca de respostas e de justiça.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/mirage",
            tags:"mirage basim"

          },
          {
            titulo: "Assassin's Shadows",
            descricao: "Tivencie as histórias interligadas de Naoe, uma assassina shinobi extremamente hábil da província de Iga, e de Yasuke, poderoso samurai africano de importância histórica. Nos anos finais do turbulento período Sengoku, essa dupla extraordinária descobrirá seu destino em comum conforme dá início a uma nova era no Japão.",
            link: "https://www.ubisoft.com/pt-br/game/assassins-creed/shadows",
            tags:"shadows naoe samurai japão"

          },
];

    