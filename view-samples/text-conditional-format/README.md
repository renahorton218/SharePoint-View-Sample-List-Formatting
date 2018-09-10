# Conditional formatting based on choice field

## Summary

This example was adopted from a column formatting example, [Conditional formatting based on the value in a text of choice field](https://github.com/ldemaris/sp-dev-docs/blob/patch-7/docs/declarative-customization/column-formatting.md#conditional-formatting-based-on-the-value-in-a-text-or-choice-field-advanced), with some important differences to apply the concept to list view rows.  The column formatting example applies both an icon and a class to a column based on the value of `@currentField`.  The `additionalRowClass` attribute in view formatting, however, only allows you to specify a class and not an icon.  Additionally, since `@currentField` always resolves to the value of the Title field when referenced inside a view format, this sample refers to the `$Status` field directly to determine which class to apply to the row.

## View requirements
- This format expects a text/choice field with the values of Done, In progress, In review, Blocked, or anything else

## Sample

Solution|Author(s)
--------|---------
json-file-name | Lincoln DeMaris (Microsoft)

## Version history

Version|Date|Comments
-------|----|--------
1.0|August 10, 2018|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Additional notes
None

<img src="https://telemetry.sharepointpnp.com/sp-dev-list-formatting/view-samples/text-conditional-format" />