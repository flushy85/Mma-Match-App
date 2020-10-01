const fightersArr = [
  {
      firstName: 'KHABIB',
      lastName: 'NURMAGOMEDOV',
      rank: 'C',
  },
  {
      firstName: 'Justin',
      lastName: 'Gaethje',
      rank: '1',
  },
  {
      firstName: 'Tony',
      lastName: 'Ferguson',
      rank: '2',
  },
  {
      firstName: 'Dustin',
      lastName: 'Poirier',
      rank: '3',
  },
  {
      firstName: 'Conor',
      lastName: 'McGregor',
      rank: '4',
  },
  {
      firstName: 'Dan',
      lastName: 'Hooker',
      rank: '5',
  },
  {
      firstName: 'Paul',
      lastName: 'Felder',
      rank: '6',
  },
  {
      firstName: 'Charles',
      lastName: 'Oliveira',
      rank: '7',
  },
  {
      firstName: 'Kevin',
      lastName: 'Lee',
      rank: '8',
  },
  {
      firstName: 'Al',
      lastName: 'Iaquinta',
      rank: '9',
  },
  {
      firstName: 'Diego',
      lastName: 'Ferreira',
      rank: '10',
  },
  {
      firstName: 'Gregor',
      lastName: 'Gillespie',
      rank: '11',
  },
  {
      firstName: 'Islam',
      lastName: 'Makhachev',
      rank: '12',
  },
  {
      firstName: 'Donald',
      lastName: 'Cerrone',
      rank: '13',
  },
  {
      firstName: 'Drew',
      lastName: 'Dober',
      rank: '14',
  },
  {
      firstName: 'Beneil',
      lastName: 'Dariush',
      rank: '15',
  },
  
  
  {
      'firstName': 'KAMARU',
      'lastName': 'USMAN',
      'rank': 'C',
  },
  {
      'firstName': 'Tyron',
      'lastName': 'Woodley',
      'rank': 1,
  },
  {
      'firstName': 'Colby',
      'lastName': 'Covington',
      'rank': 2,
  },
  {
      'firstName': 'Jorge',
      'lastName': 'Masvidal',
      'rank': 3,
  },
  {
      'firstName': 'Leon',
      'lastName': 'Edwards',
      'rank': 4,
  },
  {
      'firstName': 'Stephen',
      'lastName': 'Thompson',
      'rank': 5,
  },
  {
      'firstName': 'Gilbert',
      'lastName': 'Burns',
      'rank': 6,
  },
  {
      'firstName': 'Demian',
      'lastName': 'Maia',
      'rank': 7,
  },
  {
      'firstName': 'Michael',
      'lastName': 'Chiesa',
      'rank': 8,
  },
  {
      'firstName': 'Rafael',
      'lastName': 'Dos Anjos',
      'rank': 9,
  },
  {
      'firstName': 'Nate',
      'lastName': 'Diaz',
      'rank': 10,
  },
  {
      'firstName': 'Geoff',
      'lastName': 'Neal',
      'rank': 11,
  },
  {
      'firstName': 'Robbie',
      'lastName': 'Lawler',
      'rank': 12,
  },
  {
      'firstName': 'Vicente',
      'lastName': 'Luque',
      'rank': 13,
  },
  {
      'firstName': 'Conor',
      'lastName': 'McGregor',
      'rank': 14,
  },
  {
      'firstName': 'Anthony',
      'lastName': 'Pettis',
      'rank': 15,
  },
  
  
  {
      'firstName': 'ISRAEL',
      'lastName': 'ADESANYA',
      'rank': 'C',
  },
  {
      'firstName': 'Robert',
      'lastName': 'Whittaker',
      'rank': 1,
  },
  {
      'firstName': 'Paulo',
      'lastName': 'Costa',
      'rank': 2,
  },
  {
      'firstName': 'Jared',
      'lastName': 'Cannonier',
      'rank': 3,
  },
  {
      'firstName': 'Darren',
      'lastName': 'Till',
      'rank': 4,
  },
  {
      'firstName': 'Yoel',
      'lastName': 'Romero',
      'rank': 4,
  },
  {
      'firstName': 'Jack',
      'lastName': 'Hermansson',
      'rank': 6,
  },
  {
      'firstName': 'Kelvin',
      'lastName': 'Gastelum',
      'rank': 7,
  },
  {
      'firstName': 'Derek',
      'lastName': 'Brunson',
      'rank': 8,
  },
  {
      'firstName': 'Edmen',
      'lastName': 'Shahbazyan',
      'rank': 9,
  },
  {
      'firstName': 'Uriah',
      'lastName': 'Hall',
      'rank': 10,
  },
  {
      'firstName': 'Brad',
      'lastName': 'Tavares',
      'rank': 11,
  },
  {
      'firstName': 'Omari',
      'lastName': 'Akhmedov',
      'rank': 12,
  },
  {
      'firstName': 'Ian',
      'lastName': 'Heinisch',
      'rank': 13,
  },
  {
      'firstName': 'Antonio',
      'lastName': 'Carlos Junior',
      'rank': 14,
  },
  {
      'firstName': 'Krzysztof',
      'lastName': 'Jotko',
      'rank': 15,
  },
  
  
  {
      'firstName': 'JON',
      'lastName': 'JONES',
      'rank': 'C',
  },
  {
      'firstName': 'Dominick',
      'lastName': 'Reyes',
      'rank': 1,
  },
  {
      'firstName': 'Thiago',
      'lastName': 'Santos',
      'rank': 2,
  },
  {
      'firstName': 'Jan',
      'lastName': 'Blachowicz',
      'rank': 3,
  },
  {
      'firstName': 'Corey',
      'lastName': 'Anderson',
      'rank': 4,
  },
  {
      'firstName': 'Glover',
      'lastName': 'Teixeira',
      'rank': 5,
  },
  {
      'firstName': 'Anthony',
      'lastName': 'Smith',
      'rank': 6,
  },
  {
      'firstName': 'Volkan',
      'lastName': 'Oezdemir',
      'rank': 7,
  },
  {
      'firstName': 'Alexander',
      'lastName': 'Gustafsson',
      'rank': 8,
  },
  {
      'firstName': 'Aleksandar',
      'lastName': 'Rakic',
      'rank': 9,
  },
  {
      'firstName': 'Nikita',
      'lastName': 'Krylov',
      'rank': 10,
  },
  {
      'firstName': 'Johnny',
      'lastName': 'Walker',
      'rank': 11,
  },
  {
      'firstName': 'Misha',
      'lastName': 'Cirkunov',
      'rank': 12,
  },
  {
      'firstName': 'Ryan',
      'lastName': 'Spann',
      'rank': 13,
  },
  {
      'firstName': 'Magomed',
      'lastName': 'Ankalaev',
      'rank': 14,
  },
  {
      'firstName': 'Mauricio',
      'lastName': 'Rua',
      'rank': 15,
  },
  
  
  {
      'firstName': 'STIPE',
      'lastName': 'MIOCIC',
      'rank': 'C',
  },
  {
      'firstName': 'Daniel',
      'lastName': 'Cormier',
      'rank': 1,
  },
  {
      'firstName': 'Francis',
      'lastName': 'Ngannou',
      'rank': 2,
  },
  {
      'firstName': 'Curtis',
      'lastName': 'Blaydes',
      'rank': 3,
  },
  {
      'firstName': 'Derrick',
      'lastName': 'Lewis',
      'rank': 4,
  },
  {
      'firstName': 'Junior',
      'lastName': 'Dos Santos',
      'rank': 5,
  },
  {
      'firstName': 'Jairzinho',
      'lastName': 'Rozenstruik',
      'rank': 6,
  },
  {
      'firstName': 'Alexander',
      'lastName': 'Volkov',
      'rank': 7,
  },
  {
      'firstName': 'Alistair',
      'lastName': 'Overeem',
      'rank': 8,
  },
  {
      'firstName': 'Walt',
      'lastName': 'Harris',
      'rank': 9,
  },
  {
      'firstName': 'Aleksei',
      'lastName': 'Oleinik',
      'rank': 10,
  },
  {
      'firstName': 'Shamil',
      'lastName': 'Abdurakhimov',
      'rank': 11,
  },
  {
      'firstName': 'Blagoy',
      'lastName': 'Ivanov',
      'rank': 12,
  },
  {
      'firstName': 'Augusto',
      'lastName': 'Sakai',
      'rank': 13,
  },
  {
      'firstName': 'Sergei',
      'lastName': 'Pavlovich',
      'rank': 14,
  },
  {
      'firstName': 'Fabricio',
      'lastName': 'Werdum',
      'rank': 15,
  },
     
]