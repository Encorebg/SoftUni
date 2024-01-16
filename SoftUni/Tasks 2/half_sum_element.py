from sys import maxsize
n = int(input())

sum_numbers = 0
max_number = -maxsize

for _ in range(n):
    number = int(input())
    sum_numbers += number
    if number > max_number:
        max_number = number

if sum_numbers - max_number == max_number:
    print("Yes")
    print(f"Sum = {max_number}")
else:
    diff = abs((sum_numbers - max_number) - max_number)
    print("No")
    print(f"Diff = {diff}")