import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { main } from "./json-merge.ts";

Deno.test("merge item on first level", () => {
  const source = {
    "Tables": [
      {
        "Name": "Table1",
        "System": "System1",
      },
    ],
  };

  const other = {
    "Tables": [
      {
        "Name": "Table1",
        "Description": "Table1 description",
      },
    ],
  };

  const expected = {
    "Tables": [
      {
        "Name": "Table1",
        "System": "System1",
        "Description": "Table1 description",
      },
    ],
  };

  assertEquals(main(source, other), expected);
});

Deno.test("merge item on second level", () => {
  const source = {
    "Tables": [
      {
        "Name": "Table1",
        "System": "System1",
        "Columns": [
          {
            "Name": "Column1",
            "Type": "String",
          },
        ],
      },
    ],
  }

  const other = {
    "Tables": [
      {
        "Name": "Table1",
        "Description": "Table1 description",
        "Columns": [
          {
            "Name": "Column1",
            "PrimaryKey": true,
          },
        ],
      },
    ]
  }

  const expected = {
    "Tables": [
      {
        "Name": "Table1",
        "System": "System1",
        "Description": "Table1 description",
        "Columns": [
          {
            "Name": "Column1",
            "Type": "String",
            "PrimaryKey": true,
          },
        ],
      },
    ],
  }

  assertEquals(main(source, other), expected);
});
