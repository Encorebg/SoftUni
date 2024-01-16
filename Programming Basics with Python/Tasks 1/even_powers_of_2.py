n = int(input())

for number in range(n + 1):
    if number % 2 == 0:
        power = 2 ** number
        print(power)
