n = int(input())
p_1 = 0
p_2 = 0
p_3 = 0
p_4 = 0
p_5 = 0

for _ in range(n):
    number = int(input())
    if number < 200:
        p_1 += 1
    elif number < 400:
        p_2 += 1
    elif number < 600:
        p_3 += 1
    elif number < 800:
        p_4 += 1
    else:
        p_5 += 1

percent_p_1 = p_1 / n * 100
percent_p_2 = p_2 / n * 100
percent_p_3 = p_3 / n * 100
percent_p_4 = p_4 / n * 100
percent_p_5 = p_5 / n * 100

print(f"{percent_p_1:.2f}%")
print(f"{percent_p_2:.2f}%")
print(f"{percent_p_3:.2f}%")
print(f"{percent_p_4:.2f}%")
print(f"{percent_p_5:.2f}%")