rent = float(input())

price_for_cake = rent * 0.2
price_for_drinks = price_for_cake - price_for_cake * 0.45
animator = rent * (1/3)

budget = rent + price_for_cake + price_for_drinks + animator

print(budget)