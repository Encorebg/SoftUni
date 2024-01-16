age = int(input())
laundry_price = float(input())
price_per_toy = int(input())
sum_for_birthday = 0
total_sum = 0
toy_counter = 0

for birthday in range(1, age + 1):
    if birthday % 2 == 0:
        sum_for_birthday += 10
        total_sum += sum_for_birthday - 1
    else:
        toy_counter += 1


money_from_toys = toy_counter * price_per_toy
total_sum += money_from_toys
diff = abs(laundry_price - total_sum)

if total_sum >= laundry_price:
    print(f"Yes! {diff:.2f}")
else:
    print(f"No! {diff:.2f}")
