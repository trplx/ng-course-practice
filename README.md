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

Запустить и посмотреть, что содержимое рутовой компоненты отображается в браузере.

2. `<router-outlet/>` - необходима для отображения текущего активного роута, подробнее в лекции про маршрутизацию.

3. Добавить папку components и перейти в нее cd ./src/app/components
4. Сгенерировать компоненту хедера
```
ng generate component header
```

5. Добавить импорт компоненты хедера и селектор в рутовую компоненту, посмотреть,
что компонента хедера отображается в браузере.

6. Добавить пакет ng add @angular/material.

Переопределить стили кнопок в app/styles.scss 
```
@use '@angular/material' as mat;

:root {
  @include mat.button-overrides((
    filled-container-color: #2C2E33,
    filled-label-text-color: #FFF,
    text-label-text-color: #2C2E33
  ));
}
```

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

Добавить стили для header component
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

8. Сгенерировать компоненту футера
```
ng generate component footer
```

9. Добавить импорт компоненты футера  и селектор в рутовую компоненту, посмотреть,
что компонента футера отображается в браузере.

10. Добавить шаблон для footer component
```
<footer class="footer">
    <div class="footer__links">
        <a class="footer__link" mat-button href="#">Privacy Policy</a>
        <a class="footer__link" mat-button href="#">Archive</a>
        <a class="footer__link" mat-button href="#">Authors</a>
        <a class="footer__link" mat-button href="#">GitHub</a>
      </div>
</footer>
```

Добавить стили для footer component
```
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #D9D9D9;
}

.footer__link {
  margin: 1em;
}
```

Отредактировать app.component для корректного позиционирования
```
<div class="app-wrapper">
  <app-header></app-header>

  <div class="content">
    <router-outlet/>
  </div>

  <app-footer></app-footer>
</div>
```

```
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  flex: 1 0 auto;
  background-color: #F0F0F3;
}
```

11. Сгенерировать компоненту списка девайсов
```
ng generate component device-list
```

Добавить роут для отображения компоненты списка девайсов, посмотреть, что компонента отображается.
```
export const routes: Routes = [
    {
        path: '',
        component: DeviceListComponent
    }
];
```

12. Импортируем в DeviceListComponent необходимые модули
```
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
```


13. Добавить шаблон компоненты DeviceListComponent
```
<div class="device-list">

  <mat-form-field appearance="outline" class="search-bar">
    <mat-label>Search</mat-label>
    <input matInput>
    <mat-icon matSuffix>search</mat-icon>
  </mat-form-field>

  <table mat-table [dataSource]="devices" class="table mat-elevation-z8">

    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{ element.position }} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{ element.name }} </td>
    </ng-container>

    <!-- Model Column -->
    <ng-container matColumnDef="model">
      <th mat-header-cell *matHeaderCellDef> Model </th>
      <td mat-cell *matCellDef="let element"> {{ element.model }} </td>
    </ng-container>

    <!-- Id Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef> Id </th>
      <td mat-cell *matCellDef="let element"> {{ element.id }} </td>
    </ng-container>

    <!-- Date Column -->
    <ng-container matColumnDef="date">
      <th mat-header-cell *matHeaderCellDef> Date </th>
      <td mat-cell *matCellDef="let element"> {{ element.date }} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <button mat-flat-button class="add-device-button">Add device</button>

</div>
```

14. Добавить стили для DeviceListComponent
```
.device-list {
  margin: 3em;
}

.search-bar {
  width: 100%;
}

.table {
  padding: 3em;
}

.add-device-button {
  width: 100%;
  margin-top: 1em;
}
```

15. Добавить интерфейс
```
export interface IDeviceDataInterface {
    position: string;
    name: string;
    model: string;
    id: string;
    date: string;
}
```

для public devices в DeviceListComponent

```
public devices: IDeviceDataInterface[]  = [
    {
      position: '1',
      name: 'iPhone',
      model: '16 pro max',
      id: '12345',
      date: '19.02.2025'
    }
];
```

16. Сгенерировать компоненту device-details
```
ng generate component device-details
```

Добавить импорт
```
import { MatListModule } from '@angular/material/list';
```

17. Добавить шаблон для  device-details.component
```
<div class="device-details ">
    <mat-list class="device-details__options-list">
        @for (item of deviceOptions; track item) {
            <mat-list-item>
                {{ item.label }}: {{ item.value }}
            </mat-list-item>
        }
    </mat-list>
</div>
```

Добавить стили для device-details.component
```
.device-details {
    margin: 5em;
    background-color: #D9D9D9;
    border-radius: 20px;
}

.device-details__options-list {
    color: #2C2E33;
    padding: 3em;
}
```

