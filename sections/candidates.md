# Candidates (Job Seekers) data

Use this API to migrate your existing job seekers data to Careerleaf platform. 
It is possible to provide the exact values for different fields of the profile or to push a resume file to be parsed by our platform (or use combination of both). 

It is recommended to provide exact data for profile if it's available. Resume parsing does not work 100% correctly, it is probably works fine for 70% of information in the resume and sometimes fails to recognize any valuable info at all. It is also significantly slower.





## Candidates Endpoints

* `GET /app/api/v1/candidates` -> paginated list of candidates
* `GET /app/api/v1/candidates/$id/` - single candidate
* `POST /app/api/v1/candidates/` - create new 
* `PUT /app/api/v1/candidates/$id` - update existing (overwrite)
* `PATCH /app/api/v1/candidates/$id` - update existing (partial update)
* `GET /app/api/v1/candidates/quick-list/` - paginated list of candidates with only few fields returned (id, old_id etc..)



## Create new candidate

    POST /app/api/v1/candidates


#### Request BODY

NOTE: it's not a correct json document (because of js comments in there), the actual request must contain valid json value in the request body (see GET response for samples of json)

```js 
{
    
  // required 
  "user": {
    "first_name": "Anthony", 
    "last_name": "Kalski",
    "email": "akalski@example.net", // must be unique
    "username": "anthony.k" // optional, if not provided, will be generated automatically based on <first_name.last_name>
  },

  // all the fields in profile are optional, except for individual items of the lists (experience, languages etc)
  "profile": {
    "position_title": "Manufacturing Engineer",
    "bio": "Etiam vitae tortor....",
    "address": {
      "location_name": "Escondido CA",
      "postal_code": "33333",
      "street": "2042 TTTTT Glen",
      "city": "Escondido",
      "state": "CA",   // free text
      "country": "",
      "country_code": "US"  //// two letter ISO 3166-1 country code - http://en.wikipedia.org/wiki/ISO_3166-1
    },
    "geo_pref": "in_state",   /// "Geographical preference", see profile options
    "travel_pref": "less25",  /// "Travel preferences", see profile options 
    "education_level": "bachelor",  /// "Education Degree", see profile options 
    "languages": [ // can be empty
      {
        "code": "en", // required 
      },
      {
        "code": "es", // required
      }
    ],
    "education": [ // can be empty
      {
        "school_name": "NATIONAL UNIVERSITY", // required
        "started_on": { // required
          "year": 1990          
        },
        "ended_on": {   // optional, if empty assumes 'current'
          "year": 1995, // required
          "month": 1  // optional
        },
        "location": "San Diego, California",
        "degree": "col_cert", /// (optional), "Education Degree", see profile options 
        "prog_type": "",  /// type of the program, ignored if `degree` is specified, optional      
        "prog_name": "Operations Management",
        "desc": "Etiam vitae tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Curabitur suscipit suscipit tellus. "
      }
    ],
    "experience": [ // can be empty
      {
        "position": "MANUFACTURING ENGINEER", // required
        "company": "AAAA YYYY", 
        "company_url": null,
        "started_on": { // required
          "year": 2004,
          "month": 5
        },
        "ended_on": { // optional, if empty assumes 'current'
          "year": 2007,
          "month": 5
        },
        "is_current": false,
        "location": "TEMECULA, CA",
        "desc": "Etiam vitae tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  "
      },
      {
        "position": "Manufacturing Engineer", 
        "company": "(TTTT HEALTHCARE LTD.)",
        "company_url": null,
        "started_on": {
          "year": 1992,
          "month": 1
        },
        "ended_on": {
          "year": 1998,
          "month": 1
        },
        "location": "San Diego, CA",
        "desc": "Etiam vitae tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Curabitur suscipit suscipit tellus. "
      }
    ],
    "skills": [ // can be empty
      {
        "name": "Sales", // required
        "years": null
      },
      {
        "name": "Managing people", // required
        "years": 2 // optional 
      }
    ],
    "can_work_in": [ // can be empty
      {
        "code": "GB", //required, two letter ISO 3166-1 country code 
      },
      {
        "code": "CA",
      }
    ],
    "pos_types": [ // can be empty 
      {
        "code": "part_time", // required
      }
    ],
    "security": {  // optional 
      "searchable": true,
      "confidential": false,
      "hidden": false
    },
    "contact_info": {
      "phone": "(760) 822-3344",
      "cell_phone": null
    },
    "industries": [  // can be empty 
      {
        "id": "54bd68d3ae36ba651cfbf1bf",   /// "Industries", see profile options
        //"label": "Nocturnist"
      },
      {
        "id": "54bd68d3ae36ba651cfbf0bf",
        //"label": "Post-Acute Care"
      }
    ],
    "old_id": "123456",  /// optional, populate this field to reuse during migration re-run or to implement redirects from old pages
    "alt_ids": [  // optional, same as `old_id`, can be used for url redirects
      "old-url-slug1", 
      "aplication_id_4321"
    ],    
  }
}

```



