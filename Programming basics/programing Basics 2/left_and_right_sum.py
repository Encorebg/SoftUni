n = int(input())
first_sum = 0
second_sum = 0
for i in range(n*2):
    number = int(input())
    if i < n:
        first_sum += number
    else:
        second_sum += number


if first_sum == second_sum:
    print(f'Yes, sum = {first_sum}')
else:
    diff = abs(first_sum - second_sum)
    print(f'No, diff = {diff}')