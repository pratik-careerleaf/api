# Job search

`since v2.29`

This API does not require authentication (in it's current implementation). You can use `POST` or `GET` requests to obtain data. It can also be used to make CORS requests using javascript.



## Full mode
 
* `GET /app/api/v1/job-search` 
* `POST /app/api/v1/job-search/`


In this mode paramters must be provided as `application/json` request

### parameters

- `page` - page number
- `page_size` - page size, 5 by default
- `search` - search object 


example

```json
{
        "keywords": "test", 
        "location": {
            "city": "Toronto", 
            "country": "CA"
        }, 
        "job_types": [
            {
                "name": "Contract"
            }
        ], 
        "categories": [], 
        "companies": [
            {
                "name": "Richmond Company"
            }
        ]
    }
```

all the properties are optional

`location` property can contain: 
- `city` 
- `state`
- `country` 
- `mode` - options are ['dist_kms', 'dist_miles'], default `dist_kms`
- `distance` - used with `mode`, defines the distance from the center of found city to include jobs for
- `query` - string that describes location, less reliable than using separate fields


`job_types` - list of job types to filter jobs, when multiple values provided they treated as `OR` conditions.
job type can be matched by
- `name`  
- `slug` 

e.g. `"jobtypes": [{"slug": "full_time"}, {"name": "Contract"}]`

`categories` - list of job categories to filter jobs, can be matched by:
- `name`
- `slug`

`companies` - list of companies to filters jobs, can be matched by
- `id` - company id 
- `name` - company name 



## Simple mode

* `GET /app/api/v1/job-search` 

Only limited number of paramters can be provided in query string

### paramters 

- `page` - page number
- `page_size` - page size, 5 by default
- `keywords` - search keywords
- `city` - location city
- `country` - location country (both city and country must be specified)


## CORS mode

In this mode the search object is passed as json serialized string in `search` query string paramter, additional paramter `ctype=json` must be present to signal backend service to process request in a special way.


## Response

```js

{
    "search": {
        "keywords": "test", 
        "location": null, 
        "job_types": [
            {
                "name": "Contract"
            }
        ], 
        "categories": [], 
        "companies": [
            {
                "name": "Richmond Company"
            }
        ]
    }, 
    "jobs": [
        {
            "id": "557625e1be587551888cc7f7", 
            "title": "test email", 
            "url": "http://example.com/jobs/test-email-in-toronto-ontario-ca-2/", 
            "company": "Richmond Company", 
            "logo_url": "http://example.com/app/jobs/company/53dba8bdbe58755f104f5469/logo?ts=1412361824", 
            "summary": "short", 
            "updated_on": "2015-06-24T12:05:49.794",
            "date_posted": "2015-01-10T12:05:49.794",
            "date_expires": "2015-07-4T12:05:49.794",
            "location": {
                "full_name": "Toronto, Ontario, CA", 
                "city": "Toronto", 
                "state": "Ontario", 
                "country_code": "CA", 
                "coordinates": [
                    43.653226, 
                    -79.3831843
                ], 
                "is_nationwide": false
            }, 
            "job_types": [
                {
                    "slug": "contract", 
                    "name": "Contract"
                }
            ], 
            "categories": [
                {
                    "id": "4fa04e6ce01909d74f2a875c", 
                    "name": "Advertising"
                }
            ]
        }
    ], 
    "total": 1, 
    "page": 1, 
    "page_size": 3
} 

```
