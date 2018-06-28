import colors from "../styles/colors";

const categories = [
  {
    id: 1,
    name: "Farms",
    screenType: "FarmScreen",
    backgroundColor: "#faf7d6",
    textColor: colors.dark,
    photo: require("./photos/farm_small.jpg"),
    listings: [
      {
        id: 1,
        name: "Stoner Farm",
        description: "Allotment veg and apple orchard",
        photo: require("./photos/farm_small.jpg"),
        starCount: 4.5
      },
      {
        id: 2,
        name: "Mannor Farm",
        description: "Milking parlour",
        photo: require("./photos/farm_small.jpg"),
        starCount: 3
      },
      {
        id: 3,
        name: "Carr's Garden",
        description: "Garden veg",
        photo: require("./photos/farm_small.jpg"),
        starCount: 1
      }
    ]
  },
  {
    id: 2,
    name: "Fruit & Veg",
    backgroundColor: "#fabf1b",
    screenType: "FarmScreen",
    textColor: colors.dark,
    photo: require("./photos/fruitAndVeg_small.jpg"),
    listings: [
      {
        name: "Broccoli"
      },
      {
        name: "Cheese"
      },
      {
        name: "Beans"
      }
    ]
  },
  {
    id: 3,
    name: "Animal",
    screenType: "FarmScreen",
    photo: require("./photos/eggs_small.jpg"),
    backgroundColor: "#fafaaa",
    textColor: colors.dark,
    listings: [{ name: "eggs" }, { name: "honey" }]
  },
  {
    id: 4,
    name: "Cereals",
    screenType: "FarmScreen",
    backgroundColor: "#faf7d6"
  },
  {
    id: 5,
    name: "Flowers",
    screenType: "FarmScreen",
    backgroundColor: "#faf7d6"
  }
];

export default categories;
