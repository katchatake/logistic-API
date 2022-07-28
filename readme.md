# Logistic API

#### Get All Branchs

> GET: http://localhost:3000/v1/branchs/get-all

#### Get All Vehicles

> GET: http://localhost:3000/v1/vehicles/get-all

#### Get by ID Vehicles

> GET: http://localhost:3000/v1/branchs/get-one/1

#### Create Vehicle

> GET: http://localhost:3000/v1/branchs/create

```javascript
{
    "name":"Ibiza",
    "model":"2019",
    "color":"Blanco",
    "date_into":"2020-01-01",
    "status":1,
    "assigned":1,
    "branchIdBranch":3
}
```

#### Modify Vehicles

> GET: http://localhost:3000/v1/vehicles/modify/1

```javascript
{
    "name":"Ibiza",
    "model":"2019",
    "color":"Blanco",
    "date_into":"2020-01-01",
    "status":1,
    "assigned":1,
    "branchIdBranch":3
}
```


#### Delet Vehicles

> GET: http://localhost:3000/v1/branchs/delete/1