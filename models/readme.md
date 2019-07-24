# Person

### Properties

- `basics` (object)
  - `names` (object)
    - `first` (string) - First name
    - `middles` (string|array) - Middle name(s)
    - `lasts` (string|array) - Last name(s)
    - `fullName` (string) - Names commonly used by the person
  - `birth` - Information about person's birth
    - `date` (date) - Birth date
    - `place` ([postalAddress](./postalAddress)) - Birth place
- `medical`
  - `organDonor` (boolean)
