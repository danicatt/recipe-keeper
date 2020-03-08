var recipe = [
    "Singapore Fried Vermicelli<br>BOSH page 44",
    "Guacajacks & salad<br>BOSH page 47",
    "Paella<br>Deliciously Ella page 45",
    "Lentil & Bean Chilli<br>Recipe Keeper",
    "Burrito Bowl<br>Own recipe",
    "Red/Green Thai Curry<br>Own recipe",
    "Red Pepper & Olive Hash with salad<br>VEG page 22",
    "Fragrant Veg Stoup with new pototoes<br>VEG page 64",
    "Summer Veg Coconut Curry<br>VEG page 68",
    "Tomato & Black Bean Salad<br>with cumin dressing<br>VEG page 156",
    "Veggie Peanut Satay Noodles<br>Recipe Keeper",
    "Swede Laksa<br>EAST page 74",
    "New Potato, Chard & Coconut Curry<br>EAST page 122",
    "Jersey Royal & Green Bean Istoo<br>EAST page 112",
    "'Fish' Finger Wraps<br>Own recipe",
    "'Chicken' wraps<br>Own recipe",
    "White Miso Ramen<br>with tofu & asaparagus<br>EAST page 82",
    "Peanut Butter & Brocolli Pad Thai<br>EAST page 78",
    "Maham's Dhal with spinach<br>EAST page 226",
    "Chilli Tofu with rice<br>EAST page 177",
    "Warming Winter Bowl<br>Deliciously Ella page ***",
    "Spaghetti Bolognaise<br>Own recipe",
    "Bang Bang Noddle Salad<br>BISH BASH BOSH page 201",
    "Satay Sweet Potato Curry<br>BBC Good Food",
    "Vegan Meatball Pasta<br>Own recipe",
    "Tofu with chilli & greens<br>BBC Good Food",
    "Kidney Bean Curry with kale & rice<br>BBC Good Food",
    "Moroccan Chickpea Cauliflower Bowl<br>with herb sauce<br>Recipe Keeper",
    "Tofu Fried Rice<br>Recipe Keeper",
    "'Chicken' with Quinoa, Kale &<br>Mushroom salad<br>Own recipe",
    "'Chicken' with vegetables & mash<br>Own recipe",
    "Creamy Pasta Bake<br>Own recipe (Rich)",
    "Simple Tomato Pasta<br>Own recipe",
    "Quick Shepherds pie with lentils<br>Own recipe"
];

var randomNumber = 0;

function newrecipe() {
    randomNumber = Math.floor(Math.random() * 35);
    document.getElementById("recipegenerator").innerHTML = recipe[randomNumber];
}
