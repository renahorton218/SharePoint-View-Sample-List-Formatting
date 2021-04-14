# Multi-Choice link

## Summary
This sample shows how we can display multiple links in a single column using the multi-choice column.

**Note:** If rich text column is used to display links then this sample can be ignored. 

![multi-choice-link-column](./multi-choice-link-column.png)

## Important requirement
The sample expects the choices in the `Sessions` column to be the format `<Link Title>|<The actual link>|`. Example - if the link we want to display has the title `Learn about list formatting` and the actual link is `https://pnp.github.io/sp-dev-list-formatting` then the choice for that in the `Sessions` column must be set to `Learn about list formatting|https://pnp.github.io/sp-dev-list-formatting|`.

Session column's choice values used in the example screenshot above

![Example choice values](./example-choice-values.png)

## Details of the sample

To display the links, we loop through the values present in the multi-choice column of the current item and extract the `<Link title>` using the formula (line #12)

`=substring([$choiceIterator], 0, indexOf([$choiceIterator], '|'))`

We then extract `<the actual link>` using the formula (line #27)

`=substring([$choiceIterator], indexOf([$choiceIterator], '|') + 1,  lastIndexOf([$choiceIterator], '|'))`

## Sample

Solution|Author(s)
--------|---------
multi-choice-link | [Anoop Tatti](https://twitter.com/anooptells)

## Version history

Version|Date|Comments
-------|----|--------
1.0|April 14, 2021 |Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

<img src="https://telemetry.sharepointpnp.com/sp-dev-list-formatting/column-samples/multi-choice-links" />