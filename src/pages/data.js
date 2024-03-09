const data = [
  {
    name: "The Alchemist",
    id: "1",
    isBorrowed: false,
    category: "Philosophical",
    author: "Paulo Coelho",
    description:
      "An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt.",
    picture:
      "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_640.jpg",
  },
  {
    name: "Brave New World",
    id: "2",
    isBorrowed: true,
    category: "Dystopian",
    author: "Aldous Huxley",
    description:
      "A dystopian novel by English author Aldous Huxley, set in a futuristic World State.",
    picture:
      "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_640.jpg",
  },
  {
    name: "Crime and Punishment",
    id: "3",
    isBorrowed: false,
    category: "Classic",
    author: "Fyodor Dostoevsky",
    description:
      "A novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger.",
    picture:
      "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_640.jpg",
  },
  {
    name: "Moby Dick",
    id: "4",
    isBorrowed: true,
    category: "Classic",
    author: "Herman Melville",
    description:
      "An 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod.",
    picture:
      "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_640.jpg",
  },
  {
    name: "The Picture of Dorian Gray",
    id: "5",
    isBorrowed: false,
    category: "Gothic",
    author: "Oscar Wilde",
    description:
      "A philosophical novel by Oscar Wilde, who was a major proponent of the aesthetic movement which emphasized aesthetic values more than moral or social themes.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "Frankenstein",
    id: "6",
    isBorrowed: true,
    category: "Gothic",
    author: "Mary Shelley",
    description:
      "A novel about Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "The Brothers Karamazov",
    id: "7",
    isBorrowed: false,
    category: "Philosophical",
    author: "Fyodor Dostoevsky",
    description:
      "A philosophical novel set in 19th century Russia, exploring themes of faith, doubt, and reason, told through the lives of the Karamazov family.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "The Little Prince",
    id: "8",
    isBorrowed: true,
    category: "Fable",
    author: "Antoine de Saint-Exupéry",
    description:
      "A poetic tale, with watercolor illustrations by the author, in which a pilot stranded in the desert meets a young prince fallen to Earth from a tiny asteroid.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "War and Peace",
    id: "9",
    isBorrowed: false,
    category: "Historical",
    author: "Leo Tolstoy",
    description:
      "A novel that chronicles the French invasion of Russia and the impact of the Napoleonic era on Russian society.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "A Tale of Two Cities",
    id: "10",
    isBorrowed: true,
    category: "Historical",
    author: "Charles Dickens",
    description:
      "Set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie.",
    picture:
      "https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_640.jpg",
  },
  {
    name: "The Da Vinci Code",
    id: "11",
    isBorrowed: false,
    category: "Thriller",
    author: "Dan Brown",
    description:
      "A mystery thriller novel that follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been married to Mary Magdalene.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    id: "12",
    isBorrowed: true,
    category: "Non-fiction",
    author: "Yuval Noah Harari",
    description:
      "Explores the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century, focusing on Homo sapiens.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "Invisible Man",
    id: "13",
    isBorrowed: false,
    category: "Classic",
    author: "Ralph Ellison",
    description:
      "A novel that addresses many of the social and intellectual issues facing African-Americans in the early twentieth century.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "Gone with the Wind",
    id: "14",
    isBorrowed: true,
    category: "Historical",
    author: "Margaret Mitchell",
    description:
      "A novel set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era. It tells the story of Scarlett O'Hara, the strong-willed daughter of a plantation owner.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "The Grapes of Wrath",
    id: "15",
    isBorrowed: false,
    category: "Historical",
    author: "John Steinbeck",
    description:
      "The story follows the fortunes of a poor family as they travel from the Dust Bowl region to California, seeking jobs, land, dignity, and a future.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "The Great Alone",
    id: "16",
    isBorrowed: true,
    category: "Contemporary",
    author: "Kristin Hannah",
    description:
      "A daring, beautiful, stay-up-all-night story about love and loss, the fight for survival, and the wildness that lives in both man and nature.",
    picture:
      "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_640.jpg",
  },
  {
    name: "The Nightingale",
    id: "17",
    isBorrowed: false,
    category: "Historical",
    author: "Kristin Hannah",
    description:
      "The story of two sisters, separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied, war-torn France.",
    picture:
      "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_640.jpg",
  },
  {
    name: "Educated",
    id: "18",
    isBorrowed: true,
    category: "Memoir",
    author: "Tara Westover",
    description:
      "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    picture:
      "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_640.jpg",
  },
  {
    name: "Becoming",
    id: "19",
    isBorrowed: false,
    category: "Memoir",
    author: "Michelle Obama",
    description:
      "The memoir of former First Lady Michelle Obama, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world's most famous address.",
    picture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
  },
  {
    name: "Where the Crawdads Sing",
    id: "20",
    isBorrowed: true,
    category: "Fiction",
    author: "Delia Owens",
    description:
      "A mystery, a love story, and a courtroom drama. But it is also a story of a young girl who survives alone in the marsh of North Carolina for years.",
    picture:
      "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_640.jpg",
  },
];
