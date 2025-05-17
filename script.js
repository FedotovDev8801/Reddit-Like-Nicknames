const adjectives = {
  en: [
    "Cool", "Epic", "Happy", "Angry", "Lonely", "Funky", "Weird", "Tiny", "Mighty", "Crazy",
    "Sneaky", "Shiny", "Spooky", "Jolly", "Grumpy", "Silly", "Fast", "Lazy", "Sleepy", "Zany",
    "Noisy", "Quiet", "Witty", "Moody", "Cheesy", "Brave", "Nerdy", "Edgy", "Trashy", "Boring",
    "Snappy", "Clumsy", "Greedy", "Bossy", "Crafty", "Chill", "Dark", "Bright", "Goofy", "Sussy",
    "Wholesome", "Cursed", "Blursed", "Smol", "Big", "Mega", "Ultra", "Wicked", "Dank", "Sussy"
  ],
  ru: [
    "Крутой", "Эпичный", "Весёлый", "Злой", "Одинокий", "Фанковый", "Чудной", "Маленький", "Могучий", "Безумный",
    "Хитрый", "Блестящий", "Жуткий", "Веселый", "Ворчливый", "Глупый", "Быстрый", "Ленивый", "Сонный", "Чокнутый",
    "Громкий", "Тихий", "Остроумный", "Мрачный", "Сырный", "Смелый", "Задротский", "Резкий", "Мусорный", "Скучный",
    "Шустрый", "Неуклюжий", "Жадный", "Командный", "Хитроумный", "Спокойный", "Тёмный", "Яркий", "Смешной", "Сасный",
    "Милый", "Проклятый", "Благословенный", "Крошечный", "Огромный", "Мега", "Ультра", "Злобный", "Мемный", "Подозрительный"
  ]
};

const nouns = {
  en: [
    "Cat", "Banana", "Duck", "Dragon", "Wizard", "Penguin", "Ninja", "Gamer", "Pigeon", "Frog",
    "Hamster", "Toast", "Shark", "Octopus", "Unicorn", "Goblin", "Potato", "Muffin", "Doggo", "Koala",
    "Fox", "Alien", "Robot", "Ghost", "Zombie", "Clown", "Pickle", "Taco", "Monkey", "Bear",
    "Sloth", "Otter", "Llama", "Bee", "Snail", "Whale", "Crab", "Tiger", "Lion", "Mouse",
    "Bat", "Raccoon", "Wolf", "Panda", "Moose", "Snek", "Capybara", "Chicken", "Giraffe", "Sheep"
  ],
  ru: [
    "Кот", "Банан", "Утка", "Дракон", "Волшебник", "Пингвин", "Ниндзя", "Геймер", "Голубь", "Лягушка",
    "Хомяк", "Тост", "Акула", "Осьминог", "Единорог", "Гоблин", "Картошка", "Маффин", "Пёсель", "Коала",
    "Лиса", "Инопланетянин", "Робот", "Призрак", "Зомби", "Клоун", "Огурец", "Тако", "Обезьяна", "Медведь",
    "Ленивец", "Выдра", "Лама", "Пчела", "Улитка", "Кит", "Краб", "Тигр", "Лев", "Мышь",
    "ЛетучаяМышь", "Енот", "Волк", "Панда", "Лось", "Змейка", "Капибара", "Курица", "Жираф", "Овца"
  ]
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNickname() {
  const lang = document.getElementById("lang").value;
  const adjList = adjectives[lang];
  const nounList = nouns[lang];

  const adj = adjList[getRandomInt(0, adjList.length - 1)];
  const noun = nounList[getRandomInt(0, nounList.length - 1)];
  const number = getRandomInt(1, 9999);
  const separator = Math.random() > 0.5 ? "_" : "";

  const nickname = `${adj}${noun}${separator}${number}`;
  document.getElementById("nickname").innerText = nickname;
}

function copyNickname() {
  const nickname = document.getElementById("nickname").innerText;
  if (nickname && nickname !== "Нажми кнопку, чтобы сгенерировать ник") {
    navigator.clipboard.writeText(nickname)
      .then(() => alert("Ник скопирован в буфер обмена!"))
      .catch(err => alert("Ошибка при копировании"));
  }
}
