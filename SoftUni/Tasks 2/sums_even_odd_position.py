first_num = int(input())
second_num = int(input())

for number in range(first_num, second_num + 1):
    even_sum = 0
    odd_sum = 0
    number_as_string = str(number)
    for index, digit in enumerate(number_as_string):
        digit = int(digit)
        if index % 2 == 0:
            odd_sum += digit
        else:
            even_sum += digit
    if odd_sum == even_sum:
        print(number, end=" ")