    const books = [
      {
        section: "potter", sectionTitle: "Гарри Поттер", sectionNote: "Семь лет в Хогвартсе — и целая жизнь в одной серии.",
        title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997, price: 6490, pages: 432, genre: "Фэнтези, приключения", number: "I", theme: "wine", featured: true,
        description: "Одиннадцатый день рождения меняет всё: Гарри узнаёт о Хогвартсе и мире, который прежде скрывался за обычной жизнью. Начало большой истории о дружбе, смелости и доме, который иногда находишь не сразу.",
        more: "Первый роман серии открывает двери в школу волшебства — с письмами, прибывающими самым неожиданным способом, и чудесами, у которых есть своя цена."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и Тайная комната", author: "Дж. К. Роулинг", year: 1998, price: 6490, pages: 480, genre: "Фэнтези, приключения", number: "II", theme: "forest",
        description: "В Хогвартсе снова неспокойно: по коридорам ходят тревожные слухи, а стены будто хранят чужой голос. Гарри предстоит разобраться, чему можно доверять, когда даже школа кажется незнакомой."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и узник Азкабана", author: "Дж. К. Роулинг", year: 1999, price: 6990, pages: 512, genre: "Фэнтези, приключения", number: "III", theme: "night",
        description: "Из Азкабана бежал заключённый, и его имя связано с прошлым Гарри. Третья книга становится темнее и тоньше говорит о памяти, преданности и том, как легко ошибиться в чужой истории."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и Кубок огня", author: "Дж. К. Роулинг", year: 2000, price: 7490, pages: 704, genre: "Фэнтези, приключения", number: "IV", theme: "copper",
        description: "Школьный год превращается в испытание, где мало одной ловкости и волшебной палочки. Мир за пределами Хогвартса становится шире, а взросление — заметно сложнее."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и Орден Феникса", author: "Дж. К. Роулинг", year: 2003, price: 7990, pages: 896, genre: "Фэнтези, приключения", number: "V", theme: "ink",
        description: "Когда взрослые предпочитают молчать, юным волшебникам приходится учиться защищать себя самим. Большая и мрачная книга о сопротивлении, одиночестве и силе найденного сообщества."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и Принц-полукровка", author: "Дж. К. Роулинг", year: 2005, price: 7490, pages: 672, genre: "Фэнтези, приключения", number: "VI", theme: "olive",
        description: "Уроки прошлого становятся ключом к настоящему, а привычный школьный ритм всё чаще нарушают новости из большого мира. Роман о доверии, выборе и взрослении, которое не спрашивает, готовы ли мы."
      },
      {
        section: "potter", sectionTitle: "Гарри Поттер", title: "Гарри Поттер и Дары Смерти", author: "Дж. К. Роулинг", year: 2007, price: 8490, pages: 704, genre: "Фэнтези, приключения", number: "VII", theme: "plum",
        description: "Последняя часть уводит героев далеко от знакомых стен и проверяет на прочность всё, что они знали друг о друге. Финал серии о цене свободы, верности и надежде."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", sectionNote: "Тихие голоса, странные совпадения и музыка, которая звучит ещё после чтения.",
        title: "Норвежский лес", author: "Харуки Мураками", year: 1987, price: 6990, pages: 384, genre: "Роман взросления", number: "01", theme: "mist", featured: true,
        description: "Тору слышит знакомую песню и возвращается мыслями в годы, когда дружба, любовь и утрата переплетались особенно тесно. Сдержанный роман о памяти, одиночестве и попытке остаться рядом с живыми.",
        more: "Один из самых лиричных романов Мураками: без привычных чудес, но с той же внимательностью к внутренней музыке повседневности."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "Кафка на пляже", author: "Харуки Мураками", year: 2002, price: 7490, pages: 640, genre: "Магический реализм", number: "02", theme: "blue",
        description: "Две дороги ведут навстречу друг другу: юноша ищет новую судьбу, а пожилой Нака́та — ответы, которые не помещаются в обычную логику. Сон, миф и будни здесь разговаривают на равных."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "1Q84. Книга первая", author: "Харуки Мураками", year: 2009, price: 7990, pages: 592, genre: "Роман, магический реализм", number: "03", theme: "night",
        description: "Токио остаётся узнаваемым, но в его отражении проступает едва заметное несовпадение. Аомамэ и Тэнго движутся каждый по своей линии, пока странности не начинают складываться в новую картину мира."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "Хроники Заводной Птицы", author: "Харуки Мураками", year: 1994, price: 7490, pages: 768, genre: "Магический реализм", number: "04", theme: "stone",
        description: "Обычный поиск пропавшего кота постепенно открывает в привычном городе скрытые слои прошлого. Медленный, гипнотический роман о памяти, тишине и вещах, которые мы долго не замечаем."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "После заката", author: "Харуки Мураками", year: 2004, price: 5990, pages: 224, genre: "Роман", number: "05", theme: "rose",
        description: "Одна ночь в Токио: кафе, пустые улицы и люди, которым пока некуда возвращаться. Короткий роман смотрит на город так, будто камера задержалась на лицах чуть дольше обычного."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "Дэнс, дэнс, дэнс", author: "Харуки Мураками", year: 1988, price: 6990, pages: 512, genre: "Магический реализм", number: "06", theme: "copper",
        description: "В отеле «Дельфин» знакомые следы ведут в совсем незнакомые комнаты. Роман о том, как не потерять связь с людьми, пока город меняет декорации и правила."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "К югу от границы, на запад от солнца", author: "Харуки Мураками", year: 1992, price: 6490, pages: 288, genre: "Роман", number: "07", theme: "stone",
        description: "Хадзимэ построил размеренную жизнь, пока встреча с давней подругой не заставила его иначе взглянуть на сделанный когда-то выбор. Тихая история о памяти, близости и цене несбывшегося."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "Мой любимый спутник", author: "Харуки Мураками", year: 1999, price: 6490, pages: 288, genre: "Роман, магический реализм", number: "08", theme: "night",
        description: "Молодая писательница Сумирэ исчезает во время поездки по греческим островам. Тот, кто пытается понять её исчезновение, рассказывает о неразделённой любви и одиночестве на собственной орбите."
      },
      {
        section: "murakami", sectionTitle: "Харуки Мураками", title: "Бесцветный Цкуру Тадзаки и годы его странствий", author: "Харуки Мураками", year: 2013, price: 6990, pages: 352, genre: "Роман", number: "09", theme: "mist",
        description: "Спустя годы Цкуру возвращается к истории дружбы, которая оборвалась без объяснений. Путешествие в прошлое помогает ему не разгадать загадку, а заново научиться быть рядом."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", sectionNote: "Миры-предупреждения: читаются как вымысел, звучат слишком знакомо.",
        title: "1984", author: "Джордж Оруэлл", year: 1949, price: 5990, pages: 320, genre: "Антиутопия", number: "01", theme: "red", featured: true,
        description: "В мире Уинстона Смита за человеком наблюдают даже тогда, когда он остаётся один. Оруэлл показывает, как власть меняет язык, память и саму привычку доверять собственным мыслям.",
        more: "Роман-предупреждение, в котором страшнее громких лозунгов оказываются незаметные перемены в повседневной речи."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "О дивный новый мир", author: "Олдос Хаксли", year: 1932, price: 5990, pages: 352, genre: "Антиутопия, сатира", number: "02", theme: "cream",
        description: "Общество Хаксли обещает порядок, удовольствие и отсутствие неудобных вопросов. Но что остаётся от свободы, если человека заранее научили не желать ничего другого?"
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "451° по Фаренгейту", author: "Рэй Брэдбери", year: 1953, price: 5490, pages: 256, genre: "Антиутопия, научная фантастика", number: "03", theme: "copper",
        description: "Гай Монтэг работает там, где книги превращают в пепел, и однажды начинает вслушиваться в тишину после огня. Притча о чтении, любопытстве и хрупком праве думать."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Мы", author: "Евгений Замятин", year: 1920, price: 4990, pages: 288, genre: "Антиутопия", number: "04", theme: "blue",
        description: "Дневник инженера Д-503 — точный чертёж жизни в Едином Государстве, где всё подчинено расчёту. Но в идеально выверенную формулу неожиданно проникает чувство."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Рассказ служанки", author: "Маргарет Этвуд", year: 1985, price: 6490, pages: 416, genre: "Антиутопия, социальная проза", number: "05", theme: "wine",
        description: "В Гилеаде имя и прошлое женщины больше не принадлежат ей. Голос служанки складывает из обрывков повседневности историю о власти, памяти и языке, который помогает сохранить себя."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Скотный двор", author: "Джордж Оруэлл", year: 1945, price: 4490, pages: 160, genre: "Сатирическая повесть", number: "06", theme: "olive",
        description: "Ферма становится сценой для короткой и беспощадной притчи о революции и власти. Простая форма делает перемены особенно заметными — и оттого особенно тревожными."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Голодные игры", author: "Сьюзен Коллинз", year: 2008, price: 5990, pages: 384, genre: "Антиутопия, приключения", number: "07", theme: "forest",
        description: "Китнисс живёт в мире, где зрелище стало инструментом контроля, а правила диктуют далеко от дома. Роман о выборе, который становится виден всем, и цене сопротивления."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Слепота", author: "Жозе Сарамаго", year: 1995, price: 6990, pages: 384, genre: "Антиутопия, роман-притча", number: "08", theme: "cream",
        description: "Безымянный город охватывает странная эпидемия, и привычный порядок быстро становится ненадёжным. Сарамаго пишет притчу о достоинстве, страхе и взаимной заботе, не отводя взгляда от человеческой хрупкости."
      },
      {
        section: "dystopias", sectionTitle: "Антиутопии", title: "Мечтают ли андроиды об электроовцах?", author: "Филип К. Дик", year: 1968, price: 6490, pages: 288, genre: "Научная фантастика, антиутопия", number: "09", theme: "ink",
        description: "В опустевшем будущем охотник за андроидами пытается понять, где проходит граница между человеком и искусственной жизнью. Нервный, философский роман о сочувствии и природе подлинного."
      },
      {
        section: "detectives", title: "Убийство в «Восточном экспрессе»", author: "Агата Кристи", year: 1934, price: 5490, pages: 288, genre: "Детектив", number: "01", theme: "wine",
        description: "Поезд застрял в снегу, а один из пассажиров найден мёртвым. Эркюль Пуаро берётся за дело, где у каждого есть секрет."
      },
      {
        section: "detectives", title: "И не осталось никого", author: "Агата Кристи", year: 1939, price: 5490, pages: 256, genre: "Детектив, триллер", number: "02", theme: "night",
        description: "Десять незнакомцев оказываются отрезаны от мира на острове. Таинственные события заставляют каждого вспомнить прошлое."
      },
      {
        section: "detectives", title: "Собака Баскервилей", author: "Артур Конан Дойл", year: 1902, price: 4990, pages: 256, genre: "Детектив, классика", number: "03", theme: "forest",
        description: "Шерлок Холмс расследует загадку старинного рода и легенду о призрачной собаке на болотах Девоншира."
      },
      {
        section: "detectives", title: "Девушка с татуировкой дракона", author: "Стиг Ларссон", year: 2005, price: 6990, pages: 576, genre: "Детектив, триллер", number: "04", theme: "ink",
        description: "Журналист и талантливая исследовательница начинают расследование давнего исчезновения, скрывающего семейные тайны."
      },
      {
        section: "detectives", title: "Имя розы", author: "Умберто Эко", year: 1980, price: 7490, pages: 640, genre: "Исторический детектив", number: "05", theme: "stone",
        description: "В средневековом монастыре серия загадочных происшествий приводит монаха-сыщика к тайне библиотеки."
      },
      {
        section: "scifi", title: "Дюна", author: "Фрэнк Герберт", year: 1965, price: 7990, pages: 688, genre: "Научная фантастика", number: "01", theme: "ochre",
        description: "На пустынной планете Арракис решается судьба могущественных домов и будущего целой цивилизации."
      },
      {
        section: "scifi", title: "Марсианин", author: "Энди Вейер", year: 2011, price: 6990, pages: 384, genre: "Научная фантастика, приключения", number: "02", theme: "red",
        description: "Оставшись один на Марсе, инженер Марк Уотни использует знания, чувство юмора и изобретательность, чтобы выжить."
      },
      {
        section: "scifi", title: "Автостопом по галактике", author: "Дуглас Адамс", year: 1979, price: 5990, pages: 256, genre: "Научная фантастика, юмор", number: "03", theme: "blue",
        description: "После неожиданного разрушения Земли Артур Дент отправляется в абсурдное путешествие по галактике."
      },
      {
        section: "scifi", title: "Солярис", author: "Станислав Лем", year: 1961, price: 5990, pages: 288, genre: "Научная фантастика", number: "04", theme: "mist",
        description: "Учёные на орбитальной станции пытаются понять разумный океан, который отвечает на их самые личные воспоминания."
      },
      {
        section: "scifi", title: "Машина времени", author: "Герберт Уэллс", year: 1895, price: 4490, pages: 160, genre: "Научная фантастика, классика", number: "05", theme: "copper",
        description: "Изобретатель отправляется в далёкое будущее и обнаруживает, как изменились человечество и его общество."
      },
      {
        section: "romance", title: "До встречи с тобой", author: "Джоджо Мойес", year: 2012, price: 6490, pages: 480, genre: "Любовный роман", number: "01", theme: "rose",
        description: "Неожиданная работа становится для Луизы началом важного знакомства и истории о выборе собственной жизни."
      },
      {
        section: "romance", title: "P.S. Я люблю тебя", author: "Сесилия Ахерн", year: 2004, price: 5990, pages: 448, genre: "Любовный роман", number: "02", theme: "plum",
        description: "Письма, оставленные близким человеком, помогают Холли шаг за шагом возвращаться к жизни и новым мечтам."
      },
      {
        section: "romance", title: "Дневник памяти", author: "Николас Спаркс", year: 1996, price: 5490, pages: 256, genre: "Любовный роман", number: "03", theme: "wine",
        description: "Пожилой мужчина читает историю любви, начавшуюся задолго до этого и сохранившуюся вопреки времени."
      },
      {
        section: "romance", title: "Виноваты звёзды", author: "Джон Грин", year: 2012, price: 5990, pages: 320, genre: "Любовный роман, драма", number: "04", theme: "blue",
        description: "Хейзел и Огастус знакомятся в группе поддержки и вместе находят радость, юмор и смысл в непростых обстоятельствах."
      },
      {
        section: "romance", title: "Любовь во время холеры", author: "Габриэль Гарсиа Маркес", year: 1985, price: 6490, pages: 368, genre: "Любовный роман, магический реализм", number: "05", theme: "ochre",
        description: "История долгого ожидания и чувства, которое меняется вместе с героями и прожитыми ими годами."
      },
      {
        section: "adventure", title: "Остров сокровищ", author: "Роберт Льюис Стивенсон", year: 1883, price: 4990, pages: 320, genre: "Приключения, классика", number: "01", theme: "forest",
        description: "Карта острова и старинный сундук втягивают юного Джима Хокинса в опасное морское путешествие."
      },
      {
        section: "adventure", title: "Вокруг света за 80 дней", author: "Жюль Верн", year: 1872, price: 4990, pages: 288, genre: "Приключения, классика", number: "02", theme: "copper",
        description: "Филеас Фогг заключает необычное пари и отправляется в путешествие, где расписание постоянно испытывает его."
      },
      {
        section: "adventure", title: "Три мушкетёра", author: "Александр Дюма", year: 1844, price: 6990, pages: 704, genre: "Приключения, исторический роман", number: "03", theme: "wine",
        description: "Д’Артаньян приезжает в Париж и находит друзей, с которыми его ждут дуэли, интриги и приключения."
      },
      {
        section: "adventure", title: "Робинзон Крузо", author: "Даниэль Дефо", year: 1719, price: 5490, pages: 384, genre: "Приключения, классика", number: "04", theme: "olive",
        description: "После кораблекрушения Робинзон учится обустраивать жизнь на необитаемом острове и не терять надежду."
      },
      {
        section: "adventure", title: "Зов предков", author: "Джек Лондон", year: 1903, price: 4490, pages: 192, genre: "Приключения, классика", number: "05", theme: "stone",
        description: "Пёс Бэк оказывается на суровом Севере, где ему предстоит приспособиться к новой жизни и испытаниям."
      },
      {
        section: "classics", title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, price: 6490, pages: 480, genre: "Классика, магический реализм", number: "01", theme: "plum",
        description: "Фантастические события в Москве переплетаются с историей Понтия Пилата и размышлениями о свободе."
      },
      {
        section: "classics", title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, price: 5990, pages: 672, genre: "Классика, психологический роман", number: "02", theme: "night",
        description: "Раскольников пытается разобраться в последствиях своего решения и в собственных представлениях о справедливости."
      },
      {
        section: "classics", title: "Анна Каренина", author: "Лев Толстой", year: 1878, price: 7490, pages: 864, genre: "Классика, роман", number: "03", theme: "wine",
        description: "Судьбы нескольких семей складываются в масштабную историю любви, общества и поиска личного счастья."
      },
      {
        section: "classics", title: "Маленький принц", author: "Антуан де Сент-Экзюпери", year: 1943, price: 3990, pages: 128, genre: "Классика, философская сказка", number: "04", theme: "blue",
        description: "Путешествие маленького принца по планетам становится разговором о дружбе, заботе и важных вещах."
      },
      {
        section: "classics", title: "Великий Гэтсби", author: "Фрэнсис Скотт Фицджеральд", year: 1925, price: 4990, pages: 224, genre: "Классика, роман", number: "05", theme: "mist",
        description: "Летние встречи на Лонг-Айленде постепенно раскрывают историю мечты, памяти и переменчивой эпохи."
      },
      {
        section: "nonfiction", title: "Sapiens. Краткая история человечества", author: "Юваль Ной Харари", year: 2011, price: 7990, pages: 512, genre: "Нон-фикшн, история", number: "01", theme: "ochre",
        description: "Книга предлагает широкий взгляд на историю человечества — от древних обществ до современного мира."
      },
      {
        section: "nonfiction", title: "Атомные привычки", author: "Джеймс Клир", year: 2018, price: 6990, pages: 320, genre: "Нон-фикшн, саморазвитие", number: "02", theme: "olive",
        description: "Практичный разбор того, как небольшие ежедневные действия помогают постепенно менять привычки."
      },
      {
        section: "nonfiction", title: "Думай медленно… решай быстро", author: "Даниэль Канеман", year: 2011, price: 7490, pages: 656, genre: "Нон-фикшн, психология", number: "03", theme: "ink",
        description: "Исследование двух режимов мышления и того, как они влияют на наши решения и оценки."
      },
      {
        section: "nonfiction", title: "Краткая история времени", author: "Стивен Хокинг", year: 1988, price: 6490, pages: 256, genre: "Нон-фикшн, наука", number: "04", theme: "night",
        description: "Доступное путешествие по вопросам о Вселенной, пространстве, времени и происхождении космоса."
      },
      {
        section: "nonfiction", title: "Человек в поисках смысла", author: "Виктор Франкл", year: 1946, price: 5490, pages: 224, genre: "Нон-фикшн, психология", number: "05", theme: "stone",
        description: "Автор размышляет о внутренней опоре и поиске смысла, опираясь на личный опыт и работу психолога."
      }
    ];

    const sections = [
      { id: "potter", title: "Фэнтези и магия", note: "Волшебные миры, необычные герои и приключения, в которые хочется верить." },
      { id: "murakami", title: "Современная проза и магический реализм", note: "Тихие голоса, странные совпадения и музыка, которая звучит ещё после чтения." },
      { id: "dystopias", title: "Антиутопии", note: "Миры-предупреждения: читаются как вымысел, звучат слишком знакомо." },
      { id: "detectives", title: "Детективы и триллеры", note: "Запутанные дела, неожиданные улики и загадки до последней страницы." },
      { id: "scifi", title: "Научная фантастика", note: "Будущее, космос и технологии, которые заставляют иначе взглянуть на настоящее." },
      { id: "romance", title: "Любовные романы", note: "Истории о встречах, чувствах и непростом пути друг к другу." },
      { id: "adventure", title: "Приключения", note: "Дальние дороги, смелые решения и открытия за пределами привычного." },
      { id: "classics", title: "Классическая литература", note: "Книги разных эпох, которые продолжают говорить с читателями." },
      { id: "nonfiction", title: "Нон-фикшн и саморазвитие", note: "Идеи и знания, помогающие лучше понять себя и окружающий мир." }
    ];
    const coverSources = new Map([
      ["Гарри Поттер и философский камень", "9780747532699"],
      ["Гарри Поттер и Тайная комната", "9780747538486"],
      ["Гарри Поттер и узник Азкабана", "9780747546290"],
      ["Гарри Поттер и Кубок огня", "9780747546245"],
      ["Гарри Поттер и Орден Феникса", "9780747551003"],
      ["Гарри Поттер и Принц-полукровка", "9780747581086"],
      ["Гарри Поттер и Дары Смерти", "9780747591054"],
      ["Норвежский лес", "9780375704024"],
      ["Кафка на пляже", "9781400079278"],
      ["1Q84. Книга первая", "9780307476463"],
      ["Хроники Заводной Птицы", "9780679775430"],
      ["После заката", "9780307389889"],
      ["Дэнс, дэнс, дэнс", "9780679753798"],
      ["К югу от границы, на запад от солнца", "9780099448573"],
      ["Мой любимый спутник", "9780375726058"],
      ["Бесцветный Цкуру Тадзаки и годы его странствий", "9780385352109"],
      ["1984", "9780451524935"],
      ["О дивный новый мир", "9780060850524"],
      ["451° по Фаренгейту", "9781451673319"],
      ["Мы", "9780140187774"],
      ["Рассказ служанки", "9780099740919"],
      ["Скотный двор", "9780451526342"],
      ["Голодные игры", "9780439023481"],
      ["Слепота", "9780156007757"],
      ["Мечтают ли андроиды об электроовцах?", "9780345453748"]
    ]);
    const cart = new Map();
    const priceFormat = new Intl.NumberFormat("ru-RU");
    const collections = document.getElementById("collections");
    const searchField = document.getElementById("book-search");
    const genreFilter = document.getElementById("genre-filter");
    const sortSelect = document.getElementById("book-sort");
    const favoritesToggle = document.getElementById("favorites-toggle");
    const resultsCount = document.getElementById("results-count");
    const emptyResults = document.getElementById("empty-results");
    const cartCount = document.getElementById("cart-count");
    const cartTrigger = document.getElementById("cart-trigger");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartBackdrop = document.getElementById("cart-backdrop");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const toast = document.getElementById("toast");
    const favorites = new Set();
    let toastTimer;

    sections.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.id;
      option.textContent = section.title;
      genreFilter.append(option);
    });

    function formatPrice(price) {
      return `${priceFormat.format(price)} ₸`;
    }

    function renderCollections() {
      collections.innerHTML = sections.map((section) => {
        return `
          <section class="collection" id="${section.id}" aria-labelledby="${section.id}-title">
            <div class="collection-inner">
              <div class="section-heading">
                <div><span class="eyebrow">Жанр · ${String(sections.indexOf(section) + 1).padStart(2, "0")}</span><h2 id="${section.id}-title">${section.title}</h2></div>
                <p>${section.note}</p>
              </div>
              <div class="book-grid"></div>
            </div>
          </section>`;
      }).join("");
    }

    function renderBook(book, bookIndex) {
      const isFavorite = favorites.has(bookIndex);
      return `
        <article class="book-card${book.featured ? " featured" : ""}" data-book-index="${bookIndex}">
          <div class="book-cover theme-${book.theme}">
            <span class="cover-deco" aria-hidden="true"></span>
            <div class="cover-top"><span class="cover-imprint">Тихая полка</span><span class="cover-number">${book.number}</span></div>
            <div class="cover-title">${book.title}</div>
            <div class="cover-bottom"><span class="cover-author">${book.author}</span><span class="cover-year">${book.year}</span></div>
          </div>
          <div class="book-info">
            <div class="book-meta"><span>${book.section === "potter" ? `Часть ${book.number}` : book.genre}</span><span>${book.year}</span></div>
            <div class="book-topline"><h3>${book.title}</h3>
              <button class="favorite-button" type="button" data-favorite="${bookIndex}" aria-label="${isFavorite ? "Убрать из избранного" : "Добавить в избранное"}: ${book.title}" aria-pressed="${isFavorite}">
                <svg viewBox="0 0 20 20" fill="${isFavorite ? "currentColor" : "none"}" aria-hidden="true"><path d="M10 17s-6.5-3.8-6.5-9A3.6 3.6 0 0 1 10 5.6 3.6 3.6 0 0 1 16.5 8c0 5.2-6.5 9-6.5 9Z" stroke="currentColor" stroke-width="1.3"/></svg>
              </button>
            </div>
            <p class="book-author">${book.author}</p>
            <p class="book-description">${book.description}</p>
            <details class="book-details">
              <summary>Подробнее о книге</summary>
              <p class="details-copy">${book.more || book.description} Жанр: ${book.genre}. Ориентировочно ${book.pages} страниц; объём зависит от издания.</p>
            </details>
            <div class="book-buy">
              <span class="book-price">${formatPrice(book.price)}</span>
              <button class="add-button" type="button" data-add="${bookIndex}">В корзину <span aria-hidden="true">+</span></button>
            </div>
          </div>
        </article>`;
    }

    function getVisibleBooks() {
      const query = searchField.value.trim().toLocaleLowerCase("ru-RU");
      const visible = books.map((book, index) => ({ book, index })).filter(({ book, index }) => {
        const matchesSearch = !query || [book.title, book.author, book.description, book.genre]
          .some((value) => value.toLocaleLowerCase("ru-RU").includes(query));
        const matchesGenre = genreFilter.value === "all" || book.section === genreFilter.value;
        return matchesSearch && matchesGenre && (!favoritesToggle.matches('[aria-pressed="true"]') || favorites.has(index));
      });
      if (sortSelect.value === "price-asc") visible.sort((a, b) => a.book.price - b.book.price);
      if (sortSelect.value === "price-desc") visible.sort((a, b) => b.book.price - a.book.price);
      if (sortSelect.value === "title") visible.sort((a, b) => a.book.title.localeCompare(b.book.title, "ru"));
      return visible;
    }

    function renderCatalog() {
      const visible = getVisibleBooks();
      resultsCount.textContent = `${visible.length} из ${books.length} книг`;
      emptyResults.hidden = visible.length > 0;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        const sectionBooks = visible.filter(({ book }) => book.section === section.id);
        sectionElement.classList.toggle("is-empty", sectionBooks.length === 0);
        sectionElement.querySelector(".book-grid").innerHTML = sectionBooks
          .map(({ book, index }) => renderBook(book, index)).join("");
        const heading = sectionElement.querySelector(".section-heading");
        heading.classList.add("reveal-on-scroll");
        revealObserver.observe(heading);
        sectionElement.querySelectorAll(".book-card").forEach((card, index) => {
          card.classList.add("reveal-on-scroll");
          card.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
          revealObserver.observe(card);
          coverObserver.observe(card);
        });
      });
    }

    function applyCover(bookIndex) {
      const card = collections.querySelector(`.book-card[data-book-index="${bookIndex}"]`);
      const isbn13 = coverSources.get(books[bookIndex].title);
      if (!card || !isbn13 || card.querySelector(".cover-photo")) return;
      const isbnDigits = isbn13.slice(3, 12);
      const checksum = (11 - [...isbnDigits].reduce((sum, digit, index) => sum + Number(digit) * (10 - index), 0) % 11) % 11;
      const isbn10 = isbnDigits + (checksum === 10 ? "X" : checksum);
      const coverBox = card.querySelector(".book-cover");
      const image = document.createElement("img");
      image.className = "cover-photo";
      image.alt = `Фотография обложки книги «${books[bookIndex].title}»`;
      image.loading = "lazy";
      image.decoding = "async";
      const useTypographyCover = () => {
        coverBox.classList.remove("has-photo");
        image.remove();
        console.warn(`Не удалось загрузить фотографию обложки: ${books[bookIndex].title}`);
      };
      image.onload = () => {
        if (image.naturalWidth < 2 || image.naturalHeight < 2) {
          useTypographyCover();
          return;
        }
        coverBox.classList.add("has-photo");
      };
      image.onerror = useTypographyCover;
      image.src = `https://images-na.ssl-images-amazon.com/images/P/${isbn10}.01._SCLZZZZZZZ_SX500_.jpg`;
      const source = document.createElement("a");
      source.className = "cover-source";
      source.href = `https://www.amazon.com/dp/${isbn10}`;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Издание на Amazon";
      source.addEventListener("click", (event) => event.stopPropagation());
      coverBox.append(image, source);
    }

    const coverObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const bookIndex = Number(entry.target.dataset.bookIndex);
            observer.unobserve(entry.target);
            applyCover(bookIndex);
          });
        }, { rootMargin: "500px 0px" })
      : { observe: (card) => applyCover(Number(card.dataset.bookIndex)) };

    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        }, { rootMargin: "0px 0px -40px 0px" })
      : { observe: (element) => element.classList.add("is-revealed") };

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("is-visible");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
    }

    function renderCart() {
      const entries = Array.from(cart.entries());
      const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
      const total = entries.reduce((sum, [bookIndex, quantity]) => sum + books[bookIndex].price * quantity, 0);
      cartCount.textContent = String(count);
      cartTrigger.setAttribute("aria-label", `Открыть корзину, товаров: ${count}`);
      cartTotal.textContent = formatPrice(total);
      checkoutButton.disabled = count === 0;

      if (entries.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Здесь пока тихо. Выберите книгу по душе.</p>';
        return;
      }
      cartItems.innerHTML = entries.map(([bookIndex, quantity]) => {
        const book = books[bookIndex];
        return `
          <article class="cart-item">
            <div><h3>${book.title}</h3><p>${book.author}</p>
              <div class="quantity-controls" aria-label="Количество: ${quantity}">
                <button type="button" data-quantity="${bookIndex}" data-change="-1" aria-label="Уменьшить количество: ${book.title}">−</button>
                <span>${quantity}</span>
                <button type="button" data-quantity="${bookIndex}" data-change="1" aria-label="Увеличить количество: ${book.title}">+</button>
                <button class="remove-item" type="button" data-remove="${bookIndex}">Удалить</button>
              </div>
            </div>
            <span class="cart-item-price">${formatPrice(book.price * quantity)}</span>
          </article>`;
      }).join("");
    }

    function setCartOpen(isOpen) {
      cartDrawer.classList.toggle("is-open", isOpen);
      cartBackdrop.classList.toggle("is-open", isOpen);
      cartDrawer.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
      if (isOpen) document.getElementById("cart-close").focus();
      else cartTrigger.focus();
    }

    renderCollections();
    renderCatalog();
    renderCart();

    collections.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-favorite]");
      if (favoriteButton) {
        const bookIndex = Number(favoriteButton.dataset.favorite);
        if (favorites.has(bookIndex)) {
          favorites.delete(bookIndex);
          showToast(`«${books[bookIndex].title}» убрана из избранного`);
        } else {
          favorites.add(bookIndex);
          showToast(`«${books[bookIndex].title}» добавлена в избранное`);
        }
        renderCatalog();
        return;
      }
      const button = event.target.closest("[data-add]");
      if (!button) return;
      const bookIndex = Number(button.dataset.add);
      cart.set(bookIndex, (cart.get(bookIndex) || 0) + 1);
      renderCart();
      button.classList.add("is-added");
      button.innerHTML = 'Добавлено <span aria-hidden="true">✓</span>';
      window.setTimeout(() => {
        button.classList.remove("is-added");
        button.innerHTML = 'В корзину <span aria-hidden="true">+</span>';
      }, 1200);
      showToast(`«${books[bookIndex].title}» добавлена в корзину`);
    });

    cartItems.addEventListener("click", (event) => {
      const quantityButton = event.target.closest("[data-quantity]");
      const removeButton = event.target.closest("[data-remove]");
      if (quantityButton) {
        const index = Number(quantityButton.dataset.quantity);
        const quantity = (cart.get(index) || 0) + Number(quantityButton.dataset.change);
        if (quantity <= 0) cart.delete(index);
        else cart.set(index, quantity);
        renderCart();
      } else if (removeButton) {
        cart.delete(Number(removeButton.dataset.remove));
        renderCart();
      }
    });

    cartTrigger.addEventListener("click", () => setCartOpen(true));
    document.getElementById("cart-close").addEventListener("click", () => setCartOpen(false));
    cartBackdrop.addEventListener("click", () => setCartOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) setCartOpen(false);
    });
    checkoutButton.addEventListener("click", () => showToast("Спасибо за интерес — оформление заказа скоро появится."));
    searchField.addEventListener("input", renderCatalog);
    genreFilter.addEventListener("change", renderCatalog);
    sortSelect.addEventListener("change", renderCatalog);
    favoritesToggle.addEventListener("click", () => {
      const isActive = favoritesToggle.getAttribute("aria-pressed") !== "true";
      favoritesToggle.setAttribute("aria-pressed", String(isActive));
      renderCatalog();
      if (isActive && favorites.size === 0) showToast("Сначала сохраните книги сердечком на карточках");
    });
    document.getElementById("surprise-button").addEventListener("click", () => {
      const candidates = getVisibleBooks();
      if (candidates.length === 0) {
        showToast("Снимите фильтры — и я найду вам историю");
        return;
      }
      const selected = candidates[Math.floor(Math.random() * candidates.length)];
      const card = collections.querySelector(`.book-card[data-book-index="${selected.index}"]`);
      if (!card) return;
      card.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      card.classList.add("spotlight");
      window.setTimeout(() => card.classList.remove("spotlight"), 1800);
      showToast(`Сегодня вам — «${selected.book.title}»`);
    });

    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
      mainNav.classList.toggle("is-open", isOpen);
    });
    mainNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Открыть меню");
      }
    });
