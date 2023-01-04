import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpnaded, setBreakfastExpanded] = useState(false);
  const [lunchExpnaded, setLunchExpnaded] = useState(false);
  const [dinnerExpnaded, setDinnerExpnaded] = useState(false);
  const [drinksExpnaded, setDrinksExpnaded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpnaded}
          onPress={() => setBreakfastExpanded(!breakfastExpnaded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpnaded}
          onPress={() => setLunchExpnaded(!lunchExpnaded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpnaded}
          onPress={() => setDinnerExpnaded(!dinnerExpnaded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpnaded}
          onPress={() => setDrinksExpnaded(!drinksExpnaded)}
        >
          <List.Item title="Coffe" />
          <List.Item title="Tea" />
          <List.Item title="Coca-Cola" />
          <List.Item title="Fanta" />
          <List.Item title="Pepsi" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
