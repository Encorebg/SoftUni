annual_tax = int(input())

basketball_shoes_price = annual_tax * 0.6
basketball_clothes_price = basketball_shoes_price * 0.8
basketball_ball_price = basketball_clothes_price * 0.25
basketball_accessories_price = basketball_ball_price * 0.2
total_cost = annual_tax + basketball_shoes_price + basketball_clothes_price + basketball_ball_price + basketball_accessories_price

print(total_cost)