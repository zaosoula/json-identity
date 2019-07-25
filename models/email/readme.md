# Email

```json
{
  "value": null,
  "type": null,
  "primary": null,
  "usage": {},
}
```
---

### Properties

- `value` (string) - The email address
- `type` (string|null)
- `primary` (boolean)
- `usage` ([usage](../usage))

### Sample 1
```json
{
  "value": "john.doe@example.com",
  "type": "work",
  "primary": true,
  "usage": {
    "from": "2019-01-15",
    "to": null,
    "purpose": "company email",
    "additionalNotes": null,
  },
}
```
