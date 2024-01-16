number_of_chicken_menus = int(input())
number_of_fish_menus = int(input())
number_of_vegeteranian_menus = int(input())

total_cost_of_menus = number_of_chicken_menus * 10.35 + number_of_fish_menus * 12.40 + number_of_vegeteranian_menus * 8.15
desert_price = total_cost_of_menus * 0.2
total_cost = total_cost_of_menus + desert_price
total_cost_with_delivery = total_cost + 2.50
print(total_cost_with_delivery)