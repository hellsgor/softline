# SoftLine

Test task

Ссылка на
макет - https://www.figma.com/file/d5vlqZXjL5vMDhIhMgJMPk/Peach-test-frontend?type=design&node-id=0%3A1&mode=dev

Бизнес-анализ - null

Системный анализ - null

---

1. [Клонирование репозитория](#clone)
2. [Версионность](#versions)
3. [Scripts](#npmcommands)
4. [Файловая структура](#structure)
5. [Alias'ы](#aliases)
6. [Советы и правила](#tips-and-rules)

---

## <a id='clone'>Клонирование репозитория</a>

    git clone -b main git@github.com:hellsgor/softline.git

## <a id='versions'>Версионность</a>

- node js - 20.9.0
- npm - 10.1.0

## <a id='npmcommands'>Scripts</a>

- установка пакетов - `npm i`;
- запуск dev-сервера - `npm start`;
- сборка билда dev - `npm run dev`;
- сборка билда prod - `npm run build`;
- predeploy - `npm run build`,
- deploy - `gh-pages -d build`;

## <a id='structure'>Файловая структура</a>

- src/
  - assets/
    - favicon/ - фавиконки;
    - fonts/ - шрифты;
    - icons/ - иконки;
    - image/ - изображения;
    - json/ - для json-файлов;
    - pug/
      - mixins - для pug-миксинов
    - styles/ - основные файлы стилей;
  - components/ - компоненты;
    - common/ - компоненты обязательные для всех страниц;
  - layouts/ - шаблоны страниц;
  - libs/ - для хранения библиотек;
  - pages/ - страницы;
    - main/ - файлы главной страницы;
    - ui-kit/ - файлы страницы UI-Kit;
  - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
  - utils/ - части js-кода используемые в проекте вынесены в отдельную папку,
    например, отправка или валидация полей формы и пр.

## <a id='aliases'>Alias'ы</a>

- Img - './src/assets/image/';
- Icons - './src/assets/icons/';
- Fonts - './src/assets/fonts/';
- Components - './src/components/';
- Layouts - './src/layouts/';
- UIKit - './src/ui-kit/';
- Styles - './src/assets/styles/';
- Libs - './src/libs/' (на момент публикации не используется);
- NodeModules - './node_modules/';
- Utils - './src/utils/';

## <a id='tips-and-rules'>Советы и правила</a>

- файлы ".gitkeep" следует удалить если в папке-родителе появятся файлы проекта.
  Файлы ".gitkeep" требуются исключительно для сохранения файловой структуры в
  git;
- каждой новой странице после копирования кода pug и scss-файлов:
  - в pug изменить:
    - значение переменной `header` если это необходимо (хедер нужен /не нужен);
    - значение переменной `footer` если это необходимо (футер нужен /не нужен);
    - значение переменной `pageClassName` (назначить правильный класс
      тегу <main> для управления страницей);
