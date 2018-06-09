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
/* app.module.ts */
// Register the repo
import { UserRepository } from './repositories/user.repository';

// Register repo as a provider
providers: [UserRepository]


/* app.component.ts */

  // Inject the repo instead
  constructor(private repo:UserRepository) {
  }

  // Get users from repo 
  ngOnInit() {
    this.repo.getUsers()
      .subscribe((data: Page) => this.page = { ...data });
  } 
```

## Benefits

* Repo can be mocked and is more testable
* Separation of business logic from controller

## Next steps

* Create a user module 
* Move UserRepository and models out of app.module.ts and into the user module

[@robbymillsap](https://twitter.com/robbymillsap)