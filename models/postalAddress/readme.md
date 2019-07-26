# Postal address

```json
{
  "country": null,
  "locality": null,
  "region": null,
  "postalCode": null,
  "street": null,
  "usage": {}
}
```
---
Model inspired by [Shema.org PostalAddress model](https://schema.org/PostalAddress)

### Properties

<!-- model start -->
- `country` (string|int) - The country's code. For example: US ([ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1)), USA ([ISO 3166-1 alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1))).
- `locality` (string) - The locality in which the street address is, and which is in the region.
- `region` (string) - The region in which the locality is, and which is in the country.
- `postalCode` (string) - The postal code
- `street` (string) - The street address
- `usage` ([usage](../usage))
<!-- model end -->


### Sample 1
```json
{
  "country": "FRA",
  "locality": "lyon",
  "region": "rhône-alpes",
  "postalCode": "69008",
  "street": "18 rue Banaudon",
  "usage": {}
}
```
### Sample 2
```json
{
  "country": "US",
  "locality": "Mountain View",
  "region": "California",
  "postalCode": "94043",
  "street": "1600 Amphitheatre Pkwy",
  "usage": {}
}
```
