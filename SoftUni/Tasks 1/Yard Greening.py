square_metres_for_greening = float(input())

total_price = square_metres_for_greening * 7.61
discount = total_price * 0.18
price_with_discount = total_price - discount

print(f"The final price is: {price_with_discount} lv.")
print(f"The discount is: {discount} lv.")