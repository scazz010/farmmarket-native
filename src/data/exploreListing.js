import colors from "../styles/colors";

const categories = [
  {
    id: 1,
    name: "Farms",
    screenType: "FarmScreen",
    backgroundColor: "#faf7d6",
    photo: require("./photos/eggs.jpg"),
    textColor: colors.light
  },
  {
    id: 2,
    name: "Fruit & Veg",
    backgroundColor: "#fabf1b",
    screenType: "FarmScreen"
  },
  {
    id: 3,
    name: "Animal by products",
    screenType: "FarmScreen"
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
