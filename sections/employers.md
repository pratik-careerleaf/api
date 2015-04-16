# Employers data

Use this API to migrate your existing employers (company info and users) to Careerleaf platform




## Employer Endpoints

* `GET /app/api/v1/employers` -> paginated list of employers
* `GET /app/api/v1/employers/$id/` - single employer
* `POST /app/api/v1/employers/` - create new 
* `PUT /app/api/v1/employers/$id` - update existing (overwrite)
* `PATCH /app/api/v1/employers/$id` - update existing (partial update)
* `GET /app/api/v1/employers/quick-list/` - paginated list of employers with only few fields returned (id, old_id etc..)




## Create new employer

    POST /app/api/v1/employers


#### Request BODY

NOTE: it's not a correct json document (because of js comments in there), the actual request must contain valid json value in the request body (see GET response for sample of json)

```js

{
      "name": "T Hosp", // required
      "url": "http://example1.com", // optional
      "old_id": "12345", // optional, set it to reuse during migration re-run
      "description": "Aenean vulputate eleifend tellus...",
      "users": [ // must have at least one item 
        {
          "first_name": "Kristin", // required
          "last_name": "V", // required
          "email": "kv@example1.com", // required
          "access_group": "admin"   // possible options (admin, LA) ("LA" - limited access), default is "admin"
        }
      ]
    }
```


## List of employers

    GET /app/api/v1/employers

### Parameters 

pagination options 


### Response 

``` json 
{
  "count": 5,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": "54be99e3ae36ba1a6006efe2",
      "name": "T Hosp",
      "url": null,
      "old_id": null,
      "created_on": "2015-01-20T18:09:40.919",
      "description": null,
      "users": [
        {
          "id": "54be99e3ae36ba1a6006efe3",
          "first_name": "Kristin",
          "last_name": "V",
          "email": "krubia@yyyy.com",
          "access_group": "admin"
        }
      ]
    },
    {
      "id": "54bf3d47ae36ba1a6006efe8",
      "name": "ashley",
      "url": null,
      "old_id": null,
      "created_on": "2015-01-21T05:46:48.240",
      "description": null,
      "users": [
        {
          "id": "54bf3d47ae36ba1a6006efe9",
          "first_name": "ashley",
          "last_name": "ashley",
          "email": "acentola@yyyy.com",
          "access_group": "admin"
        }
      ]
    }
  ]
}

```

## Quck List of employers

use it to quickly iterate through existing records, that can be useful during migration re-run

    GET /app/api/v1/employers/quick-list/


### Parameters 

pagination options 


### Response 

```json 

{
  "count": 1310,
  "next": "http://docker:8008/app/api/v1/employers/quick-list?page=2&page_size=3",
  "previous": null,
  "results": [
    {
      "id": "54be99e3ae36ba1a6006efe2",
      "old_id": "1",
      "name": "T Hosp",
      "created_on": "2015-01-20T18:09:39.791"
    },
    {
      "id": "54bf3d47ae36ba1a6006efe8",
      "old_id": "2",
      "name": "A Comp",
      "created_on": "2015-01-21T05:46:47.150"
    },
    {
      "id": "54c02299ae36ba556c06efef",
      "old_id": null,
      "name": "ABC Medical Group",
      "created_on": "2015-01-21T22:05:13.941"
    }
  ]
}

```