18. Заменить компоненту в app.routes, посмотреть, что компоеннта детальной информации отображается в браузере.

## Lesson 4

1. Разделить приложение на модули. В данном случае можно выделить модуль работы с устройствами
 
```shell
ng generate module children/devices --routing
```

_Создает модуль DevicesModule вместе с файлом маршрутизации devices-routing.module.ts._

Перенести компоненты. Структура проекта после переноса:

```
app/
│── children/
│   │── devices/
│   │   │── components/
│   │   │   │── device-list/
│   │   │   │── device-details/
│   │   │── devices-routing.module.ts
│   │   │── devices.module.ts
│── app.routes.ts
```

2. Настройка ленивой загрузки в `app.routes.ts`

```ts
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full',
    },
    {
        path: 'devices',
        loadChildren: () => import('./children/devices/devices.module').then(m => m.DevicesModule)
    }
];
```
3. Настроить маршрутизацию в модуле устройств `devices-routing.module.ts`

```ts
const routes: Routes = [
    { path: '', component: DeviceListComponent },
    { path: ':id', component: DeviceDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevicesRoutingModule {}
```

Проверить в браузере, что отображается страница детальной информации

4. Добавление навигации на страницу деталей устройства

В `device-list.component.ts` добавить метод для навигации:

```ts
protected router: Router = inject(Router); // пока какая-то магия DI

protected navigateToDetails(id: string): void {
    this.router.navigate(['/devices', id]);
}
```

В шаблоне компоненты привязать вызов метода и немного стилей

```angular181html
    <tr mat-row *matRowDef="let row; let element; columns: displayedColumns;"
        class="table__row" 
        (click)="navigateToDetails(element.id)"
    ></tr>
```

```scss
.table {
  padding: 3em;

  &__row {
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #d6d6d6;
    }
  }
}
```

Проверить в браузере, что отображается страница детальной информации

5. Добавить обработку динамического параметра в роуте

Вынести список девайсов в константу `device-list.constant.ts`

```
devices/
│── constants/
    │── device-list.constant.ts
```

```ts
export const DEVICE_LIST: IDeviceDataInterface[] = [
    {
        position: '1',
        name: 'iPhone',
        model: '16 pro max',
        id: '12345',
        date: '19.02.2025'
    },
    {
        position: '2',
        name: 'iPhone',
        model: '15 pro',
        id: '12346',
        date: '03.03.2025'
    }
];
```

Заменить на нее в компоненте листа и деталей

```ts
//device-list.component.ts
  public devices: IDeviceDataInterface[] = DEVICE_LIST;
```

```ts
//device-details.component.ts
public deviceOptions: Array<{ label: string, value: string }> = []

protected activatedRoute: ActivatedRoute = inject(ActivatedRoute); // черная магия DI

constructor() {
    this.activatedRoute.params.subscribe((params: Params) => { // черная магия RxJs
        const device = DEVICE_LIST.find((el) => el.id === params['deviceId']);

        if (!device) {
            return;
        }

        // маппинг девайса к списку опций
        this.deviceOptions = Object.entries(device).map(([label, value]: [string, string]) => {
            return { label, value };
        })
    })
}
```

Проверить в браузере, что на странице списка отобразился новый девайс, а при переходе на детальную страницу отображается выбранный девайс

6. Добавить guard

```shell
ng generate guard guards/auth
```

Выбрать canActivate

Добавить в guard проверку на наличие токена `auth.guard.ts`
```ts
export const authGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);

    return !!localStorage.getItem('token') || router.parseUrl('401');
};
```

Добавить защиту маршрута `app.routes.ts`

```ts
{
    path: 'devices',
    loadChildren: () => import('./children/devices/devices.module').then(m => m.DevicesModule),
    canActivate: [authGuard],
},
```

Теперь при открытии приложения отображается пустой экран. Потому что пользователь не "авторизован"
Добавим функционал "авторизации" и страницу 401

7. Создание 401

```shell
ng generate component components/unauthorized
```

```angular181html
<div class="unauth unauth__container">
    <H1>Попробуйте авторизоваться!</H1>
</div>
```

```scss
.unauth {
	margin: 3em;

	&__container {
		display: flex;
		justify-content: center;
	}
}
```

И добавим "авторизацию".

```ts
//header.component.ts
protected router: Router = inject(Router);

protected sidnIn(): void {
    localStorage.setItem('token', 'jwt qsjhdinjsxiqo123');
    this.router.navigate(['/']);
}
```