### profile options 

* `GET /app/api/v1/profile-options/degrees/` -> **Education Degree** options 
* `GET /app/api/v1/profile-options/position-types/` -> **Position Types**
* `GET /app/api/v1/profile-options/industries/` -> **Industries**
* **Geographical preferences** (field `geo_pref` on profile), available options are: 

```python
# NOTE: here listed (id, _(label) ), you only need 'id' to make changes
('local', _('Local')),
('in_state', _('Within State/Province')),
('in_country', _('Within Country')),
('anywhere', _('Anywhere'))
```

* **Travel preferences** (field `travel_pref` on profile)

```python 
# NOTE: here listed (id, _(label) ), you only need 'id' to make changes
('none', _('None')),
('less10', _('Once a month')),
('less25', _('Once a week')),
('less50', _('2-3 days a week')),
('less75', _('4 days a week'))
```

Each option endpoint return list of `id` and `label`, you only need to provide an id when creating or making any changes. 
Get methods for the candidate in some cases return both, e.g. `{id: "en", label: "English"}`, the label is those case is read only

### redirect support from old urls 

setting `old_id` and `alt_ids` will allow to implement redirection from old profile/application pages to new ones

if in the old system the url looked like `http://example.com/applicant-12345-view`, then setting `old_id` value during the migration to `12345` will allow CL system to recognize correct profile by visiting `/app/profile/by-old-id/12345`, which will redirect to the correct public profile url 
So, the redirect rule will be similar to: 

    /applicant-(\d+)-view -> /app/profile/by-old-id/$1


## quick list 

`GET /app/api/v1/candidates/quick-list/` 

This endpoint can be used to quickly iterate through all records in the database, to be able to detect which ones are missing.

#### Parameters 

* pagination options  (page, page_size)


#### RESPONSE 

```js 

{
  "count": 50,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "first_name": "Admin",
      "last_name": "Root",
      "email": "devops@careerleaf.com",
      "title": null,
      "old_id": "111111",
      "alt_ids": [],
      "created_on": "2015-01-13T19:31:10.657",
      "updated_on": "2015-01-13T19:31:10.658"
    },
    {
      "id": 2,
      "first_name": "Ashley",
      "last_name": "YYY",
      "email": "circulation@xxxxyyyy.com",
      "title": "Some title",
      "old_id": null,
      "alt_ids": [],
      "created_on": "2015-01-21T05:53:02.717",
      "updated_on": "2015-01-21T05:54:04.091"
    }

    /// ...
  ]
}
```


## Getting single record 

response includes all the writable fields, accepted on creation with some *read only* fields 
[example of response](https://github.com/careerleaf/api/blob/master/sections/candidates_get.md)


# Resumes 


## Upload resume

The job seeker profile must be already created before uploading resume, it can be empty with only mandatory info filled in (user details)

* `POST /app/api/v1/candidates/$id/resume_upload/?param=val` 

param=val The URL-encoded parameters for this request. They cannot be sent in the request body.

#### Request BODY

required The file contents to be uploaded. Since the entire POST body will be treated as the file, any parameters must be passed as part of the request URL.

#### Parameters

* file_name
* content_type - HTTP content_type (e.g. 'plain/text' )
* name - (optional) - name of the resume, if empty file name will be used 
* import - (1|""), if specified, the system will attempt to parse the resume and update profile with this info 

*NOTE: resume import may override existing data on the profile*

#### RETURNS 

if successful 201 status code


## Download resume 

* `GET /app/api/v1/candidates/$id/resumes/$resume_id` 

where 
`resume_id` can be ObjectId or `auto` literal
When `auto` is requested, it will return PDF resume automatically generated based on profile data


# References 

two letter [ISO 3166-1 country codes](http://en.wikipedia.org/wiki/ISO_3166-1)
