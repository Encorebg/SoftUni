number_of_pen_packs = int(input())
number_of_marker_packs = int(input())
litres_of_detergent = int(input())
percent_discount = int(input())

total_price = number_of_pen_packs * 5.80 + number_of_marker_packs * 7.20 + litres_of_detergent * 1.20
price_with_discount = total_price - (total_price * percent_discount / 100)
print(price_with_discount)