```angular181html
<button mat-button class="app-header__button" (click)="sidnIn()">Sign In</button>
```

Проверяем в браузере, что без "авторизации" доступа к девайсам нет, а после "авторизации" - есть

8. Resolver

```shell
ng generate resolver resolvers/device
```

Добавляем получения девайса

```ts
export const deviceResolver: ResolveFn<IDeviceDataInterface | undefined> = (route, state) => {
    const deviceId = route.paramMap.get('deviceId');

    return DEVICE_LIST.find((device) => device.id === deviceId);
};
```

Добавляем в маршрутизацию

```ts
//devices-routing.module.ts
{
    path: ':deviceId',
    component: DeviceDetailsComponent,
    resolve: { device: deviceResolver }
}
```

И обновляем получение девайса в конструкторе компоненты

```ts
//device-details.component.ts
this.activatedRoute.data.subscribe((data: Data) => {
    const device: IDeviceDataInterface | undefined = data['device'];

    if (!device) {
        return;
    }

    this.deviceOptions = Object.entries(device).map(([label, value]: [string, string]) => {
        return { label, value };
    })
});
```

## Lesson 7

1. Реализовать форму с использованием шаблонных форм.


```shell
ng g component children/devices/components/add-device 
```

В шаблон добавим форму

```angular181html
<div class="add-device-form__wrapper">  
    <form>  
        <mat-form-field appearance="fill" class="add-device-form__control">  
            <mat-label>Device id</mat-label>  
            <input matInput name="deviceId">  
        </mat-form-field>  
  
        <mat-form-field appearance="fill" class="add-device-form__control">  
            <mat-label>Device name</mat-label>  
            <input matInput name="deviceName">  
        </mat-form-field>  
  
        <mat-form-field appearance="fill" class="add-device-form__control">  
            <mat-label>Device model</mat-label>  
            <input matInput name="deviceModel">  
        </mat-form-field>  
  
        <button mat-flat-button color="primary" class="add-device-form__btn" type="submit">  
            Add  
        </button>  
    </form>  
  
    @for (item of newDevices; track item) {  
        <mat-list-item>  
            {{ item | json }}  
        </mat-list-item>  
    }  
</div>
```

И стили

```scss
.add-device-form {  
    &__wrapper {  
       display: flex;  
       flex-direction: column;  
       gap: 16px;  
    }  
  
    &__control {  
       width: 100%;  
    }  
}
```

Теперь создадим модель девайса


```ts
export class Device {  
    date: string = new Date().toISOString();  
    position: string = '6';  
  
    constructor(  
        public id: string = crypto.randomUUID(),  
        public name: string,  
        public model: string,  
    ) {  
    }
}
```

Далее создадим поля в компоненте

```ts
@Component({  
    selector: 'app-add-device',  
    imports: [  
        MatFormField,  
        MatInput,  
        FormsModule,  
        MatButton  
    ],  
    templateUrl: './add-device.component.html',  
    styleUrl: './add-device.component.scss'  
})  
export class AddDeviceComponent {  
    protected newDevices: Device[] = [];  
  
    protected id: string = crypto.randomUUID();  
    protected name: string = 'Xiaomi';  
    protected model: string = 'Xiaomi Mi 5G Turbo 1024Gb';

	protected onSubmit(): void {  
	    this.newDevices.push(new Device(  
	        this.id,  
	        this.name,  
	        this.model,  
	    ));  
	}
  
}
```

В html для полей мы прокинем `ngModel` и обработку подтверждения формы

```angular181html
<form (ngSubmit)="onSubmit()">  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device id</mat-label>  
        <input matInput name="deviceId" [ngModel]="id">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device name</mat-label>  
        <input matInput name="deviceName" [ngModel]="name">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device model</mat-label>  
        <input matInput name="deviceModel" [ngModel]="model">  
    </mat-form-field>  
  
    <button mat-flat-button color="primary" class="add-device-form__btn" type="submit">  
        Add  
    </button>  
</form>
```

Форма заполняется значениями из полей. Однако как бы не меняли значения в контролах, при сабмите данные не поменяются. Для этого нужно использовать двухстороннюю привзяку для моделей `[ngModel]` на `[(ngModel])`;

```angular181html
<form (ngSubmit)="onSubmit()">  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device id</mat-label>  
        <input matInput name="deviceId" [(ngModel)]="id">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device name</mat-label>  
        <input matInput name="deviceName" [(ngModel)]="name">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device model</mat-label>  
        <input matInput name="deviceModel" [(ngModel)]="model">  
    </mat-form-field>  
  
    <button mat-flat-button color="primary" class="add-device-form__btn" type="submit">  
        Add  
    </button>  
</form>
```
2. Реализовать форму с использованием реактивных форм.

