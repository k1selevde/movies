# MOVIES APP :blush:
---


### Особенности разработки
- Приложение, использующее публичное  [TMDb api](https://developers.themoviedb.org/3/getting-started/introduction).
- использование Typescript(типизация redux, react components, api)
- настройка Webpack для разработки :triumph: .
- Для сокращения кода redux reducers - использовал [Immer]() :yum:
- Для сетевых запросов - библиотека [axios](https://github.com/axios/axios) :alien: .
При деплое был  на [HEROKU](https://www.heroku.com/) был вынужден воспользоваться утилитой [CRA](https://github.com/facebook/create-react-app) 
- React Hooks + React Lifecycle Methods  :green_heart: 
- Роутинг(React-router-dom)
- Верстка по БЭМ, стили SCSS(модульно), bootstrap :innocent: . 
- Для адаптивности использовал CSS GRID. :boom: .
---


**Подробнее о страницах**
 - *Главная страница с постерами новых фильмов, коллекциями фильмов.*
    ![Main-page-search](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/Main-page-search.png)
    ![Main-page-posters](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/main-page-posters.png)
 
 - *Страница Movies: есть фильтрация по жанрам, сортировка по популярности, рейтингу, дате выхода; реализована пагинация по страницам.*
    ![movies-page-filters](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/movies-page-filters.png)
    
 - *Страница Movie: Описание,рейтинг, ключевые слова, актеры, отзывы и другие детали фильма; выводится список похожих фильмов.*
    ![movie-page](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/movie-page.png)

 - *Страница Person: биография, детали, ссылки на аккаунты в социальных сетях.*
    ![person-page](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/person-page.png)

- *Страница Search : Поиск осуществляется по фильмам и людям(актеры, режиссеры, продюсеры и т.д), есть подгрузка данных.*
 2 варианта: с пустой поисковой строкой и заполненной.
  ![search-page-empty](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/search-page-empty.png)
  ![search-page-value](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/search-page-value.png)

- *Страница Collections: Популярные, с самым большим рейтингом, набирающие популярность.*
  ![collection-page](https://github.com/k1selevde/movies/blob/master/src/assets/img/movies-image/colleaction-page.png)
