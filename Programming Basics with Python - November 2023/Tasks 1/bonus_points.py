number = int(input())
bonus = 0
if number <= 100:
    bonus = 5
elif 100 < number <= 1000:
    bonus = 0.2 * number
else:
    bonus = 0.1 * number
if number % 2 == 0:
    bonus += 1
elif number % 10 == 5:
    bonus += 2

number_with_bonus = number + bonus
print(bonus)
print(number_with_bonus)
