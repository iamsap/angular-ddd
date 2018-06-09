# Domain-Drive Angular

This app is a very simple demo of how to do domain-driven design even in frontend technologies like Angular.

## Business logic in controller
```
/* app.component.ts */

  // HttpClient is injected into the constructor
  constructor(private http:HttpClient) {
  }

  // HttpClient fetches users 
  ngOnInit() {
    this.http.get<Page>('https://reqres.in/api/users')
        .subscribe((data: Page) => this.page = { ...data });
  }  
```

## Domain repository
```
/* app.component.ts */

  // Domain repository
  constructor(private repo:UserRepository) {
  }

  // Get users from repo instead
  ngOnInit() {
    this.repo.getUsers()
      .subscribe((data: Page) => this.page = { ...data });
  } 

```

[@robbymillsap](https://twitter.com/robbymillsap)