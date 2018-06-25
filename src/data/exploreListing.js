import colors from "../styles/colors";

const categories = [
  {
    id: 1,
    name: "Farms",
    screenType: "FarmScreen",
    backgroundColor: "#faf7d6",
    textColor: colors.light,
    photo: require("./photos/farm_small.jpg")
  },
  {
    id: 2,
    name: "Fruit & Veg",
    backgroundColor: "#fabf1b",
    screenType: "FarmScreen",
    textColor: "#fff",
    photo: require("./photos/fruitAndVeg_small.jpg")
  },
  {
    id: 3,
    name: "Animal by products",
    screenType: "FarmScreen",
    photo: require("./photos/eggs_small.jpg"),
    backgroundColor: "#fafaaa",
    textColor: colors.light
  },
  {
    id: 4,
    name: "Cereals",
    screenType: "FarmScreen"
  },
  {
    id: 5,
    name: "Flowers"
  }
];

export default categories;