Импортировать в компоненту `AddDeviceComponent` модуль `ReactiveFormsModule`.

Далее создадим форм группу.
```ts
protected form: FormGroup = new FormGroup({  
    deviceId: new FormControl(crypto.randomUUID()),  
    deviceName: new FormControl('', Validators.required),  
    deviceModel: new FormControl('', Validators.required),  
});
```
Добавим привязку форм группы `formGroup` и привяжем каждый контрол с помощью `formControlName`.

 ```angular181html
 <form [formGroup]="deviceForm" (ngSubmit)="onSubmit()">  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device id</mat-label>  
        <input matInput formControlName="deviceId">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device name</mat-label>  
        <input matInput formControlName="deviceName">  
    </mat-form-field>  
  
    <mat-form-field appearance="fill" class="add-device-form__control">  
        <mat-label>Device model</mat-label>  
        <input matInput formControlName="deviceModel">  
    </mat-form-field>  
  
    <button mat-flat-button color="primary" class="add-device-form__btn" type="submit">  
        Add  
    </button>  
</form>
```
Добавим проверку на ID с помощью валидатора и regExp

```ts
 Validators.pattern(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
```

И в классе реактивной формы обработаем сабмит

```ts
protected onSubmit(): void {  
    this.newDevices.push(new Device(  
        this.deviceForm.value.deviceId,  
        this.deviceForm.value.deviceName,  
        this.deviceForm.value.deviceModel,  
    ));  
}
```
Добавим обработку имитации загрузки на сервер. С помощью rxJs и добавим лоадер для кнопки. Для этого импортируем модуль спинера `MatProgressSpinnerModule` и добавим обработку загрузки

```ts
protected loading: WritableSignal<boolean> = signal(false);

  
protected onSubmit(): void {  
    this.loading.set(true);  
  
    of(this.deviceForm.value)  
        .pipe(  
            delay(1000),  
            finalize(() => this.loading.set(false)),  
        )  
    .subscribe((value) => {  
        this.newDevices.push(new Device(  
            value.deviceId,  
            value.deviceName,  
            value.deviceModel,  
        ));  
    });  
}
```

Теперь добавим спиннер в форме

```angular181html
<button mat-flat-button color="primary" [disabled]="deviceForm.invalid || loading()" class="add-device-form__btn" type="submit">  
    <mat-spinner *ngIf="loading()" diameter="24" color="accent" mode="indeterminate"></mat-spinner>  
    <span *ngIf="!loading()">Add</span>  
</button>
```

3. Создание кастомного валидатора.

Вынесем логику валидации идентификатора устройства в отдельный валидатор.

```ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';  
  
export function deviceIdValidator(): ValidatorFn {  
    return (control: AbstractControl): ValidationErrors | null => {  
        if (!control.value) {  
            return null;  
        }  
  
        const valid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(control.value);  
  
        return valid ? null : { invalidUUID: { value: control.value } };  
    };  
}
```
Применим на форме и добавим обработку ошибки
```ts
protected deviceForm: FormGroup = new FormGroup({  
    deviceId: new FormControl(crypto.randomUUID(), uuidValidator()),  
    deviceName: new FormControl('', Validators.required),  
    deviceModel: new FormControl('', Validators.required),  
});
```

```angular181html
            <mat-error *ngIf="deviceForm.controls['deviceId']?.hasError('invalidUUID')">
                Device ID must be in UUID format.
            </mat-error>
```

4. Реализация валидатора через директиву


```ts
@Directive({   
selector: '[uuid-validator]',  
    providers: [{  
        provide: NG_VALIDATORS,  
        useExisting: UuidValidatorDirective,  
        multi: true  
    }],  
})  
export class UuidValidatorDirective implements Validator {  
    public validate(control: AbstractControl): ValidationErrors | null {  
        return uuidValidator()(control);  
    }  
}
```

Теперь в шаблоне для пароля будет выглядеть так:

```angular181html
<mat-form-field appearance="fill" class="add-device-form__control">  
    <mat-label>Device id</mat-label>  
    <input uuid-validator matInput formControlName="deviceId">  
    <mat-error *ngIf="deviceForm.controls['deviceId']?.hasError('invalidUUID')">  
        Device ID must be in UUID format.  
    </mat-error>  
</mat-form-field>
```

Можно использовать более краткий провайд в директиве:

