# Organisation

```json
{
  "name": null,
  "website": null,
  "phones": [],
  "emails": [],
  "numberOfEmployees": null,
  "parentOrganization" : null,
  "address": {},
}
```
---

### Properties
<!-- model start -->
- `name` (string)
- `website` (string|null)
- `phones` (array([phone](../phone)))
- `emails` (array([email](../email)))
- `numberOfEmployees` (int)
- `parentOrganization` (null)
- `address` ([postalAddress](../postalAddress)|null)
<!-- model end -->


### Sample 1
```json
{
  "name": "Google",
  "website": "https://google.com",
  "phones": [],
  "emails": [],
  "numberOfEmployees": 15000,
  "parentOrganization" : "$ref:organisation.Alphabet",
  "address": {},
}
```
