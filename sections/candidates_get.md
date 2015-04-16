# Getting single candidate 

`GET /app/api/v1/candidates/$id/`

# RESPONSE

response includes all the writable fields, accepted on creation with some *read only* fields: "option labels", `resumes`, `public_url`

```json 

{
  "id": 202,
  "user": {
    "first_name": "Anthony",
    "last_name": "Kalski",
    "email": "ajkalski@example.net",
    "username": "anthony.x"
  },
  "profile": {
    "position_title": "Manufacturing Engineer",
    "bio": "Etiam vitae tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Curabitur suscipit suscipit tellus.\n\nNullam quis ante. Phasellus viverra nulla ut metus varius laoreet. Fusce fermentum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aenean commodo ligula eget dolor.",
    "address": {
      "location_name": "Escondido CA",
      "postal_code": "92027",
      "street": "22 Maecenas Glen",
      "city": "Escondido",
      "state": "CA",
      "country": "",
      "country_code": "US"
    },
    "geo_pref": "in_state",
    "travel_pref": "less25",
    "education_level": "bachelor",
    "languages": [
      {
        "code": "en",
        "name": "English"
      },
      {
        "code": "es",
        "name": "Spanish"
      }
    ],
    "education": [
      {
        "school_name": "Etiam purum",
        "started_on": {
          "year": 2009,
          "month": null
        },
        "ended_on": {
          "year": 2012,
          "month": 4
        },
        "location": "Donec orc, CA",
        "prog_type": "",
        "degree": "bachelor",
        "prog_name": "Math and CS",
        "desc": "Donec orci lectus Donec orci lectusDonec orci lectusDonec orci lectusDonec orci lectus "
      }
    ],
    "experience": [
      {
        "position": "ante tincidunt tempus",
        "company": "Vestibulum dapibus",
        "company_url": null,
        "started_on": {
          "year": 2012,
          "month": 2
        },
        "ended_on": null,
        "is_current": false,
        "location": "Etiam CA",
        "desc": "Etiam ultricies nisi vel augue. Vestibulum dapibus nunc ac augue. Cras sagittis. Maecenas nec odio et ante tincidunt tempus.\n\nPraesent ac massa at ligula laoreet iaculis. Praesent egestas tristique nibh. Phasellus a est. Etiam iaculis nunc ac metus."
      },
      {
        "position": "Donec orc Donec orc",
        "company": "Donec orc xxx",
        "company_url": null,
        "started_on": {
          "year": 2008,
          "month": 2
        },
        "ended_on": {
          "year": 2009,
          "month": null
        },
        "is_current": false,
        "location": "Donec orc ",
        "desc": "Nam pretium turpis et arcu. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Etiam vitae tortor. "
      }
    ],
    "skills": [
      {
        "name": "Sales",
        "years": null
      },
      {
        "name": "Managing people",
        "years": null
      }
    ],
    "can_work_in": [
      {
        "code": "GB",
        "name": "United Kingdom"
      },
      {
        "code": "CA",
        "name": "Canada"
      }
    ],
    "pos_types": [
      {
        "code": "part_time",
        "label": "Part Time"
      }
    ],
    "security": {
      "searchable": true,
      "confidential": false,
      "hidden": false
    },
    "contact_info": {
      "phone": "(760) 333-6377",
      "cell_phone": null
    },
    "industries": [
      {
        "id": "54bd68d3ae36ba651cfbf1bf",
        "label": "Nocturnist"
      },
      {
        "id": "54bd68d3ae36ba651cfbf1ba",
        "label": "Post-Acute Care"
      }
    ],
    "photo_url": "/static/images/content/default-avatar.jpg",
    "public_url": "/app/profile/public/202",
    "old_id": "123456",
    "alt_ids": [
      "old-url-slug1",
      "aplication_id_4321"
    ],
    "created_on": "2015-04-01T17:18:59.171",
    "updated_on": "2015-04-16T14:41:04.239"
  },
  "resumes": [
    {
      "name": "resume.txt dd",
      "file_name": "resume.txt"
    }
  ]
}
```