# Postal address

```json
{
  "from": null,
  "to": null,
  "purpose": null,
  "additionalNotes": null,
}
```
---

### Properties

- `from` (date) - Date on which the entity started to be used.
- `to` (date|null) - Date on which the entity stopped being used.
- `purpose` (string) - In which purpose the entity was used.
- `additionalNotes` (string)

### Sample 1
```json
{
  "from": "2019-01-15",
  "to": null,
  "purpose": "username for online gaming services",
  "additionalNotes": null,
}
```

### Sample 2
```json
{
  "from": "2019-01-15",
  "to": "2019-03-12",
  "purpose": "username for online gaming services",
  "additionalNotes": null,
}
```
