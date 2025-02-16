# ng-course-practice

## Lesson 1

1. Установить git
2. Установить node.js
3. Установить Angular CLI

```
npm install -g @angular/cli
```

4. Создать Angular проект

```
ng new project-name
```

5. Запустить npm run start



## Lesson 2

1. Удалить все содержимое app.component.html, оставив только:
```
<p>App root component works!</p>
<router-outlet/>
```

Показать, что содержимое рутовой компоненты отображается в браузере.
Проговорить, что компонента <router-outlet/> необходима для отображения текущего активного роута,
подробнее в лекции про маршрутизацию.

2. Показать прототипы макетов приложения, что в итоге ожидаем получить.

3. Добавить папку components и перейти в нее cd ./src/app/components

4. Сгенерировать компоненту хедера
```
ng generate component header
```

5. Добавить импорт компоненты хедера и селектор в рутовую компоненту, показать,
что компонента хедера отображается.

6. ng add @angular/material  

7. Добавить шаблон для header component
```
<nav class="app-header">
    <div class="app-header__title">
        <h1>Device manager</h1>
    </div>
    <div class="app-header__buttons">
        <button mat-button class="app-header__button">Sign In</button>
        <button mat-flat-button class="app-header__button">Sign Up</button>
    </div>
</nav>
```

8. Добавить стили для header component
```
.app-header {
    display: flex;
    justify-content: space-between;
    padding: 1em;
}

.app-header__button {
    margin-top: 1em;
    margin-left: .5em 
}
```

Добавить привязку данных для заголовка title = 'Device manager'.

9. Сгенерировать компоненту футера
```
ng generate component footer
```

10. Добавить импорт компоненты футера  и селектор в рутовую компоненту, показать,
что компонента футера отображается.

11. Добавить шаблон для footer component
```

```

12. Добавить стили для footer component
```

```