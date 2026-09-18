export interface FoodData{
id: string,
dish_name: string,
category: string,
// "alternative_names": [
// "Mediterranean Chicken Rice Plate",
// "Chicken Rice Power Bowl",
// "Grilled Chicken over Rice with Cucumber Tomato Salad"
// ],
// "main_ingredients": [
// "Cooked rice (basmati or long-grain)",
// "Grilled chicken drumstick (skin-on)",
// "Cucumber (cubed/sliced)",
// "Cherry tomatoes (halved)",
// "Red onion (sliced)",
// "Bell pepper (orange/yellow, cubed)",
// "Fresh parsley or cilantro",
// "Olive oil",
// "Lemon juice",
// "Garlic",
// "Salt, pepper, herbs (oregano/paprika)"
// ],
// "approximate_nutrition_per_serving": {
// "calories": "550-750 kcal",
// "protein": "35-45 g",
// "carbohydrates": "60-80 g",
// "fat": "20-30 g",
// "fiber": "5-8 g"
// },
rating: number,
price: number,
// possible_price_in_dhaka: {
// "home_cooked": "BDT 150-300",
// "street_food_or_small_restaurant": "BDT 250-450",
// "cafe_or_healthy_eatery": "BDT 400-700"
// },
}