```ts
@Directive({  
    selector: '[uuid-validator]',  
    providers: [{  
        provide: NG_VALIDATORS,  
        useFactory: () => {  
            return uuidValidator();  
        },  
        multi: true  
    }],  
})  
export class UuidValidatorDirective {  
  
}
```

5. Асинхронный валидатор

```ts
@Directive({  
    selector: '[uuid-validator]',  
    providers: [{  
        provide: NG_ASYNC_VALIDATORS,  
        useExisting: UuidValidatorDirective,  
        multi: true  
    }],  
})  
export class UuidValidatorDirective implements Validator {  
    public validate(control: AbstractControl): ValidationErrors | null {  
        return of(uuidValidator()(control))  
            .pipe(  
                delay(1000),  
            );  
    }  
}
```

6. Типизированные формы


Создадим интерфейс формы:
```ts
export interface IAddDeviceForm {  
    deviceId: FormControl<string>;  
    deviceName: FormControl<string>;  
    deviceModel: FormControl<string>;  
}
```

И как generic тип пропишем в formGroup:

```ts
FormGroup<IAddDeviceForm>
```
Теперь, где мы инициализируем значение формы возникла ошибка, что поле может быть string | undefined, решением этого будет добавление в опции nullable опции:

```ts
protected deviceForm: FormGroup<IAddDeviceForm> = new FormGroup<IAddDeviceForm>({  
    deviceId: new FormControl<string>(crypto.randomUUID(), { nonNullable: true }),  
    deviceName: new FormControl<string>('', { nonNullable: true, validators: uuidValidator }),  
    deviceModel: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),  
});
```

И для сбора значений с формы воспользуемся функцией getRawValue():
```ts
of(this.deviceForm.getRawValue())
```

Теперь для привязки можно использовать `[formControl]="deviceForm.controls.deviceId"`

7. MVVM

```ts
export class AddDeviceFormViewModel {  
    get controlsMap(): IAddDeviceForm {  
        return this.form.controls;  
    }  
  
    get form(): FormGroup<IAddDeviceForm> {  
        return this._form;  
    }  
  
    private _form: FormGroup<IAddDeviceForm> = new FormGroup<IAddDeviceForm>(this.getControls());  
  
    public toModel(): Device {  
        const formValue = this._form.getRawValue();  
  
        return new Device(  
            formValue.deviceId,  
            formValue.deviceName,  
            formValue.deviceModel,  
        );  
    }  
  
    public getFormValue(name: keyof IAddDeviceForm): string | undefined {  
        return this.controlsMap[name] ? this.controlsMap[name].value : undefined;  
    }  
  
    public setFormValue(name: keyof IAddDeviceForm, value: string, onlySelf: boolean = false, emitEvent: boolean = true): void {  
        if (this.controlsMap[name]) {  
            this.controlsMap[name].setValue(value, { onlySelf, emitEvent });  
        }  
    }  
  
    public valueChanges(name: keyof IAddDeviceForm): Observable<string> {  
        return this.controlsMap[name] ? this.controlsMap[name].valueChanges : EMPTY;  
    }  
  
    protected getControls(): IAddDeviceForm {  
        return {  
            deviceId: new FormControl<string>(crypto.randomUUID(), { nonNullable: true }),  
            deviceName: new FormControl<string>('', { nonNullable: true, validators: uuidValidator() }),  
            deviceModel: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),  
        };  
    }  
}
```

Применим в компоненте:

```ts
// src/app/children/devices/components/add-device/add-device.component.ts

protected deviceForm: AddDeviceFormViewModel = new AddDeviceFormViewModel();  
  
protected onSubmit(): void {  
    this.loading.set(true);  
  
    of(this.deviceForm.toModel())  
        .pipe(  
            delay(1000),  
            finalize(() => this.loading.set(false)),  
        )  
    .subscribe((value) => {  
        this.newDevices.push(value);  
    });  
}
```

В шаблоне:

```ts
<form [formGroup]="deviceForm.form" (ngSubmit)="onSubmit()">
```

```ts
<input matInput [formControl]="deviceForm.controlsMap.deviceId">  
<mat-error *ngIf="deviceForm.controlsMap.deviceId?.hasError('invalidUUID')">  
    Device ID must be in UUID format.  
</mat-error>

<!---->

<input matInput [formControl]="deviceForm.controlsMap.deviceName">

<!---->

<input matInput [formControl]="deviceForm.controlsMap.deviceModel">

<!---->

<button mat-flat-button color="primary" [disabled]="deviceForm.form.invalid || loading()" class="add-device-form__btn" type="submit">
```
Проверить что логика работы формы не поменялась