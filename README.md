# ireg

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Дальнейшая информация носит предварительный характер!

### /config/ClientStorages.json
С бека должна приходить структура сторонних хранилищ клиента
По каждому хранилищу следующая структура
Point:
{

id: 1,
Authors: [
    {id, name, name_en(todo сделать перевод основного имени на бэке, либо думать как сделать на фронте) }
],
Company:[
    {id, name, name_en(todo сделать перевод основного имени на бэке, либо думать как сделать на фронте) }
],
Participants:[
    {id, name, name_en(todo сделать перевод основного имени на бэке, либо думать как сделать на фронте) }
],
AdditionalInformation: '', (тут хранится дополнительная информация текстом)
Type: 1, (тип, пока принимает 3 статуса: 1- не нужен(по умолчанию), 2- нужен, 3- важен)(todo обговорить)
logoType: 'google_drive' || 'onedrive' || ..., (сюда приходит название репозитория для показа логотипа) (возможно стоит создать таблицу со сторонними репозиториями и сюда пихать id репозитория)
stateId: 1, // статус настройки депонирования (1 не настроено, 2 настроено)
Files: this.filesPoint (все файлы с репозитория (либо только 10 и подготовить функционал запроса на следующие 10 - обговорить с заказчиком))

}
Структура для файлов репозитория Point.Files:
[
    {id: 1, name: 'тестовое имя1', directories:'folder1/folder1/',extensionsType:'pdf'},
]


### /config/MainStorage.json
С бека приходят файлы клиента с нашего хранилища 
Files:[
    {id: 1, extensionsType:'pdf', name:'first test file'},
],
(стоит создать таблицу с расширениями файлов и сюда(extensionsType) пихать id расширения)
Нужен Api метод, который сохраняет файл хранилище(после оплаты(могу ошибаться)). Структура входных параметров:
{ файл(имя, тип (для вывода на фронте)), Authors[], Company[], Participants[], additional_information, Type, Свидетельство(на русском или на английском) }
