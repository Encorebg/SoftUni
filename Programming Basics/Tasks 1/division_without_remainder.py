number = int(input())
two_counter = 0
tree_counter = 0
four_counter = 0

for _ in range(number):
        num = int(input())

        if num % 2 == 0:
            two_counter += 1
        if num % 3 == 0:
            tree_counter += 1
        if num % 4 == 0:
            four_counter += 1

p_1_percent = two_counter / number * 100
p_2_percent = tree_counter / number * 100
p_3_percent = four_counter / number * 100

print(f'{p_1_percent:.2f}%')
print(f'{p_2_percent:.2f}%')
print(f'{p_3_percent:.2f}%')